import Link from "next/link";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/how-we-build-saas");
}

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const timeline = [
  { week: "Week 1 · Discover & Define", title: "One call, one scoped plan.", body: "We align on goals, constraints, and success criteria in a focused discovery session — then hand you a written scope, timeline, and fixed price to sign off on before any code is written.", tags: ["Discovery call", "Written scope", "Fixed price"] },
  { week: "Week 2 · Plan & Prototype", title: "Architecture and a clickable prototype.", body: "We design the data model, system architecture, and AI approach, then build a clickable prototype. You validate direction before a single line of production code ships.", tags: ["Architecture", "Prototype", "Client sign-off"] },
  { week: "Weeks 3–5 · Build & Iterate", title: "Working software every Friday.", body: "One-week agile sprints with real progress updates. No status theatre — you see and use working software each week, with AI layers tested under real load.", tags: ["Weekly demos", "Full test suite", "Real load testing"] },
  { week: "Week 6 · Launch & Support", title: "We own the deploy.", body: "Production deployment, monitoring, and documentation — then 30 days of post-launch support. You go live with confidence, not crossed fingers.", tags: ["Production deploy", "Monitoring", "30-day support"] },
];

const principles = [
  { t: "Fixed scope & price", d: "You know the cost and the deadline before we start. Scope changes are flagged and re-priced transparently.", i: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></> },
  { t: "Total visibility", d: "Weekly demos and a live view of progress. You never wonder where your project stands.", i: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></> },
  { t: "Production quality", d: "Tests, monitoring, and documentation are part of the build — not an afterthought or an upsell.", i: <><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z" /><path d="M9 12l2 2 4-4" /></> },
];

export default function HowWeBuildSaaSPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#0c0c0c", padding: "96px 0 88px" }}>
        <div className="absolute pointer-events-none" style={{ top: "-160px", left: "-120px", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(50,109,109,0.5) 0%, transparent 70%)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-180px", right: "-100px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)" }} />
        <div className="max-w-[1140px] mx-auto px-8 relative">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full mb-5" style={{ color: "#67e8f9", background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.18)" }}>How we build</span>
            <h1 className="font-bold tracking-[-0.045em] text-white leading-[1.0] mb-5" style={{ fontSize: "clamp(40px, 5.2vw, 64px)" }}>From idea to production in <span style={{ color: "#67e8f9" }}>four steps.</span></h1>
            <p className="text-[17px] leading-[1.65] max-w-[540px] mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>Tight sprints, daily visibility, working software every Friday. Here&apos;s exactly how a SofGent engagement runs — and why nothing about it surprises you.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#0c0c0c] bg-white px-6 py-3 rounded-[10px] hover:bg-[#f0f0f0] transition-colors">Start your project <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[820px] mx-auto px-8">
          <div className="flex items-center gap-2 mb-3"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">The process</p></div>
          <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c] mb-12" style={{ fontSize: "clamp(24px,3vw,36px)" }}>Six weeks, end to end.</h2>
          <div className="relative" style={{ paddingLeft: "36px" }}>
            <div className="absolute" style={{ left: "11px", top: "6px", bottom: "6px", width: "2px", background: "#e6e6e6" }} />
            {timeline.map((t, i) => (
              <div key={t.week} className="relative" style={{ paddingBottom: i < timeline.length - 1 ? "40px" : "0" }}>
                <div className="absolute flex items-center justify-center" style={{ left: "-36px", top: 0, width: "24px", height: "24px", borderRadius: "50%", background: "#fff", border: "2px solid #326d6d" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#326d6d" }} />
                </div>
                <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#326d6d] mb-1.5">{t.week}</div>
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{t.title}</h3>
                <p className="text-[14px] text-[#6a6a6a] leading-[1.65] max-w-[560px]">{t.body}</p>
                <div className="flex gap-1.5 flex-wrap mt-3">
                  {t.tags.map((tag) => (<span key={tag} className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}>{tag}</span>))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-[#eaeaea] bg-[#f7f7f7]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10"><div className="flex items-center justify-center gap-2 mb-2"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">What stays constant</p></div><h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>Principles, not promises.</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map((p) => (
              <div key={p.t} className="rounded-[16px] p-6 bg-white" style={{ border: "1px solid #e6e6e6" }}>
                <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center mb-4" style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p.i}</svg>
                </div>
                <h4 className="text-[16px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{p.t}</h4>
                <p className="text-[13.5px] text-[#6a6a6a] leading-[1.6]">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[900px] mx-auto px-8">
          <div className="flex items-center gap-5 rounded-[24px] p-7" style={{ background: "rgba(50,109,109,0.08)", border: "1px solid rgba(50,109,109,0.2)" }}>
            <div className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center shrink-0 text-white" style={{ background: "#326d6d" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <div>
              <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-1">The zero-critical-bug launch guarantee</h3>
              <p className="text-[14px] text-[#1a1a1a] leading-[1.6]">Every product we&apos;ve shipped went live without a single critical bug — and we back it. If a critical bug ships on launch day, we fix it free, immediately. Plus 30 days of support, included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-[24px] grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10" style={{ background: "#0c0c0c", padding: "64px 56px" }}>
            <div className="absolute pointer-events-none" style={{ top: "-100px", left: "-80px", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(50,109,109,0.4) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="font-bold tracking-[-0.035em] text-white leading-[1.08] mb-3" style={{ fontSize: "clamp(26px,3vw,38px)" }}>Ready to start<br />week one?</h2>
              <p className="text-[15px] leading-[1.65] max-w-[420px]" style={{ color: "rgba(255,255,255,0.5)" }}>Book a Call and we&apos;ll turn your idea into a scoped, priced plan.</p>
            </div>
            <div className="relative flex flex-col gap-2 shrink-0">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-[#0c0c0c] bg-white px-8 py-3.5 rounded-[10px] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap">Book a Call <ArrowRight /></Link>
              <Link href="/projects" className="inline-flex items-center justify-center text-[13.5px] font-medium px-8 py-3.5 rounded-[10px] transition-colors whitespace-nowrap" style={{ color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.14)" }}>See the results</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
