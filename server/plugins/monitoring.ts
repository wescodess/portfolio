export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()

  nitroApp.hooks.hook('error', async (error, context) => {
    const statusCode = 'statusCode' in error && typeof error.statusCode === 'number'
      ? error.statusCode
      : 500

    if (statusCode < 500) return

    const event = {
      level: 'error',
      message: error.message,
      name: error.name,
      route: context.event?.path,
      statusCode,
      timestamp: new Date().toISOString(),
    }

    console.error(JSON.stringify(event))

    if (!config.monitoringWebhookUrl) return

    await $fetch(config.monitoringWebhookUrl, {
      method: 'POST',
      body: event,
    }).catch(() => undefined)
  })
})
