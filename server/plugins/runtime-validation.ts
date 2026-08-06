const contactKeys = [
  'recaptchaSecretKey',
  'emailjsServiceId',
  'emailjsTemplateId',
  'emailjsPublicKey',
  'emailjsPrivateKey',
] as const

export default defineNitroPlugin(() => {
  const config = useRuntimeConfig()
  const missingContactKeys = contactKeys.filter(key => !config[key])

  if (missingContactKeys.length) {
    console.warn(JSON.stringify({
      level: 'warn',
      message: 'Contact delivery is disabled until its server environment is configured.',
      missing: missingContactKeys,
    }))
  }
})
