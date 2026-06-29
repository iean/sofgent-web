import type { Metadata } from "next";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

export const metadata: Metadata = {
   title: "SofGent | AI Product Studio",
   description: "SofGent builds AI apps, document automation, and SaaS MVPs for operations teams. Production-ready in 4–6 weeks.",
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
