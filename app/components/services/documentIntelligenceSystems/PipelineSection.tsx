import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { pipelineSteps } from "./content";

export default function PipelineSection() {
   return (
      <section className="bg-[linear-gradient(135deg,#08111f_0%,#12324a_100%)] py-16 text-white md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeader
               eyebrow="Solution Pipeline"
               title="A document intelligence pipeline built for real operational workflows"
               description="We combine OCR, AI extraction, validation, and structured outputs into one reliable processing flow."
               theme="dark"
               align="center"
            />

            <div className="mt-12 grid gap-4 xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
               {pipelineSteps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                     <div
                        key={item.title}
                        className="contents">
                        <article className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                           <div className="flex items-center justify-between gap-4">
                              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-cyan-300/12 text-cyan-100">
                                 <Icon className="h-5 w-5" />
                              </div>
                              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                                 {item.step}
                              </span>
                           </div>
                           <h3 className="mt-5 text-[22px] font-semibold leading-[1.12] tracking-[-0.04em] text-white">
                              {item.title}
                           </h3>
                           <p className="mt-4 text-[15px] leading-7 text-slate-300">
                              {item.description}
                           </p>
                        </article>

                        {index < pipelineSteps.length - 1 ? (
                           <div className="hidden items-center justify-center xl:flex">
                              <ArrowRight className="h-5 w-5 text-cyan-200" />
                           </div>
                        ) : null}
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
