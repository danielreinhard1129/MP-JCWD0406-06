import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import StoreProvider from './StoreProvider';
import Footer from '@/components/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos';
import 'aos/dist/aos.css';
import { Header } from '@/components/Header';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Symphony',
  description: 'Generated Events',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary">
        <StoreProvider>
          <Header />
          <main>
            {children}
            <Toaster position="top-right" richColors duration={2000} />
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
