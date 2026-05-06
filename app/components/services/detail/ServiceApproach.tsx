import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceApproach({ service }: { service: ServiceView }) {
   if (!service.approach || service.approach.steps.length === 0) return null;
   const { eyebrow, title, steps } = service.approach;

   return (
      <section className="bg-slate-50 py-20 md:py-24 relative overflow-hidden" id="approach">
         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none" />

         <div className="theme-container relative z-10">
            <div className="max-w-3xl">
               <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
                  {eyebrow ?? "Our Approach"}
               </p>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  {title}
               </h2>
               <p className="mt-5 text-base leading-8 text-slate-600">
                  The process is designed to reduce delivery risk while keeping momentum visible. You see working progress, not status reports detached from the build.
               </p>
            </div>

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
               {steps.map((step, idx) => (
                  <li
                     key={`${step.step}-${idx}`}
                     className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                     <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary mb-3">
                        {step.step}
                     </p>
                     <h3 className="text-lg font-bold mb-3 leading-tight text-slate-900">
                        {step.title}
                     </h3>
                     <p className="text-sm text-slate-600 leading-relaxed">
                        {step.body}
                     </p>
                  </li>
               ))}
            </ol>
         </div>
      </section>
   );
}
