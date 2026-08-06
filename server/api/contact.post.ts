import type { H3Event } from 'h3'
import { validateContactPayload } from '~/shared/contact'

const maximumBodySize = 20_000

function requestIp(event: H3Event): string {
  const forwarded = getRequestHeader(event, 'x-forwarded-for')
  return forwarded?.split(',')[0]?.trim()
    || getRequestHeader(event, 'x-real-ip')
    || 'unknown'
}

export default defineEventHandler(async (event) => {
  const contentLength = Number(getRequestHeader(event, 'content-length') || 0)
  if (contentLength > maximumBodySize) {
    throw createError({ statusCode: 413, statusMessage: 'Request is too large.' })
  }

  const requestUrl = getRequestURL(event)
  const origin = getRequestHeader(event, 'origin')
  const config = useRuntimeConfig(event)
  const allowedOrigins = new Set([requestUrl.origin, new URL(config.public.siteUrl).origin])

  if (origin && !allowedOrigins.has(origin)) {
    throw createError({ statusCode: 403, statusMessage: 'Invalid request origin.' })
  }

  const ip = requestIp(event)
  const rateLimit = contactRateLimiter.consume(ip)
  setResponseHeader(event, 'X-RateLimit-Remaining', String(rateLimit.remaining))

  if (!rateLimit.allowed) {
    setResponseHeader(event, 'Retry-After', rateLimit.retryAfterSeconds)
    throw createError({ statusCode: 429, statusMessage: 'Too many contact attempts.' })
  }

  const validation = validateContactPayload(await readBody(event))
  if (!validation.success) {
    throw createError({ statusCode: 400, statusMessage: validation.message })
  }

  const contactConfig = {
    recaptchaSecretKey: config.recaptchaSecretKey,
    serviceId: config.emailjsServiceId,
    templateId: config.emailjsTemplateId,
    publicKey: config.emailjsPublicKey,
    privateKey: config.emailjsPrivateKey,
  }

  if (Object.values(contactConfig).some((value) => !value)) {
    throw createError({
      statusCode: 503,
      statusMessage: 'The contact service is not configured.',
    })
  }

  const recaptchaPassed = await verifyRecaptcha({
    expectedAction: 'contact',
    remoteIp: ip === 'unknown' ? undefined : ip,
    secret: contactConfig.recaptchaSecretKey,
    token: validation.data.recaptchaToken,
  }).catch(() => false)

  if (!recaptchaPassed) {
    throw createError({ statusCode: 400, statusMessage: 'Spam verification failed.' })
  }

  try {
    await sendContactEmail(validation.data, contactConfig)
  }
  catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'The message could not be delivered. Please try again later.',
    })
  }

  setResponseStatus(event, 202)
  return { ok: true }
})
