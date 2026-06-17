import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import { getProjectBySlug, getProjectSlugs } from "@/lib/sanity/content";
import Image from "next/image";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
   return getPageMeta(`/projects/${params.slug}`);
}

export async function generateStaticParams() {
   const slugs = await getProjectSlugs();
   return slugs.map((slug) => ({ slug }));
}

async function ProjectDetails({ params }: { params: { slug: string } }) {
   const project = await getProjectBySlug(params.slug);

   if (!project) {
      notFound();
   }

   return (
      <section>
         <BreadCrumb
            pageTitle={project.title}
            currentPage="Projects"
            to="/projects"
         />
         <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6">
            {/* Project Overview */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Project Overview</h2>
                  {project.previewLink ? (
                     <Button
                        btnText="Live Preview"
                        external={true}
                        href={project.previewLink}
                     />
                  ) : null}
               </div>
               <p className="text-gray-600 leading-relaxed">
                  {project.description}
               </p>
            </div>

            {project.category === "case-study" ? (
               <div className="grid gap-8 mb-12 md:grid-cols-2">
                  <div className="bg-white rounded-xl shadow-sm p-8">
                     <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                     <p className="text-gray-600 leading-relaxed">
                        {project.challenge || project.overview}
                     </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-8">
                     <h3 className="text-xl font-semibold mb-4">Solution</h3>
                     <p className="text-gray-600 leading-relaxed">
                        {project.solution || project.description}
                     </p>
                  </div>
                  {project.architectureHighlight ? (
                     <div className="bg-white rounded-xl shadow-sm p-8 md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Architecture Highlight</h3>
                        <p className="text-gray-600 leading-relaxed">
                           {project.architectureHighlight}
                        </p>
                     </div>
                  ) : null}
                  {project.outcomes && project.outcomes.length > 0 ? (
                     <div className="bg-white rounded-xl shadow-sm p-8 md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Outcomes</h3>
                        <div className="flex flex-wrap gap-3">
                           {project.outcomes.map((outcome) => (
                              <span
                                 key={outcome}
                                 className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900"
                              >
                                 {outcome}
                              </span>
                           ))}
                        </div>
                     </div>
                  ) : null}
               </div>
            ) : null}

            {/* Project Images */}
            <div className="space-y-12">
               {project.screenshots?.map(
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
