import React, { useContext } from 'react'
import { Button } from '../ui/button'

import Image from 'next/image';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { CartContext } from '../Contexts/CartContext';

const Cart = () => {

    const cartContext = useContext(CartContext)

    if (!cartContext) {
        return
    }

    const { cartItems, removeItem } = cartContext

    return (
        <Drawer>
            <DrawerTrigger>
                <Button variant="ghost">
                    <Image src="/svg/bag.svg" width={20} height={20} alt='cart' />
                </Button>
            </DrawerTrigger>
            <DrawerContent className='max-w-xl mx-auto'>
                <DrawerHeader>
                    <DrawerTitle>Carrinho</DrawerTitle>
                </DrawerHeader>
                <div className='p-3'>
                    {cartItems.map((item, index) => (
                        <div key={index} className='mb-3'>
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <div className='bg-gray-200 border rounded p-2 me-3'>
                                        <Image src={`/${item.image}`} width={50} height={50} alt='' />
                                    </div>
                                    <div>
                                        <p>{item.title}</p>
                                        <p>R$ {item.price}</p>
                                        <p>Qtd: {item.quantity}</p>
                                    </div>

                                </div>
                                <div>
                                    <Button variant="outline" onClick={e => removeItem(item.id)}>
                                        <Image src="/svg/trash.svg" width={20} height={20} alt='' />
                                    </Button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    ))}
                    <div>
                        <p>Total: R$ {cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)}</p>
                    </div>
                </div>
                <DrawerFooter>
                    <Button>Finalizar compra</Button>
                    <DrawerClose>
                        <Button variant="outline">Comprar mais itens</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Cart