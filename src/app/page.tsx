'use client'
import { useAuth } from '@/components/Contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Header from './../components/Header/Header';
import HomeSwiper from './../components/HomeSwiper/HomeSwiper';
import InformativeBanners from '@/components/InformativeBanners/InformativeBanners';
import ProductSwiper from '@/components/ProductSwiper/ProductSwiper';
import HomeBanner from './../components/HomeBanner/HomeBanner';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';
import { CartProvider } from '@/components/Contexts/CartContext';

export default function Home() {
  const { user } = useAuth()
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/auth/login');
  //   }
  // }, [user, router]);

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
