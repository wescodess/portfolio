interface RecaptchaApi {
  execute: (siteKey: string, options: { action: string }) => Promise<string>
  ready: (callback: () => void) => void
}

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi
  }
}

let loaderPromise: Promise<RecaptchaApi> | undefined

function loadRecaptcha(siteKey: string): Promise<RecaptchaApi> {
  if (!import.meta.client) return Promise.reject(new Error('reCAPTCHA requires a browser.'))
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha)
  if (loaderPromise) return loaderPromise

  loaderPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
    script.async = true
    script.defer = true
    script.dataset.recaptchaLoader = 'true'
    script.onerror = () => reject(new Error('Unable to load spam verification.'))
    script.onload = () => {
      if (!window.grecaptcha) {
        reject(new Error('Spam verification did not initialize.'))
        return
      }

      window.grecaptcha.ready(() => resolve(window.grecaptcha as RecaptchaApi))
    }
    document.head.appendChild(script)
  })

  return loaderPromise
}

export function useRecaptcha() {
  const config = useRuntimeConfig()

  async function executeRecaptcha(action = 'contact'): Promise<string> {
    const siteKey = config.public.recaptchaSiteKey
    if (!siteKey) throw new Error('Spam verification is not configured.')

    const recaptcha = await loadRecaptcha(siteKey)
    return recaptcha.execute(siteKey, { action })
  }

  return { executeRecaptcha }
}
