'use client'
import React, { useState } from 'react'
import HamburgerMenu from 'hamburger-react';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      <HamburgerMenu toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default Header