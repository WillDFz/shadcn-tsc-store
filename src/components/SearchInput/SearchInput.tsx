import React from 'react'
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Button } from '../ui/button';

const SearchInput = () => {
  return (
    <div className="relative">
      <Input className='m-auto' placeholder='Digite sua busca' />
      <Button variant="ghost" className="absolute bottom-0 right-0 pe-2">
        <Image src='/svg/search.svg' alt='search' width={28} height={28} />
      </Button>
    </div>
  )
}

export default SearchInput