import Image from "next/image";
import ProcessPipelineIllustration from "@/app/components/premiumStudio/illustrations/ProcessPipelineIllustration";
import type { CaseStudyView } from "@/lib/sanity/content";

export default function CaseStudyArchitecture({
   study,
}: {
   study: CaseStudyView;
}) {
   if (!study.architectureImage && !study.architectureSvg) return null;

   return (
      <section className="bg-white py-20 md:py-24 border-b border-slate-200">
         <div className="theme-container">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-4">
               Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 max-w-3xl">
               How the system fits together.
            </h2>

            <figure className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
               {study.architectureImage ? (
                  <Image
                     src={study.architectureImage.src}
                     alt={study.architectureImage.alt}
                     width={1600}
                     height={900}
                     sizes="(max-width: 1024px) 100vw, 1100px"
                     className="h-auto w-full object-cover"
                  />
               ) : (
                  <ProcessPipelineIllustration className="h-auto w-full" />
               )}
               {study.architectureImage?.caption ? (
                  <figcaption className="border-t border-slate-200 bg-white px-6 py-4 text-sm text-slate-500">
                     {study.architectureImage.caption}
                  </figcaption>
               ) : null}
            </figure>
         </div>
      </section>
   );
}
