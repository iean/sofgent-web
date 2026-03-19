import { twMerge } from "tailwind-merge";

type VisualPlaceholderProps = {
   label: string;
   description: string;
   tone?: "light" | "dark";
   className?: string;
};

export default function VisualPlaceholder({
   label,
   description,
   tone = "light",
   className,
}: VisualPlaceholderProps) {
   const lightClasses =
      "border-slate-300/90 bg-[linear-gradient(180deg,#f8fbfd_0%,#edf3f8_100%)] text-slate-500";
   const darkClasses =
      "border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] text-slate-300";

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
