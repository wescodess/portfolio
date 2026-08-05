export const CONTACT_LIMITS = {
  email: 254,
  message: 4000,
  name: 100,
  recaptchaToken: 4096,
} as const

export interface ContactPayload {
  email: string
  message: string
  name: string
  recaptchaToken: string
  website?: string
}

export type ContactValidationResult =
  | { success: true; data: ContactPayload }
  | { success: false; message: string }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateContactPayload(input: unknown): ContactValidationResult {
  if (!input || typeof input !== 'object') {
    return { success: false, message: 'A valid contact request is required.' }
  }

  const body = input as Record<string, unknown>
  const data: ContactPayload = {
    name: readString(body.name),
    email: readString(body.email).toLowerCase(),
    message: readString(body.message),
    recaptchaToken: readString(body.recaptchaToken),
    website: readString(body.website),
  }

  if (data.website) {
    return { success: false, message: 'Unable to process this request.' }
  }

  if (data.name.length < 2 || data.name.length > CONTACT_LIMITS.name) {
    return { success: false, message: 'Enter a name between 2 and 100 characters.' }
  }

  if (!emailPattern.test(data.email) || data.email.length > CONTACT_LIMITS.email) {
    return { success: false, message: 'Enter a valid email address.' }
  }

  if (data.message.length < 10 || data.message.length > CONTACT_LIMITS.message) {
    return { success: false, message: 'Enter a message between 10 and 4,000 characters.' }
  }

  if (!data.recaptchaToken || data.recaptchaToken.length > CONTACT_LIMITS.recaptchaToken) {
    return { success: false, message: 'Spam verification is required.' }
  }

  return { success: true, data }
}

export function escapeContactText(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }

    return entities[character] || character
  })
}
