import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import HeroSlider from "./components/home/HeroSlider";
import getPageMeta from "@/app/utils/getPageMeta";
import { getHomepageCaseStudies, getLiveProjects } from "@/lib/sanity/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/");
}

/* ── Icons ──────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ color = "#326d6d" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M3 8l3 3 7-7" />
  </svg>
);

/* ── Data ───────────────────────────────────────────────── */
// Real clients we've shipped for. TODO: add the second UK company's name + logo.
const clients = [
  {
    name: "EasyKT",
    logo: "/images/client-logos/easykt.png",
    href: "/live-projects/easykt-ai-knowledge-base",
    width: 320,
    height: 213,
  },
  {
    name: "Heart & Haven Care",
    logo: "/images/client-logos/heart-haven-care.png",
    href: "/live-projects/heart-haven-healthcare-platform",
    width: 480,
    height: 133,
  },
  {
    name: "Solidarity Center",
    logo: "/images/client-logos/solidarity-center.png",
    href: "/live-projects/solidarity-center-tannery-workers",
    width: 180,
    height: 180,
  },
];
const techStack = ["Next.js", "Anthropic Claude", "OpenAI", "Supabase", "Vercel", "PostgreSQL", "Python", "TypeScript"];

const kpis = [
  { n: "4–6 wks", label: "Idea to production" },
  { n: "Fixed", label: "Scope & price" },
  { n: "Weekly", label: "Working demos" },
  { n: "30 days", label: "Post-launch support" },
];

const pillars = [
  {
    num: "01",
    title: "AI Product & MVP Development",
    desc: "From scoped idea to deployed SaaS in 4–6 weeks. Architecture, AI layer, and UI — production-grade from day one.",
    points: ["Full-stack build, not a prototype", "AI integrated, tested under real load", "Fixed scope, fixed price"],
    href: "/product-development",
    img: "/images/services/software-development.webp",
    accent: "#1e4848",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 9h8M8 13h5" />
        <circle cx="18" cy="6" r="3" fill="#67e8f9" stroke="none" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "AI Document Automation",
    desc: "Turn invoices, contracts, and reports into structured data. Classify, extract, validate, route — end to end.",
    points: ["Confidence-scored extraction", "Human review for exceptions", "Scoped pipeline delivered in weeks"],
    href: "/ai-product-studio",
    img: "/images/services/image-processing.webp",
    accent: "#326d6d",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Integration & Automation",
    desc: "Connect Claude, GPT, and custom models into your existing tools — CRM, Slack, ERP — via clean, monitored workflows.",
    points: ["Claude / GPT / custom LLMs wired in", "Triggers from email, webhook, or form", "Observable, logged, human-in-loop ready"],
    href: "/custom-software",
    img: "/images/services/system-integration.webp",
    accent: "#2a5f5f",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M6 9v6a3 3 0 0 0 3 3h6M9 6h6a3 3 0 0 1 3 3v6" />
      </svg>
    ),
  },
];

const addonIcons: Record<string, JSX.Element> = {
  "AI Training Data Pipelines": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
    </svg>
  ),
  "AI Product Design & UX": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  "MLOps & AI Deployment": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

const addons = [
  {
    title: "AI Training Data Pipelines",
    desc: "Structured, labeled, clean data so your models train on signal — not noise. ETL, validation, and versioning included.",
    tag: "Foundation",
    href: "/services/advanced-ai-solutions",
  },
  {
    title: "AI Product Design & UX",
    desc: "Interfaces built for AI products — prompt UIs, dashboards, review queues. Tested with real users before a line of prod code.",
    tag: "Design",
    href: "/services/custom-software-development",
  },
  {
    title: "MLOps & AI Deployment",
    desc: "CI/CD for AI — model versioning, rollback, cost monitoring, and alerting. Your AI stays live, observable, and under control.",
    tag: "Ops",
    href: "/services/system-integration",
  },
];

const flowSources = [
  { label: "Documents", color: "#67e8f9" },
  { label: "Email inbox", color: "#f59e0b" },
  { label: "Web forms", color: "#d2a8ff" },
  { label: "APIs / webhooks", color: "#22c55e" },
];
const flowDest = [
  { label: "Slack / Teams", color: "#36c5f0" },
  { label: "CRM", color: "#ff6154" },
  { label: "Database", color: "#67e8f9" },
  { label: "Dashboards", color: "#f59e0b" },
];

const steps = [
  { n: "1", period: "Week 1", title: "Discover & Define", body: "One focused call. We align on goals and hand you a scoped plan to sign off on." },
  { n: "2", period: "Week 2", title: "Plan & Prototype", body: "Architecture, data flows, clickable prototype. You validate before prod code." },
  { n: "3", period: "Weeks 3–5", title: "Build & Iterate", body: "1-week sprints with real progress. Working software every Friday." },
  { n: "4", period: "Week 6", title: "Launch & Support", body: "We own the deploy and stay engaged 30 days post-launch." },
];

// Honest, verifiable proof points. TODO: add real ROI numbers from clients where available.
const results = [
  { label: "Heart & Haven Care", from: "Brief", to: "Live platform", body: "Full healthcare services site — Domiciliary Care, Temporary Staffing, and Supported Living — shipped to production for a CQC-registered UK provider.", client: "Heart & Haven Care", service: "Next.js · React · Accessibility", initials: "HH" },
  { label: "Solidarity Center (ACILS)", from: "Concept", to: "Live website", body: "A website for tannery workers delivered for the American Center for International Labor Solidarity — built for clarity, accessibility, and reach.", client: "Solidarity Center", service: "Web Platform · Content", initials: "SC" },
  { label: "Delivery model", from: "Scoped plan", to: "Production release", body: "A written scope and price, weekly working demos, acceptance testing, monitored deployment, and 30 days of post-launch support.", client: "SofGent delivery process", service: "Production delivery", initials: "SG" },
];

const compareRows = [
  { feat: "Scope & price", us: "Written upfront", fast: "Changes re-estimated", inhouse: "Approved before work" },
  { feat: "Production readiness", us: "Acceptance criteria", fast: "Tests + monitoring", inhouse: "Deployment + docs" },
  { feat: "Delivery visibility", us: "Weekly demos", fast: "Working increments", inhouse: "Shared progress" },
  { feat: "Ownership", us: "Your repos + cloud", fast: "Documented handover", inhouse: "Client-owned deliverables" },
  { feat: "Post-launch", us: "30 days included", fast: "Defect response", inhouse: "Continuation optional" },
];

const personas = [
  { title: "Founders", desc: "Get a real, demo-ready AI product in front of users and investors in weeks — without hiring a team or burning runway.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg> },
  { title: "CTOs & Eng leaders", desc: "Reviewable architecture, tests, monitoring, and documentation designed for a clean handover to your engineering team.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg> },
  { title: "Operations teams", desc: "Automate the manual document and data work eating your week. We map the process, then ship the system that runs it.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg> },
];

const security = [
  { label: "Data handled in your cloud", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { label: "Audit-ready by design", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> },
  { label: "You own all IP & code", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z" /><path d="M9 12l2 2 4-4" /></svg> },
  { label: "NDAs & compliance-ready", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
];

const pricing = [
  { name: "Automation Sprint", amt: "from $4k", desc: "A single AI workflow or document pipeline, live in production.", list: ["1–2 week delivery", "One integration / pipeline", "Deploy + handover"], cta: "Scope it", featured: false },
  { name: "AI MVP", amt: "from $12k", desc: "A full, production-ready AI product your users and investors can touch.", list: ["Typical 4–6 week delivery", "Full stack + AI layer + UI", "Acceptance testing + monitored launch", "30-day post-launch support"], cta: "Book a Call", featured: true },
  { name: "Product Partner", amt: "Custom", desc: "Ongoing build & iteration for teams scaling an AI product.", list: ["Monthly rolling sprints", "Dedicated senior team", "Roadmap + priority support"], cta: "Talk to us", featured: false },
];

const faqs = [
  { q: "How can you really ship in 4–6 weeks?", a: "We scope tightly, reuse battle-tested architecture, and build with AI-native tooling. The first call produces a fixed scope — we don't ship feature creep, we ship the product that solves the problem." },
  { q: "Is this a prototype or production code?", a: "Production. Real architecture, tests, monitoring, and documentation — code your own engineers would approve in review. No throwaway demos." },
  { q: "Who owns the code and IP?", a: "You do — fully. Everything is delivered in your repos and your cloud accounts. No lock-in." },
  { q: "What happens after launch?", a: "We own the deploy and stay engaged for 30 days post-launch. After that you can self-serve, or continue with a Product Partner engagement." },
  { q: "What if the scope changes mid-build?", a: "We flag it immediately and re-scope transparently. You always know the cost and timeline impact before anything changes — no surprise invoices." },
];

/* ═══════════════════════════════════════════════════════════ */
export default async function Home() {
  const [featuredStudies, liveProjects] = await Promise.all([
    getHomepageCaseStudies(),
    getLiveProjects(),
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      {/* ════ HERO (problem-led) ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0 72px" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full px-3 py-1.5 mb-5" style={{ background: "rgba(50,109,109,0.08)", color: "#326d6d", border: "0.5px solid rgba(50,109,109,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#326d6d]" />
                AI Product Studio
              </div>

              <h1 className="font-bold leading-[1.0] tracking-[-0.045em] text-[#0c0c0c] mb-5" style={{ fontSize: "clamp(38px, 5vw, 60px)" }}>
                Most AI projects die in <span style={{ color: "#326d6d" }}>pilot.</span> We ship yours to production.
              </h1>

              <p className="text-[16px] text-[#6a6a6a] leading-[1.65] mb-4 max-w-[440px]">
                Document automation, AI SaaS MVPs, and AI integrations — typically scoped, built, and launched in 4–6 weeks for focused engagements.
              </p>

              <div className="flex items-center gap-2 text-[13px] text-[#1a1a1a] mb-8">
                <Check />
                <span><strong style={{ color: "#326d6d" }}>Acceptance tested and monitored</strong>, with 30 days of post-launch support included.</span>
              </div>

              <div className="flex items-center gap-2.5 mb-10">
                <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white px-5 py-2.5 rounded-[8px] transition-all hover:opacity-90" style={{ background: "#0c0c0c" }}>
                  Book a Free Call <ArrowRight />
                </Link>
                <Link href="/projects" className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6a6a6a] px-5 py-2.5 rounded-[8px] transition-colors hover:text-[#0c0c0c]" style={{ border: "0.5px solid #e0e0e0" }}>
                  See Our Work
                </Link>
              </div>

              <div className="flex gap-0 pt-5 border-t border-[#eaeaea]">
                {kpis.map((k, i) => (
                  <div key={k.label} className="flex-1" style={i < kpis.length - 1 ? { paddingRight: "16px", marginRight: "16px", borderRight: "0.5px solid #eaeaea" } : {}}>
                    <div className="text-[20px] font-bold text-[#0c0c0c] tracking-[-0.03em]">{k.n}</div>
                    <div className="text-[11px] text-[#9a9a9a] mt-1 leading-tight">{k.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <HeroSlider />
          </div>
        </div>
      </section>

      {/* ════ TRUST STRIP (real clients) ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "28px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8 text-center">
          <p className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#bbb] mb-4">Teams we&apos;ve built and shipped for</p>
          <div className="flex items-center justify-center gap-x-10 gap-y-4 flex-wrap">
            {clients.map((client) => (
              <Link
                key={client.name}
                href={client.href}
                aria-label={`View ${client.name} live project`}
                className="flex min-h-[72px] min-w-[120px] items-center justify-center rounded-[10px] px-3 py-2 opacity-75 transition-all hover:bg-[#f7f7f7] hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#326d6d]"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="h-14 w-auto max-w-[210px] object-contain"
                />
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap mt-5">
            <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#cfcfcf]">Built with</span>
            {techStack.map((t) => (
              <span key={t} className="text-[12.5px] font-medium tracking-[-0.02em] text-[#cdcdcd]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ════ THREE PILLARS ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "96px 0", background: "linear-gradient(180deg, #f6fafa 0%, #ffffff 60%)" }}>
        <div className="max-w-[1140px] mx-auto px-8">

          {/* Section header */}
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3 flex items-center gap-2.5" style={{ color: "#326d6d" }}>
                <span className="w-5 h-px rounded-full bg-[#326d6d]" />
                What we do
              </p>
              <h2 className="font-bold tracking-[-0.04em] text-[#0c0c0c] leading-[1.05]" style={{ fontSize: "clamp(30px,3.6vw,46px)" }}>
                Three things we do<br />better than anyone.
              </h2>
            </div>
            <Link
              href="/ai-product-studio"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white px-5 py-2.5 rounded-[9px] hover:opacity-90 transition-all"
              style={{ background: "#0c0c0c" }}
            >
              View all services <ArrowRight />
            </Link>
          </div>

          {/* Primary 3-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group flex flex-col rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_64px_rgba(0,0,0,0.11)]"
                style={{ border: "1px solid #e0e0e0", boxShadow: "0 2px 8px rgba(0,0,0,0.045)" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "196px" }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(155deg, ${p.accent}f2 0%, ${p.accent}b8 50%, ${p.accent}50 100%)` }} />
                  <span className="absolute top-4 right-4 text-[11px] font-bold tracking-[0.12em] px-3 py-1 rounded-full text-white" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.28)" }}>{p.num}</span>
                  <div className="absolute left-5 flex items-center justify-center rounded-[14px] text-white" style={{ bottom: "-28px", width: "56px", height: "56px", background: p.accent, boxShadow: "0 10px 32px rgba(0,0,0,0.28)", border: "3px solid #fff" }}>{p.icon}</div>
                </div>
                {/* Body */}
                <div className="p-7 pt-10 flex-1 flex flex-col">
                  <h3 className="text-[18px] font-bold tracking-[-0.025em] text-[#0c0c0c] mb-2.5 group-hover:text-[#326d6d] transition-colors leading-snug">{p.title}</h3>
                  <p className="text-[13.5px] text-[#6a6a6a] leading-[1.7] mb-5">{p.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-[13px] text-[#1a1a1a] flex gap-2.5 items-center">
                        <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(50,109,109,0.10)" }}>
                          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#326d6d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l3 3 7-7" /></svg>
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-bold pt-4 border-t border-[#f0f0f0]" style={{ color: "#326d6d" }}>
                    Learn more <span className="transition-transform group-hover:translate-x-1 inline-flex"><ArrowRight /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Supporting services row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            {addons.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="flex flex-col gap-3.5 p-6 rounded-[16px] bg-white hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                style={{ border: "1px solid #e6e6e6" }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0" style={{ background: "rgba(50,109,109,0.09)", color: "#326d6d" }}>
                    {addonIcons[s.title]}
                  </span>
                  <span className="text-[10.5px] font-bold tracking-[0.1em] uppercase px-2.5 py-0.5 rounded-full" style={{ background: "rgba(50,109,109,0.08)", color: "#326d6d" }}>
                    {s.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0c0c0c] mb-1.5 group-hover:text-[#326d6d] transition-colors leading-snug">{s.title}</h3>
                  <p className="text-[13px] text-[#7a7a7a] leading-[1.6]">{s.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[12px] font-bold mt-auto pt-2 border-t border-[#f2f2f2]" style={{ color: "#326d6d" }}>
                  Learn more <span className="transition-transform group-hover:translate-x-0.5 inline-flex"><ArrowRight /></span>
                </span>
              </Link>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-8 rounded-[18px] flex items-center justify-between gap-6 px-8 py-5 flex-wrap" style={{ background: "#0c0c0c" }}>
            <div>
              <p className="text-white font-semibold text-[15px] mb-0.5 tracking-[-0.02em]">Ready to ship your AI product?</p>
              <p className="text-[#888] text-[13px]">Fixed scope. Fixed price. Production-grade from day one.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold px-5 py-2.5 rounded-[9px] whitespace-nowrap hover:opacity-90 transition-all"
              style={{ background: "#326d6d", color: "#fff" }}
            >
              Book a Free Call <ArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* ════ INTEGRATION & AUTOMATION FLOW ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">Integration &amp; Automation</p></div>
              <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c] leading-[1.1] mb-4" style={{ fontSize: "clamp(26px,3vw,38px)" }}>Your tools and AI,<br />finally working together.</h2>
              <p className="text-[15px] text-[#6a6a6a] leading-[1.7] mb-6 max-w-[440px]">We sit an AI layer between your existing systems and the actions you want automated — so data flows in, intelligence happens, and the right thing happens next. No brittle scripts. No manual copy-paste.</p>
              <ul className="flex flex-col gap-2.5 mb-7 max-w-[420px]">
                {["Trigger from uploads, emails, webhooks, or forms", "AI classifies, extracts, decides, and drafts", "Routes results to the tools your team already uses", "Monitored and logged, with human-in-the-loop where it matters"].map((t) => (
                  <li key={t} className="text-[13.5px] text-[#1a1a1a] flex gap-2.5 items-start"><Check /> {t}</li>
                ))}
              </ul>
              <Link href="/custom-software" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white px-5 py-2.5 rounded-[8px] hover:opacity-90 transition-all" style={{ background: "#326d6d" }}>Explore integrations <ArrowRight /></Link>
            </div>

            {/* flow graph */}
            <div className="rounded-[24px] p-6 relative overflow-hidden" style={{ background: "radial-gradient(120% 120% at 50% 0%, #15202b 0%, #0d1016 60%)", boxShadow: "0 24px 64px rgba(0,0,0,0.22)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "radial-gradient(circle at 50% 40%, #000 55%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle at 50% 40%, #000 55%, transparent 100%)" }} />
              <svg viewBox="0 0 520 300" className="relative w-full block" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }} role="img" aria-label="SofGent AI layer connecting your sources to your tools">
                <defs>
                  <linearGradient id="wireL" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#326d6d" stopOpacity="0.25" /><stop offset="1" stopColor="#67e8f9" stopOpacity="0.9" /></linearGradient>
                  <linearGradient id="wireR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#67e8f9" stopOpacity="0.9" /><stop offset="1" stopColor="#326d6d" stopOpacity="0.25" /></linearGradient>
                  <radialGradient id="hubGlow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="#326d6d" stopOpacity="0.6" /><stop offset="1" stopColor="#326d6d" stopOpacity="0" /></radialGradient>
                </defs>

                <text x="86" y="20" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontWeight="700" letterSpacing="1.4">YOUR SOURCES</text>
                <text x="434" y="20" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontWeight="700" letterSpacing="1.4">YOUR TOOLS</text>

                {/* connectors */}
                {flowSources.map((n, i) => { const cy = 57 + i * 54; return <path key={"s" + i} id={"s" + i} d={`M156 ${cy} C 186 ${cy} 176 149 204 149`} fill="none" stroke="url(#wireL)" strokeWidth="1.5" />; })}
                {flowDest.map((n, i) => { const cy = 57 + i * 54; return <path key={"t" + i} id={"t" + i} d={`M316 149 C 344 149 334 ${cy} 364 ${cy}`} fill="none" stroke="url(#wireR)" strokeWidth="1.5" />; })}

                {/* animated data pulses */}
                {flowSources.map((n, i) => (<circle key={"sd" + i} r="2.6" fill="#67e8f9" opacity="0.9"><animateMotion dur="2.4s" begin={`${-i * 0.6}s`} repeatCount="indefinite"><mpath href={`#s${i}`} /></animateMotion></circle>))}
                {flowDest.map((n, i) => (<circle key={"td" + i} r="2.6" fill="#a7f3ef" opacity="0.9"><animateMotion dur="2.4s" begin={`${-(1.2 + i * 0.6)}s`} repeatCount="indefinite"><mpath href={`#t${i}`} /></animateMotion></circle>))}

                {/* source nodes */}
                {flowSources.map((n, i) => { const y = 36 + i * 54; return (
                  <g key={"sn" + i}>
                    <rect x="16" y={y} width="140" height="42" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                    <circle cx="35" cy={y + 21} r="4" fill={n.color} />
                    <text x="49" y={y + 25} fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="600">{n.label}</text>
                  </g>); })}

                {/* tool nodes */}
                {flowDest.map((n, i) => { const y = 36 + i * 54; return (
                  <g key={"tn" + i}>
                    <rect x="364" y={y} width="140" height="42" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                    <circle cx="383" cy={y + 21} r="4" fill={n.color} />
                    <text x="397" y={y + 25} fill="rgba(255,255,255,0.9)" fontSize="11" fontWeight="600">{n.label}</text>
                  </g>); })}

                {/* hub */}
                <ellipse cx="260" cy="149" rx="96" ry="84" fill="url(#hubGlow)" />
                <rect x="200" y="97" width="120" height="104" rx="18" fill="none" stroke="#67e8f9" strokeWidth="1.4" strokeOpacity="0.5"><animate attributeName="stroke-opacity" values="0.5;0.08;0.5" dur="2.8s" repeatCount="indefinite" /></rect>
                <rect x="204" y="101" width="112" height="96" rx="16" fill="#326d6d" stroke="rgba(103,232,249,0.4)" strokeWidth="1" />
                <g transform="translate(249,112) scale(0.72)" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none">
                  <path d="M8 15a7 7 0 0 1 14 0" /><path d="M15 22a7 7 0 0 1-7-7" /><path d="M15 22a7 7 0 0 0 7-7" /><circle cx="15" cy="15" r="1.6" fill="#fff" stroke="none" />
                </g>
                <text x="260" y="154" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" letterSpacing="-0.3">SofGent</text>
                <text x="260" y="169" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" letterSpacing="-0.3">AI Layer</text>
                <text x="260" y="186" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="9" letterSpacing="0.2">classify · decide · act</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PROCESS ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0", background: "linear-gradient(135deg, #edf6f6 0%, #f5fafa 50%, #f0f8f8 100%)" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">How we work</p></div>
              <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c] leading-[1.1]" style={{ fontSize: "clamp(26px,3vw,38px)" }}>A clear process. Zero surprises.</h2>
            </div>
            <Link href="/how-we-build-saas" className="text-[13px] font-medium text-[#6a6a6a] hover:text-[#326d6d] transition-colors flex items-center gap-1">Full process <ArrowRight /></Link>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative bg-white rounded-[14px] p-5" style={{ border: "0.5px solid rgba(50,109,109,0.15)", boxShadow: "0 2px 12px rgba(50,109,109,0.06)" }}>
                {i < steps.length - 1 && (<div className="absolute hidden md:flex items-center justify-center" style={{ right: "-14px", top: "22px", zIndex: 10 }}><div className="text-[10px] font-bold" style={{ color: "#326d6d", opacity: 0.4 }}>→</div></div>)}
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold text-white mb-4" style={{ background: "linear-gradient(135deg, #326d6d 0%, #1e4848 100%)" }}>{step.n}</div>
                <div className="inline-block text-[9.5px] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full mb-2" style={{ background: "rgba(50,109,109,0.1)", color: "#326d6d" }}>{step.period}</div>
                <div className="text-[13px] font-semibold text-[#0c0c0c] mb-1.5">{step.title}</div>
                <div className="text-[12px] text-[#6a6a6a] leading-[1.6]">{step.body}</div>
              </div>
            ))}
          </div>

          {/* Why we ship this fast */}
          <div className="mt-8 rounded-[16px] p-6 md:p-7" style={{ background: "#fff", border: "1px solid #e6e6e6" }}>
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase mb-1.5" style={{ color: "#326d6d" }}>Why we can ship in 4–6 weeks</p>
            <p className="text-[13.5px] text-[#6a6a6a] leading-[1.65] mb-5 max-w-[640px]">Speed comes from discipline, not shortcuts. We commit to a tight, fixed scope up front and build on architecture we&apos;ve shipped before — so the weeks go into your product, not boilerplate.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { t: "Fixed, focused scope", d: "We lock a narrow MVP scope before sprint one — no creep, no moving targets." },
                { t: "Proven architecture", d: "Battle-tested foundations and reusable building blocks, not a blank repo." },
                { t: "AI-native tooling", d: "We build with AI-assisted workflows that compress the grind work." },
                { t: "Senior, lean team", d: "You work directly with the engineers building it — no layers, no ramp-up." },
              ].map((r) => (
                <div key={r.t} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(50,109,109,0.10)" }}>
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

      {/* ════ WORK ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#9a9a9a] mb-2">Selected work</p>
              <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c]" style={{ fontSize: "clamp(26px,3vw,38px)" }}>Shipped to production.</h2>
            </div>
            <Link href="/projects" className="text-[13px] font-medium text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors flex items-center gap-1">All projects <ArrowRight /></Link>
          </div>
          {/* Featured live client work */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase" style={{ color: "#22c55e" }}>Live client work</p>
          </div>
          <div id="live-projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {liveProjects.map((p) => (
              <Link key={p._id} href={`/live-projects/${p.slug}`} className="flex flex-col group rounded-[12px] overflow-hidden" style={{ border: "1px solid #e6e6e6" }}>
                <div className="relative overflow-hidden" style={{ height: "160px", borderBottom: "0.5px solid #eaeaea" }}>
                  <img src={p.imageUrl} alt={p.imageAlt || p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0" style={{ background: "rgba(12,12,12,0.20)" }} />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: "rgba(0,0,0,0.45)", letterSpacing: "0.06em" }}>LIVE</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(50,109,109,0.7)", color: "#fff", letterSpacing: "0.04em" }}>{p.eyebrow}</span>
                  </div>
                </div>
                <div className="p-5 hover:bg-[#fafafa] transition-colors flex flex-col flex-1">
                  <h3 className="text-[14px] font-semibold text-[#0c0c0c] mb-1.5 group-hover:text-[#326d6d] transition-colors leading-snug">{p.title}</h3>
                  <p className="text-[13px] text-[#6a6a6a] leading-[1.6] mb-4">{p.description}</p>
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {p.technologies?.map((t) => (<span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full text-[#6a6a6a]" style={{ background: "#f5f5f5", border: "0.5px solid #eaeaea" }}>{t}</span>))}
                  </div>
                  <div className="flex flex-col gap-1.5 mb-4">
                    {p.highlights?.map((highlight) => (<div key={`${highlight.value}-${highlight.label}`} className="flex items-baseline gap-2 px-3 py-1.5 rounded-[8px]" style={{ background: "rgba(50,109,109,0.06)", border: "0.5px solid rgba(50,109,109,0.14)" }}><span className="text-[12px] font-semibold shrink-0" style={{ color: "#326d6d" }}>{highlight.value}</span><span className="text-[10.5px] min-w-0 truncate" style={{ color: "#326d6d", opacity: 0.8 }}>{highlight.label}</span></div>))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold mt-auto" style={{ color: "#326d6d" }}>View project <ArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>

          {/* Case studies */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 rounded-full" style={{ background: "#326d6d" }} />
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase" style={{ color: "#326d6d" }}>Case studies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredStudies.map((s) => (
              <Link
                key={s._id}
                href={`/projects/${s.slug}`}
                className="group flex flex-col rounded-[16px] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.10)]"
                style={{ border: "1px solid #e6e6e6" }}
              >
                <div className="relative overflow-hidden" style={{ height: "150px" }}>
                  <img src={s.thumbnail || "/images/case-studies/knowledge-platform.svg"} alt={s.thumbnailAlt || s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(30,72,72,0.55) 0%, rgba(50,109,109,0.20) 60%, transparent 100%)" }} />
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full text-white" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)" }}>Case study</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[15.5px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2 group-hover:text-[#326d6d] transition-colors leading-snug">{s.title}</h3>
                  <p className="text-[12.5px] text-[#6a6a6a] leading-[1.6] mb-4">{s.description}</p>
                  {s.outcomes?.[0] && (
                    <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-[9px]" style={{ background: "rgba(50,109,109,0.06)", border: "0.5px solid rgba(50,109,109,0.14)" }}>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#326d6d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M3 8l3 3 7-7" /></svg>
                      <span className="text-[12px] font-semibold" style={{ color: "#326d6d" }}>{s.outcomes[0]}</span>
                    </div>
                  )}
                  {(s.technologies?.length ?? 0) > 0 && (
                    <div className="flex gap-1.5 flex-wrap mb-5">
                      {s.technologies!.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full text-[#6a6a6a]" style={{ background: "#f5f5f5", border: "0.5px solid #eaeaea" }}>{t}</span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold mt-auto pt-4 border-t border-[#f0f0f0]" style={{ color: "#326d6d" }}>
                    Read case study <span className="transition-transform group-hover:translate-x-1 inline-flex"><ArrowRight /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════ DELIVERY COMMITMENT ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">Why SofGent</p></div>
            <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c] leading-[1.1]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>What our delivery commitment includes.</h2>
          </div>
          <div className="rounded-[16px] overflow-x-auto" style={{ border: "1px solid #e6e6e6" }}>
            <div style={{ minWidth: "560px" }}>
              <div className="grid" style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }}>
                <div className="p-4 text-[12px] font-bold uppercase tracking-[0.04em] text-[#0c0c0c]" style={{ background: "#f7f7f7" }}>&nbsp;</div>
                <div className="p-4 text-[12px] font-bold uppercase tracking-[0.04em] text-white text-center" style={{ background: "#326d6d" }}>Commitment</div>
                <div className="p-4 text-[12px] font-bold uppercase tracking-[0.04em] text-[#0c0c0c] text-center" style={{ background: "#f7f7f7" }}>How it works</div>
                <div className="p-4 text-[12px] font-bold uppercase tracking-[0.04em] text-[#0c0c0c] text-center" style={{ background: "#f7f7f7" }}>Handoff</div>
              </div>
              {compareRows.map((r) => (
                <div key={r.feat} className="grid items-center" style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1fr", borderTop: "1px solid #eaeaea" }}>
                  <div className="p-4 text-[13.5px] font-semibold text-[#0c0c0c]">{r.feat}</div>
                  <div className="p-4 text-[13px] font-semibold text-center text-[#0c0c0c]" style={{ background: "rgba(50,109,109,0.08)" }}>{r.us}</div>
                  <div className="p-4 text-[13px] text-center text-[#9a9a9a]">{r.fast}</div>
                  <div className="p-4 text-[13px] text-center text-[#9a9a9a]">{r.inhouse}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ BUILT FOR (personas + security) ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">Built for</p></div>
            <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>Whoever owns the outcome.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {personas.map((p) => (
              <div key={p.title} className="rounded-[16px] p-6 bg-white" style={{ border: "1px solid #e6e6e6" }}>
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4" style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}>{p.icon}</div>
                <h4 className="text-[16px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{p.title}</h4>
                <p className="text-[13.5px] text-[#6a6a6a] leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-x-7 gap-y-3 flex-wrap mt-12 pt-9" style={{ borderTop: "1px solid #eaeaea" }}>
            {security.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#1a1a1a]"><span style={{ color: "#326d6d" }}>{s.icon}</span>{s.label}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ RESULTS ════ */}
      <section className="border-b border-[#eaeaea] bg-[#f7f7f7]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#9a9a9a] mb-2">Delivery evidence</p>
            <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>Work shipped to production.</h2>
            <p className="text-[14px] text-[#9a9a9a] mt-3">Live client platforms and the delivery controls included in our engagements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-[12px] overflow-hidden bg-white" style={{ border: "0.5px solid #eaeaea" }}>
            {results.map((r, i) => (
              <div key={r.label} className="p-6" style={i < results.length - 1 ? { borderRight: "0.5px solid #eaeaea" } : {}}>
                <p className="text-[10.5px] font-semibold tracking-[0.07em] uppercase text-[#bbb] mb-4">{r.label}</p>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[17px] font-medium text-[#ccc] line-through">{r.from}</span>
                  <span className="text-[12px] text-[#326d6d]">→</span>
                  <span className="text-[24px] font-bold text-[#0c0c0c] tracking-[-0.03em]">{r.to}</span>
                </div>
                <p className="text-[13px] text-[#6a6a6a] leading-[1.65] mb-5">{r.body}</p>
                <div className="flex items-center gap-2.5 pt-4 border-t border-[#eaeaea]">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ background: "rgba(50,109,109,0.09)", color: "#326d6d" }}>{r.initials}</div>
                  <div><div className="text-[12px] font-semibold text-[#0c0c0c]">{r.client}</div><div className="text-[10px] text-[#9a9a9a]">{r.service}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PRICING + LAUNCH SUPPORT ════ */}
      <section className="border-b border-[#eaeaea] bg-[#f7f7f7]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#9a9a9a] mb-2">Engagements</p>
            <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c] leading-[1.1]" style={{ fontSize: "clamp(24px,3vw,36px)" }}>Fixed scope. Fixed price.<br />No surprise invoices.</h2>
            <p className="text-[14px] text-[#9a9a9a] mt-3 max-w-[480px] mx-auto">Every engagement is scoped on the first call. You&apos;ll know exactly what you get, when, and for how much before we start.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricing.map((p) => (
              <div key={p.name} className="rounded-[20px] p-7 bg-white flex flex-col relative" style={{ border: p.featured ? "1.5px solid #326d6d" : "1px solid #e6e6e6", boxShadow: p.featured ? "0 12px 36px rgba(0,0,0,0.09)" : "none" }}>
                {p.featured && (<span className="absolute -top-2.5 left-7 text-[10px] font-bold uppercase tracking-[0.06em] text-white px-3 py-1 rounded-full" style={{ background: "#326d6d" }}>Most popular</span>)}
                <div className="text-[14px] font-bold text-[#326d6d] mb-3">{p.name}</div>
                <div className="text-[32px] font-bold tracking-[-0.04em] text-[#0c0c0c]">{p.amt}</div>
                <p className="text-[13px] text-[#6a6a6a] leading-[1.6] mt-3 mb-5">{p.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {p.list.map((l) => (<li key={l} className="text-[13px] text-[#1a1a1a] flex gap-2.5 items-start"><Check /> {l}</li>))}
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-[8px] transition-all hover:opacity-90" style={p.featured ? { background: "#326d6d", color: "#fff" } : { border: "0.5px solid #e0e0e0", color: "#0c0c0c" }}>{p.cta}</Link>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 rounded-[20px] p-7 mt-6" style={{ background: "rgba(50,109,109,0.08)", border: "1px solid rgba(50,109,109,0.2)" }}>
            <div className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center shrink-0 text-white" style={{ background: "#326d6d" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <div>
              <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-1">Launch quality and support</h3>
              <p className="text-[14px] text-[#1a1a1a] leading-[1.6]">Before launch, we verify the agreed acceptance criteria, production configuration, monitoring, and rollback path. Thirty days of post-launch support are included for defects within the agreed scope.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="border-b border-[#eaeaea]" style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#9a9a9a] mb-2">FAQ</p>
              <h2 className="font-bold tracking-[-0.035em] text-[#0c0c0c] mb-3" style={{ fontSize: "clamp(24px,3vw,34px)" }}>Questions, answered.</h2>
              <p className="text-[14px] text-[#9a9a9a] mb-6">Still unsure? Book a free 30-minute call and we&apos;ll talk specifics.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white px-5 py-2.5 rounded-[8px] hover:opacity-90 transition-all" style={{ background: "#0c0c0c" }}>Book a Call <ArrowRight /></Link>
            </div>
            <div>
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-[#eaeaea]">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 text-[15.5px] font-semibold text-[#0c0c0c]">
                    {f.q}
                    <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[16px] text-[#9a9a9a] transition-transform group-open:rotate-45" style={{ border: "1px solid #eaeaea" }}>+</span>
                  </summary>
                  <p className="text-[14px] text-[#6a6a6a] leading-[1.7] pb-5 max-w-[540px]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="relative overflow-hidden rounded-[24px] grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10" style={{ background: "#0c0c0c", padding: "64px 56px" }}>
            <div className="absolute pointer-events-none" style={{ top: "-100px", left: "-80px", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(50,109,109,0.4) 0%, transparent 70%)" }} />
            <div className="absolute pointer-events-none" style={{ bottom: "-100px", right: "-60px", width: "280px", height: "280px", background: "radial-gradient(circle, rgba(103,232,249,0.1) 0%, transparent 70%)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-4" style={{ color: "#67e8f9", background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.15)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                Free 30-min consultation
              </div>
              <h2 className="font-bold tracking-[-0.035em] text-white leading-[1.08] mb-3" style={{ fontSize: "clamp(26px,3vw,40px)" }}>Ready to ship your<br />AI product?</h2>
              <p className="text-[15px] leading-[1.65] max-w-[420px]" style={{ color: "rgba(255,255,255,0.5)" }}>Book a Call. We&apos;ll scope your project, give you a timeline, and tell you exactly what it&apos;ll take.</p>
            </div>
            <div className="relative flex flex-col gap-2 shrink-0">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-[#0c0c0c] bg-white px-8 py-3.5 rounded-[10px] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap">Book a Call <ArrowRight /></Link>
              <Link href="/projects" className="inline-flex items-center justify-center text-[13.5px] font-medium px-8 py-3.5 rounded-[10px] transition-colors whitespace-nowrap" style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.14)" }}>See Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
