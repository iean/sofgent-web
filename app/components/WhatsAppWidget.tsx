"use client";

import React, { useEffect, useState } from "react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8 text-white fill-current mt-0.5 ml-0.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.035,2.023C8.309,2.023,2.031,8.3,2.031,16.027c0,2.542,0.678,5.021,1.965,7.199L2.046,30l6.945-1.921c2.1,1.182,4.475,1.801,6.914,1.801l0.006,0.005c7.727,0,14.004-6.277,14.004-14.004C29.914,8.152,23.637,1.875,16.035,2.023 M16.035,27.531c-2.146,0-4.249-0.575-6.09-1.667l-0.438-0.26l-4.526,1.25l1.218-4.406l-0.285-0.453 c-1.2-1.906-1.833-4.099-1.833-6.347c0.001-6.643,5.405-12.048,12.048-12.048c6.643-0.001,12.048,5.405,12.048,12.048 C28.083,22.126,22.678,27.531,16.035,27.531 M22.65,20.301c-0.362-0.181-2.141-1.058-2.473-1.179 c-0.332-0.121-0.573-0.181-0.814,0.181c-0.241,0.362-0.935,1.179-1.146,1.42s-0.422,0.272-0.784,0.091 c-0.362-0.181-1.528-0.563-2.912-1.796c-1.077-0.96-1.804-2.145-2.015-2.507c-0.211-0.362-0.022-0.558,0.159-0.738 c0.162-0.161,0.362-0.422,0.543-0.633c0.181-0.211,0.241-0.362,0.362-0.603c0.121-0.241,0.06-0.453-0.03-0.634 c-0.09-0.181-0.814-1.96-1.116-2.684c-0.292-0.702-0.591-0.607-0.814-0.618c-0.211-0.01-0.452-0.013-0.693-0.013 c-0.241,0-0.633,0.09-0.965,0.453c-0.332,0.362-1.266,1.237-1.266,3.016s1.296,3.5,1.477,3.741c0.181,0.241,2.5,4.025,6.18,5.498 c3.68,1.472,3.68,0.985,4.343,0.925c0.663-0.06,2.141-0.875,2.443-1.72s0.302-1.569,0.211-1.72 C23.072,20.573,22.831,20.482,22.65,20.301"/>
  </svg>
);

export default function WhatsAppWidget() {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setMounted(true), 1500);
      return () => clearTimeout(timer);
   }, []);

   const whatsappUrl = "https://wa.me/8801537740365";
   const defaultMessage = encodeURIComponent("Hi, I'm interested in working with SofGent.");

   return (
      <div 
         className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-700 ease-out flex flex-col items-end gap-3 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      >
         <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 text-sm font-bold text-slate-800 origin-bottom-right transition-transform hover:scale-105 hidden sm:block">
            Chat with us 👋
         </div>
         <a
            href={`${whatsappUrl}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 md:w-[68px] md:h-[68px] rounded-[1.25rem] md:rounded-3xl bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-[1.08] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
            aria-label="Chat with us on WhatsApp"
         >
            <WhatsAppIcon />
         </a>
      </div>
   );
}
