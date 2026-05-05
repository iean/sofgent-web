import dotShape from "@assets/images/home/cta-dot-shape.webp";
import Image from "next/image";
import Button from "../../common/Button";
import { CALENDLY_URL } from "@/lib/constants";
import LottieLines from "../../common/LottieLine";
import CtaRightPart from "./CtaRightPart";
import SectionTag from "../../common/SectionTag";

export default function Cta({className}:{className?:string}) {
   return (
      <section className={className} data-aos="fade-up" id="consultation">
         <div className="relative w-full consultation-section-wrapper">
            <div className="relative z-10 mx-auto theme-container">
               <div className="w-full bg-gray py-[80px] justify-between xl:pl-[110px] pl-10 border border-primary rounded-[20px] bg-main-gray md:flex relative">
                  <div className="absolute bottom-0 left-0 pointer-events-none">
                     <Image
                        width={400}
                        height={400}
                        src={dotShape}
                        alt="CTA Dot Shape"
                     />
                  </div>
                  <div className="md:w-2/4 w-full">
                    <SectionTag tag="Build Your AI Product" />
                     <h2 className="md:text-5xl mt-6 text-4xl font-semibold mb-[32px]">
                        Have an idea? Let&apos;s build it in 30 days.
                     </h2>
                     <p className="text-paragraph mb-[45px]">
                        We help founders launch MVPs, build AI systems, and
                        rebuild products for scale without wasting months.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <Button
                           btnText="Book Call"
                           href={CALENDLY_URL}
                           external={true}
                        />
                        <Button
                           btnText="Get Free Consultation"
                           href="/contact"
                           className="border border-primary bg-transparent text-primary shadow-none hover:bg-primary hover:text-white"
                        />
                     </div>
                  </div>
                  <CtaRightPart />
               </div>
            </div>
            <LottieLines classNames="top-20" />
         </div>
      </section>
   );
}
