import type { CaseStudyView } from "@/lib/sanity/content";

export default function CaseStudyMetrics({ study }: { study: CaseStudyView }) {
   if (!study.metrics || study.metrics.length === 0) return null;

   return (
      <section className="bg-slate-50 py-16 md:py-20 border-b border-slate-200">
         <div className="theme-container">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-8">
               Outcome
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               {study.metrics.map((metric, idx) => (
                  <div
                     key={`${metric.label}-${idx}`}
                     className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                     <p className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        {metric.value}
                     </p>
                     <p className="mt-3 text-sm font-semibold text-slate-700">
                        {metric.label}
                     </p>
                     {metric.hint ? (
                        <p className="mt-1 text-xs text-slate-500">{metric.hint}</p>
                     ) : null}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
