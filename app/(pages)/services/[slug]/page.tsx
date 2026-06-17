import BreadCrumb from "@/app/components/common/BreadCrumb";
import ServiceDetailsInfo from "@/app/components/serviceDetails";
import { CtaNoSSR } from "@/app/page";
import { getServiceBySlug, getServiceSlugs } from "@/lib/sanity/content";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
   return getPageMeta(`/services/${params.slug}`);
}

export async function generateStaticParams() {
   const slugs = await getServiceSlugs();
   return slugs.map((slug) => ({ slug }));
}

export default async function ServiceDetail({
   params,
}: {
   params: { slug: string };
}) {
   const service = await getServiceBySlug(params.slug);

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
