import { CheckCircle2 } from "lucide-react";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceDeliverables({
   service,
}: {
   service: ServiceView;
}) {
   if (!service.deliverables || service.deliverables.length === 0) return null;

   return (
      <section className="bg-white py-20 md:py-24 border-b border-slate-100">
         <div className="theme-container">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
               <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
                     Deliverables
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                     What ships at the end of the engagement.
                  </h2>
                  <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">
                     Every engagement closes with a working production system,
                     documentation, and a handover so your team owns it after
                     we step out.
                  </p>
               </div>
               <ul className="grid gap-4 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                     <li
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-base font-medium text-slate-700 leading-snug">
                           {item}
                        </span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}
