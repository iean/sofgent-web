import { AlertTriangle } from "lucide-react";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceProblem({ service }: { service: ServiceView }) {
   if (!service.problem || service.problem.points.length === 0) return null;
   const { eyebrow, title, points } = service.problem;

   return (
      <section className="bg-white py-20 md:py-24" id="problem">
         <div className="theme-container">
            <div className="max-w-3xl">
               <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
                  {eyebrow ?? "The Problem"}
               </p>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  {title}
               </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
               {points.map((point) => (
                  <article
                     key={point.title}
                     className="rounded-[2rem] border border-slate-100 bg-slate-50 p-7 md:p-8 shadow-sm">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                           <AlertTriangle className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                           <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                              {point.title}
                           </h3>
                           <p className="mt-3 text-base text-slate-600 leading-relaxed">
                              {point.body}
                           </p>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}
