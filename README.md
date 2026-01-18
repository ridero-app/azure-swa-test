# Azure Static Web Apps - Multi-Tenant Test

Next.js 15 app with Auth0 and multi-tenant architecture for testing Azure SWA deployment.

## Features

- **Multi-tenant routing**: Path-based tenants (`/tenantA/dashboard`, `/tenantB/inventory`)
- **Auth0 authentication**: Page-level auth (not middleware) to avoid warm-up timeouts
- **Standalone output**: Optimized for Azure SWA
- **Lightweight middleware**: Allows health checks, auth handled at page level

## URL Structure

All routes are tenant-scoped:

```
/dealerA              - Tenant home page (requires auth)
/dealerA/dashboard    - Dashboard for dealerA (requires auth)
/dealerA/inventory    - Inventory for dealerA (requires auth)

/dealerB              - Tenant home page (requires auth)
/dealerB/dashboard    - Dashboard for dealerB (requires auth)
/dealerB/inventory    - Inventory for dealerB (requires auth)
```

## How It Works

1. **User visits** `/dealerA/dashboard`
2. **Page component** calls `requireAuthAndTenant()`
3. **If not authenticated**: Redirects to `/api/auth/login`
4. **If authenticated**: Verifies tenant access, then renders page

## Environment Variables

Required:
- `AUTH0_DOMAIN` - Your Auth0 tenant domain
- `AUTH0_CLIENT_ID` - Auth0 application client ID
- `AUTH0_CLIENT_SECRET` - Auth0 application client secret
- `AUTH0_SECRET` - Random secret for session encryption
- `APP_BASE_URL` - Your app's URL (e.g., `https://gray-field-039317a0f.2.azurestaticapps.net`)

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/testTenant` to test.

## Deployment

Push to main branch to trigger Azure Static Web Apps deployment.

## Testing After Deployment

1. Visit: `https://your-app.azurestaticapps.net/dealerA`
2. You'll be redirected to Auth0 login
3. After login, you'll see the tenant home page
4. Navigate to `/dealerA/dashboard` or `/dealerA/inventory`
5. Try a different tenant: `/dealerB` (same user should have access)
