import Image from "next/image";
import type { CaseStudyView } from "@/lib/sanity/content";

export default function CaseStudyHero({ study }: { study: CaseStudyView }) {
   const meta = [
      study.client ? { label: "Client", value: study.client } : null,
      { label: "Industry", value: study.industry },
      study.duration ? { label: "Duration", value: study.duration } : null,
   ].filter(Boolean) as Array<{ label: string; value: string }>;

   return (
      <section className="relative overflow-hidden bg-slate-950 text-white">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.5),transparent_70%)]" />
         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

         <div className="theme-container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
               <div>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-400">
                     Case Study
                  </p>
                  <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                     {study.title}
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                     {study.summary}
                  </p>

                  {meta.length > 0 ? (
                     <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 max-w-2xl">
                        {meta.map((item) => (
                           <div key={item.label}>
                              <dt className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-400/80">
                                 {item.label}
                              </dt>
                              <dd className="mt-2 text-base font-semibold text-white">
                                 {item.value}
                              </dd>
                           </div>
                        ))}
                     </dl>
                  ) : null}
               </div>

               <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
                  <Image
                     src={study.heroImage.src}
                     alt={study.heroImage.alt}
                     width={1600}
                     height={900}
                     priority
                     sizes="(max-width: 1024px) 100vw, 720px"
                     className="h-auto w-full rounded-[1.5rem] object-cover"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
