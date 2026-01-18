import { auth0 } from './auth0';
import { redirect } from 'next/navigation';

/**
 * Require authentication - redirect to login if not authenticated
 */
export async function requireAuth() {
  const session = await auth0.getSession();

  if (!session || !session.user) {
    redirect('/api/auth/login');
  }

  return session;
}

/**
 * Verify user has access to the specified tenant
 */
export async function requireTenantAccess(userId: string, tenantId: string): Promise<boolean> {
  // For testing: allow all authenticated users to access any tenant
  // In production, query your database to verify access
  console.log(`User ${userId} accessing tenant ${tenantId}`);
  return true;
}

/**
 * Get authenticated user and verify tenant access
 */
export async function requireAuthAndTenant(tenantId: string) {
  const session = await requireAuth();
  await requireTenantAccess(session.user.sub, tenantId);
  return session;
}
