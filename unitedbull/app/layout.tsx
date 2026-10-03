import type { Metadata, Viewport } from 'next';
import { Orbitron, Rajdhani, Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SvgDefs from '@/components/SvgDefs';
import './globals.css';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['600', '800'], variable: '--font-orbitron', display: 'swap' });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-rajdhani', display: 'swap' });
const inter    = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'UnitedBull — The Bullish Web3 Growth Network',
  description: 'BULL is being built to help promising crypto projects launch, grow, market, and connect.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#04080a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable}`}>
      <body>
        <SvgDefs />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
