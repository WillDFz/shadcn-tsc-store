import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className='bg-black lg:flex p-3 lg:p-5'>
                <div className='ps-5 lg:p-0 my-4 lg:w-1/4'>
                    <img src="/svg/logo.svg" className='w-1/2 m-auto' alt="" />
                </div>
                <div className='flex flex-col lg:w-1/4 items-center lg:items-start text-white space-y-3'>
                    <Link href="#" className="">Sobre nós</Link>
                    <Link href="#" className="">Encontre a loja</Link>
                    <Link href="#" className="">Categorias</Link>
                    <Link href="#" className="">Blogs</Link>
                </div>
                <div className='flex flex-col items-center lg:items-start lg:w-1/4 text-white space-y-3'>
                    <Link href="#" className="">Central de ajuda</Link>
                    <Link href="#" className="">Reembolso</Link>
                    <Link href="#" className="">Frete</Link>
                </div>
                <div className='flex flex-col items-center lg:items-start lg:w-1/4 text-white space-y-3'>
                    <Link href="#" className="">Login</Link>
                    <Link href="#" className="">Cadastrar-se</Link>
                    <Link href="#" className="">Configurações</Link>
                    <Link href="#" className="">Meus pedidos</Link>
                </div>
            </div>
            <div className='bg-white text-black p-3'>
                <div className='text-center'>
                    Copyright © 2024
                </div>
            </div>
        </>
    )
}

export default Footer

