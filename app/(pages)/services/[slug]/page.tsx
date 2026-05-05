import BreadCrumb from "@/app/components/common/BreadCrumb";
import ServiceDetailsInfo from "@/app/components/serviceDetails";
import getServicesMeta from "@/app/utils/getServicesMeta";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const CtaNoSSR = dynamic(() => import("@/app/components/home/cta"), {
   ssr: false,
});

export function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Metadata {
   return getPageMeta(`/services/${params.slug}`);
}

export async function generateStaticParams() {
   const services = getServicesMeta();
   return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetail({
   params,
}: {
   params: { slug: string };
}) {
   const services = getServicesMeta();
   const service = services.find((s) => s.slug === params.slug);

   if (!service) {
      notFound();
   }

   return (
      <section>
         <BreadCrumb
            pageTitle={service.title}
            currentPage="Services"
            to="/services"
         />
         <ServiceDetailsInfo slug={params.slug} />
         <CtaNoSSR />
      </section>
   );
}
