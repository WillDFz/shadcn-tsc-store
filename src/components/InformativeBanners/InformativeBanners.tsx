import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import Banner from '@/interfaces/Banner'
import Image from 'next/image';

const InformativeBanners = () => {

    const banners: Banner[] = [
        { id: 1, image: 'svg/truck.svg', title: 'Frete grátis', text: 'Para compras acima de R$ 99,90 ', link: '#' },
        { id: 2, image: 'svg/barcode.svg', title: '10% de desconto', text: 'No boleto bancário', link: '#' },
        { id: 3, image: 'svg/card.svg', title: '10x sem juros', text: 'Compras no cartão de crédito', link: '#' },
        { id: 4, image: 'svg/refresh.svg', title: 'Trocas e devoluções', text: 'Grátis por 7 dias', link: '#' }
    ]

    return (
        <div className='bg-gray-100 p-3 mb-2'>
            <Carousel className="lg:hidden">
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem key={index} className='flex basis-2/3 lg:basis-1/4'>
                            <Image src={banner.image} width={24} height={24} className='' alt='' />
                            <div className='ml-3'>
                                <h3 className='text-sm font-semibold text-yellow-700'>{banner.title}</h3>
                                <p className='text-xs'>{banner.text}</p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="hidden lg:flex justify-around">
                {banners.map((banner, index) => (
                    <div key={index} className='flex'>
                        <Image src={banner.image} width={24} height={24} className='' alt='' />
                        <div className='ml-3'>
                            <h3 className='text-sm font-semibold text-yellow-700'>{banner.title}</h3>
                            <p className='text-xs'>{banner.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InformativeBanners