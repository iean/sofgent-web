import { Inter } from 'next/font/google';

// Single, consistent typeface across the whole site — modern, Linear-style.
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// Kept as aliases so any legacy reference still resolves to Inter.
export const dmSans = inter;
export const rubik = inter;
