import { getFaqItems } from "@/lib/content/shared";
import FaqAccordion from "./FaqAccordion";
import LottieLines from "../../common/LottieLine";

export default async function Faq() {
   const faqItems = await getFaqItems("services");

   return (
      <section className="relative mt-40" id="faq">
         <div className="w-full relative z-10">
            <div className="mx-auto theme-container">
               <div className="relative flex items-center justify-center px-4 py-10 overflow-hidden border md:px-0 md:py-20 rounded-3xl border-primary/15 bg-gray">
                  {/* <!-- animation circle  --> */}

                  <div className="absolute flex items-center justify-center w-2 h-2 -bottom-1 -right-1">
                     <div className="animated_circle bg-primary/10"></div>
                     <div className="animated_circle2 bg-primary/10"></div>
                     <div className="animated_circle3 bg-primary/10"></div>
                     <div className="animated_circle4 bg-primary/10"></div>
                  </div>
                  <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
                     <h1 className="py-0.5 px-5 bg-white border-primary border rounded-[30px] font-medium text-blue-seo">
                        FAQs
                     </h1>
                     <h2 className="mt-5 font-semibold text-2xl sm:text-5xl">
                        Asked Questions & Answer
                     </h2>

                     <FaqAccordion items={faqItems} />
                  </div>
               </div>
            </div>
         </div>
         <LottieLines classNames="top-32" />
      </section>
   );
}
