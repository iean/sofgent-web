"use client";

import { Facebook, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { CONTACT_TO_EMAIL } from "@/lib/constants";

export default function Topbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
   const isDark = theme === "dark";

   return (
      <div className={`hidden items-center justify-between px-6 py-2.5 text-sm xl:flex w-full transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
         <div className="flex min-w-0 items-center gap-3.5">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
               isDark ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400" : "border-slate-200 bg-white text-slate-700 shadow-sm"
            }`}>
               <Sparkles className={`h-3.5 w-3.5 ${isDark ? "" : "text-primary"}`} strokeWidth={1.8} />
               Studio Note
            </span>
            <span className={`truncate text-[14px] font-medium leading-6 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
               Architecture-first delivery for founders, CTOs, and product teams
               that need faster execution.
            </span>
         </div>

         <div className="flex items-center gap-2.5">
            <a
               href={`mailto:${CONTACT_TO_EMAIL}`}
               className={`group inline-flex h-11 items-center gap-2.5 whitespace-nowrap rounded-[16px] border px-4 shadow-sm transition-all duration-300 ${
                  isDark ? "border-white/5 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white" : "border-slate-200/90 bg-white/90 text-slate-700 hover:border-slate-300 hover:text-slate-950"
               }`}>
               <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 ${
                  isDark ? "bg-slate-800 text-slate-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-primary"
               }`}>
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
               </span>
               <span className="text-[13px] font-semibold tracking-[-0.01em]">
                  {CONTACT_TO_EMAIL}
               </span>
            </a>

            <a
               href="tel:+8801537740365"
               className={`group inline-flex h-11 items-center gap-2.5 whitespace-nowrap rounded-[16px] border px-4 shadow-sm transition-all duration-300 ${
                  isDark ? "border-white/5 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white" : "border-slate-200/90 bg-white/90 text-slate-700 hover:border-slate-300 hover:text-slate-950"
               }`}>
               <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 ${
                  isDark ? "bg-slate-800 text-slate-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-primary"
               }`}>
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
               </span>
               <span className="text-[13px] font-semibold tracking-[-0.01em]">
                  +880 1537 740365
               </span>
            </a>

            <ul className={`ml-1 flex items-center gap-1.5 rounded-[16px] border px-2 py-2 shadow-sm transition-colors duration-300 ${
               isDark ? "border-white/5 bg-white/5" : "border-slate-200/90 bg-white/90"
            }`}>
               <li>
                  <a
                     href="https://www.facebook.com/people/Sofgent/61564357926545/"
                     aria-label="facebook"
                     className={`inline-flex h-8 w-8 items-center justify-center rounded-[12px] transition-colors duration-300 ${
                        isDark ? "text-slate-400 hover:bg-slate-800 hover:text-cyan-400" : "text-slate-500 hover:bg-slate-100 hover:text-primary"
                     }`}>
                     <Facebook className="h-4 w-4" strokeWidth={1.8} />
                  </a>
               </li>
               <li>
                  <a
                     href="https://www.linkedin.com/company/sofgent/"
                     aria-label="linkedin"
                     className={`inline-flex h-8 w-8 items-center justify-center rounded-[12px] transition-colors duration-300 ${
                        isDark ? "text-slate-400 hover:bg-slate-800 hover:text-cyan-400" : "text-slate-500 hover:bg-slate-100 hover:text-primary"
                     }`}>
                     <Linkedin className="h-4 w-4" strokeWidth={1.8} />
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
}
