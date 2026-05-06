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
         className="relative overflow-hidden bg-slate-950 text-white">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.5),transparent_70%)]" />
         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
         
         <div className="relative w-full overflow-hidden pb-16 md:pb-20">
            <div className="absolute inset-0 opacity-20 invert mix-blend-overlay">
               <WinGrid />
            </div>
            <div className="relative z-20 mx-auto theme-container">
               <div className="mx-auto mt-[118px] max-w-4xl rounded-[32px] border border-white/10 bg-slate-900/50 px-6 py-10 text-center shadow-2xl backdrop-blur-xl md:mt-[212px] md:px-10 md:py-12">
                  <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">
                     {currentPage}
                  </div>
                  <h1 className="mt-5 w-full text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                     {pageTitle}
                  </h1>
                  <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400">
                     <Link
                        href="/"
                        className="rounded-full px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors">
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
                           stroke="#06b6d4"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                     <Link
                        href={to}
                        className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 text-cyan-300">
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
