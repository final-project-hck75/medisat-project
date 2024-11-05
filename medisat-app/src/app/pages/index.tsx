// pages/index.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/protected">
        Go to Protected Page from homepage
      </Link>
    </div>
  );
}