'use client'

import React, { useState } from 'react'
import HamburgerMenu from 'hamburger-react';
import Image from 'next/image';
import Sidebar from './../Sidebar/Sidebar';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
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
          <div className="absolute top-1 right-2 bg-gray-600 rounded-full text-white text-xs px-1">0</div>
          <Button variant="ghost">
            <Image src="/svg/bag.svg" width={20} height={20} alt='cart' />
          </Button>
        </div>
      </div>

      {isOpen &&
        <>
          <Sidebar setOpen={setOpen} />
          <div className='w-full bg-gray-600 h-screen opacity-50 fixed top-0 z-30'></div>
        </>
      }
    </>
  )
}

export default Header