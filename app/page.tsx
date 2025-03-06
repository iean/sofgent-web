import About from "@/app/components/home/about";
import FunFact from "@/app/components/home/funFact";
import Hero from "@components/home/hero";
import dynamic from "next/dynamic";
import Expertise from "./components/home/expertise";
import WhyChooseUs from "./components/home/whyChooseUs";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

export const CtaNoSSR = dynamic(() => import("@components/home/cta"), {
   ssr: false,
});
const ServiceNoSSR = dynamic(() => import("@components/home/services"), {
   ssr: false,
});
export default function Home() {
   return (
      <main>
         <Header/>
         <Hero />
         <About />
         <Expertise />
         <WhyChooseUs />
         <FunFact />
         <ServiceNoSSR />
         <CtaNoSSR />
         <Footer/>
      </main>
   );
}
