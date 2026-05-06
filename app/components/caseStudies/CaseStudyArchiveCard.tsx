import Image from "next/image";
import Link from "next/link";
import type { CaseStudyView } from "@/lib/sanity/content";

export default function CaseStudyArchiveCard({
   study,
   index,
}: {
   study: CaseStudyView;
   index: number;
}) {
   const studyNumber = `${index + 1}`.padStart(2, "0");
   const topMetrics = study.metrics?.slice(0, 3) ?? [];

   return (
      <Link
         href={`/case-studies/${study.slug}`}
         className="group block rounded-[2.5rem] border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
         <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="relative bg-slate-100 min-h-[280px]">
               <Image
                  src={study.heroImage.src}
                  alt={study.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
               />
            </div>

            <div className="p-8 md:p-10 flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                     Case {studyNumber}
                  </span>
                  <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                     {study.industry}
                  </span>
               </div>

               <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {study.title}
               </h2>

               <p className="text-base text-slate-600 leading-relaxed mb-8 line-clamp-3">
                  {study.summary}
               </p>

               {topMetrics.length > 0 ? (
                  <dl className="grid grid-cols-3 gap-4 mb-8">
                     {topMetrics.map((metric, idx) => (
                        <div key={`${metric.label}-${idx}`}>
                           <dt className="sr-only">{metric.label}</dt>
                           <dd className="text-xl font-bold tracking-tight text-slate-900">
                              {metric.value}
                           </dd>
                           <p className="text-[11px] font-semibold text-slate-500 mt-1 line-clamp-2">
                              {metric.label}
                           </p>
                        </div>
                     ))}
                  </dl>
               ) : null}

               <div className="mt-auto inline-flex items-center text-sm font-bold text-primary">
                  Read the case study
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                     aria-hidden="true">
                     <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     <path d="M8.66699 4L12.667 8L8.66699 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
            </div>
         </div>
      </Link>
   );
}
