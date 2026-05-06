import readLocalFile from "@/app/utils/readLocalFile";
import type { ProjectFieldsType } from "@/app/data/projects/types";
import ProjectCard from "../common/ProjectCard";
import dynamic from "next/dynamic";
import Button from "../common/Button";
import { CALENDLY_URL } from "@/lib/constants";

const CtaNoSSR = dynamic(() => import("@/app/components/home/cta"), {
   ssr: false,
});
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
                        Product Portfolio
                     </div>
                     <h2 className="mt-5 max-w-4xl text-4xl font-semibold text-white md:text-5xl md:leading-[1.05]">
                        A portfolio of AI systems, SaaS platforms, and workflow
                        software built to solve real business bottlenecks.
                     </h2>
                  </div>

                  <p className="max-w-2xl text-[16px] leading-8 text-slate-300">
                     These are not brochure projects. They are production-minded
                     product builds designed to improve operations,
                     decision-making, and commercial execution.
                  </p>
               </div>
               <div className="mt-8 flex flex-wrap gap-4">
                  <Button btnText="Book a Strategy Call" href={CALENDLY_URL} external={true} />
                  <Button
                     btnText="Discuss Your Product"
                     href="/contact"
                     className="border border-white/10 bg-white/5 text-white shadow-none hover:bg-white/10"
                  />
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
