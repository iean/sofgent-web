import { CtaNoSSR } from "@/app/page";
import { getProjectCollections } from "@/lib/sanity/content";
import ProjectCard from "../common/ProjectCard";

export default async function ProjectList() {
   const { caseStudies, projects } = await getProjectCollections();
   return (
      <section className="w-full py-16 md:py-[130px]">
         <div className="w-full mx-auto theme-container">
            <div className="space-y-16">
               <div>
                  <div className="mb-8">
                     <p className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block bg-white">
                        Case Studies
                     </p>
                     <h2 className="mt-5 text-34 md:text-48 font-semibold text-main-black">
                        Delivery stories shaped around architecture and outcomes
                     </h2>
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[30px] gap-y-[80px]">
                     {caseStudies.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                     ))}
                  </div>
               </div>

               <div>
                  <div className="mb-8">
                     <p className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block bg-white">
                        Projects
                     </p>
                     <h2 className="mt-5 text-34 md:text-48 font-semibold text-main-black">
                        Product and platform builds shipped for real clients
                     </h2>
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[30px] gap-y-[80px]">
                     {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-32">
            <CtaNoSSR />
         </div>
      </section>
   );
}
