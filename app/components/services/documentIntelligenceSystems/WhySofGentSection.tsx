import Button from "@/app/components/common/Button";
import { CALENDLY_URL } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import { differentiators } from "./content";

export default function WhySofGentSection() {
   return (
      <section className="bg-[linear-gradient(135deg,#08111f_0%,#10263a_100%)] py-16 text-white md:py-24">
         <div className="mx-auto theme-container">
            <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
               <div className="max-w-2xl">
                  <SectionHeader
                     eyebrow="Why SofGent"
                     title="A serious OCR and extraction partner, not a document AI demo shop"
                     description="We build document intelligence systems with the operational layers real businesses need: OCR reliability, extraction logic, validation workflows, structured outputs, and edge-case handling."
                     theme="dark"
                  />
                  <div className="mt-8">
                     <Button
                        btnText="Book Consultation"
                        href={CALENDLY_URL}
                        external={true}
                     />
                  </div>
               </div>

               <div className="grid gap-5 md:grid-cols-3">
                  {differentiators.map((item) => {
                     const Icon = item.icon;

                     return (
                        <article
                           key={item.title}
                           className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                           <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-cyan-300/12 text-cyan-100">
                              <Icon className="h-5 w-5" />
                           </div>
                           <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-white">
                              {item.title}
                           </h3>
                           <p className="mt-4 text-[16px] leading-7 text-slate-300">
                              {item.description}
                           </p>
                        </article>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}
