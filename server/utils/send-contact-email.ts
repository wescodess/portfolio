import type { ContactPayload } from '~/shared/contact'
import { escapeContactText } from '~/shared/contact'

interface EmailJsConfig {
  privateKey: string
  publicKey: string
  serviceId: string
  templateId: string
}

export async function sendContactEmail(
  contact: ContactPayload,
  config: EmailJsConfig,
): Promise<void> {
  await $fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: {
      accessToken: config.privateKey,
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        from_email: contact.email,
        from_name: escapeContactText(contact.name),
        message: escapeContactText(contact.message),
        reply_to: contact.email,
      },
    },
  })
}
