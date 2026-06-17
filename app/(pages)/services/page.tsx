import BreadCrumb from "@/app/components/common/BreadCrumb";
import AboutService from "@/app/components/services/aboutService";
import Faq from "@/app/components/services/faq";
import ServiceMain from "@/app/components/services/mainServices";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/services");
}

export default function Services() {
   return (
      <section>
         <BreadCrumb pageTitle="Services" currentPage="Services" to="/services" />
         <AboutService />
         <ServiceMain />
         <Faq />
      </section>
   );
}
