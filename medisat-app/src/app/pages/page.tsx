'use client'
// src/app/page.tsx

import Link from 'next/link';
import ProtectedPage from './tes/protected';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/pages/protected">
        Go to Protected Page
        
      </Link>
    </div>
  );
}