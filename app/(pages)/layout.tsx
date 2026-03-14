import type { Metadata } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

// Meta title & description
export const metadata: Metadata = {
   title: "SofGent | Software Development Agency ",
   description: "SofGent is a results driven custom software development agency offering scalable, secure, and tailored digital solutions Build smarter with adaptive software today.",
};

export default function PagesLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}
