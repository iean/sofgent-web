import { getServices } from "@/lib/sanity/content";
import LottieLines from "../../common/LottieLine";
import ServiceCard from "./ServiceCard";

export default async function Service() {
   const services = await getServices();
   return (
      <section id="service">
         <div className="w-full service-section-wrapper xl:pb-[130px] pb-[60px] relative">
            <div className="relative z-10 mx-auto theme-container">
               <div className="w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-5 bg-gray rounded-[10px] border border-brand">
                  <div className="flex flex-col items-center">
                     <span className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                        AI Product Studio
                     </span>
                     <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] text-center lg:w-[685px] w-full">
                        AI Product Studio is the main offer. SaaS delivery is how we ship it.
                     </h2>
                     <p className="text-paragraph text-center max-w-3xl mb-10">
                        The live services below come from Sanity, but the buying
                        message is intentionally narrower: we focus on AI product
                        delivery, internal AI tools, and SaaS systems for
                        operations teams.
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
            <LottieLines />
         </div>
      </section>
   );
}
