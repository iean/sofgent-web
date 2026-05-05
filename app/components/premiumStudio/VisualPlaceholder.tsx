import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ProcessPipelineIllustration from "./illustrations/ProcessPipelineIllustration";

type VisualPlaceholderProps = {
   label: string;
   description: string;
   tone?: "light" | "dark";
   className?: string;
   image?: {
      src: string;
      alt: string;
   };
   imagePriority?: boolean;
   illustration?: "process-pipeline";
};

export default function VisualPlaceholder({
   label,
   description,
   tone = "light",
   className,
   image,
   imagePriority = false,
   illustration,
}: VisualPlaceholderProps) {
   const lightClasses =
      "border-slate-300/90 bg-[linear-gradient(180deg,#f8fbfd_0%,#edf3f8_100%)] text-slate-500";
   const darkClasses =
      "border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] text-slate-300";

   if (illustration === "process-pipeline") {
      return (
         <figure
            className={twMerge(
               "relative w-full overflow-hidden rounded-[28px] border border-slate-200/90 bg-[#0f172a] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]",
               tone === "dark" ? "ring-1 ring-white/10" : "",
               className
            )}>
            <ProcessPipelineIllustration className="h-auto w-full" />
            <figcaption className="sr-only">
               {label}. {description}
            </figcaption>
         </figure>
      );
   }

   if (image) {
      return (
         <figure
            className={twMerge(
               "relative min-h-[240px] w-full overflow-hidden rounded-[28px] border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]",
               tone === "dark"
                  ? "border-white/15 ring-1 ring-white/10"
                  : "border-slate-200/90 bg-slate-100",
               className
            )}>
            <Image
               src={image.src}
               alt={image.alt}
               width={1600}
               height={900}
               priority={imagePriority}
               className="h-auto w-full object-cover object-center"
               sizes="(max-width: 1280px) 100vw, 960px"
            />
            <figcaption className="sr-only">
               {label}. {description}
            </figcaption>
         </figure>
      );
   }

   return (
      <div
         className={twMerge(
            "rounded-[28px] border border-dashed p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
            tone === "dark" ? darkClasses : lightClasses,
            className
         )}>
         <p className="text-[11px] font-semibold uppercase tracking-[0.28em]">
            Visual Placeholder
         </p>
         <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em]">
            {label}
         </p>
         <p className="mx-auto mt-4 max-w-md text-sm leading-7">{description}</p>
      </div>
   );
}
