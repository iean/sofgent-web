import type { Metadata } from "next";
import { dmSans, rubik } from "../fonts/fonts";
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
      <html lang="en" className={`${dmSans.variable} ${rubik.variable}`}>
         <body className="font-dmSans font-rubik"> 
         
            <Header/>
            {children}
           <Footer/>
         
         </body>
      </html>
   );
}
