import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
   eyebrow: string;
   title: string;
   description: string;
   align?: "left" | "center";
   invert?: boolean;
   icon?: LucideIcon;
};

export default function SectionHeading({
   eyebrow,
   title,
   description,
   align = "left",
   invert = false,
   icon: Icon,
}: SectionHeadingProps) {
   const isCentered = align === "center";

   return (
      <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
         <p
            className={`flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] ${
               isCentered ? "justify-center" : ""
            } ${invert ? "text-cyan-200" : "text-primary"}`}>
            {Icon ? (
               <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                     invert
                        ? "bg-cyan-400/15 text-cyan-200"
                        : "bg-primary/10 text-primary"
                  }`}>
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
               </span>
            ) : null}
            <span>{eyebrow}</span>
         </p>
         <h2
            className={`mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl ${
               invert ? "text-white" : "text-slate-950"
            }`}>
            {title}
         </h2>
         <p
            className={`mt-5 text-[17px] leading-8 ${
               invert ? "text-slate-300" : "text-slate-600"
            }`}>
            {description}
         </p>
      </div>
   );
}
