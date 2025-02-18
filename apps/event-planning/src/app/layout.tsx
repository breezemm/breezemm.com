import React from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/homepage/footer/Footer';

import './globals.css';

export const metadata = {
  title: 'Breeze',
  description: 'Generated by Next.js',
  icons: {
    icon: '/breeze-logo-fav.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
