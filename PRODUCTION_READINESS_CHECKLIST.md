# Production Readiness Checklist

This checklist is the implementation plan derived from the production audit. Items are checked only after the relevant code is implemented and verified locally.

## P0 — Release blockers

- [x] Remove all secrets from client-visible runtime configuration.
- [x] Document required environment variables and add safe runtime validation.
- [x] Replace browser-only EmailJS submission with a validated Nitro `POST` endpoint.
- [x] Verify reCAPTCHA server-side and add rate limiting, a honeypot, and safe error handling.
- [x] Remove the unauthenticated custom draft-mode endpoint and use the protected Sanity preview flow.
- [x] Disable Sanity stega and visual-editing code for ordinary production requests.
- [x] Eliminate all production hydration errors and Vue warnings.
- [x] Fix responsive navigation and mobile horizontal overflow.
- [x] Upgrade and triage vulnerable direct dependencies.

## Security and privacy

- [x] Add production security headers and route-appropriate cache policies.
- [x] Add a restrictive CSP compatible with Sanity images, reCAPTCHA, and the contact API.
- [x] Prevent framing, MIME sniffing, unnecessary browser permissions, and referrer leakage.
- [x] Remove insecure external HTTP links.
- [x] Add a concise contact-form privacy notice.
- [x] Add secret-scanning and dependency-audit CI gates.

## Accessibility

- [x] Add semantic `header`, `main`, `section`, and `footer` landmarks.
- [x] Add a keyboard-visible skip link.
- [x] Establish one logical `h1` per route and a valid heading hierarchy.
- [x] Make desktop and mobile navigation fully keyboard accessible.
- [x] Implement mobile-menu dialog semantics, focus trapping, Escape close, and focus restoration.
- [x] Remove nested links/buttons and use one native interactive element per action.
- [x] Give every form control a stable ID, name, label, and valid description relationship.
- [x] Give icon-only links and controls accessible names.
- [x] Correct image alternative text and mark decorative images appropriately.
- [x] Add reduced-motion support and preserve visible scrollbars.
- [x] Make toast notifications accessible and clean up timers.

## SEO and crawlability

- [x] Add a valid `robots.txt` response.
- [x] Add a real, reachable Open Graph image.
- [x] Add route-specific titles, descriptions, canonicals, and social metadata.
- [x] Add Person/WebSite/WebPage JSON-LD.
- [x] Fix sitemap image URL escaping or stop crawling incidental images.
- [x] Remove obsolete SEO component remnants and metadata.
- [x] Add a branded error page.

## Reliability and Sanity data

- [x] Add typed portfolio/Sanity domain models.
- [x] Use explicit GROQ projections rather than fetching entire documents.
- [x] Consolidate repeated Sanity requests and share fetched data through page props.
- [x] Add loading, empty, error, and missing-content fallbacks.
- [x] Use stable Sanity `_key` values for list rendering.
- [x] Enforce singleton documents and strengthen schema validation.
- [x] Correct schema naming inconsistencies without breaking existing content.
- [x] Align Studio preview configuration with the secured preview endpoint.
- [x] Remove production-only Studio development tools where unnecessary.

## Performance

- [x] Restore the portfolio motion system (intro, viewport reveals, staggered lists, and framework parallax) with reduced-motion support and browser regression coverage.
- [x] Pin the About section while subsequent content glides over it, with desktop and mobile browser coverage.
- [x] Restore the personal-details navigation state before pinning, then transition to the navigation-menu state once pinned.
- [x] Add theme-aligned kinetic hero typography, pointer-reactive lighting, and tactile project-card depth without layout shift or mobile-only overhead.
- [x] Verify all expressive effects remain keyboard-safe, hydration-safe, and fully disabled by reduced-motion preferences.
- [x] Remove the forced 1.4-second initial-page blocker.
- [x] Lazy-load reCAPTCHA only when the contact form is used.
- [x] Configure and use Nuxt Image for local and Sanity images.
- [x] Add intrinsic image dimensions, responsive sizes, modern formats, and appropriate loading priority.
- [x] Remove globally enabled visual-editing payloads.
- [x] Remove unused large assets and duplicate font delivery.
- [x] Use one font-loading system and resolve broken font URLs.
- [x] Replace per-scroll reactive calculations with request-animation-frame-safe behavior.
- [x] Remove fixed navigation delays and long hash polling.
- [x] Add bundle and rendered-HTML budgets.

## Vue/Nuxt maintainability

- [x] Convert active components and composables to typed `<script setup lang="ts">` contracts.
- [x] Replace Vue 2 event modifiers and invalid template patterns.
- [x] Add cleanup for observers, watchers, listeners, animation frames, and timers.
- [x] Replace unsafe SVG injection and duplicate icon systems.
- [x] Remove dead components, composables, styles, screenshots, and tracked OS metadata.
- [x] Fix Tailwind configuration warnings and invalid tokens.
- [x] Standardize formatting and naming.

## Testing, CI, and operations

- [x] Add ESLint, formatting, and strict Vue/Nuxt type-check scripts.
- [x] Add Vitest unit/component coverage for forms, rate limiting, and UI state.
- [x] Add Playwright coverage for navigation, sticky hero behavior, SEO, mobile overflow, and console errors.
- [x] Add CI gates for install, prepare, lint, typecheck, tests, build, audit, and budgets.
- [x] Add Node and package-manager version constraints.
- [x] Add dependency-update automation and CODEOWNERS.
- [x] Replace the starter README with setup, architecture, environment, CMS, security, test, deployment, and rollback documentation.
- [x] Add health/readiness endpoints and deployment configuration guidance.
- [x] Add an error-monitoring integration point with environment-controlled configuration.
- [x] Verify a clean production build, endpoints, desktop browser, and mobile browser.

## External actions requiring owner credentials

- [ ] Rotate the previously exposed reCAPTCHA secret in the Google console.
- [ ] Provision production email-provider server credentials.
- [ ] Configure production monitoring/project credentials.
- [ ] Configure branch protection and required CI checks in the Git host.
