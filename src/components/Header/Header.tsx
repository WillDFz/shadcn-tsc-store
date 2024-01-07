'use client'

import React, { useContext, useState } from 'react'
import HamburgerMenu from 'hamburger-react';
import Sidebar from './../Sidebar/Sidebar';
import Cart from './../Cart/Cart';
import { CartContext } from '../Contexts/CartContext';
import Navbar from './../Navbar/Navbar';
import SearchInput from '../SearchInput/SearchInput';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const cartContext = useContext(CartContext)

  if (!cartContext) {
    return
  }

  const { cartItems } = cartContext

  return (
    <>
      <div className='grid grid-cols-3 relative bg-black p-2 z-50'>
        <div>
          <HamburgerMenu size={24} color="#ffffff" distance="lg" toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="flex">
          <img src="/svg/logo.svg" alt="" />
        </div>
        <div className="flex justify-end items-center">
          <div className="absolute top-1 right-2 bg-gray-600 rounded-full text-white text-xs px-1">{cartItems?.length}</div>
          <Cart />
        </div>
      </div>
      
      {/* Search */}
      <div className='bg-black p-3'>
        <SearchInput/>
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

    </>
  )
}

export default Header