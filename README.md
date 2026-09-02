# Wesley Ukadike Portfolio

A production-oriented Nuxt 3 portfolio backed by Sanity. The application is server-rendered and prerenders its public routes, optimizes local and Sanity images, exposes a server-protected contact flow, and includes automated quality, security, accessibility, and browser gates.

[View the live portfolio](https://personal-kaypappi.vercel.app)

## Requirements

- Node.js 22–24
- npm 10.9.2 or a compatible npm 10 release
- A Sanity project with the schemas in `schemas.ts`
- Google reCAPTCHA v3 and EmailJS credentials to enable contact delivery

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

The site runs at `http://localhost:3000`; the readiness endpoint is `http://localhost:3000/healthz`. Public content still renders without contact credentials, but the contact endpoint returns `503` until its server-only configuration is complete.

## Architecture

- `pages/` owns route composition and route-specific metadata.
- `components/` contains typed, presentational Vue components.
- `composables/usePortfolioContent.ts` centralizes explicit GROQ projections and request deduplication.
- `server/api/contact.post.ts` validates origin, size, rate limit, honeypot, reCAPTCHA, and server-side email delivery.
- `server/plugins/` validates optional runtime capabilities and emits sanitized operational errors.
- `schemas.ts` and `sanity.config.js` define singleton CMS documents and secured Presentation previews.
- `tests/unit/` contains Vitest component and domain tests; `tests/e2e/` contains Playwright desktop/mobile checks.

## Environment

Copy `.env.example` and populate only the variables needed by the environment. Never expose `NUXT_RECAPTCHA_SECRET_KEY`, EmailJS credentials, a Sanity read token, or the monitoring webhook through `runtimeConfig.public`.

`NUXT_PUBLIC_SITE_URL` controls canonical, sitemap, structured-data, and social URLs. Set `NUXT_SANITY_VISUAL_EDITING=true` only in a protected preview deployment with `NUXT_SANITY_API_READ_TOKEN` and `NUXT_SANITY_STUDIO_URL`; ordinary production requests keep stega and visual-editing payloads disabled.

The optional `NUXT_MONITORING_WEBHOOK_URL` receives sanitized JSON server errors. Configure access controls and retention at the receiving provider. Contact details are sent only to the configured mail provider for replying to the enquiry.

## Sanity workflow

Run the Studio with the Sanity CLI and set `SANITY_STUDIO_PREVIEW_ORIGIN` to the protected preview deployment. Presentation uses Sanity’s built-in `/preview/enable` flow. Vision is excluded from production Studio builds. The singleton configuration prevents accidental duplicate portfolio documents.

When migrating old projects, populate `description`; the frontend continues to fall back to the legacy `decs` field so existing content is not broken.

## Quality commands

```bash
npm run lint
npm run typecheck
npm run test
npm run test:coverage
npm run build
npm run check:budgets
npm run test:e2e:install
npm run test:e2e
npm run audit:prod
npm run verify
```

`verify` runs lint, strict Nuxt/Vue type checking, unit tests, a production build, and asset/HTML budgets. Playwright separately verifies desktop and mobile navigation, the sticky/fading hero interaction, metadata, overflow, endpoints, and browser-console cleanliness.

## Deployment and operations

Build inside the same operating-system/CPU target used to run the output because Nuxt Image traces a platform-specific Sharp binary. Deploy `.output/`, start `node .output/server/index.mjs`, and route readiness probes to `/healthz`. Keep TLS termination in front of the app; security headers, CSP, no-store API caching, and immutable Nuxt-asset caching are configured in `nuxt.config.ts`.

Before promoting a release:

1. Configure secrets in the hosting provider, never in the repository.
2. Run `npm ci`, `npm run verify`, `npm run audit:prod`, and `npm run test:e2e`.
3. Confirm `/`, `/projects`, `/robots.txt`, `/sitemap.xml`, `/og-image.png`, and `/healthz` from the deployed origin.
4. Send a real contact message and confirm monitoring delivery.

For rollback, retain the previous immutable build artifact and environment revision. Redirect traffic to that artifact, verify `/healthz` and the public routes, then investigate with the failed release’s logs. CMS schema additions are backward-compatible; avoid removing legacy fields until all content and rollback versions no longer depend on them.

## Security ownership

Production credential rotation, branch protection, required checks, and monitoring-provider access are owner-managed operations. Automated dependency updates and CI secret scanning are committed under `.github/`.

Report suspected vulnerabilities through the private process in [`SECURITY.md`](SECURITY.md), never through a public issue.
