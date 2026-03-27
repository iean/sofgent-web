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
      <article className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-12 lg:p-16">
         <div className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
            <div>
               <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="inline-flex items-center rounded-full bg-brand/10 text-brand px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                     {project.category}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
                     Case {caseNumber}
                  </span>
               </div>

               <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                  {project.title}
               </h2>
               <p className="text-lg leading-relaxed text-slate-600 mb-10 max-w-2xl">
                  {project.summary}
               </p>

               <div className="flex flex-wrap gap-4 mb-12">
                  <Button
                     btnText={project.ctaLabel || "Discuss this type of system"}
                     href={project.ctaHref || "/contact"}
                     variant="primary"
                  />
                  <Button
                     btnText="View Build Breakdown"
                     href={`/projects/${project.slug}`}
                     variant="outline"
                  />
               </div>

               <div className="grid gap-6 md:grid-cols-2 mb-10">
                  <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Business Problem
                     </p>
                     <p className="text-base leading-relaxed text-slate-700">
                        {project.problem}
                     </p>
                  </div>
                  <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        What SofGent Built
                     </p>
                     <p className="text-base leading-relaxed text-slate-700">
                        {project.solution}
                     </p>
                  </div>
               </div>

               <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                     Core Features
                  </p>
                  <div className="flex flex-wrap gap-3">
                     {project.capabilities.map((capability) => (
                        <span
                           key={capability}
                           className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                           {capability}
                        </span>
                     ))}
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-8 h-full">
               <VisualPlaceholder
                  label={project.visualLabel || "[IMAGE: case study system view]"}
                  description={project.description}
                  className="min-h-[300px] flex-grow rounded-[2rem] shadow-sm"
               />

               <div className="rounded-[2rem] bg-slate-900 p-8 md:p-10 text-white shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
                     Business Outcome
                  </p>
                  <p className="text-xl leading-relaxed text-slate-100 font-medium">
                     {project.outcome}
                  </p>
               </div>

               <div className="rounded-[2rem] border border-brand/20 bg-brand/5 p-8 md:p-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">
                     Tech / System Angle
                  </p>
                  <p className="text-base leading-relaxed text-slate-800 mb-6 font-medium">
                     {project.systemAngle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {(project.technologies || []).map((technology) => (
                        <span
                           key={technology}
                           className="rounded-xl border border-brand/20 bg-white px-3 py-1.5 text-xs font-bold text-brand shadow-sm">
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
