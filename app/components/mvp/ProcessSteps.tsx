"use client";
import { processSteps } from "@/app/content/mvp";

export default function ProcessSteps() {
  return (
    <div className="w-full">
      <div className="mx-auto theme-container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                {step.timeline}
              </div>
              <h3 className="text-xl font-semibold text-main-black mb-3">{step.title}</h3>
              <p className="text-paragraph mb-4">{step.description}</p>
              <div className="pt-4 border-t border-[#e7e8e9]">
                <p className="text-sm font-semibold text-main-black mb-1">Outcome</p>
                <p className="text-paragraph text-sm">{step.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
