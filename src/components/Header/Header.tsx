'use client'

import React, { useContext, useState } from 'react'
import HamburgerMenu from 'hamburger-react';
import Sidebar from './../Sidebar/Sidebar';
import Cart from './../Cart/Cart';
import { CartContext } from '../Contexts/CartContext';
import Navbar from './../Navbar/Navbar';
import SearchInput from '../SearchInput/SearchInput';
import Link from 'next/link';
import { Button } from '../ui/button';
import { signOut, useSession } from 'next-auth/react';


const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);


  const { data: session } = useSession()

  const cartContext = useContext(CartContext)

  if (!cartContext) {
    return
  }

  const { cartItems } = cartContext


  return (
    <header>
      <div className='grid grid-cols-3 relative bg-black p-2 lg:p-5 z-50'>
        {/* Sidebar btn */}
        <div className='lg:hidden'>
          <HamburgerMenu size={24} color="#ffffff" distance="lg" toggled={isOpen} toggle={setOpen} />
        </div>
        {/* Search Desktop */}
        <div className='w-3/4 hidden lg:block bg-black p-3'>
          <SearchInput />
        </div>
        {/* Logo */}
        <div className="flex">
          <img src="/svg/logo.svg" className='lg:w-1/2 m-auto' alt="" />
        </div>
        {/* Account and Cart */}
        <div className="flex justify-end items-center">
          {/* Account */}
          <div className="hidden lg:flex flex-col items-center justify-center pt-5">
            <img src="/svg/user.svg" alt="" className='w-6 h-6' />
            {session ? (
              <div className='text-white text-xs'>
                <Link href="#" className=' '>{session?.user?.name}</Link>
                <span> | </span>
                <Button className='h-0 hover:text-white p-0' variant="ghost" onClick={e => signOut({ callbackUrl: '/login' })}>sair</Button>
              </div>

            ) : (
              <Link href="/login" className='text-white text-xs'>Entrar</Link>
            )}
          </div>
          {/* Cart */}
          <div>
            <div className="absolute top-1 lg:top-7 right-2 lg:right-5 bg-gray-600 rounded-full text-white text-xs px-1">{cartItems?.length}</div>
            <Cart />
          </div>
        </div>
      </div>

      {/* Search mobile */}
      <div className='lg:hidden bg-black p-3'>
        <SearchInput />
      </div>

      {/* Navbar */}
      <div className='hidden lg:block'>
        <Navbar />
      </div>

      {isOpen &&
        <>
          <Sidebar setOpen={setOpen} isOpen={isOpen} />
          <div className='w-full bg-gray-600 h-screen opacity-50 fixed top-0 z-30'></div>
        </>
      }

    </header>
  )
}

export default Header