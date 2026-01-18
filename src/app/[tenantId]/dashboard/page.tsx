export default async function DashboardPage({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = await params;

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Dashboard - {tenantId}</h1>

      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Tenant-Specific Data:</h3>
        <p>This shows data only for tenant: <strong>{tenantId}</strong></p>
        <p>In production, this would show:</p>
        <ul>
          <li>Sales metrics for {tenantId}</li>
          <li>Inventory count for {tenantId}</li>
          <li>Recent activity for {tenantId}</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href={`/${tenantId}`}>← Back to Home</a>
      </div>
    </main>
  );
}
