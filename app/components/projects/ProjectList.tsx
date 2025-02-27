import { CtaNoSSR } from "@/app/page";
import readLocalFile from "@/app/utils/readLocalFile";
import ProjectCard from "../common/ProjectCard";

interface ProjectFieldsType {
   title: string;
   thumbnail: string;
   slug: string;
   overview: string;
   publish_date: string;
   screenshots: { title: string; image: string }[];
}
export default async function ProjectList() {
   const projects = await readLocalFile("/app/data/projects/projects.json");
   return (
      <section className="w-full py-16 md:py-[130px]">
         <div className="w-full mx-auto theme-container">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-[30px] gap-y-[80px]">
               {projects.map((project: ProjectFieldsType) => (
                  <ProjectCard key={project.slug} project={project} />
               ))}
            </div>
         </div>
         <div className="mt-32">
            <CtaNoSSR />
         </div>
      </section>
   );
}
