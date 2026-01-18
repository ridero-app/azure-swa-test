import { requireAuthAndTenant } from '@/lib/auth-helpers';

export default async function DashboardPage({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = await params;
  const session = await requireAuthAndTenant(tenantId);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Dashboard - {tenantId}</h1>
      <p>Logged in as: {session.user.email}</p>

      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Tenant-Specific Data:</h3>
        <p>This would show data only for tenant: <strong>{tenantId}</strong></p>
        <p>User ID: {session.user.sub}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href={`/${tenantId}`}>← Back to Home</a>
      </div>
    </main>
  );
}
