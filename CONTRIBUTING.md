# Contributing

Thanks for improving the portfolio. Keep changes focused, explain the user-facing effect, and avoid committing credentials or personal data.

## Development

Use Node.js 22 through 24 and npm 10.

```bash
npm ci
cp .env.example .env
npm run dev
```

The public site renders without provider credentials. Contact delivery requires the private configuration documented in `.env.example`.

## Before opening a pull request

Run:

```bash
npm run verify
npm run audit:prod
npm run test:e2e:install
npm run test:e2e
```

For UI changes, include before-and-after screenshots at desktop and mobile widths. Add or update tests for behavior changes. Keep generated output, local environment files, and provider tokens out of commits.

Security vulnerabilities belong in a private report under the repository's Security tab; see `SECURITY.md`.
