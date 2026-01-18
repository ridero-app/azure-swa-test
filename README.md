# Azure Static Web Apps - Test Deployment

Minimal Next.js 15 app with Auth0 for testing Azure SWA deployment.

## Features

- Next.js 15 with App Router
- Auth0 authentication
- Standalone output mode
- No middleware (to avoid warm-up timeouts)

## Environment Variables

Required:
- `AUTH0_DOMAIN`
- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`
- `AUTH0_SECRET`
- `APP_BASE_URL`

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Push to main branch to trigger Azure Static Web Apps deployment.
