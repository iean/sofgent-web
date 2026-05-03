import getServicesMeta from "@/app/utils/getServicesMeta";
import { ServiceCatIcon, SupportIcon } from "@/app/utils/SVGIcons";
import { CALENDLY_URL } from "@/lib/constants";
import Link from "next/link";

export default function ServiceDetailsSidebar({ slug }: { slug: string }) {
   const services = getServicesMeta();
   const staticServices = [
      {
         slug: "ai-ready-data-engineering",
         title: "AI-Ready Data Engineering",
      },
      {
         slug: "document-intelligence-systems",
         title: "Document Intelligence Systems",
      },
   ];
   const filteredServices = services.filter((service) => service.slug !== slug);
   const visibleStaticServices = staticServices.filter(
      (service) => service.slug !== slug
   );
   return (
      <div
         data-aos="fade-up"
         data-aos-delay="100"
         className="col-span-8 lg:col-span-4 sticky top-[30px] self-start">
         <div className="border border-primary/10 rounded-2xl py-[30px] bg-main-gray">
            <div className="flex gap-5 items-center px-10 pb-[30px]">
               <ServiceCatIcon />
               <h2 className="font-semibold text-[22px] text-main-black">
                  More Services
               </h2>
            </div>
            <hr className="bg-primary/10" />
            <div className="pt-10 flex flex-col px-10 gap-[30px]">
               {filteredServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                     <div className="flex items-center gap-2 group text-gray-69 hover:text-primary">
                        <svg
                           width="7"
                           height="11"
                           viewBox="0 0 7 11"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              className="transition-all duration-300"
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                        <p className="text-lg font-medium text-gray-69 font-inter leading-5 transition-colors duration-300 hover:text-primary">
                           {service.title}
                        </p>
                     </div>
                  </Link>
               ))}
               {visibleStaticServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                     <div className="flex items-center gap-2 group text-gray-69 hover:text-primary">
                        <svg
                           width="7"
                           height="11"
                           viewBox="0 0 7 11"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              className="transition-all duration-300"
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                        <p className="text-lg font-medium text-gray-69 font-inter leading-5 transition-colors duration-300 hover:text-primary">
                           {service.title}
                        </p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
         <div className="border border-primary/10 rounded-2xl py-[30px] bg-main-gray mt-[30px]">
            <div className="flex gap-5 items-center px-10 pb-[30px]">
               <SupportIcon />
               <h1 className="font-semibold text-[22px] text-main-black">
                  Get Free Consultation
               </h1>
            </div>
            <hr className="bg-primary/10" />
            <div className="pt-10 flex flex-col px-10 gap-4">
               <p className="text-sm leading-6 text-paragraph">
                  Tell us about your product, timeline, and where you need help. We&apos;ll
                  prepare for a useful first conversation.
               </p>
               <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full w-full inline-flex items-center justify-center px-5 py-3 bg-primary text-white font-semibold transition-all duration-300 hover:bg-primary/90">
                  Book a Strategy Call
               </Link>
               <Link
                  href="/contact"
                  className="rounded-full w-full inline-flex items-center justify-center px-5 py-3 border border-primary/20 bg-white text-primary font-semibold transition-all duration-300 hover:bg-primary/5">
                  Send Project Details
               </Link>
            </div>
         </div>
      </div>
   );
}
