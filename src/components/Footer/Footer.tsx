import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className='bg-black p-3'>
                <div className='ps-5 my-4'>
                    <img src="/svg/logo.svg" className='w-1/2 m-auto' alt="" />
                </div>
                <div className='flex flex-col items-center text-white space-y-3'>
                    <Link href="#" >Inicio</Link>
                    <Link href="#" >Sobre</Link>
                    <Link href="#" >Politica de Privacidade</Link>
                    <Link href="#" >Contato</Link>
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