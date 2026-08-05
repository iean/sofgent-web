"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const steps = [
  { id: 1, label: "Scope" },
  { id: 2, label: "Design" },
  { id: 3, label: "Build" },
  { id: 4, label: "Launch" },
  { id: 5, label: "Scale" },
];

const stackChips = [
  { label: "Next.js", color: "#67e8f9" },
  { label: "Tailwind CSS", color: "#38bdf8" },
  { label: "Claude AI", color: "#d2a8ff" },
  { label: "OpenAI", color: "#74aa9c" },
  { label: "PostgreSQL", color: "#f59e0b" },
  { label: "Vercel", color: "#ff6154" },
  { label: "Python", color: "#4cd4d4" },
];

const cards = [
  {
    step: 1,
    n: "01",
    title: "Discovery call + brief",
    desc: "Define problem, scope, timeline, and success metrics in 48h.",
    metric: "Fixed scope, fixed price",
  },
  {
    step: 2,
    n: "02",
    title: "UI/UX + architecture",
    desc: "Wireframes, component library, data model. Approved before code.",
    metric: "Client sign-off required",
  },
  {
    step: 3,
    n: "03",
    title: "Sprint-based delivery",
    desc: "Daily updates, weekly demos. AI layers tested under real load.",
    metric: "Full test suite",
  },
  {
    step: 4,
    n: "04",
    title: "Deploy + handover",
    desc: "Production deploy, monitoring, docs, and 30-day support included.",
    metric: "Zero launch-day bugs",
  },
];

export default function ServicesHero() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden text-center"
      style={{ background: "#0c0c0c", padding: "88px 0 0" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glows */}
      <div className="absolute pointer-events-none" style={{ top: "-120px", left: "-160px", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(50,109,109,0.35) 0%, transparent 65%)" }} />
      <div className="absolute pointer-events-none" style={{ top: "-80px", right: "-100px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(103,232,249,0.07) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-[1140px] mx-auto px-8">
        {/* Breadcrumb */}
        <p className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold tracking-[0.1em] uppercase" style={{ color: "rgba(255,255,255,0.58)" }}>
          <span style={{ color: "#67e8f9", opacity: 0.9 }}>AI Product Studio</span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          Services
        </p>

        {/* Headline */}
        <h1 className="font-black tracking-[-0.055em] leading-[0.96] text-white mb-5" style={{ fontSize: "clamp(42px, 5.5vw, 76px)" }}>
          AI products that go live<br />
          in <span style={{ color: "#67e8f9" }}>4–6 weeks.</span>
        </h1>

        {/* Sub */}
        <p className="text-[17px] leading-[1.65] max-w-[520px] mx-auto mb-9" style={{ color: "rgba(255,255,255,0.45)" }}>
          From document automation to full SaaS MVPs — we scope, build, test, and ship production-ready AI. No fluff. No agency delays.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-2.5 mb-14">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 text-[14px] font-bold bg-white text-[#0c0c0c] px-7 py-3.5 rounded-[9px] hover:bg-gray-100 transition-all hover:-translate-y-0.5"
          >
            Explore our services
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v9M2.5 7.5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-[9px] transition-colors"
            style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            Book a Free Call
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>

        {/* Step pills */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setActive(step.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-250 cursor-pointer"
                style={{
                  background: active === step.id ? "rgba(50,109,109,0.25)" : "rgba(255,255,255,0.06)",
                  border: `1px solid ${active === step.id ? "rgba(50,109,109,0.5)" : "rgba(255,255,255,0.10)"}`,
                  color: active === step.id ? "#67e8f9" : "rgba(255,255,255,0.5)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: active === step.id ? "#67e8f9" : "rgba(255,255,255,0.2)" }} />
                {step.label}
              </button>
              {i < steps.length - 1 && <span className="text-white/12 text-sm px-2">→</span>}
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap pb-14">
          <span className="text-[11px] font-bold tracking-[0.08em] uppercase mr-2" style={{ color: "rgba(255,255,255,0.2)" }}>Built with</span>
          {stackChips.map((chip) => (
            <div key={chip.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: chip.color }} />
              {chip.label}
            </div>
          ))}
        </div>

        {/* Workflow cards panel */}
        <div
          className="relative mx-auto rounded-t-2xl overflow-hidden p-6 pb-0"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderBottom: "none", maxWidth: "900px" }}
        >
          {/* top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: "60%", height: "1px", background: "linear-gradient(to right, transparent, rgba(50,109,109,0.5), transparent)" }} />

          {/* Window bar */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-white/12" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/7" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/7" />
            <span className="ml-auto text-[11px] text-white/20 font-mono">sofgent-build-pipeline.ts</span>
          </div>

          {/* 4 cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {cards.map((card) => (
              <div
                key={card.n}
                className="rounded-[10px] p-4 transition-colors duration-250"
                style={{
                  background: active === card.step ? "rgba(50,109,109,0.12)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${active === card.step ? "rgba(50,109,109,0.3)" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                <div className="text-[9px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: active === card.step ? "#67e8f9" : "rgba(255,255,255,0.2)" }}>
                  {card.n} · {["Scope", "Design", "Build", "Launch"][card.step - 1]}
                </div>
                <div className="text-[13px] font-bold mb-1" style={{ color: active === card.step ? "#fff" : "rgba(255,255,255,0.7)" }}>
                  {card.title}
                </div>
                <div className="text-[11.5px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.55)" }}>{card.desc}</div>
                <div
                  className="inline-flex items-center gap-1 mt-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}
                >
                  <span>✓</span> {card.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
