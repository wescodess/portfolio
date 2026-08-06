interface RecaptchaVerificationResponse {
  action?: string
  challenge_ts?: string
  'error-codes'?: string[]
  hostname?: string
  score?: number
  success: boolean
}

export async function verifyRecaptcha(options: {
  expectedAction: string
  remoteIp?: string
  secret: string
  token: string
}): Promise<boolean> {
  const body = new URLSearchParams({
    secret: options.secret,
    response: options.token,
  })

  if (options.remoteIp) body.set('remoteip', options.remoteIp)

  const result = await $fetch<RecaptchaVerificationResponse>(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      body,
    },
  )

  return Boolean(
    result.success
      && result.action === options.expectedAction
      && typeof result.score === 'number'
      && result.score >= 0.5,
  )
}
