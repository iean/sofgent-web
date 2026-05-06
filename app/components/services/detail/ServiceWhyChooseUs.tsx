import { ShieldCheck } from "lucide-react";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceWhyChooseUs({
   service,
}: {
   service: ServiceView;
}) {
   if (!service.whyChooseUs || service.whyChooseUs.length === 0) return null;

   return (
      <section className="bg-slate-50 py-20 md:py-24 border-b border-slate-200">
         <div className="theme-container">
            <div className="rounded-[3rem] border border-slate-200 bg-white p-10 md:p-14 shadow-sm relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.06),transparent_55%)] pointer-events-none" />

               <div className="grid gap-12 relative z-10 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                     <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
                        Why SofGent
                     </p>
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Built for teams that need real systems, not demos.
                     </h2>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2">
                     {service.whyChooseUs.map((pillar) => (
                        <div key={pillar.title}>
                           <ShieldCheck
                              className="w-9 h-9 text-primary mb-4"
                              aria-hidden="true"
                           />
                           <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight">
                              {pillar.title}
                           </h3>
                           <p className="text-base text-slate-600 leading-relaxed">
                              {pillar.body}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
