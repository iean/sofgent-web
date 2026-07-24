"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import heroImg from "@assets/images/home/hero-right-image.png";

const slides = [
  {
    src: heroImg as Parameters<typeof Image>[0]["src"],
    alt: "SofGent AI Product Studio — production-ready AI products",
    label: "AI Product Studio",
  },
  {
    src: "/images/services/software-development.webp",
    alt: "AI engineering — production-grade code and architecture",
    label: "AI Engineering",
  },
  {
    src: "/images/services/image-processing.webp",
    alt: "AI document intelligence — classification and extraction",
    label: "Document Intelligence",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 220);
  }, []);

  // Auto-advance
  useEffect(() => {
    timer.current = setTimeout(() => {
      goTo((current + 1) % slides.length);
    }, 4200);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [current, goTo]);

  const pause = () => { if (timer.current) clearTimeout(timer.current); };

  return (
    <div className="relative" onMouseEnter={pause} onMouseLeave={() => {
      timer.current = setTimeout(() => goTo((current + 1) % slides.length), 4200);
    }}>
      {/* ── Main image ── */}
      <div
        className="relative rounded-[14px] overflow-hidden"
        style={{
          border: "0.5px solid #d9e7e6",
          boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
          height: "380px",
          background: "linear-gradient(145deg, #e8f2f1 0%, #d2e7e5 55%, #bfdedb 100%)",
        }}
      >
        {/* Slides — crossfade via opacity */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: i === current ? (fading ? 0 : 1) : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              style={{ mixBlendMode: "multiply" }}
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 560px"
            />
            {/* teal duotone wash + bottom vignette for label legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(145deg, rgba(50,109,109,0.16) 0%, transparent 40%), linear-gradient(0deg, rgba(12,40,40,0.32) 0%, transparent 30%)" }}
            />
            {/* Slide label */}
            <div
              className="absolute bottom-3 left-3 text-[10px] font-semibold text-white px-2.5 py-1 rounded-full"
              style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(6px)", letterSpacing: "0.04em" }}
            >
              {slide.label}
            </div>
          </div>
        ))}

        {/* Float card — top left */}
        <div
          className="absolute z-20 flex items-center gap-2 px-3 py-2 rounded-[10px] bg-white"
          style={{ top: "-10px", left: "-14px", border: "0.5px solid #eaeaea", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
        >
          <div
            className="w-7 h-7 rounded-[7px] flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(50,109,109,0.09)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#326d6d" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-[#0c0c0c] leading-tight">4–6 weeks</div>
            <div className="text-[10px] text-[#9a9a9a]">Idea to production</div>
          </div>
        </div>

        {/* Float card — bottom right */}
        <div
          className="absolute z-20 flex items-center gap-2 px-3 py-2 rounded-[10px] bg-white"
          style={{ bottom: "-10px", right: "-14px", border: "0.5px solid #eaeaea", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
        >
          <div
            className="w-7 h-7 rounded-[7px] flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(50,109,109,0.09)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#326d6d" strokeWidth="2" strokeLinecap="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-[#0c0c0c] leading-tight">0 critical</div>
            <div className="text-[10px] text-[#9a9a9a]">Launch bugs</div>
          </div>
        </div>
      </div>

      {/* ── Dot nav + arrows ── */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-200"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "99px",
                background: i === current ? "#326d6d" : "#d8d8d8",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => goTo((current - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-[#f0f0f0]"
            style={{ border: "0.5px solid #e4e4e4", background: "#fff" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#6a6a6a" strokeWidth="1.6" strokeLinecap="round">
              <path d="M7.5 2L4 6l3.5 4" />
            </svg>
          </button>
          <button
            onClick={() => goTo((current + 1) % slides.length)}
            aria-label="Next slide"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-[#f0f0f0]"
            style={{ border: "0.5px solid #e4e4e4", background: "#fff" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#6a6a6a" strokeWidth="1.6" strokeLinecap="round">
              <path d="M4.5 2L8 6l-3.5 4" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Stack chips ── */}
      <div className="flex items-center gap-1.5 flex-wrap mt-3">
        <span className="text-[10.5px] font-medium text-[#bbb] mr-1">Built with</span>
        {["Next.js", "Claude AI", "OpenAI", "Vercel", "PostgreSQL"].map((t) => (
          <span
            key={t}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full text-[#6a6a6a]"
            style={{ background: "#f5f5f5", border: "0.5px solid #e8e8e8" }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
