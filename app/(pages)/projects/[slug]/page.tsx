import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import readLocalFile from "@/app/utils/readLocalFile";
import Image from "next/image";

interface ProjectFieldsType {
   title: string;
   thumbnail: string;
   slug: string;
   overview: string;
   publish_date: string;
   preview_link: string;
   description: string;
   screenshots: { title: string; image: string }[];
}

async function ProjectDetails({ params }: { params: { slug: string } }) {
   const slug = params.slug;
   const projects = await readLocalFile("/app/data/projects/projects.json");
   const project = projects.find(
      (item: ProjectFieldsType) => item.slug === slug
   );

   return (
      <section>
         <BreadCrumb
            pageTitle={project?.title}
            currentPage="Projects"
            to="/projects"
         />
         <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6">
            {/* Project Overview */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Project Overview</h2>
                  <Button
                     btnText="Live Preview"
                     external={true}
                     href={project?.preview_link}
                  />
               </div>
               <p className="text-gray-600 leading-relaxed">
                  {project?.description}
               </p>
            </div>

            {/* Project Images */}
            <div className="space-y-12">
               {project?.screenshots.map(
                  (item: { image: string; title: string }, index: number) => (
                     <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <Image
                           width={600}
                           height={500}
                           src={item.image}
                           alt={item.title}
                           className="w-full h-[400px] object-cover"
                        />
                        <div className="p-6">
                           <h3 className="text-xl font-semibold text-gray-900">
                              {item.title}
                           </h3>
                        </div>
                     </div>
                  )
               )}
            </div>
         </div>
      </section>
   );
}

export default ProjectDetails;
