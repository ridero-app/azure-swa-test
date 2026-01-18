export default async function TenantHome({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = await params;

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Hi! 👋</h1>
      <p>Welcome to tenant: <strong>{tenantId}</strong></p>
      <p>Multi-tenant routing is working!</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Test Navigation:</h2>
        <ul>
          <li><a href={`/${tenantId}/dashboard`}>Dashboard</a></li>
          <li><a href={`/${tenantId}/inventory`}>Inventory</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <p><strong>Try different tenants:</strong></p>
        <ul>
          <li><a href="/dealerA">Dealer A</a></li>
          <li><a href="/dealerB">Dealer B</a></li>
          <li><a href="/testTenant">Test Tenant</a></li>
        </ul>
      </div>
    </main>
  );
}
