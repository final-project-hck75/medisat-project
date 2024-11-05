// src/app/protected.tsx
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>You are not signed in</h1>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}