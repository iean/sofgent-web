import { getServices } from "@/lib/sanity/content";
import ServiceCard from "../../home/services/ServiceCard";

export default async function ServiceMain() {
   const services = await getServices();
   return (
      <section id="service" className="w-full theme-container mx-auto">
         <div className="mx-auto w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-0 bg-gray rounded-[10px] border border-brandBorder">
            <div className="relative w-full service-section-wrapper">
               <div className="relative z-10 mx-auto theme-container">
                  <div className="flex flex-col items-center">
                     <span className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                        AI Product Studio
                     </span>
                     <h2 className="sm:text-48 text-24 font-semibold text-main-black mb-[50px] text-center lg:w-[685px] w-full">
                        Start with AI product delivery or SaaS MVP delivery
                     </h2>
                     <p className="text-paragraph text-center max-w-3xl mb-10">
                        These service cards are dynamic from Sanity. We keep the
                        positioning simple: the primary buying lanes are AI
                        product delivery and SaaS MVP delivery, with the rest of
                        the capabilities supporting that build path.
                     </p>
                  </div>
                  <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[70px] gap-8">
                     {services.map((service) => (
                        <ServiceCard
                           key={service.slug}
                           slug={service.slug}
                           title={service.title}
                           description={service.description}
                           icon={service.icon || "/icons/services/software-development.svg"}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
