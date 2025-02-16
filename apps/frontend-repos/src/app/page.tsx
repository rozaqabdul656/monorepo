'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase';
export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login'); // Redirect to login if not logged in
      } else {
        router.push('/dashboard'); // Redirect to dashboard if logged in
      }
    });
  }, [auth, router]);

  return <p>Loading...</p>;
}

