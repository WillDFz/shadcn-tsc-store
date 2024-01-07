import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


interface SidebarProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setOpen }) => {
    return (
        <div className="w-8/12 h-full fixed bg-black z-50">
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
                <Button variant='secondary' className='w-full'>Logout</Button>
            </div>
        </div>
    );
}

export default Sidebar;