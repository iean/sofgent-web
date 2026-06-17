import { getServiceBySlug } from "@/lib/sanity/content";
import Markdown from "markdown-to-jsx";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import "./style.css";

export default async function ServiceDetailsInfo({ slug }: { slug: string }) {
   const service = await getServiceBySlug(slug);

   return (
      <section className="pt-16 md:pt-[130px] service-details-page">
         <div className="w-full mx-auto theme-container pb-16 md:pb-24">
            <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">
               <div
                  data-aos="fade-up"
                  className="col-span-8 sticky top-[30px] self-start">
                  {service?.content ? (
                     <Markdown>{service.content}</Markdown>
                  ) : (
                     <p>Service details are being prepared in Sanity.</p>
                  )}
               </div>
               <ServiceDetailsSidebar slug={slug} />
            </div>
         </div>
      </section>
   );
}
