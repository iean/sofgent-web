type SectionHeadingProps = {
   eyebrow: string;
   title: string;
   description: string;
   align?: "left" | "center";
   invert?: boolean;
};

export default function SectionHeading({
   eyebrow,
   title,
   description,
   align = "left",
   invert = false,
}: SectionHeadingProps) {
   const isCentered = align === "center";

   return (
      <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
         <p
            className={`text-sm font-semibold uppercase tracking-[0.28em] ${
               invert ? "text-cyan-200" : "text-brand"
            }`}>
            {eyebrow}
         </p>
         <h2
            className={`mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48 ${
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
