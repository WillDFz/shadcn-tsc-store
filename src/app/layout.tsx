import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { CartProvider } from '@/components/Contexts/CartContext';
import { Toaster } from '@/components/ui/toaster';
import Provider from './../components/Provider/Provider';
import { Session } from 'next-auth';
const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Next Shadcn Shop',
  description: 'Next Shadcn Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
            <CartProvider>
              {children}
              <Toaster />
            </CartProvider>
        </Provider>
      </body>
    </html>
  )
}
