import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow health checks and static files to pass through immediately
  const path = request.nextUrl.pathname;

  if (
    path.startsWith('/_next/') ||
    path.startsWith('/api/') ||
    path.includes('/favicon') ||
    path.includes('/robots') ||
    path.includes('/sitemap')
  ) {
    return NextResponse.next();
  }

  // For tenant routes, just pass through - auth is handled at page level
  // This middleware could be used for tenant extraction if needed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
