'use client'
import WinGrid from "@/app/utils/WinGrid";
import Link from "next/link";

const BreadCrumb: React.FC<{
   pageTitle: string;
   currentPage: string;
   to: string;
}> = ({ pageTitle, currentPage, to }) => {
   return (
      <section id="h1-breadcrumb">
         <div className="relative w-full pb-16 overflow-hidden h1-breadcrumb h-fit bg-main-gray md:pb-24">
            <WinGrid />
            <div className="relative z-20 mx-auto theme-container h-fit w-fit">
               <div className="mt-[120px] md:mt-[272px] w-fit mx-auto relative z-10">
                  <h1 className="w-full text-[#2F393E] font-semibold text-center text-34 sm:text-48">
                     {pageTitle}
                  </h1>
                  <div className="flex items-center justify-center gap-5 mt-4">
                     <Link
                        href="/"
                        className="relative leading-5 transition-all duration-300 home-two-nav-item text-18 font-inter text-paragraph hover:text-brand">
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
                        className="relative leading-5 transition-all duration-300 home-two-nav-item text-18 font-inter text-paragraph hover:text-brand">
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
