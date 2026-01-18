import { requireAuthAndTenant } from '@/lib/auth-helpers';

export default async function TenantHome({ params }: { params: { tenantId: string } }) {
  const session = await requireAuthAndTenant(params.tenantId);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Hi, {session.user.name}! 👋</h1>
      <p>Welcome to tenant: <strong>{params.tenantId}</strong></p>
      <p>Your email: {session.user.email}</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Test Multi-Tenant Navigation:</h2>
        <ul>
          <li><a href={`/${params.tenantId}/dashboard`}>Dashboard</a></li>
          <li><a href={`/${params.tenantId}/inventory`}>Inventory</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href="/api/auth/logout">Logout</a>
      </div>
    </main>
  );
}
