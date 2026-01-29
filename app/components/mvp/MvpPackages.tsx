"use client";
import { mvpPackages } from "@/app/content/mvp";

const colorClasses = {
  blue: "border-blue-500 bg-blue-50",
  green: "border-brand bg-brand/5",
  yellow: "border-yellow-500 bg-yellow-50",
};

const badgeColors = {
  blue: "bg-blue-500",
  green: "bg-brand",
  yellow: "bg-yellow-500",
};

export default function MvpPackages() {
  return (
    <div className="w-full">
      <div className="mx-auto theme-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mvpPackages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-[20px] border-2 ${
                pkg.badge ? colorClasses[pkg.color as keyof typeof colorClasses] : "border-[#e7e8e9] bg-white"
              } p-6 md:p-8 hover:shadow-lg transition-shadow relative`}
            >
              {pkg.badge && (
                <div
                  className={`absolute -top-3 right-6 px-4 py-1 rounded-full text-white text-xs font-semibold ${
                    badgeColors[pkg.color as keyof typeof badgeColors]
                  }`}
                >
                  {pkg.badge}
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-24 font-semibold text-main-black mb-2">{pkg.name}</h3>
                <p className="text-paragraph text-sm mb-3">{pkg.whoFor}</p>
                <div className="inline-block px-3 py-1 bg-white/80 text-main-black text-sm font-semibold rounded-full">
                  {pkg.timeline}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-main-black mb-3">Includes:</p>
                <ul className="space-y-2">
                  {pkg.deliverables.map((item, i) => (
                    <li key={i} className="text-paragraph text-sm flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#e7e8e9]">
                <p className="text-sm font-semibold text-main-black mb-2">Use case</p>
                <p className="text-paragraph text-sm">{pkg.useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
