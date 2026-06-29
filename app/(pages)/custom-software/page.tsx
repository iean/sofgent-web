import Link from "next/link";
import getPageMeta from "@/app/utils/getPageMeta";
import ServiceGraphic, { ServiceGraphicName } from "@/app/components/graphics/ServiceGraphic";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/custom-software");
}

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── What we build (curated for bespoke engagements) ── */
const buildTypes: { title: string; desc: string; graphic: ServiceGraphicName; tags: string[]; href: string }[] = [
  {
    title: "Web Applications",
    desc: "Full-stack web apps, dashboards, portals, and internal tools — built on Next.js, React, and Node around the way your team works.",
    graphic: "web",
    tags: ["Next.js", "React", "Node"],
    href: "/services/web-application-development",
  },
  {
    title: "SaaS Products",
    desc: "Multi-tenant SaaS with auth, billing, and admin controls — architected to scale from your first customer to your thousandth.",
    graphic: "mvp",
    tags: ["Auth", "Billing", "Multi-tenant"],
    href: "/services/saas-micro-saas-solutions",
  },
  {
    title: "AI Integrations",
    desc: "Bring AI into systems you already run — chat, extraction, classification, and automation wired into your existing stack.",
    graphic: "integration",
    tags: ["OpenAI", "Claude", "APIs"],
    href: "/services/system-integration",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile (React Native) with native-feel performance — App Store and Play Store submission handled end to end.",
    graphic: "mobile",
    tags: ["React Native", "iOS", "Android"],
    href: "/services/mobile-app-development",
  },
];

/* ── Why bespoke / differentiators ── */
const whyCustom = [
  { t: "Built around your workflow", d: "We map how your team actually works, then build software that fits it — not the other way round." },
  { t: "You own everything", d: "Full IP transfer — your repos, your cloud, your code. No lock-in, no licensing traps." },
  { t: "Integrates with your stack", d: "Connects cleanly to the CRMs, databases, and tools your business already depends on." },
  { t: "Scales with you", d: "Architecture designed for growth — add features and handle load without a rewrite." },
];

export default function CustomSoftwarePage() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="border-b border-[#e4e4e4] py-16 md:pt-[94px] md:pb-[80px]">
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-4">
                <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
                Custom Software Development
              </div>
              <h1 className="font-black tracking-[-0.04em] leading-[1.05] text-[#0c0c0c] mb-5" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
                Software built to fit<br />how your business works.
              </h1>
              <p className="text-[15px] text-[#6a6a6a] leading-[1.72] mb-8 max-w-[440px]">
                We don&apos;t sell off-the-shelf. Every engagement starts with a discovery brief, scoped to what you actually need — then we build it, test it, and hand over the keys.
              </p>
              <div className="flex items-center gap-2.5">
                <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold text-white px-6 py-3 rounded-[8px] transition-all hover:-translate-y-0.5" style={{ background: "#326d6d" }}>
                  Start a project <ArrowRight />
                </Link>
                <Link href="/projects" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6a6a6a] px-5 py-3 rounded-[8px] border border-[#e4e4e4] hover:border-[#bbb] hover:text-[#0c0c0c] transition-colors">
                  View our work
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/services/software-development.webp"
                alt="Custom Software Development"
                className="w-full rounded-2xl border border-[#e4e4e4] object-cover"
                style={{ height: "360px", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CUSTOM ═══ */}
      <section style={{ padding: "88px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3">
              <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
              Why bespoke
            </div>
            <h2 className="font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0c0c0c] mb-3" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
              Off-the-shelf bends your business.<br />Custom software fits it.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCustom.map((r) => (
              <div key={r.t} className="rounded-[16px] p-6 bg-white" style={{ border: "1px solid #e6e6e6" }}>
                <span className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-4" style={{ background: "rgba(50,109,109,0.10)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#326d6d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l3 3 7-7" /></svg>
                </span>
                <h3 className="text-[14.5px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-1.5">{r.t}</h3>
                <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE BUILD (curated) ═══ */}
      <section className="border-t border-[#e4e4e4] bg-[#f8f8f8]" style={{ padding: "88px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3">
                <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
                What we build
              </div>
              <h2 className="font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0c0c0c]" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
                The kinds of products we ship.
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#326d6d] hover:gap-2.5 transition-all">
              See the full service range <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {buildTypes.map((b) => (
              <Link key={b.title} href={b.href} className="group flex rounded-[16px] overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]" style={{ border: "1px solid #e6e6e6" }}>
                <div className="w-[180px] shrink-0 overflow-hidden relative hidden sm:block">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.05]"><ServiceGraphic name={b.graphic} /></div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-[16px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2 group-hover:text-[#326d6d] transition-colors">{b.title}</h3>
                  <p className="text-[13px] text-[#6a6a6a] leading-[1.62] mb-3.5">{b.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {b.tags.map((t) => (
                      <span key={t} className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full text-[#326d6d]" style={{ background: "rgba(50,109,109,0.08)", border: "1px solid rgba(50,109,109,0.15)" }}>{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#326d6d]">View service <span className="transition-transform group-hover:translate-x-0.5 inline-flex"><ArrowRight /></span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="border-t border-[#e4e4e4] bg-[#f6f6f6]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8 text-center">
          <h2 className="font-black tracking-[-0.04em] text-[#0c0c0c] mb-3" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
            Don&apos;t see exactly what you need?
          </h2>
          <p className="text-[15px] text-[#6a6a6a] max-w-[420px] mx-auto mb-8">
            Tell us what you&apos;re building. We&apos;ll scope it and come back with a written brief, timeline, and estimate within 48 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold text-white px-7 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5" style={{ background: "#326d6d" }}>
            Start the conversation <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
