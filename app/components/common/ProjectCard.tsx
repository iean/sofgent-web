import Link from "next/link";
import type { ProjectFieldsType } from "@/app/data/projects/types";
import VisualPlaceholder from "@/app/components/premiumStudio/VisualPlaceholder";

export default function ProjectCard({
   project,
   index,
}: {
   project: ProjectFieldsType;
   index: number;
}) {
   const projectNumber = `${index + 1}`.padStart(2, "0");
   const capabilityPreview = project.capabilities.slice(0, 3);

   return (
      <Link
         href={`/projects/${project.slug}`}
         className="group block h-full">
         <article className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(50,109,109,0.15)]">
            <div className="relative overflow-hidden px-8 pb-8 pt-8 bg-slate-50 border-b border-slate-100">
               <div className="relative z-10 flex items-start justify-between gap-5 mb-10">
                  <div>
                     <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest mb-4">
                        {project.category}
                     </div>
                     <p className="text-sm font-medium text-slate-500">
                        {project.publish_date}
                     </p>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                        Case
                     </p>
                     <p className="text-2xl font-bold tracking-tight text-slate-900">
                        {projectNumber}
                     </p>
                  </div>
               </div>

               <h2 className="relative z-10 text-3xl font-bold tracking-tight text-slate-900 mb-4 line-clamp-2">
                  {project.title}
               </h2>

               <p className="relative z-10 text-base leading-relaxed text-slate-600 mb-8 line-clamp-3">
                  {project.summary}
               </p>

               <div className="relative z-10">
                  <VisualPlaceholder
                     label={project.visualLabel || "[IMAGE: case study system preview]"}
                     description={project.description}
                     className="min-h-[200px] border-slate-200 bg-white shadow-sm rounded-[1.5rem]"
                  />
               </div>
            </div>

            <div className="flex flex-1 flex-col p-8 bg-white">
               <div className="flex flex-wrap gap-2 mb-6">
                  {capabilityPreview.map((capability) => (
                     <span
                        key={capability}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {capability}
                     </span>
                  ))}
               </div>

               {project.systemAngle ? (
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 mb-6">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        System Angle
                     </p>
                     <p className="text-sm leading-relaxed text-slate-700">
                        {project.systemAngle}
                     </p>
                  </div>
               ) : null}

               <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                     Product Case Study
                  </div>
                  <div className="inline-flex items-center text-sm font-bold text-primary transition-colors">
                     View build breakdown
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8.66699 4L12.667 8L8.66699 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
               </div>
            </div>
         </article>
      </Link>
   );
}
