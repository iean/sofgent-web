import BreadCrumb from "@/app/components/common/BreadCrumb";
import AboutService from "@/app/components/services/aboutService";
import ServiceMain from "@/app/components/services/mainServices";
import dynamic from "next/dynamic";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/services");
}

const FaqNoSSR = dynamic(() => import("@/app/components/services/faq"), {
   ssr: false,
});
export default function Services() {
   return (
      <section>
         <BreadCrumb pageTitle="Services" currentPage="Services" to="/services" />
         <AboutService />
         <ServiceMain />
         <FaqNoSSR />
      </section>
   );
}
