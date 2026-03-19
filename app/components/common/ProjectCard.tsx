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
         className="group block h-full"
         data-aos="fade-up">
         <article className="flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_32px_90px_rgba(15,23,42,0.14)]">
            <div
               className="relative overflow-hidden px-6 pb-6 pt-6 md:px-7"
               style={{
                  background: `radial-gradient(circle at top right, ${project.theme.secondary} 0%, transparent 38%), linear-gradient(135deg, ${project.theme.surface} 0%, #ffffff 82%)`,
               }}>
               <div className="absolute right-5 top-5 h-24 w-24 rounded-full border border-white/60 opacity-60" />
               <div className="absolute right-10 top-10 h-12 w-12 rounded-full border border-white/60 opacity-80" />
               <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

               <div className="relative z-10 flex items-start justify-between gap-5">
                  <div>
                     <div
                        className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em]"
                        style={{
                           color: project.theme.primary,
                           backgroundColor: `${project.theme.secondary}55`,
                        }}>
                        {project.category}
                     </div>
                     <p className="mt-4 text-sm text-slate-500">
                        {project.publish_date}
                     </p>
                  </div>
                  <div className="text-right">
                     <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                        Case
                     </p>
                     <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                        {projectNumber}
                     </p>
                  </div>
               </div>

               <h2 className="relative z-10 mt-10 max-w-[18ch] text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950">
                  {project.title}
               </h2>

               <p className="relative z-10 mt-4 max-w-[56ch] text-[15px] leading-7 text-slate-600">
                  {project.summary}
               </p>

               <div className="relative z-10 mt-6">
                  <VisualPlaceholder
                     label={project.visualLabel || "[IMAGE: case study system preview]"}
                     description={project.description}
                     className="min-h-[170px] border-slate-200/90 bg-white/70 p-5 text-left shadow-none"
                  />
               </div>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-6 pt-5 md:px-7 md:pb-7">
               <div className="flex flex-wrap gap-2">
                  {capabilityPreview.map((capability) => (
                     <span
                        key={capability}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[12px] font-medium text-slate-600">
                        {capability}
                     </span>
                  ))}
               </div>

               {project.systemAngle ? (
                  <div className="mt-6 rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                     <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                        System Angle
                     </p>
                     <p className="mt-3 text-[14px] leading-6 text-slate-700">
                        {project.systemAngle}
                     </p>
                  </div>
               ) : null}

               <div className="mt-6 flex flex-1 items-end justify-between gap-4 border-t border-slate-200 pt-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                     Product Case Study
                  </div>
                  <div
                     className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                     style={{ color: project.theme.primary }}>
                     View build breakdown
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:translate-x-1">
                        <path
                           d="M3.33301 8H12.6663"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                        />
                        <path
                           d="M8.66699 4L12.667 8L8.66699 12"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>
               </div>
            </div>
         </article>
      </Link>
   );
}
