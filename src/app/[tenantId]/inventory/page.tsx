import { requireAuthAndTenant } from '@/lib/auth-helpers';

export default async function InventoryPage({ params }: { params: { tenantId: string } }) {
  const session = await requireAuthAndTenant(params.tenantId);

  // Simulated tenant-specific data
  const inventory = [
    { id: 1, item: `Vehicle A for ${params.tenantId}`, price: '$25,000' },
    { id: 2, item: `Vehicle B for ${params.tenantId}`, price: '$30,000' },
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Inventory - {params.tenantId}</h1>
      <p>Logged in as: {session.user.email}</p>

      <div style={{ marginTop: '1rem' }}>
        <h3>Your Inventory:</h3>
        <ul>
          {inventory.map(item => (
            <li key={item.id}>{item.item} - {item.price}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href={`/${params.tenantId}`}>← Back to Home</a>
      </div>
    </main>
  );
}
