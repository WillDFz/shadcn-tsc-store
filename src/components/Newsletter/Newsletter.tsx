import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Newsletter = () => {
    return (
        <div className='bg-gray-300 shadow px-3 py-8 mb-3'>
            <div className='text-center text-yellow-700 mb-3'>

                <h3 className='text-center font-semibold'>Newsletter</h3>
                <p className='text-sm'>Assine para receber nossas novidades!</p>
            </div>
            <form>
                <Input className='mb-3' placeholder='Digite seu e-mail' />
                <Button variant="outline" className='w-full'>Enviar</Button>
            </form>
        </div>
    )
}

export default Newsletter