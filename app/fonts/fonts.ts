import { Inter, Manrope } from "next/font/google";
import { Baloo_2, Nunito } from 'next/font/google';

export const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-baloo',
  display: 'swap',
});

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-nunito',
  display: 'swap',
});

export const manrope = Manrope({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});
export const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
   weight: ["300", "400", "500", "600"],
});


import { IBM_Plex_Mono } from 'next/font/google';

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm',
  display: 'swap',
});