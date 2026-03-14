import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import readLocalFile from "@/app/utils/readLocalFile";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import type { ProjectFieldsType } from "@/app/data/projects/types";
import { notFound } from "next/navigation";

export function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Metadata {
   return getPageMeta(`/projects/${params.slug}`);
}

async function ProjectDetails({ params }: { params: { slug: string } }) {
   const slug = params.slug;
   const projects = (await readLocalFile(
      "/app/data/projects/projects.json"
   )) as ProjectFieldsType[];
   const project = projects.find(
      (item: ProjectFieldsType) => item.slug === slug
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
                     <div className="rounded-[24px] border border-white/60 bg-white/80 p-6 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                           Positioning
                        </p>
                        <p className="mt-3 text-lg font-medium leading-8 text-slate-800">
                           {project.summary}
                        </p>
                     </div>

                     {project.impact ? (
                        <div className="rounded-[24px] border border-white/60 bg-[#08111f] p-6 text-white shadow-[0_20px_60px_rgba(8,17,31,0.18)]">
                           <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/80">
                              Impact
                           </p>
                           <p className="mt-3 text-lg leading-8 text-slate-100">
                              {project.impact}
                           </p>
                        </div>
                     ) : (
                        <div className="rounded-[24px] border border-white/60 bg-white/80 p-6 backdrop-blur-sm">
                           <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                              Why It Matters
                           </p>
                           <p className="mt-3 text-lg leading-8 text-slate-700">
                              {project.whyItMatters}
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
               <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                  <div className="flex items-center justify-between gap-4">
                     <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                           Core Capabilities
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                           What this platform enables
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
                              Capability {`${index + 1}`.padStart(2, "0")}
                           </p>
                           <p className="mt-3 text-lg font-medium leading-7 text-slate-800">
                              {capability}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-8">
                  {project.technologies && project.technologies.length > 0 ? (
                     <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                           Technology Stack
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                           {project.technologies.map((technology) => (
                              <span
                                 key={technology}
                                 className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                                 {technology}
                              </span>
                           ))}
                        </div>
                     </div>
                  ) : null}

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
                        Studio View
                     </p>
                     <p className="mt-4 text-lg leading-8 text-slate-100">
                        {project.whyItMatters || project.summary}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProjectDetails;
