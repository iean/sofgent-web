import Link from "next/link";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/about");
}

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const values = [
  { t: "Ship, don't stall", d: "Working software beats perfect plans. We move in weeks and put real product in front of real users.", i: <path d="M13 2 3 14h9l-1 8 10-12h-9z" /> },
  { t: "Production or nothing", d: "We don't ship demos. Everything is built to run in production — tested, monitored, documented.", i: <><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z" /><path d="M9 12l2 2 4-4" /></> },
  { t: "Radical transparency", d: "Fixed scope, fixed price, weekly demos. You always know exactly where the project stands.", i: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 2" /></> },
  { t: "Outcomes over output", d: "We measure success in hours saved and revenue unlocked — not lines of code or hours billed.", i: <path d="M20 6 9 17l-5-5" /> },
  { t: "Your data, your IP", d: "Everything is delivered in your cloud and your repos. No lock-in, no hostage code.", i: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
  { t: "Senior, lean teams", d: "You work directly with the people building your product. No layers, no account managers.", i: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></> },
];

const stats = [
  { n: "4–6", l: "Weeks to ship" },
  { n: "0", l: "Critical launch bugs" },
  { n: "100%", l: "Client-owned code" },
  { n: "UK + US", l: "Clients served" },
];

const team = [
  { name: "Founder & Lead Engineer", role: "AI architecture & delivery" },
  { name: "Product Engineer", role: "Full-stack & integrations" },
  { name: "AI / ML Engineer", role: "Models & document AI" },
  { name: "Product Designer", role: "UX & interface design" },
];

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#0c0c0c", padding: "96px 0 88px" }}>
        <div className="absolute pointer-events-none" style={{ top: "-160px", left: "-120px", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(50,109,109,0.5) 0%, transparent 70%)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-180px", right: "-100px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)" }} />
        <div className="max-w-[1140px] mx-auto px-8 relative">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full mb-5" style={{ color: "#67e8f9", background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.18)" }}>About SofGent</span>
            <h1 className="font-bold tracking-[-0.045em] text-white leading-[1.0] mb-5" style={{ fontSize: "clamp(40px, 5.2vw, 64px)" }}>We turn AI ideas into <span style={{ color: "#67e8f9" }}>shipped products.</span></h1>
            <p className="text-[17px] leading-[1.65] max-w-[540px]" style={{ color: "rgba(255,255,255,0.6)" }}>SofGent is an AI product studio. We exist for one reason: to get production-grade AI into the real world fast — for founders, CTOs, and operations teams who are tired of pilots that never launch.</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[760px] mx-auto px-8">
          <div className="flex items-center gap-2 mb-3"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">Our story</p></div>
          <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c] leading-[1.1] mb-5" style={{ fontSize: "clamp(24px,3vw,34px)" }}>Most AI never makes it out of the demo.</h2>
          <p className="text-[17px] text-[#1a1a1a] leading-[1.7] mb-4">We kept seeing the same pattern: ambitious AI projects that looked great in a slide deck and then stalled for months in &quot;pilot.&quot; Teams burned budget on proofs-of-concept that never touched a real user.</p>
          <p className="text-[17px] text-[#6a6a6a] leading-[1.7]">SofGent was built to break that cycle. We combine senior engineering, AI-native tooling, and a tight, fixed-scope process to ship real, production-grade products in weeks. No status theatre. No surprise invoices. Just working software your team actually uses — like the live platforms we&apos;ve shipped for <a href="https://www.heartandhavenhealthcare.co.uk/" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: "#326d6d" }}>Heart &amp; Haven Care</a> and the Solidarity Center.</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-[#eaeaea] bg-[#f7f7f7]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10"><div className="flex items-center justify-center gap-2 mb-2"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">What we believe</p></div><h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>How we operate.</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.t} className="rounded-[16px] p-6 bg-white" style={{ border: "1px solid #e6e6e6" }}>
                <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center mb-4" style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{v.i}</svg>
                </div>
                <h4 className="text-[16px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{v.t}</h4>
                <p className="text-[13.5px] text-[#6a6a6a] leading-[1.6]">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0c0c0c", padding: "64px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-[16px] overflow-hidden" style={{ gap: "1px", background: "rgba(255,255,255,0.1)" }}>
            {stats.map((s) => (
              <div key={s.l} className="text-center" style={{ background: "#0c0c0c", padding: "30px 24px" }}>
                <div className="font-bold tracking-[-0.04em] text-white" style={{ fontSize: "clamp(28px,3vw,36px)" }}>{s.n}</div>
                <div className="text-[12.5px] mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10"><div className="flex items-center justify-center gap-2 mb-2"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">The team</p></div><h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>Senior builders, end to end.</h2><p className="text-[14px] text-[#9a9a9a] mt-3 max-w-[480px] mx-auto">A small team of engineers and designers who&apos;ve shipped AI products in production. You talk to the people doing the work.</p></div>
          {/* TODO: replace with real team members + photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-full rounded-[16px] mb-3.5" style={{ aspectRatio: "1", background: "linear-gradient(135deg, rgba(50,109,109,0.14), rgba(103,232,249,0.14))" }} />
                <h4 className="text-[15px] font-bold tracking-[-0.02em] text-[#0c0c0c]">{m.name}</h4>
                <p className="text-[12.5px] text-[#9a9a9a]">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-[24px] grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10" style={{ background: "#0c0c0c", padding: "64px 56px" }}>
            <div className="absolute pointer-events-none" style={{ top: "-100px", left: "-80px", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(50,109,109,0.4) 0%, transparent 70%)" }} />
            <div className="relative">
              <h2 className="font-bold tracking-[-0.035em] text-white leading-[1.08] mb-3" style={{ fontSize: "clamp(26px,3vw,38px)" }}>Let&apos;s build something<br />that ships.</h2>
              <p className="text-[15px] leading-[1.65] max-w-[420px]" style={{ color: "rgba(255,255,255,0.5)" }}>Bring us the problem. We&apos;ll bring the plan, the timeline, and the price.</p>
            </div>
            <div className="relative flex flex-col gap-2 shrink-0">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-[#0c0c0c] bg-white px-8 py-3.5 rounded-[10px] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap">Book a Call <ArrowRight /></Link>
              <Link href="/projects" className="inline-flex items-center justify-center text-[13.5px] font-medium px-8 py-3.5 rounded-[10px] transition-colors whitespace-nowrap" style={{ color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.14)" }}>See our work</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
