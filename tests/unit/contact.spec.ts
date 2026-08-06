import { describe, expect, it } from 'vitest'
import { ContactRateLimiter } from '~/server/utils/contact-rate-limit'
import { escapeContactText, validateContactPayload } from '~/shared/contact'

const validPayload = {
  email: 'WESLEY@example.com',
  message: 'I would like to discuss a new product.',
  name: ' Wesley ',
  recaptchaToken: 'verified-token',
  website: '',
}

describe('contact payload validation', () => {
  it('normalizes a valid request', () => {
    expect(validateContactPayload(validPayload)).toEqual({
      success: true,
      data: {
        ...validPayload,
        email: 'wesley@example.com',
        name: 'Wesley',
      },
    })
  })

  it.each([
    [null, 'A valid contact request is required.'],
    [{ ...validPayload, website: 'spam.example' }, 'Unable to process this request.'],
    [{ ...validPayload, name: 'x' }, 'Enter a name between 2 and 100 characters.'],
    [{ ...validPayload, email: 'invalid' }, 'Enter a valid email address.'],
    [{ ...validPayload, message: 'too short' }, 'Enter a message between 10 and 4,000 characters.'],
    [{ ...validPayload, recaptchaToken: '' }, 'Spam verification is required.'],
  ])('rejects malformed or automated input', (payload, message) => {
    expect(validateContactPayload(payload)).toEqual({ success: false, message })
  })

  it('escapes content before it reaches the email template', () => {
    expect(escapeContactText(`<script>alert('xss') & "more"</script>`))
      .toBe('&lt;script&gt;alert(&#39;xss&#39;) &amp; &quot;more&quot;&lt;/script&gt;')
  })
})

describe('contact rate limiting', () => {
  it('blocks requests above the limit and resets after the window', () => {
    const limiter = new ContactRateLimiter(2, 1_000)

    expect(limiter.consume('visitor', 1_000)).toMatchObject({ allowed: true, remaining: 1 })
    expect(limiter.consume('visitor', 1_100)).toMatchObject({ allowed: true, remaining: 0 })
    expect(limiter.consume('visitor', 1_200)).toMatchObject({ allowed: false, remaining: 0 })
    expect(limiter.consume('visitor', 2_000)).toMatchObject({ allowed: true, remaining: 1 })
  })

  it('can be reset safely', () => {
    const limiter = new ContactRateLimiter(1, 1_000)
    limiter.consume('visitor', 1_000)
    limiter.reset()
    expect(limiter.consume('visitor', 1_100).allowed).toBe(true)
  })
})
