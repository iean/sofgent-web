import getServicesMeta from "@/app/utils/getServicesMeta";
import LottieLines from "../../common/LottieLine";
import ServiceCard from "./ServiceCard";

export default function Service() {
   const services = getServicesMeta("/app/data/services");
   services.sort((a, b) => { return a.order - b.order });
   return (
      <section id="service">
         <div className="w-full service-section-wrapper xl:pb-[130px] pb-[60px] relative">
            <div className="relative z-10 mx-auto theme-container">
               <div className="w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-5 bg-gray rounded-[10px] border border-brand">
                  <div className="flex flex-col items-center">
                     <span className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                        Explore Services
                     </span>
                     <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] text-center lg:w-[685px] w-full">
                        High Impact Marketing Services to grow your business
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
            <LottieLines />
         </div>
      </section>
   );
}
