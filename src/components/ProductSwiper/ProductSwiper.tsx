import React, { useContext } from 'react'
import Product from '@/interfaces/Product'
import ProductsJson from '@/json/products.json'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from '@/components/ui/button'
import { CartContext } from '../Contexts/CartContext'

const ProductSwiper = () => {

    const products: Product[] = ProductsJson;

    const cartContext = useContext(CartContext)

    if (!cartContext) {
        return
    }

    const { addToCart } = cartContext

    if (!products) {
        return
    }

    return (
        <div className='ps-3 my-8'>
            <Carousel>
                <CarouselContent>
                    {products.map((product) => (
                        <CarouselItem key={product.id} className='basis-3/5'>
                            <div>
                                <div className='h-48 flex items-center justify-center border rounded bg-gray-100 mb-3'>
                                    <img src={product.image} className='h-5/6' alt="" />
                                </div>
                                <div className='mb-2'>
                                    <h3 className='text-sm text-yellow-700'>{product.title}</h3>
                                    <p>R$ {(product.price)}</p>
                                </div>
                                <div>
                                    <Button onClick={e => addToCart({
                                        id: product.id,
                                        title: product.title, 
                                        price: product.price,
                                        image: product.image,
                                        quantity: 1
                                    })} 
                                    variant="secondary" 
                                    className='w-full'>
                                        Adicionar ao carrinho
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='hidden lg:block'>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    )
}

export default ProductSwiper