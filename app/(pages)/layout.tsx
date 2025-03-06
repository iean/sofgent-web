import type { Metadata } from "next";
import { inter, manrope } from "../fonts/fonts";
// import "./globals.css";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

// Meta title & description
export const metadata: Metadata = {
   title: "SofGent",
   description: "Software IT Company",
};

export default function PagesLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${manrope.className} ${inter.variable}`}>
         
            <Header/>
            {children}
           <Footer/>
         
         </body>
      </html>
   );
}
