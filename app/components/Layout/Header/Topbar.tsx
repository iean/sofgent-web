"use client";

import { Facebook, Linkedin, Mail, Phone, Sparkles } from "lucide-react";

export default function Topbar() {
   return (
      <div className="hidden items-center justify-between rounded-[20px] border border-slate-200/80 bg-white/82 px-5 py-3 text-sm text-slate-700 shadow-[0_18px_44px_rgba(15,23,42,0.05)] backdrop-blur-xl xl:flex">
         <div className="flex min-w-0 items-center gap-3.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
               <Sparkles className="h-3.5 w-3.5 text-brand" strokeWidth={1.8} />
               Studio Note
            </span>
            <span className="truncate text-[14px] font-medium leading-6 text-slate-600">
               Architecture-first delivery for founders, CTOs, and product teams
               that need faster execution.
            </span>
         </div>

         <div className="flex items-center gap-2.5">
            <a
               href="mailto:support@sofgent.com"
               className="group inline-flex h-11 items-center gap-2.5 whitespace-nowrap rounded-[16px] border border-slate-200/90 bg-white/94 px-4 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] hover:border-slate-300 hover:text-slate-950">
               <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-500 group-hover:bg-slate-100 group-hover:text-brand">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
               </span>
               <span className="text-[13px] font-semibold tracking-[-0.01em]">
                  support@sofgent.com
               </span>
            </a>

            <a
               href="tel:+8801537740365"
               className="group inline-flex h-11 items-center gap-2.5 whitespace-nowrap rounded-[16px] border border-slate-200/90 bg-white/94 px-4 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] hover:border-slate-300 hover:text-slate-950">
               <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-500 group-hover:bg-slate-100 group-hover:text-brand">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
               </span>
               <span className="text-[13px] font-semibold tracking-[-0.01em]">
                  +880 1537 740365
               </span>
            </a>

            <ul className="ml-1 flex items-center gap-1.5 rounded-[16px] border border-slate-200/90 bg-white/94 px-2 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
               <li>
                  <a
                     href="https://www.facebook.com/people/Sofgent/61564357926545/"
                     aria-label="facebook"
                     className="inline-flex h-8 w-8 items-center justify-center rounded-[12px] text-slate-400 hover:bg-slate-50 hover:text-brand">
                     <Facebook className="h-4 w-4" strokeWidth={1.8} />
                  </a>
               </li>
               <li>
                  <a
                     href="https://www.linkedin.com/company/sofgent/"
                     aria-label="linkedin"
                     className="inline-flex h-8 w-8 items-center justify-center rounded-[12px] text-slate-400 hover:bg-slate-50 hover:text-brand">
                     <Linkedin className="h-4 w-4" strokeWidth={1.8} />
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
}
