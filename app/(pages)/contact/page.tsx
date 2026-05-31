import BreadCrumb from "@/app/components/common/BreadCrumb";
import ContactForm from "@/app/components/contact";
import ContactMap from "@/app/components/contact/ContactMap";
import { CtaNoSSR } from "@/app/page";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/contact");
}

export default function Contact() {
   return (
      <section>
         <BreadCrumb pageTitle="Contact" currentPage="Contact" to="/" />
         <ContactForm />
         <ContactMap />
         <CtaNoSSR className="mt-20" />
      </section>
   );
}
