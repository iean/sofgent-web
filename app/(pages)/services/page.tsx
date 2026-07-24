import Link from "next/link";
import Image from "next/image";
import ServicesHero from "@/app/components/services/ServicesHero";
import getPageMeta from "@/app/utils/getPageMeta";
import { getServiceCatalogEntries } from "@/lib/content/serviceCatalog";
import { getServices } from "@/lib/sanity/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/services");
}

const catalogTagColors: Record<string, { bg: string; color: string; border: string }> = {
  Core: { bg: "rgba(50,109,109,0.10)", color: "#326d6d", border: "rgba(50,109,109,0.20)" },
  "Add-on": { bg: "rgba(124,58,237,0.08)", color: "#7c3aed", border: "rgba(124,58,237,0.18)" },
  Standalone: { bg: "rgba(180,83,9,0.08)", color: "#b45309", border: "rgba(180,83,9,0.18)" },
};

/* ── Shared: arrow icon ── */
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function ServicesPage() {
  const services = await getServices();
  const serviceCatalog = getServiceCatalogEntries(services);
  const catalog = serviceCatalog.filter((item) => item.section === "primary");

  return (
    <main>
      <ServicesHero />

      {/* ═══ TRUST STRIP ═══ */}
      <div className="border-b border-[#e4e4e4] py-7 bg-white">
        <div className="max-w-[1140px] mx-auto px-8 flex items-center gap-10 flex-wrap">
          <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#9a9a9a] flex-shrink-0">Trusted by</span>
          <div className="flex items-center gap-8 flex-wrap">
            {["Heart & Haven Care", "Solidarity Center (ACILS)"].map((name) => (
              <span key={name} className="text-[14px] font-bold tracking-[-0.02em] text-[#bbb] hover:text-[#0c0c0c] transition-colors cursor-default select-none">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SERVICE SECTIONS ═══ */}
      {/* ═══ FULL SERVICE CATALOG ═══ */}
      <section id="services" className="border-b border-[#e4e4e4]" style={{ padding: "96px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3">
              <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
              Solution lineup
            </div>
            <h2 className="font-black tracking-[-0.04em] leading-[1.1] text-[#0c0c0c] mb-3" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>Focused products and internal systems.</h2>
            <p className="text-[15px] text-[#6a6a6a] max-w-[560px] mx-auto">The catalog now centers on a knowledge base, OCR automation, a knowledge transfer platform, employee onboarding, and a custom CRM solution.</p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
            {Object.entries(catalogTagColors).map(([tag, c]) => (
              <div key={tag} className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full" style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                {tag}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-[#e6e6e6]" style={{ gap: "1px", background: "#e6e6e6" }}>
            {catalog.map((svc) => {
              const tc = catalogTagColors[svc.tag ?? "Standalone"];
              return (
                <Link key={svc.title} href={svc.href} className="group bg-white hover:bg-[#f8f8f8] transition-colors block">
                  <div className="relative h-[210px] overflow-hidden bg-[#081415]">
                    <Image
                      src={svc.artwork}
                      alt={svc.artworkAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,14,15,0.35)_100%)]" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm" style={{ color: tc.color, background: "rgba(255,255,255,0.92)", border: `1px solid ${tc.border}` }}>{svc.tag}</span>
                    </div>
                  </div>
                  <div className="px-6 pt-5 pb-6">
                    <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{svc.title}</h3>
                    <p className="text-[13px] text-[#6a6a6a] leading-[1.62] mb-4">{svc.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#326d6d]">Learn more <span className="transition-transform group-hover:translate-x-0.5 inline-flex"><ArrowRight /></span></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITY GRID ═══ */}
      <section style={{ background: "#0c0c0c", padding: "96px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-center mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>Everything included</p>
          <h2 className="font-black tracking-[-0.04em] text-white text-center mb-2" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
            Built for production from day one.
          </h2>
          <p className="text-[15px] text-center max-w-[480px] mx-auto mb-14" style={{ color: "rgba(255,255,255,0.6)" }}>
            Every engagement includes the infrastructure, testing, and ops layer most agencies leave out.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
            style={{ gap: "1px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              { title: "AI-first architecture", desc: "Models integrated as first-class services — with rate limiting, fallbacks, and cost controls built in from sprint one." },
              { title: "100% test coverage", desc: "Unit, integration, and E2E tests ship with every project. AI outputs validated under real load, not just happy paths." },
              { title: "Monitoring + alerting", desc: "Logs, traces, and dashboards configured from day one. You&apos;ll know before users do when something breaks." },
              { title: "Auth + billing ready", desc: "User auth, team accounts, Stripe billing, and usage tracking baked in — so you can charge on day one." },
              { title: "CI/CD + DevOps", desc: "GitHub Actions pipelines, preview deploys, and rollback procedures configured for your stack from the start." },
              { title: "Grows post-launch", desc: "Architecture designed for scale. Add features, swap models, or expand scope without a full rewrite." },
            ].map((cap) => (
              <div key={cap.title} className="p-7" style={{ background: "#0c0c0c", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-[36px] h-[36px] rounded-[8px] flex items-center justify-center mb-3.5" style={{ background: "rgba(50,109,109,0.15)", border: "1px solid rgba(50,109,109,0.22)" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#4cd4d4" strokeWidth="1.7" strokeLinecap="round"><path d="M2 7.5l3.5 3.5 8-8" /></svg>
                </div>
                <h3 className="text-[14.5px] font-bold text-white mb-1.5">{cap.title}</h3>
                <p className="text-[13px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.62)" }}
                  dangerouslySetInnerHTML={{ __html: cap.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS TIMELINE ═══ */}
      <section className="border-b border-[#e4e4e4]" style={{ padding: "96px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#9a9a9a] mb-2.5">How we work</p>
            <h2 className="font-black tracking-[-0.04em] text-[#0c0c0c] mb-2" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>Sprint-based. Client-first.</h2>
            <p className="text-[15px] text-[#6a6a6a] max-w-[420px] mx-auto">Four phases, fixed timeline, daily updates. No surprises.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {/* Connecting line (desktop only) */}
            <div
              className="absolute pointer-events-none hidden lg:block"
              style={{
                top: "19px",
                left: "calc(12.5% + 8px)",
                width: "calc(75% - 16px)",
                height: "1px",
                background: "linear-gradient(to right, rgba(50,109,109,0.25), #326d6d, rgba(50,109,109,0.25))",
              }}
            />
            {[
              { n: "1", week: "Days 1–3", title: "Scope & Brief", desc: "Discovery call, written scope doc, timeline, and tech stack confirmed. Fixed price agreed before any work starts." },
              { n: "2", week: "Week 1", title: "Design & Architecture", desc: "Wireframes, data model, API contracts. Client sign-off required before code is written." },
              { n: "3", week: "Weeks 2–5", title: "Build & Test", desc: "Sprint delivery with daily standups and weekly demos. Full test suite runs with every push." },
              { n: "4", week: "Weeks 5–6", title: "Launch & Handover", desc: "Production deploy, monitoring, documentation, and 30 days of post-launch support included." },
            ].map((step) => (
              <div key={step.n} className="text-center relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-extrabold mx-auto mb-4"
                  style={{ background: "#fff", border: "2px solid #326d6d", color: "#326d6d" }}
                >
                  {step.n}
                </div>
                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#9a9a9a] mb-1.5">{step.week}</div>
                <h3 className="text-[15px] font-extrabold text-[#0c0c0c] mb-2 tracking-[-0.02em]">{step.title}</h3>
                <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Why we ship this fast */}
          <div className="mt-14 rounded-[16px] p-6 md:p-8" style={{ background: "#f6f6f6", border: "1px solid #e4e4e4" }}>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5" style={{ color: "#326d6d" }}>Why we can ship in 4–6 weeks</p>
            <p className="text-[14px] text-[#6a6a6a] leading-[1.7] mb-6 max-w-[640px]">Speed comes from discipline, not shortcuts. We commit to a tight, fixed scope up front and build on architecture we&apos;ve shipped before — so the weeks go into your product, not boilerplate.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { t: "Fixed, focused scope", d: "We lock a narrow MVP scope before sprint one — no creep, no moving targets." },
                { t: "Proven architecture", d: "Battle-tested foundations and reusable building blocks, not a blank repo." },
                { t: "AI-native tooling", d: "We build with AI-assisted workflows that compress the grind work." },
                { t: "Senior, lean team", d: "You work directly with the engineers building it — no layers, no ramp-up." },
              ].map((r) => (
                <div key={r.t} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(50,109,109,0.12)" }}>
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#326d6d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l3 3 7-7" /></svg>
                    </span>
                    <span className="text-[13px] font-bold text-[#0c0c0c]">{r.t}</span>
                  </div>
                  <p className="text-[12px] text-[#6a6a6a] leading-[1.55]">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LIVE IN PRODUCTION (real proof) ═══ */}
      {/* TODO: add real client testimonial quotes here once collected. */}
      <section className="border-b border-[#e4e4e4]" style={{ padding: "80px 0", background: "#f6f6f6" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-center text-[#9a9a9a] mb-3">Live in production</p>
          <h2 className="font-black tracking-[-0.04em] text-[#0c0c0c] text-center mb-10" style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}>
            Real client work, shipped and running.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[820px] mx-auto">
            <a href="https://www.heartandhavenhealthcare.co.uk/" target="_blank" rel="noopener noreferrer" className="bg-white border border-[#e4e4e4] rounded-[14px] p-6 block hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-2 mb-2"><span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} /><span className="text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: "#22c55e" }}>Live</span></div>
              <h3 className="text-[16px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-1">Heart &amp; Haven Care</h3>
              <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">UK healthcare services platform — domiciliary care, staffing &amp; supported living. CQC-registered.</p>
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold mt-3" style={{ color: "#326d6d" }}>heartandhavenhealthcare.co.uk <ArrowRight /></span>
            </a>
            <div className="bg-white border border-[#e4e4e4] rounded-[14px] p-6">
              <div className="flex items-center gap-2 mb-2"><span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} /><span className="text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: "#22c55e" }}>Live</span></div>
              <h3 className="text-[16px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-1">Solidarity Center (ACILS)</h3>
              <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">A website for tannery workers, built for the American Center for International Labor Solidarity.</p>
              <span className="text-[12.5px] font-bold mt-3 inline-block" style={{ color: "#9a9a9a" }}>Non-profit · Labor solidarity</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden text-center" style={{ background: "#0c0c0c", padding: "96px 40px" }}>
        {/* Glow */}
        <div className="absolute pointer-events-none" style={{ top: "-130px", left: "50%", transform: "translateX(-50%)", width: "560px", height: "560px", background: "radial-gradient(circle, rgba(50,109,109,0.28) 0%, transparent 65%)" }} />
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        {/* Diagonal texture */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 40px)" }} />

        <div className="relative z-10">
          <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: "rgba(103,232,249,0.7)" }}>Free 30-min consultation</p>
          <h2 className="font-black tracking-[-0.05em] leading-[1.0] text-white mb-3.5" style={{ fontSize: "clamp(28px, 4vw, 54px)" }}>
            Got an AI product idea?<br />
            Let&apos;s scope it <span style={{ color: "#67e8f9" }}>together.</span>
          </h2>
          <p className="text-[15px] max-w-[420px] mx-auto mb-10 leading-[1.65]" style={{ color: "rgba(255,255,255,0.6)" }}>
            We&apos;ll give you a written scope, timeline, and estimate within 48 hours. No obligation, no sales pitch.
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[14px] font-bold bg-white text-[#0c0c0c] px-7 py-3.5 rounded-[9px] hover:bg-gray-100 transition-all hover:-translate-y-0.5"
            >
              Book a free call <ArrowRight />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-[9px] transition-colors"
              style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              See our work →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
