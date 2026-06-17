import Link from "next/link";

interface ProofItem {
   _id: string;
   title: string;
   slug: string;
   description: string;
   category: "project" | "case-study";
   publishDate?: string;
}

export default function ProofGrid({
   title,
   items,
}: {
   title: string;
   items: ProofItem[];
}) {
   return (
      <div className="space-y-6">
         <div>
            <p className="inline-flex rounded-full border border-[#dbe6f6] bg-white px-4 py-2 text-sm font-medium text-brand">
               {title}
            </p>
         </div>
         <div className="grid gap-5">
            {items.map((item) => (
               <Link
                  key={item._id}
                  href={`/projects/${item.slug}`}
                  className="group rounded-[28px] border border-[#e7e8e9] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
               >
                  <div className="flex items-center justify-between gap-4">
                     <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                        {item.category === "case-study" ? "Case Study" : "Project"}
                     </span>
                     {item.publishDate ? (
                        <span className="text-xs text-paragraph">{item.publishDate}</span>
                     ) : null}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-main-black transition-colors duration-200 group-hover:text-brand">
                     {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-paragraph md:text-base">
                     {item.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-main-black transition-colors duration-200 group-hover:text-brand">
                     View details
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M3.33301 8H12.6663M12.6663 8L7.99967 3.33337M12.6663 8L7.99967 12.6667"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   );
}
