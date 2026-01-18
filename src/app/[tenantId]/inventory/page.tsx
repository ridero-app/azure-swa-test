export default async function InventoryPage({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = await params;

  // Simulated tenant-specific data
  const inventory = [
    { id: 1, item: `Vehicle A for ${tenantId}`, price: '$25,000' },
    { id: 2, item: `Vehicle B for ${tenantId}`, price: '$30,000' },
    { id: 3, item: `Vehicle C for ${tenantId}`, price: '$35,000' },
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Inventory - {tenantId}</h1>

      <div style={{ marginTop: '1rem' }}>
        <h3>Your Inventory:</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#e0e0e0' }}>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Item</th>
              <th style={{ padding: '0.5rem', textAlign: 'left' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.5rem' }}>{item.id}</td>
                <td style={{ padding: '0.5rem' }}>{item.item}</td>
                <td style={{ padding: '0.5rem' }}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href={`/${tenantId}`}>← Back to Home</a>
      </div>
    </main>
  );
}
