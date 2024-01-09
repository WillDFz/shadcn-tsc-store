'use client'
import { useRouter } from 'next/navigation';
import Header from './../components/Header/Header';
import HomeSwiper from './../components/HomeSwiper/HomeSwiper';
import InformativeBanners from '@/components/InformativeBanners/InformativeBanners';
import ProductSwiper from '@/components/ProductSwiper/ProductSwiper';
import HomeBanner from './../components/HomeBanner/HomeBanner';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <HomeSwiper />
      <InformativeBanners />
      <ProductSwiper />
      <HomeBanner />
      <Newsletter />
      <Footer />
    </>
  )
}
