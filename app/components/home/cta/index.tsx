import dotShape from "@assets/images/home/cta-dot-shape.webp";
import Image from "next/image";
import Button from "../../common/Button";
import LottieLines from "../../common/LottieLine";
import CtaRightPart from "./CtaRightPart";
import SectionTag from "../../common/SectionTag";

export default function Cta({className}:{className?:string}) {
   return (
      <section className={className} data-aos="fade-up" id="consultation">
         <div className="relative w-full consultation-section-wrapper">
            <div className="relative z-10 mx-auto theme-container">
               <div className="w-full bg-gray py-[80px] justify-between xl:pl-[110px] pl-10 border border-brand rounded-[20px] bg-main-gray md:flex relative">
                  <div className="absolute bottom-0 left-0 pointer-events-none">
                     <Image
                        width={400}
                        height={400}
                        src={dotShape}
                        alt="CTA Dot Shape"
                     />
                  </div>
                  <div className="md:w-2/4 w-full">
                    <SectionTag  tag="Get Consultation"/>
                     <h2 className="md:text-48 mt-6 text-34 font-semibold mb-[32px]">
                        Get your free software development consultation
                     </h2>
                     <p className="text-paragraph mb-[45px]">
                        Let&apos;s build innovative software solutions together
                     </p>

                     <Button btnText="Get Consultation" href="/contact" />
                  </div>
                  <CtaRightPart />
               </div>
            </div>
            <LottieLines classNames="top-20" />
         </div>
      </section>
   );
}
