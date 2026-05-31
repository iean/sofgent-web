"use client";
import { comparisonData } from "@/app/content/mvp";
import { useState } from "react";

const renderValue = (value: string | boolean) => {
  if (value === true) return <span className="text-brand font-semibold">✅</span>;
  if (value === false) return <span className="text-gray-400">◻️</span>;
  if (typeof value === "string") {
    if (value === "optional" || value === "minimal" || value === "basic") {
      return <span className="text-paragraph text-sm">{value}</span>;
    }
    return <span className="text-brand font-semibold text-sm">{value}</span>;
  }
  return null;
};

export default function ComparisonTable() {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (index: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div className="w-full">
      <div className="mx-auto theme-container">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-full">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray border-b-2 border-[#e7e8e9]">
                  <th className="text-left p-4 font-semibold text-main-black sticky left-0 bg-gray z-10">
                    Feature / Deliverable
                  </th>
                  <th className="text-center p-4 font-semibold text-main-black">Basic MVP</th>
                  <th className="text-center p-4 font-semibold text-main-black bg-brand/5">
                    Standard MVP
                    <span className="block text-xs text-brand font-normal mt-1">(Most Popular)</span>
                  </th>
                  <th className="text-center p-4 font-semibold text-main-black">Premium MVP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#e7e8e9] hover:bg-gray/50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray/30"
                    }`}
                  >
                    <td className="p-4 font-medium text-main-black sticky left-0 bg-inherit z-10">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center">{renderValue(row.basic)}</td>
                    <td className="p-4 text-center bg-brand/5">{renderValue(row.standard)}</td>
                    <td className="p-4 text-center">{renderValue(row.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-[#e7e8e9] bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleRow(index)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray/50 transition-colors"
              >
                <span className="font-medium text-main-black">{row.feature}</span>
                <svg
                  className={`w-5 h-5 text-brand transition-transform ${
                    expandedRows.has(index) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedRows.has(index) && (
                <div className="p-4 pt-0 space-y-3 border-t border-[#e7e8e9]">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-paragraph">Basic MVP</span>
                    <span>{renderValue(row.basic)}</span>
                  </div>
                  <div className="flex justify-between items-center bg-brand/5 p-2 rounded">
                    <span className="text-sm text-paragraph">Standard MVP</span>
                    <span>{renderValue(row.standard)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-paragraph">Premium MVP</span>
                    <span>{renderValue(row.premium)}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
