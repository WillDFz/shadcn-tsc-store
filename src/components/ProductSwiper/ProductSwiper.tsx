import React from 'react'
import Product from '@/interfaces/Product'
import ProductsJson from '@/json/products.json'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {Button} from '@/components/ui/button'

const ProductSwiper = () => {

    const products: Product[] = ProductsJson;

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
                                    <img src={product.image} className='h-5/6 border' alt="" />
                                </div>
                                <div className='mb-2'>
                                    <h3 className='text-sm text-yellow-700'>{product.title}</h3>
                                    <p>R$ {(product.price)}</p>
                                </div>
                                <div>
                                    <Button variant="secondary" className='w-full'>
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