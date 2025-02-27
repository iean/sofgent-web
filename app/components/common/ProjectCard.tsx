import cardShape from "@assets/images/about/about-card-shape.webp";
import Image from "next/image";
import Link from "next/link";

interface ProjectFieldsType {
   title: string;
   thumbnail: string;
   slug: string;
   overview: string;
   publish_date: string;
   screenshots: { title: string; image: string }[];
}
export default function ProjectCard({
   project,
}: {
   project: ProjectFieldsType;
}) {
   return (
      <div data-aos="fade-left" className="col-span-4">
         <div className="pb-[92px] pr-[30px] w-full bg-white relative">
            <Image
               width={200}
               height={200}
               src={project.thumbnail}
               alt="Project Thumbnail"
               className="w-full max-w-[380px] rounded-lg"
            />
            <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-brand hover:shadow-brand hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
               <Image
                  width={100}
                  height={200}
                  src={cardShape}
                  alt="Card Shape"
                  className="absolute right-2 top-bottom-moving"
               />
               <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                  {project.publish_date}
               </h1>
               <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                  {project.title}
               </h2>
               <Link href={`/projects/${project.slug}`}>
                  <div className="flex items-center gap-2 mt-4 group">
                     <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                        Read More
                     </span>
                     <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                           stroke="#ffff"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
}
