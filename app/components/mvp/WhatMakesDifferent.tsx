"use client";
import { whatMakesDifferent } from "@/app/content/mvp";

export default function WhatMakesDifferent() {
  return (
    <div className="w-full">
      <div className="mx-auto theme-container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {whatMakesDifferent.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-main-black mb-3">{item.title}</h3>
              <p className="text-paragraph text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
