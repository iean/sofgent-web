import { ChevronRight } from "lucide-react";
import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceUseCases({ service }: { service: ServiceView }) {
   if (!service.useCases || service.useCases.length === 0) return null;

   return (
      <section className="bg-slate-50 py-20 md:py-24 border-b border-slate-200">
         <div className="theme-container">
            <div className="max-w-3xl">
               <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
                  Use Cases
               </p>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  Where this service creates real leverage.
               </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
               {service.useCases.map((useCase) => (
                  <article
                     key={useCase.title}
                     className="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-7 md:p-8 shadow-sm">
                     <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                        {useCase.title}
                     </h3>
                     <p className="mt-3 text-base text-slate-600 leading-relaxed flex-grow">
                        {useCase.body}
                     </p>
                     {useCase.outcome ? (
                        <div className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800">
                           <ChevronRight className="w-4 h-4" aria-hidden="true" />
                           {useCase.outcome}
                        </div>
                     ) : null}
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}
