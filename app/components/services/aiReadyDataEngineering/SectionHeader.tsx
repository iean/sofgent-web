interface SectionHeaderProps {
   eyebrow: string;
   title: string;
   description: string;
   align?: "left" | "center";
   theme?: "light" | "dark";
}

export default function SectionHeader({
   eyebrow,
   title,
   description,
   align = "left",
   theme = "light",
}: SectionHeaderProps) {
   const isCenter = align === "center";
   const isDark = theme === "dark";

   return (
      <div
         className={`max-w-3xl ${
            isCenter ? "mx-auto text-center" : ""
         }`}>
         <p
            className={`text-sm font-semibold uppercase tracking-[0.28em] ${
               isDark ? "text-cyan-200" : "text-primary"
            }`}>
            {eyebrow}
         </p>
         <h2
            className={`mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl ${
               isDark ? "text-white" : "text-slate-950"
            }`}>
            {title}
         </h2>
         <p
            className={`mt-5 text-[17px] leading-8 ${
               isDark ? "text-slate-300" : "text-slate-600"
            }`}>
            {description}
         </p>
      </div>
   );
}
