import React from 'react'
import Banner from '@/interfaces/Banner'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
  } from "@/components/ui/carousel"

const HomeSwiper = () => {

    const bannersMobile: Banner[] = [
        { id: 1, image: '/images/banner-01-mobile.png', title: 'Título 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' },
        { id: 2, image: '/images/banner-01-mobile.png', title: 'Título 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' }
    ]
    const bannersDesktop: Banner[] = [
        { id: 1, image: '/images/banner-01-desktop.png', title: 'Título 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' },
        { id: 2, image: '/images/banner-01-desktop.png', title: 'Título 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' }
    ]

    return (
        <div className='mb-2'>
            <Carousel className='lg:hidden'>
                <CarouselContent>
                    {bannersMobile.map((banner) => (
                        <CarouselItem key={banner.id}>
                            <img src={banner.image} alt="" />
                        </CarouselItem>

                    ))}
                </CarouselContent>
            </Carousel>
            <Carousel className='hidden lg:block'>
                <CarouselContent>
                    {bannersDesktop.map((banner) => (
                        <CarouselItem key={banner.id}>
                            <img src={banner.image} alt="" />
                        </CarouselItem>

                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default HomeSwiper