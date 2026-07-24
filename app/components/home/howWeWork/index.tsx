"use client";
import { useState } from "react";

const weeks = [
  {
    id: 1,
    label: "Week 1",
    title: "Map the workflow",
    description:
      "We audit the operational bottleneck, the tools involved, and the decisions the software needs to support. A written scope doc and fixed price are agreed before any code is written.",
    file: "week-1-discovery.ts",
    code: `<span style="color:#79c0ff">import</span> { <span style="color:#4cd4d4">SofGent</span> } <span style="color:#79c0ff">from</span> <span style="color:#a5d6ff">'@sofgent/core'</span>

<span style="color:#79c0ff">const</span> project = <span style="color:#d2a8ff">define</span>({
  client:   <span style="color:#a5d6ff">'&lt;your company&gt;'</span>,
  problem:  <span style="color:#a5d6ff">'Manual document review taking 6 months'</span>,
  scope:    [<span style="color:#a5d6ff">'OCR pipeline'</span>, <span style="color:#a5d6ff">'Classification'</span>, <span style="color:#a5d6ff">'Auto-routing'</span>],
  timeline: <span style="color:#79c0ff">18</span>, <span style="color:#4a4a4a">// days</span>
  price:    <span style="color:#a5d6ff">'fixed'</span>,
})

<span style="color:#4a4a4a">// → Scope doc delivered in 48h</span>
<span style="color:#4a4a4a">// → Client signed off ✓</span>`,
  },
  {
    id: 2,
    label: "Week 2",
    title: "Design the system",
    description:
      "Architecture, data flow, AI touchpoints, and delivery scope are defined and signed off before build speed takes over. You see and approve every decision before code starts.",
    file: "week-2-design.ts",
    code: `<span style="color:#79c0ff">const</span> blueprint = <span style="color:#d2a8ff">design</span>({
  ui:           <span style="color:#d2a8ff">figma</span>(<span style="color:#a5d6ff">'wireframes + component library'</span>),
  dataModel:    <span style="color:#d2a8ff">schema</span>({ tables: <span style="color:#79c0ff">12</span>, relations: <span style="color:#79c0ff">18</span> }),
  aiLayer:      <span style="color:#d2a8ff">llm</span>({ model: <span style="color:#a5d6ff">'claude-opus-4-8'</span>, fallback: <span style="color:#a5d6ff">'human-review'</span> }),
  apiContracts: <span style="color:#d2a8ff">openapi</span>(<span style="color:#a5d6ff">'v3'</span>),
})

<span style="color:#4a4a4a">// → Client approved ✓</span>
<span style="color:#4a4a4a">// → Ready to build</span>`,
  },
  {
    id: 3,
    label: "Week 3",
    title: "Ship working software",
    description:
      "Weekly demos keep progress visible while we build the app, integrations, and AI workflows together. Daily standups. Every push includes tests. No surprises.",
    file: "week-3-build.ts",
    code: `<span style="color:#79c0ff">for</span> (<span style="color:#79c0ff">const</span> sprint <span style="color:#79c0ff">of</span> [<span style="color:#a5d6ff">'sprint-1'</span>, <span style="color:#a5d6ff">'sprint-2'</span>]) {
  <span style="color:#79c0ff">await</span> <span style="color:#d2a8ff">build</span>(sprint.features)
  <span style="color:#79c0ff">await</span> <span style="color:#d2a8ff">review</span>({ client: <span style="color:#79c0ff">true</span>, demo: <span style="color:#79c0ff">true</span> })
  <span style="color:#79c0ff">await</span> <span style="color:#d2a8ff">test</span>({ coverage: <span style="color:#a5d6ff">'100%'</span>, e2e: <span style="color:#79c0ff">true</span> })
}

<span style="color:#4a4a4a">// Daily standups ✓</span>
<span style="color:#4a4a4a">// Weekly client demos ✓</span>
<span style="color:#4a4a4a">// All tests passing ✓</span>`,
  },
  {
    id: 4,
    label: "Launch",
    title: "Launch with confidence",
    description:
      "QA, release readiness, monitoring, and support are built in so the system survives real usage. 30 days post-launch support included. You own everything — code, docs, and deploy pipeline.",
    file: "launch-deploy.ts",
    code: `<span style="color:#79c0ff">await</span> <span style="color:#d2a8ff">deploy</span>({
  env:        <span style="color:#a5d6ff">'production'</span>,
  provider:   <span style="color:#a5d6ff">'vercel'</span>,
  monitoring: [<span style="color:#a5d6ff">'uptime'</span>, <span style="color:#a5d6ff">'errors'</span>, <span style="color:#a5d6ff">'cost'</span>],
  support:    <span style="color:#a5d6ff">'30-days'</span>,
  ownership:  <span style="color:#a5d6ff">'full-ip-transfer'</span>,
})

<span style="color:#4a4a4a">// → Zero launch-day bugs ✓</span>
<span style="color:#4a4a4a">// → Monitoring live ✓</span>
<span style="color:#4a4a4a">// → You own the code ✓</span>`,
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState(1);
  const current = weeks.find((w) => w.id === active)!;

  return (
    <section id="how-we-work" className="py-20 xl:py-[100px] border-b border-[#e4e4e4]">
      <div className="max-w-[1140px] mx-auto px-10">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#9a9a9a] mb-3">How We Work</p>
          <h2 className="text-[28px] xl:text-[38px] font-black tracking-[-0.04em] text-[#0c0c0c] leading-[1.05] mb-4">
            Sprint-based. Client-first.<br />Ships in 4–6 weeks.
          </h2>
          <p className="text-[15px] text-[#6a6a6a] leading-[1.7] max-w-[460px]">
            Every project runs the same lean process. Scope locked, architecture approved, then sprint to launch.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid xl:grid-cols-2 gap-12 items-start">

          {/* Left: steps + tabs */}
          <div>
            {/* Week tabs */}
            <div
              className="flex gap-1 p-1 mb-8 rounded-[10px]"
              style={{ background: "#f6f6f6", border: "1px solid #e4e4e4" }}
            >
              {weeks.map((week) => (
                <button
                  key={week.id}
                  onClick={() => setActive(week.id)}
                  className="flex-1 text-[12.5px] font-semibold px-3 py-2 rounded-[7px] transition-all"
                  style={{
                    background: active === week.id ? "#fff" : "none",
                    color: active === week.id ? "#0c0c0c" : "#9a9a9a",
                    boxShadow: active === week.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  {week.label}
                </button>
              ))}
            </div>

            {/* Step cards */}
            <div className="flex flex-col gap-0">
              {weeks.map((week) => (
                <div
                  key={week.id}
                  onClick={() => setActive(week.id)}
                  className="flex items-start gap-4 py-4 border-b border-[#f0f0f0] last:border-b-0 cursor-pointer group"
                >
                  {/* Number circle */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[13px] font-bold transition-all mt-0.5"
                    style={{
                      background: active === week.id ? "rgba(50,109,109,0.10)" : "#f6f6f6",
                      border: `2px solid ${active === week.id ? "#326d6d" : "#e4e4e4"}`,
                      color: active === week.id ? "#326d6d" : "#9a9a9a",
                    }}
                  >
                    {String(week.id).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className="text-[15px] font-bold mb-1 transition-colors"
                      style={{ color: active === week.id ? "#0c0c0c" : "#6a6a6a" }}
                    >
                      {week.title}
                    </p>
                    {active === week.id && (
                      <p className="text-[13px] text-[#6a6a6a] leading-[1.65]">
                        {week.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: terminal */}
          <div>
            <div className="rounded-[14px] overflow-hidden" style={{ background: "#0f1117", border: "1px solid rgba(255,255,255,0.07)" }}>
              {/* Terminal bar */}
              <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: "#1a1d26" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[11px] text-white/30 font-mono-code">{current.file}</span>
              </div>
              {/* Code body */}
              <div className="px-5 py-5 font-mono-code text-[12px] leading-[1.85] text-white/70 min-h-[200px]">
                <div dangerouslySetInnerHTML={{ __html: current.code }} />
              </div>
            </div>

            {/* Week label badge */}
            <div className="mt-4 flex items-center gap-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold"
                style={{
                  background: "rgba(50,109,109,0.10)",
                  border: "1px solid rgba(50,109,109,0.20)",
                  color: "#326d6d",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#326d6d]" />
                {current.label} — {current.title}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
