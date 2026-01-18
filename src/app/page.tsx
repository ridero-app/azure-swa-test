import { auth0 } from '@/lib/auth0';

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Hi! 👋</h1>

      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <a href="/api/auth/login">Login with Auth0</a>
        </div>
      )}
    </main>
  );
}
