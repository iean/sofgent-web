"use client";

import { useState } from "react";

interface FaqItem {
   _id: string;
   question: string;
   answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <div className="space-y-3">
         {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
               <div
                  key={item._id}
                  className="rounded-[24px] border border-[#e7e8e9] bg-white px-6 py-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)]"
               >
                  <button
                     type="button"
                     onClick={() => setActiveIndex(isActive ? -1 : index)}
                     className="flex w-full items-center justify-between gap-6 text-left"
                  >
                     <span className="text-base font-semibold text-main-black md:text-lg">
                        {item.question}
                     </span>
                     <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3f6fb] text-brand">
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className={`transition-transform duration-200 ${isActive ? "rotate-45" : ""}`}
                        >
                           <path
                              d="M8 3V13M3 8H13"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                           />
                        </svg>
                     </span>
                  </button>
                  <div
                     className={`grid overflow-hidden transition-all duration-300 ${
                        isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                     }`}
                  >
                     <div className="overflow-hidden">
                        <p className="max-w-3xl text-sm leading-7 text-paragraph md:text-base">
                           {item.answer}
                        </p>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
