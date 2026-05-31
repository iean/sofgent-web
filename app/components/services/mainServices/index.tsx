import getServicesMeta from "@/app/utils/getServicesMeta";
import ServiceCard from "../../home/services/ServiceCard";

export default function ServiceMain() {
   const services = getServicesMeta("/app/data/services");
   services.sort((a, b) => { return a.order - b.order });
   return (
      <section id="service" className="w-full theme-container mx-auto">
         <div className="mx-auto w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-0 bg-gray rounded-[10px] border border-brandBorder">
            <div className="relative w-full service-section-wrapper">
               <div className="relative z-10 mx-auto theme-container">
                  <div className="flex flex-col items-center">
                     <span className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                        Explore Services
                     </span>
                     <h2 className="sm:text-48 text-24 font-semibold text-main-black mb-[50px] text-center lg:w-[685px] w-full">
                        High Impact Software development Services to grow your business
                     </h2>
                  </div>
                  <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[70px] gap-8">
                     {services.map((service) => (
                        <ServiceCard
                           key={service.slug}
                           slug={service.slug}
                           title={service.title}
                           description={service.description}
                           icon={service.icon}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
