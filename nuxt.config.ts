const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://wesleyukadike.dev'
const visualEditingEnabled = process.env.NUXT_SANITY_VISUAL_EDITING === 'true'
const codeFilePattern = /\.(?:astro|[cm]?[jt]sx?|vue)$/

type ViteTransform = (
  this: unknown,
  code: string,
  id: string,
  ...args: unknown[]
) => unknown

function restrictSanityQueryExtraction(plugins: unknown[]): void {
  for (const plugin of plugins) {
    if (Array.isArray(plugin)) {
      restrictSanityQueryExtraction(plugin)
      continue
    }

    if (!plugin || typeof plugin !== 'object') continue

    const candidate = plugin as { name?: string, transform?: unknown }
    if (candidate.name !== 'vite-groq-queries-finder' || typeof candidate.transform !== 'function') {
      continue
    }

    const transform = candidate.transform as ViteTransform
    candidate.transform = function (this: unknown, code: string, id: string, ...args: unknown[]) {
      const [filepath] = id.split('?', 1)
      if (!filepath || !codeFilePattern.test(filepath)) return null
      return transform.call(this, code, id, ...args)
    }
  }
}

const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "base-uri 'self'",
    "connect-src 'self' https://cdn.sanity.io https://*.api.sanity.io https://*.apicdn.sanity.io https://www.google.com/recaptcha/",
    "font-src 'self' data:",
    "form-action 'self'",
    "frame-ancestors 'none'",
    'frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/',
    "img-src 'self' data: blob: https://cdn.sanity.io https://www.gstatic.com/recaptcha/",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/",
    "style-src 'self' 'unsafe-inline'",
    "upgrade-insecure-requests",
  ].join('; '),
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'Permissions-Policy': 'camera=(), geolocation=(), microphone=(), payment=(), usb=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
}

export default defineNuxtConfig({
  compatibilityDate: '2025-10-30',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ['@/assets/css/styles.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/sanity',
    'nuxt-schema-org',
  ],

  runtimeConfig: {
    recaptchaSecretKey:
      process.env.NUXT_RECAPTCHA_SECRET_KEY || process.env.NUXT_RECAPTCHA_SECRETKEY || '',
    emailjsServiceId: process.env.NUXT_EMAILJS_SERVICE_ID || '',
    emailjsTemplateId: process.env.NUXT_EMAILJS_TEMPLATE_ID || '',
    emailjsPublicKey: process.env.NUXT_EMAILJS_PUBLIC_KEY || '',
    emailjsPrivateKey: process.env.NUXT_EMAILJS_PRIVATE_KEY || '',
    monitoringWebhookUrl: process.env.NUXT_MONITORING_WEBHOOK_URL || '',
    public: {
      recaptchaSiteKey:
        process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NUXT_RECAPTCHA_SITEKEY || '',
      siteUrl,
    },
  },

  site: {
    url: siteUrl,
    name: 'Wesley Ukadike',
    description:
      'Senior software engineer building thoughtful, accessible, and performant digital products.',
    defaultLocale: 'en',
    trailingSlash: false,
  },

  schemaOrg: {
    identity: {
      '@type': 'Person',
      name: 'Wesley Ukadike',
      url: siteUrl,
      sameAs: [
        'https://github.com/kaypappi',
        'https://www.linkedin.com/in/wesley-ukadike-3a9440180/',
      ],
    },
  },

  sanity: {
    projectId: 'orygd7ym',
    dataset: 'production',
    apiVersion: '2025-02-19',
    useCdn: !visualEditingEnabled,
    minimal: !visualEditingEnabled,
    ...(visualEditingEnabled
      ? {
          visualEditing: {
            token: process.env.NUXT_SANITY_API_READ_TOKEN,
            studioUrl: process.env.NUXT_SANITY_STUDIO_URL,
            stega: true,
          },
        }
      : {}),
  },

  image: {
    domains: ['cdn.sanity.io', 'uploads-ssl.webflow.com'],
    format: ['avif', 'webp'],
    quality: 82,
    screens: {
      xs: 390,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  sitemap: {
    discoverImages: false,
    include: ['/', '/projects'],
    exclude: ['/preview/**', '/api/**'],
    zeroRuntime: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s | Wesley Ukadike',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Wesley Ukadike' },
        { property: 'og:site_name', content: 'Wesley Ukadike' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'dns-prefetch', href: 'https://cdn.sanity.io' },
      ],
    },
  },

  routeRules: {
    '/**': { headers: securityHeaders },
    '/': { prerender: true },
    '/projects': { prerender: true },
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
    '/api/**': {
      headers: {
        ...securityHeaders,
        'Cache-Control': 'no-store',
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/projects', '/robots.txt', '/sitemap.xml'],
      failOnError: true,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  hooks: {
    'vite:extendConfig'(config) {
      restrictSanityQueryExtraction(config.plugins || [])
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
