import SectionHeader from "./SectionHeader";
import { processSteps } from "./content";

export default function ProcessSection() {
   return (
      <section className="bg-[linear-gradient(135deg,#08111f_0%,#12324a_100%)] py-16 text-white md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeader
               eyebrow="Solution Process"
               title="A 4-step path from messy data to AI readiness"
               description="We start with the data reality you have today, then build the structure needed for analytics, automation, and AI systems."
               theme="dark"
               align="center"
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-4">
               {processSteps.map((item) => {
                  const Icon = item.icon;

                  return (
                     <article
                        key={item.title}
                        className="rounded-[30px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between gap-4">
                           <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-cyan-300/12 text-cyan-100">
                              <Icon className="h-5 w-5" />
                           </div>
                           <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                              {item.step}
                           </span>
                        </div>
                        <h3 className="mt-6 text-[24px] font-semibold leading-[1.12] tracking-[-0.04em] text-white">
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
      </section>
   );
}
