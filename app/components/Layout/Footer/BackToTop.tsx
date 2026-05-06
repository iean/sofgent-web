"use client";

export default function BackToTop() {
   const handleClick = () => {
      if (typeof window === "undefined") return;
      const reduceMotion = window.matchMedia(
         "(prefers-reduced-motion: reduce)"
      ).matches;
      window.scrollTo({
         top: 0,
         behavior: reduceMotion ? "auto" : "smooth",
      });
   };

   return (
      <button
         type="button"
         onClick={handleClick}
         aria-label="Back to top"
         className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all">
         <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
               d="M8 12V4M4.66699 7.33333L8.00033 4L11.3337 7.33333"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </button>
   );
}
