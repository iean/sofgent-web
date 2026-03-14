import { CtaNoSSR } from "@/app/page";
import readLocalFile from "@/app/utils/readLocalFile";
import type { ProjectFieldsType } from "@/app/data/projects/types";
import ProjectCard from "../common/ProjectCard";
export default async function ProjectList() {
   const projects = (await readLocalFile(
      "/app/data/projects/projects.json"
   )) as ProjectFieldsType[];

   return (
      <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#f5f8fb_0%,#eef3f8_55%,#f8fbfd_100%)] py-16 md:py-24">
         <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#67e8f9]/20 blur-3xl" />
         <div className="absolute right-[-80px] top-0 h-96 w-96 rounded-full bg-[#a78bfa]/16 blur-3xl" />
         <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.06)_50%,rgba(15,23,42,0)_100%)]" />

         <div className="relative mx-auto w-full theme-container">
            <div className="relative mb-10 overflow-hidden rounded-[34px] border border-slate-200 bg-[#08111f] p-8 shadow-[0_30px_100px_rgba(8,17,31,0.18)] md:mb-14 md:p-10">
               <div className="absolute hidden md:block md:right-0 md:top-0 md:h-full md:w-[42%] md:bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.22)_0%,rgba(8,17,31,0)_55%)]" />
               <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                     <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        AI Product Engineering Studio
                     </div>
                     <h2 className="mt-5 max-w-4xl text-34 font-semibold text-white md:text-48 md:leading-[1.05]">
                        Flagship platforms built for enterprise operations, AI workflows, and scalable software infrastructure.
                     </h2>
                  </div>

                  <p className="max-w-2xl text-[16px] leading-8 text-slate-300">
                     SofGent does not compete on brochure websites. We design
                     and build AI-powered software platforms spanning knowledge
                     systems, fintech infrastructure, workflow automation,
                     developer tooling, and multi-tenant SaaS foundations.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
               {projects.map((project: ProjectFieldsType, index: number) => (
                  <ProjectCard
                     key={project.slug}
                     project={project}
                     index={index}
                  />
               ))}
            </div>
         </div>

         <div className="relative mt-20 md:mt-24">
            <CtaNoSSR />
         </div>
      </section>
   );
}
