"use client";
import workProcess from "@assets/images/home/Process-amico.svg";
import Image from "next/image";
import ProcessCard from "./ProcessCard";
import SectionTag from "../../common/SectionTag";

const processList = [
   {
      serial: "01",
      title: "Full SaaS Development",
      description:
         "From initial MVPs to scalable production, we design and deploy secure, cloud-based solutions with end-to-end payment integrations to meet any business need.",
   },
   {
      serial: "02",
      title: "Advanced AI Solutions",
      description:
         "Integrating AI models for transcribing, translating, and data analysis, we specialize in transforming unstructured data like audio, video, PDFs, and text files into actionable insights.",
   },
   {
      serial: "03",
      title: "Mastery in Integrations",
      description:
         "With extensive experience in systems like Jira, Zoho, and Stripe, we connect the dots across platforms, creating unified workflows that streamline your operations.",
   },
];
export default function Expertise() {
   return (
      <section id="working-process">
         <div className="working-process-section-wrapper w-full xl:pb-[130px] pb-[60px]">
            <div className="mx-auto theme-container">
               <div className="w-full grid-cols-12 xl:grid">
                  <div className="col-span-5">
                     <div className="title-area">
                        <SectionTag tag="Our Expertise"/>
                        <h2 className="md:text-48 mt-6 text-34 font-semibold text-main-black mb-[50px]">
                           Our Expertise in Software Development
                        </h2>
                        <div
                           id="progress-wrapper"
                           className="grid grid-cols-1 gap-5 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                           {processList.map((process, index) => (
                              <ProcessCard
                                 key={index}
                                 title={process.title}
                                 description={process.description}
                                 serial={process.serial}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="col-span-7">
                     <div className="relative flex justify-center w-full h-full xl:justify-end">
                        <div className="right-0 h-full xl:absolute">
                           <div className="sticky top-[155px]">
                              <div id="progressThumbHeight">
                                 <Image
                                    width={500}
                                    height={500}
                                    src={workProcess}
                                    alt="Work Process Image"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
