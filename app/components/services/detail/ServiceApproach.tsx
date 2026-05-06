import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceApproach({ service }: { service: ServiceView }) {
   if (!service.approach || service.approach.steps.length === 0) return null;
   const { eyebrow, title, steps } = service.approach;

   return (
      <section className="bg-slate-950 text-white py-20 md:py-24 relative overflow-hidden" id="approach">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_55%)] pointer-events-none" />

         <div className="theme-container relative z-10">
            <div className="max-w-3xl">
               <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400 mb-4">
                  {eyebrow ?? "Our Approach"}
               </p>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {title}
               </h2>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
               {steps.map((step, idx) => (
                  <li
                     key={`${step.step}-${idx}`}
                     className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                     <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-400 mb-3">
                        {step.step}
                     </p>
                     <h3 className="text-lg font-bold mb-3 leading-tight">
                        {step.title}
                     </h3>
                     <p className="text-sm text-slate-300 leading-relaxed">
                        {step.body}
                     </p>
                  </li>
               ))}
            </ol>
         </div>
      </section>
   );
}
