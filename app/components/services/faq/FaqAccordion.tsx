"use client";

import { useState } from "react";
import type { SharedFaqItem } from "@/lib/content/types";

export default function FaqAccordion({
  items,
}: {
  items: SharedFaqItem[];
}) {
  const [activeFaq, setActiveFaq] = useState<number | null>(
    items.length > 0 ? 0 : null,
  );

  const toggleFAQ = (index: number) => {
    setActiveFaq((current) => (current === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
      {items.map((faq, index) => (
        <div
          onClick={() => toggleFAQ(index)}
          key={`${faq.section}-${faq.order}-${faq.question}`}
          className="py-2"
        >
          <h2>
            <button className="flex items-center justify-between w-full text-left font-semibold py-2">
              <span>{faq.question}</span>
              <svg
                className="fill-brand shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    activeFaq === index && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    activeFaq === index && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
          </h2>
          <div
            role="region"
            className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
              activeFaq === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-3">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
