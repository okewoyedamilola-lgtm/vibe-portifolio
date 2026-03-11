import type { Metadata } from 'next';
import { Montserrat, Khand } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const khand = Khand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-khand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Damilola Israel Okewoye | Product Manager',
  description:
    'Product Manager focused on product strategy, user research, roadmap planning, and cross-functional collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${khand.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
