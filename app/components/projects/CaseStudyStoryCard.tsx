import Button from "@/app/components/common/Button";
import VisualPlaceholder from "@/app/components/premiumStudio/VisualPlaceholder";
import type { ProjectFieldsType } from "@/app/data/projects/types";

export default function CaseStudyStoryCard({
   project,
   index,
}: {
   project: ProjectFieldsType;
   index: number;
}) {
   const caseNumber = `${index + 1}`.padStart(2, "0");

   return (
      <article className="rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:p-10">
         <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <div>
               <div className="flex flex-wrap items-center justify-between gap-4">
                  <div
                     className="inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em]"
                     style={{
                        color: project.theme.primary,
                        backgroundColor: `${project.theme.secondary}55`,
                     }}>
                     {project.category}
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                     Case {caseNumber}
                  </span>
               </div>

               <h2 className="mt-6 max-w-[18ch] text-34 font-semibold tracking-[-0.04em] text-slate-950 md:text-48">
                  {project.title}
               </h2>
               <p className="mt-5 max-w-3xl text-[18px] leading-8 text-slate-600">
                  {project.summary}
               </p>

               <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                     btnText={project.ctaLabel || "Discuss this type of system"}
                     href={project.ctaHref || "/contact"}
                  />
                  <Button
                     btnText="View Build Breakdown"
                     href={`/projects/${project.slug}`}
                     className="border border-slate-200 bg-white text-slate-900 shadow-none hover:bg-slate-50"
                  />
               </div>

               <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                     <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        Business Problem
                     </p>
                     <p className="mt-3 text-[16px] leading-7 text-slate-700">
                        {project.problem}
                     </p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                     <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        What SofGent Built
                     </p>
                     <p className="mt-3 text-[16px] leading-7 text-slate-700">
                        {project.solution}
                     </p>
                  </div>
               </div>

               <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                     Core Features
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                     {project.capabilities.map((capability) => (
                        <span
                           key={capability}
                           className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                           {capability}
                        </span>
                     ))}
                  </div>
               </div>
            </div>

            <div className="space-y-5">
               <VisualPlaceholder
                  label={project.visualLabel || "[IMAGE: case study system view]"}
                  description={project.description}
                  className="min-h-[260px]"
               />

               <div className="rounded-[28px] border border-slate-200 bg-[#08111f] p-6 text-white shadow-[0_24px_70px_rgba(8,17,31,0.16)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                     Business Outcome
                  </p>
                  <p className="mt-4 text-[17px] leading-8 text-slate-100">
                     {project.outcome}
                  </p>
               </div>

               <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                     Tech / System Angle
                  </p>
                  <p className="mt-4 text-[16px] leading-7 text-slate-700">
                     {project.systemAngle}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                     {(project.technologies || []).map((technology) => (
                        <span
                           key={technology}
                           className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                           {technology}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
}
