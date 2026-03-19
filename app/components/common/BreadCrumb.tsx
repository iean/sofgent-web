'use client'
import WinGrid from "@/app/utils/WinGrid";
import Link from "next/link";

const BreadCrumb: React.FC<{
   pageTitle: string;
   currentPage: string;
   to: string;
}> = ({ pageTitle, currentPage, to }) => {
   return (
      <section
         id="h1-breadcrumb"
         className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)]">
         <div className="relative w-full overflow-hidden pb-16 md:pb-20">
            <div className="absolute inset-0 opacity-60">
               <WinGrid />
            </div>
            <div className="relative z-20 mx-auto theme-container">
               <div className="mx-auto mt-[118px] max-w-4xl rounded-[32px] border border-white/70 bg-white/80 px-6 py-10 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:mt-[212px] md:px-10 md:py-12">
                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                     {currentPage}
                  </div>
                  <h1 className="mt-5 w-full text-34 font-semibold tracking-[-0.04em] text-slate-900 sm:text-48">
                     {pageTitle}
                  </h1>
                  <div className="mt-5 flex items-center justify-center gap-3 text-sm text-slate-500">
                     <Link
                        href="/"
                        className="rounded-full px-3 py-1.5 hover:bg-slate-100 hover:text-slate-900">
                        Home
                     </Link>
                     <svg
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M1 1L5 6L1 11"
                           stroke="#326d6d"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                     <Link
                        href={to}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">
                        {currentPage}
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default BreadCrumb;
