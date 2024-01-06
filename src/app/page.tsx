'use client'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/Contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Header from './../components/Header/Header';

export default function Home() {
  const { user } = useAuth()
  const router = useRouter();

  // Verifica se o usuário está autenticado
  if (!user) {
    // Se não estiver autenticado, redireciona para a página de login
    router.push('/auth/login');
    return null; // Evita renderizar o conteúdo da Home enquanto redireciona
  }
  return (
    <>
      <Header />
    </>
  )
}
