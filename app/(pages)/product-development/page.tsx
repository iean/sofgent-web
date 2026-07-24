import Link from "next/link";
import HowWeBuildSaaS from "@/app/components/howWeBuildSaaS";
import getPageMeta from "@/app/utils/getPageMeta";
import ServiceGraphic, { ServiceGraphicName } from "@/app/components/graphics/ServiceGraphic";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/product-development");
}

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Service cards for v1-style grid ──────────────────────── */
const mvpServices: { n: string; title: string; desc: string; graphic: ServiceGraphicName; tags: string[] }[] = [
  {
    n: "01",
    title: "SaaS MVP Development",
    desc: "Full-stack AI SaaS product — auth, billing, AI features, dashboards — live in 4–6 weeks. Fixed scope, fixed price, production-ready.",
    graphic: "mvp",
    tags: ["Next.js", "Claude AI", "Stripe", "PostgreSQL"],
  },
  {
    n: "02",
    title: "AI Feature Integration",
    desc: "Add AI capabilities to an existing product: chat, document Q&A, content generation, classification, or custom model workflows.",
    graphic: "ai-feature",
    tags: ["OpenAI", "Claude", "LangChain", "REST APIs"],
  },
  {
    n: "03",
    title: "Product Architecture",
    desc: "Architecture-first design before code: data models, API contracts, component structure, and AI integration layer scoped for your stage.",
    graphic: "architecture",
    tags: ["System design", "API design", "Data modeling"],
  },
];

const packages = [
  {
    name: "Scope Sprint",
    duration: "3–5 days",
    price: "From £800",
    color: "#326d6d",
    items: [
      "Discovery call + brief doc",
      "Architecture decision record",
      "Written scope + tech stack",
      "Timeline + price estimate",
    ],
    cta: "Start scoping",
  },
  {
    name: "MVP Launch",
    duration: "3–4 weeks",
    price: "From £6,000",
    color: "#0c0c0c",
    highlight: true,
    items: [
      "Everything in Scope Sprint",
      "Full-stack build + AI layer",
      "Auth, billing, dashboards",
      "CI/CD + production deploy",
      "30-day post-launch support",
    ],
    cta: "Launch your MVP",
  },
  {
    name: "Growth Partner",
    duration: "Ongoing",
    price: "From £3,500/mo",
    color: "#326d6d",
    items: [
      "Feature development sprints",
      "AI model iteration",
      "Performance + monitoring",
      "Architecture guidance",
    ],
    cta: "Talk growth",
  },
];

export default function ProductDevelopmentPage() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ background: "#0c0c0c", padding: "96px 0 80px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute pointer-events-none" style={{ top: "-100px", left: "-120px", width: "440px", height: "440px", background: "radial-gradient(circle, rgba(50,109,109,0.3) 0%, transparent 65%)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-60px", right: "-80px", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(103,232,249,0.07) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-[1140px] mx-auto px-8">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.58)" }}>
            <span style={{ color: "#67e8f9" }}>SofGent</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            Product Development
          </p>
          <h1 className="font-black tracking-[-0.05em] leading-[0.96] text-white mb-5" style={{ fontSize: "clamp(38px, 5vw, 68px)" }}>
            From idea to live product<br />
            in <span style={{ color: "#67e8f9" }}>4–6 weeks.</span>
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[500px] mb-9" style={{ color: "rgba(255,255,255,0.45)" }}>
            We build AI-powered SaaS MVPs with architecture-first delivery. Scope locked, timeline fixed, you own the code.
          </p>
          <div className="flex items-center gap-2.5 mb-16">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold bg-white text-[#0c0c0c] px-7 py-3.5 rounded-[9px] hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              Start your MVP <ArrowRight />
            </Link>
            <Link href="#process" className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-[9px]" style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.15)" }}>
              See our process
            </Link>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-4 max-w-[600px]">
            {[
              { n: "4–6 wk", label: "Avg time to launch" },
              { n: "100%", label: "Code ownership" },
              { n: "0", label: "Launch-day bugs, every project" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-[12px]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[22px] font-black text-white tracking-[-0.04em]">{s.n}</div>
                <div className="text-[11px] mt-1 leading-[1.4]" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MVP SERVICE GRID (v1 style) ═══ */}
      <section className="border-b border-[#e4e4e4]" style={{ padding: "96px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3">
                <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
                What we deliver
              </div>
              <h2 className="font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0c0c0c]" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
                Production-grade AI products.<br />Not prototypes.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-[#e6e6e6]" style={{ gap: "1px", background: "#e6e6e6" }}>
            {mvpServices.map((svc) => (
              <div key={svc.n} className="group bg-white hover:bg-[#f8f8f8] transition-colors">
                <div className="overflow-hidden h-[200px]">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]">
                    <ServiceGraphic name={svc.graphic} />
                  </div>
                </div>
                <div className="px-6 pt-5 pb-6">
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#9a9a9a] mb-2">Service {svc.n}</div>
                  <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{svc.title}</h3>
                  <p className="text-[13px] text-[#6a6a6a] leading-[1.62] mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full text-[#326d6d]" style={{ background: "rgba(50,109,109,0.08)", border: "1px solid rgba(50,109,109,0.15)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PACKAGES ═══ */}
      <section className="border-b border-[#e4e4e4] bg-[#f6f6f6]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="font-black tracking-[-0.04em] text-[#0c0c0c] mb-2" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>Choose your engagement</h2>
            <p className="text-[15px] text-[#6a6a6a]">Fixed scope, fixed price. No retainers until you&apos;re ready.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-[16px] p-7 flex flex-col"
                style={pkg.highlight
                  ? { background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.1)" }
                  : { background: "#fff", border: "1px solid #e4e4e4" }}
              >
                <div>
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase mb-1.5" style={{ color: pkg.highlight ? "#67e8f9" : pkg.color }}>{pkg.duration}</div>
                  <h3 className="text-[18px] font-extrabold mb-1" style={{ color: pkg.highlight ? "#fff" : "#0c0c0c" }}>{pkg.name}</h3>
                  <div className="text-[22px] font-black tracking-[-0.03em] mb-6" style={{ color: pkg.highlight ? "#67e8f9" : "#326d6d" }}>{pkg.price}</div>
                  <ul className="space-y-2.5 mb-8">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px]" style={{ color: pkg.highlight ? "rgba(255,255,255,0.65)" : "#6a6a6a" }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0"><path d="M2 7l3 3 7-7" stroke={pkg.highlight ? "#22c55e" : "#326d6d"} strokeWidth="1.7" strokeLinecap="round" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[8px] text-[13.5px] font-semibold transition-all hover:-translate-y-0.5"
                  style={pkg.highlight
                    ? { background: "#fff", color: "#0c0c0c" }
                    : { background: "rgba(50,109,109,0.08)", color: "#326d6d", border: "1px solid rgba(50,109,109,0.2)" }}
                >
                  {pkg.cta} <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW WE BUILD (existing component) ═══ */}
      <div id="process">
        <HowWeBuildSaaS />
      </div>
    </main>
  );
}
