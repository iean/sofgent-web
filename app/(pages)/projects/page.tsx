import Link from "next/link";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/projects");
}

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const projects = [
  {
    label: "LIVE · Healthcare · UK",
    title: "Heart & Haven Care — Healthcare Services Platform",
    desc: "A production healthcare platform covering Domiciliary Care, Temporary Staffing, and Supported Living for a CQC-registered UK provider. Built with Next.js & React, optimised for performance and accessibility.",
    img: "/images/project/haven/home_card_staffing.jpg",
    tags: ["Next.js", "React", "Accessibility", "CQC-aligned"],
    metrics: [{ n: "3", l: "Service areas live" }, { n: "Live", l: "In production" }],
    url: "https://www.heartandhavenhealthcare.co.uk/",
  },
  {
    label: "LIVE · Non-profit · Labor rights",
    title: "Solidarity Center — Tannery Workers Website",
    desc: "A website built for the American Center for International Labor Solidarity (Solidarity Center), supporting tannery workers — focused on clarity, accessibility, and reach.",
    img: "/images/case-studies/solidarity-website.svg",
    tags: ["Web Platform", "Accessibility", "Content"],
    metrics: [{ n: "Live", l: "In production" }, { n: "NGO", l: "Labor solidarity" }],
    url: "",
  },
];

const filters = ["All", "Healthcare", "Non-profit", "Web Platform"];

export default function ProjectArchive() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#0c0c0c", padding: "88px 0 80px" }}>
        <div className="absolute pointer-events-none" style={{ top: "-160px", left: "-120px", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(50,109,109,0.5) 0%, transparent 70%)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-180px", right: "-100px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)" }} />
        <div className="max-w-[1140px] mx-auto px-8 relative">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full mb-5" style={{ color: "#67e8f9", background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.18)" }}>Selected work</span>
            <h1 className="font-bold tracking-[-0.045em] text-white leading-[1.0] mb-5" style={{ fontSize: "clamp(40px, 5.2vw, 60px)" }}>Products we&apos;ve shipped to <span style={{ color: "#67e8f9" }}>production.</span></h1>
            <p className="text-[17px] leading-[1.65] max-w-[540px]" style={{ color: "rgba(255,255,255,0.6)" }}>Not concepts. Not pilots. Real platforms live with real users — with the outcomes to prove it.</p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "72px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex gap-2 flex-wrap mb-9">
            {filters.map((f, i) => (
              <span key={f} className="text-[13px] font-semibold px-4 py-2 rounded-full" style={i === 0 ? { background: "#326d6d", color: "#fff", border: "1px solid #326d6d" } : { background: "#f7f7f7", color: "#6a6a6a", border: "1px solid #e6e6e6" }}>{f}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-[12px] overflow-hidden" style={{ border: "0.5px solid #eaeaea" }}>
            {projects.map((p, i) => {
              const Card = (
                <>
                  <div className="relative overflow-hidden" style={{ height: "190px", borderBottom: "0.5px solid #eaeaea" }}>
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    <div className="absolute inset-0" style={{ background: "rgba(12,12,12,0.20)" }} />
                    <div className="absolute top-3 left-3"><span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: "rgba(0,0,0,0.5)", letterSpacing: "0.05em" }}>{p.label}</span></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col hover:bg-[#fafafa] transition-colors">
                    <h3 className="text-[15.5px] font-bold text-[#0c0c0c] mb-2 group-hover:text-[#326d6d] transition-colors leading-snug" style={{ minHeight: "44px" }}>{p.title}</h3>
                    <p className="text-[12.5px] text-[#6a6a6a] leading-[1.6] mb-4">{p.desc}</p>
                    <div className="flex gap-1.5 flex-wrap mb-5">
                      {p.tags.map((t) => (<span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full text-[#6a6a6a]" style={{ background: "#f5f5f5", border: "0.5px solid #eaeaea" }}>{t}</span>))}
                    </div>
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-2">
                        {p.metrics.map((m) => (<div key={m.l} className="px-3 py-2.5 rounded-[8px]" style={{ background: "rgba(50,109,109,0.06)", border: "0.5px solid rgba(50,109,109,0.14)" }}><div className="text-[14px] font-bold leading-none mb-1" style={{ color: "#326d6d" }}>{m.n}</div><div className="text-[10px] leading-tight" style={{ color: "#326d6d" }}>{m.l}</div></div>))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold mt-4" style={{ color: p.url ? "#326d6d" : "#c4c4c4" }}>{p.url ? <>Visit live site <ArrowRight /></> : "Coming soon"}</span>
                    </div>
                  </div>
                </>
              );
              const cls = "flex flex-col group";
              const style = i < projects.length - 1 ? { borderRight: "0.5px solid #eaeaea" } : {};
              return p.url ? (
                <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{Card}</a>
              ) : (
                <div key={p.title} className={cls} style={style}>{Card}</div>
              );
            })}
          </div>
          <p className="text-center text-[12.5px] text-[#9a9a9a] mt-8">More case studies are on the way as projects with new clients go live.</p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-b border-[#eaeaea] bg-[#f7f7f7]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10"><div className="flex items-center justify-center gap-2 mb-2"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">What we deliver</p></div><h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>Built to ship, built to last.</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-[12px] overflow-hidden bg-white" style={{ border: "0.5px solid #eaeaea" }}>
            {[
              { t: "Production-grade", d: "Real architecture, tests, monitoring, and docs — code your own engineers would approve in review." },
              { t: "Shipped in weeks", d: "Scoped, built, tested, and live in 4–6 weeks. Fixed scope, fixed price, zero critical launch bugs." },
              { t: "Yours to keep", d: "Delivered in your repos and your cloud. You own all the IP and code — no lock-in." },
            ].map((c, i) => (
              <div key={c.t} className="p-7" style={i < 2 ? { borderRight: "0.5px solid #eaeaea" } : {}}>
                <h3 className="text-[16px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{c.t}</h3>
                <p className="text-[13.5px] text-[#6a6a6a] leading-[1.6]">{c.d}</p>
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
              <h2 className="font-bold tracking-[-0.035em] text-white leading-[1.08] mb-3" style={{ fontSize: "clamp(26px,3vw,38px)" }}>Want results like<br />these?</h2>
              <p className="text-[15px] leading-[1.65] max-w-[420px]" style={{ color: "rgba(255,255,255,0.5)" }}>Book a call and we&apos;ll scope your project — with a timeline and a fixed price.</p>
            </div>
            <div className="relative flex flex-col gap-2 shrink-0">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-[#0c0c0c] bg-white px-8 py-3.5 rounded-[10px] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap">Book a Call <ArrowRight /></Link>
              <Link href="/services" className="inline-flex items-center justify-center text-[13.5px] font-medium px-8 py-3.5 rounded-[10px] transition-colors whitespace-nowrap" style={{ color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.14)" }}>View services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
