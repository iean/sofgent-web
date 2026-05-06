import { CheckCircle2, Building2 } from "lucide-react";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceTrustBar({ service }: { service: ServiceView }) {
   const hasOutcomes = service.outcomes && service.outcomes.length > 0;
   const hasIndustries = service.industries && service.industries.length > 0;
   if (!hasOutcomes && !hasIndustries) return null;

   return (
      <section className="bg-slate-50 border-b border-slate-200 py-10 md:py-12">
         <div className="theme-container">
            <div className="grid gap-6 lg:grid-cols-2">
               {hasOutcomes ? (
                  <div className="flex flex-wrap items-center gap-3">
                     <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500 mr-2">
                        Outcomes
                     </p>
                     {service.outcomes.map((item) => (
                        <span
                           key={item}
                           className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                           <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                           {item}
                        </span>
                     ))}
                  </div>
               ) : null}
               {hasIndustries ? (
                  <div className="flex flex-wrap items-center gap-3">
                     <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500 mr-2">
                        Industries
                     </p>
                     {service.industries.map((item) => (
                        <span
                           key={item}
                           className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                           <Building2 className="w-4 h-4 text-cyan-600" aria-hidden="true" />
                           {item}
                        </span>
                     ))}
                  </div>
               ) : null}
            </div>
         </div>
      </section>
   );
}
