import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HamburgerMenu from 'hamburger-react';
import { signOut, useSession } from 'next-auth/react';


interface SidebarProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ setOpen, isOpen }) => {

    const { data: session } = useSession()

    return (
        <div className="w-8/12 h-full fixed top-0 bg-black z-50">
            <HamburgerMenu size={24} color="#ffffff" distance="lg" toggled={isOpen} toggle={setOpen} />
            <div className='text-white'>
                <div className='border-y border-slate-400 p-3'>
                    <Link href="/">
                        Inicio
                    </Link>
                </div>
                <div className='border-b border-slate-400 p-3'>
                    <Link href="/product/register">
                        Cadastro de Produtos
                    </Link>
                </div>
                <div className='border-b border-slate-400 p-3'>
                    <Link href="/">
                        Sobre nós
                    </Link>
                </div>
                <div className='border-b border-slate-400 p-3'>
                    <Link href="/">
                        Contato
                    </Link>
                </div>
            </div>
            <div className='w-8/12 fixed flex bottom-0 p-3'>
                {session ? (
                    <div className='w-full'>
                        <div className="text-white text-sm mb-3">Bem vindo, {session?.user?.name}!</div>
                        <Button variant='secondary' className='w-full' onClick={e => signOut({callbackUrl: "/login"})}>Logout</Button>
                    </div>

                ) : (
                    <Button variant='secondary' className='w-full'>
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Sidebar;