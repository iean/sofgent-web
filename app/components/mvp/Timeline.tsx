"use client";
import { timelineData } from "@/app/content/mvp";

export default function Timeline() {
  return (
    <div className="w-full">
      <div className="mx-auto theme-container">
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between relative">
              {/* Connection Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand via-brand/50 to-brand">
                <div className="absolute -top-1 left-0 w-full h-3 bg-gradient-to-r from-brand/20 via-brand/10 to-transparent"></div>
              </div>

              {timelineData.map((item, index) => (
                <div key={index} className="flex-1 relative z-10">
                  <div className="flex flex-col items-center">
                    {/* Timeline Node */}
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-brand flex items-center justify-center shadow-lg mb-4">
                      <div className="text-2xl">{index + 1}</div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full max-w-[200px] rounded-[20px] border border-[#e7e8e9] bg-white p-4 hover:shadow-lg transition-shadow">
                      <p className="text-xs font-semibold text-brand mb-1">{item.week}</p>
                      <h3 className="text-16 font-semibold text-main-black mb-2">{item.title}</h3>
                      <p className="text-sm text-paragraph">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-semibold shrink-0">
                    {index + 1}
                  </div>
                  {index < timelineData.length - 1 && (
                    <div className="w-0.5 h-16 bg-brand/30 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 rounded-[20px] border border-[#e7e8e9] bg-white p-4">
                  <p className="text-xs font-semibold text-brand mb-1">{item.week}</p>
                  <h3 className="text-16 font-semibold text-main-black mb-2">{item.title}</h3>
                  <p className="text-sm text-paragraph">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
