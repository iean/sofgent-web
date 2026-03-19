import SectionHeader from "./SectionHeader";
import { problemPoints } from "./content";

export default function ProblemSection() {
   return (
      <section className="py-16 md:py-24">
         <div className="mx-auto theme-container">
            <SectionHeader
               eyebrow="The Problem"
               title="Most document operations still depend on slow, manual handling"
               description="When documents stay trapped in PDFs, scans, or images, teams end up doing repetitive work just to make the data usable. That slows operations, creates errors, and blocks automation."
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
               <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#0c1724_0%,#12324a_100%)] p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                     What breaks first
                  </p>
                  <h3 className="mt-5 max-w-[16ch] text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                     Document-heavy workflows become bottlenecks long before the
                     business is ready.
                  </h3>
                  <p className="mt-6 text-[17px] leading-8 text-slate-200">
                     Finance, compliance, operations, and support teams all hit
                     the same wall: too many files, too little structure, and
                     too much manual review to keep up.
                  </p>
               </div>

               <div className="grid gap-4 sm:grid-cols-2">
                  {problemPoints.map((item) => {
                     const Icon = item.icon;

                     return (
                        <article
                           key={item.title}
                           className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                           <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#eef5f8] text-[#12324a]">
                              <Icon className="h-5 w-5" />
                           </div>
                           <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-slate-950">
                              {item.title}
                           </h3>
                           <p className="mt-4 text-[16px] leading-7 text-slate-600">
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
