import { CheckCircle2, Building2 } from "lucide-react";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceTrustBar({ service }: { service: ServiceView }) {
   const hasOutcomes = service.outcomes && service.outcomes.length > 0;
   const hasIndustries = service.industries && service.industries.length > 0;
   const fitTitles = service.idealFit?.slice(0, 2) ?? [];
   if (!hasOutcomes && !hasIndustries && fitTitles.length === 0) return null;

   return (
      <section className="bg-slate-50 border-b border-slate-200 py-10 md:py-12">
         <div className="theme-container">
            <div className="grid gap-4 lg:grid-cols-3">
               {hasOutcomes ? (
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                     <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                        Outcomes
                     </p>
                     <div className="mt-4 flex flex-wrap gap-3">
                        {service.outcomes.map((item) => (
                           <span
                              key={item}
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
               ) : null}
               {hasIndustries ? (
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                     <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                        Industries
                     </p>
                     <div className="mt-4 flex flex-wrap gap-3">
                        {service.industries.map((item) => (
                           <span
                              key={item}
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                              <Building2 className="w-4 h-4 text-cyan-600" aria-hidden="true" />
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
               ) : null}
               {fitTitles.length > 0 ? (
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                     <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                        Best for
                     </p>
                     <div className="mt-4 space-y-3">
                        {fitTitles.map((item) => (
                           <div
                              key={item.title}
                              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                              {item.title}
                           </div>
                        ))}
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
      </section>
   );
}
