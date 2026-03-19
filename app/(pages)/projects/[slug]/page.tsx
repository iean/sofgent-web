import type { ProjectFieldsType } from "@/app/data/projects/types";
import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import VisualPlaceholder from "@/app/components/premiumStudio/VisualPlaceholder";
import getPageMeta from "@/app/utils/getPageMeta";
import readLocalFile from "@/app/utils/readLocalFile";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Metadata {
   return getPageMeta(`/projects/${params.slug}`);
}

async function ProjectDetails({ params }: { params: { slug: string } }) {
   const projects = (await readLocalFile(
      "/app/data/projects/projects.json"
   )) as ProjectFieldsType[];
   const project = projects.find(
      (item: ProjectFieldsType) => item.slug === params.slug
   );

   if (!project) {
      notFound();
   }

   return (
      <section className="bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)]">
         <BreadCrumb
            pageTitle={project.title}
            currentPage="Projects"
            to="/projects"
         />

         <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <div
               className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.08)]"
               style={{
                  background: `radial-gradient(circle at top right, ${project.theme.secondary}66 0%, transparent 30%), linear-gradient(180deg, #ffffff 0%, ${project.theme.surface} 100%)`,
               }}>
               <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full border border-white/70" />
               <div className="absolute right-10 top-10 h-24 w-24 rounded-full border border-white/80" />

               <div className="relative grid gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-14">
                  <div>
                     <div
                        className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]"
                        style={{
                           color: project.theme.primary,
                           backgroundColor: `${project.theme.secondary}55`,
                        }}>
                        {project.category}
                     </div>

                     <h1 className="mt-6 max-w-[16ch] text-34 font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 md:text-[56px] md:leading-[1.02]">
                        {project.title}
                     </h1>

                     <p className="mt-6 max-w-3xl text-[17px] leading-8 text-slate-600">
                        {project.description}
                     </p>

                     <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button
                           btnText={project.ctaLabel || "Start a project"}
                           href={project.ctaHref || "/contact"}
                           className="mt-0"
                        />
                        <span className="text-sm uppercase tracking-[0.24em] text-slate-400">
                           {project.publish_date}
                        </span>
                     </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                     <VisualPlaceholder
                        label={project.visualLabel || "[IMAGE: case study system view]"}
                        description={project.description}
                        className="border-white/60 bg-white/80 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                     />
                     <div className="rounded-[24px] border border-white/60 bg-white/80 p-6 backdrop-blur-sm">
                         <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                            Problem
                        </p>
                        <p className="mt-3 text-lg font-medium leading-8 text-slate-800">
                           {project.problem}
                        </p>
                     </div>

                     <div className="rounded-[24px] border border-white/60 bg-[#08111f] p-6 text-white shadow-[0_20px_60px_rgba(8,17,31,0.18)]">
                        <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/80">
                           Outcome
                        </p>
                        <p className="mt-3 text-lg leading-8 text-slate-100">
                           {project.outcome}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
               <div className="space-y-8">
                  <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                     <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        What SofGent Built
                     </p>
                     <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                        The system we designed
                     </h2>
                     <p className="mt-5 text-[17px] leading-8 text-slate-700">
                        {project.solution}
                     </p>
                  </div>

                  <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                     <div className="flex items-center justify-between gap-4">
                        <div>
                           <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                              Product Modules
                           </p>
                           <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                              What the system includes
                           </h2>
                        </div>
                        <div
                           className="hidden h-12 w-12 rounded-2xl md:block"
                           style={{
                              background: `linear-gradient(135deg, ${project.theme.primary} 0%, ${project.theme.secondary} 100%)`,
                           }}
                        />
                     </div>

                     <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {project.capabilities.map((capability, index) => (
                           <div
                              key={capability}
                              className="rounded-[22px] border border-slate-200 bg-slate-50 p-5">
                              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                                 Module {`${index + 1}`.padStart(2, "0")}
                              </p>
                              <p className="mt-3 text-lg font-medium leading-7 text-slate-800">
                                 {capability}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                     <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Tech / System Angle
                     </p>
                     <p className="mt-4 text-[17px] leading-8 text-slate-700">
                        {project.systemAngle || project.summary}
                     </p>
                  </div>

                  <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                     <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Tech Used
                     </p>
                     <div className="mt-5 flex flex-wrap gap-3">
                        {project.technologies?.map((technology) => (
                           <span
                              key={technology}
                              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                              {technology}
                           </span>
                        ))}
                     </div>
                  </div>

                  {project.industries && project.industries.length > 0 ? (
                     <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                           Best-Fit Industries
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                           {project.industries.map((industry) => (
                              <span
                                 key={industry}
                                 className="rounded-full px-4 py-2 text-sm font-medium"
                                 style={{
                                    color: project.theme.primary,
                                    backgroundColor: `${project.theme.secondary}40`,
                                 }}>
                                 {industry}
                              </span>
                           ))}
                        </div>
                     </div>
                  ) : null}

                  <div className="rounded-[30px] border border-slate-200 bg-[#08111f] p-7 text-white shadow-[0_24px_70px_rgba(8,17,31,0.18)] md:p-8">
                     <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                        Snapshot
                     </p>
                     <p className="mt-4 text-lg leading-8 text-slate-100">
                        {project.summary}
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-10 rounded-[34px] border border-slate-200 bg-[linear-gradient(135deg,#08111f_0%,#163042_100%)] px-7 py-10 text-white shadow-[0_30px_100px_rgba(8,17,31,0.18)] md:px-10">
               <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
                  <div className="max-w-3xl">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        Ready To Build
                     </p>
                     <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                        Want a system like this inside your business?
                     </h2>
                     <p className="mt-5 text-[18px] leading-8 text-slate-200">
                        We can map the workflow, architecture, and delivery plan
                        for your product, internal tool, or AI system before the
                        build starts.
                     </p>
                     <div className="mt-8 flex flex-wrap gap-4">
                        <Button btnText="Discuss Your Product" href="/contact" />
                        <Button
                           btnText="Plan Your AI Workflow"
                           href="/contact"
                           className="border border-white/10 bg-white/5 text-white shadow-none hover:bg-white/10"
                        />
                     </div>
                  </div>
                  <VisualPlaceholder
                     label="[IMAGE: delivery workshop board]"
                     description="Placeholder for the architecture sketch, process map, and launch milestones used in a SofGent discovery workshop."
                     tone="dark"
                     className="min-h-[240px]"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProjectDetails;
