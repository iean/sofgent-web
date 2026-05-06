import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BreadCrumb from "@/app/components/common/BreadCrumb";
import ServicePage from "@/app/components/services/detail/ServicePage";
import {
   getServiceBySlug,
   getServiceSlugs,
} from "@/lib/sanity/content";

export const revalidate = 60;

export async function generateStaticParams() {
   const slugs = await getServiceSlugs();
   return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   const service = await getServiceBySlug(params.slug);
   if (!service) {
      return { title: "Service not found" };
   }

   const title = service.seoTitle || `${service.title} | SofGent`;
   const description = service.seoDescription || service.summary;

   return {
      title,
      description,
      keywords: service.keywords?.length ? service.keywords.join(", ") : undefined,
      openGraph: {
         title,
         description,
         images: [
            {
               url: service.heroImage.src,
               width: 1600,
               height: 900,
               alt: service.heroImage.alt,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images: [service.heroImage.src],
      },
   };
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
      <main className="min-h-screen bg-slate-50">
         <BreadCrumb
            pageTitle={service.title}
            currentPage="Services"
            to={`/services/${service.slug}`}
         />
         <ServicePage service={service} />
      </main>
   );
}
