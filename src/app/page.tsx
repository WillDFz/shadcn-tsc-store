'use client'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/Contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Header from './../components/Header/Header';

export default function Home() {
  const { user } = useAuth()
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/auth/login');
  //   }
  // }, [user, router]);

  return (
    <>
      <Header />
    </>
  )
}
