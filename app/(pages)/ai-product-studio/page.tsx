import Link from "next/link";
import ServicesHero from "@/app/components/services/ServicesHero";
import AiProductStudioPage from "@/app/components/aiProductStudio";
import ServiceGraphic from "@/app/components/graphics/ServiceGraphic";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return getPageMeta("/ai-product-studio");
}

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Bullet({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3 py-3.5 border-b border-[#f0f0f0] last:border-0">
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(50,109,109,0.15)" }}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="#326d6d" strokeWidth="1.8" strokeLinecap="round"><path d="M1.5 4.5l2 2 4-4" /></svg>
      </div>
      <div>
        <div className="text-[14px] font-bold text-[#0c0c0c] mb-0.5 leading-snug">{title}</div>
        <div className="text-[13px] text-[#6a6a6a] leading-[1.6]">{desc}</div>
      </div>
    </div>
  );
}

function Outcome({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3.5 mt-7 p-5 rounded-xl" style={{ background: "rgba(50,109,109,0.07)", border: "1px solid rgba(50,109,109,0.18)" }}>
      <div className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0" style={{ background: "#326d6d" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round"><path d="M3 8l3 3 7-7" /></svg>
      </div>
      <div>
        <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#326d6d] mb-0.5">Typical outcome</div>
        <div className="text-[15px] font-bold tracking-[-0.02em] text-[#0c0c0c]">{text}</div>
      </div>
    </div>
  );
}

function Terminal({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="rounded-[14px] overflow-hidden" style={{ background: "#0f1117", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: "#1a1d26", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-auto font-mono text-[11px]" style={{ color: "rgba(255,255,255,0.28)" }}>{filename}</span>
      </div>
      <div className="p-5 font-mono text-[12px] leading-[1.85] min-h-[220px]" style={{ color: "rgba(255,255,255,0.65)" }}
        dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
}

export default function AIStudioPage() {
  return (
    <main>
      {/* ═══ HERO (v2 interactive) ═══ */}
      <ServicesHero />

      {/* ═══ TRUST STRIP ═══ */}
      <div className="border-b border-[#e4e4e4] py-7 bg-white">
        <div className="max-w-[1140px] mx-auto px-8 flex items-center gap-10 flex-wrap">
          <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#9a9a9a] flex-shrink-0">Trusted by</span>
          <div className="flex items-center gap-8 flex-wrap">
            {["Heart & Haven Care", "Solidarity Center (ACILS)"].map((name) => (
              <span key={name} className="text-[14px] font-bold tracking-[-0.02em] text-[#bbb] hover:text-[#0c0c0c] transition-colors cursor-default">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SERVICE DETAIL SECTIONS ═══ */}
      <div id="services">

        {/* ── 01: Document Automation ── */}
        <section className="border-b border-[#e4e4e4]" style={{ padding: "96px 0" }}>
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="grid gap-10 lg:gap-20 items-start grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#326d6d] mb-3">Service 01 · Document Automation</p>
                <h2 className="font-black tracking-[-0.04em] leading-[1.05] text-[#0c0c0c] mb-4" style={{ fontSize: "clamp(26px, 3vw, 40px)" }}>
                  Turn documents into <em className="not-italic text-[#326d6d]">structured data.</em> Automatically.
                </h2>
                <p className="text-[15px] text-[#6a6a6a] leading-[1.72] mb-8 max-w-[430px]">
                  OCR alone isn&apos;t enough. We build end-to-end document intelligence — classify, extract, validate, and route — eliminating manual review entirely.
                </p>
                <div>
                  <Bullet title="Intelligent classification" desc="AI identifies document type, language, and structure — even with handwritten or scanned inputs." />
                  <Bullet title="Field-level extraction" desc="Pull dates, names, amounts, clauses, and custom fields with high, confidence-scored accuracy out of the box." />
                  <Bullet title="Validation + routing" desc="Confidence scoring, exception handling, and automatic routing to the right workflow or system." />
                  <Bullet title="Deployed in 4–6 weeks" desc="From intake brief to production pipeline — not months, not a PoC. A live system your team uses daily." />
                </div>
                <Outcome text="6-month manual process → fully automated in weeks" />
                <Link href="/projects" className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#326d6d] mt-6 group">
                  See our case studies <span className="group-hover:translate-x-0.5 transition-transform inline-flex"><ArrowRight /></span>
                </Link>
              </div>
              <div>
                <Terminal
                  filename="document-pipeline.ts"
                  code={`<span style="color:#79c0ff">import</span> { <span style="color:#4cd4d4">DocumentAI</span> } <span style="color:#79c0ff">from</span> <span style="color:#a5d6ff">'@sofgent/docai'</span>

<span style="color:#79c0ff">const</span> pipeline = <span style="color:#79c0ff">new</span> <span style="color:#d2a8ff">DocumentAI</span>({
  model: <span style="color:#a5d6ff">'claude-opus-5'</span>,
  confidence_threshold: <span style="color:#79c0ff">0.94</span>,
  fallback: <span style="color:#a5d6ff">'human-review'</span>,
})

<span style="color:#79c0ff">const</span> result = <span style="color:#79c0ff">await</span> pipeline.<span style="color:#d2a8ff">process</span>(invoice)

<span style="color:rgba(255,255,255,0.28)">// → Confidence: 0.98</span>
<span style="color:rgba(255,255,255,0.28)">// → Type: INVOICE · Status: VALID</span>
<span style="color:rgba(255,255,255,0.28)">// → Extracted 14/14 fields</span>
<span style="color:rgba(255,255,255,0.28)">// → Routed to: accounts-payable</span>
<span style="color:rgba(255,255,255,0.28)">// Processing time: 1.2s · Manual review: NOT REQUIRED</span>`}
                />
                <div className="grid grid-cols-2 gap-2.5 mt-4">
                  <div className="rounded-[12px] p-5" style={{ background: "rgba(50,109,109,0.08)", border: "1px solid rgba(50,109,109,0.18)" }}>
                    <div className="text-[20px] font-black line-through tracking-[-0.04em]" style={{ color: "#ccc" }}>Months</div>
                    <div className="text-[17px] font-black mt-1 text-[#326d6d]">↓ Weeks</div>
                    <div className="text-[12px] text-[#6a6a6a] mt-1">Brief to live pipeline</div>
                    <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}>Weeks, not months</div>
                  </div>
                  <div className="rounded-[12px] p-5 border border-[#e4e4e4] bg-[#f6f6f6]">
                    <div className="text-[20px] font-black line-through tracking-[-0.04em]" style={{ color: "#ccc" }}>Manual</div>
                    <div className="text-[17px] font-black mt-1 text-[#0c0c0c]">↓ Automated</div>
                    <div className="text-[12px] text-[#6a6a6a] mt-1">Document review</div>
                    <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}>Fewer hand-offs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02: AI SaaS MVP ── */}
        <section className="border-b border-[#e4e4e4]" style={{ padding: "96px 0", background: "#f6f6f6" }}>
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="grid gap-10 lg:gap-20 items-start grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#326d6d] mb-3">Service 02 · AI SaaS MVP</p>
                <h2 className="font-black tracking-[-0.04em] leading-[1.05] text-[#0c0c0c] mb-4" style={{ fontSize: "clamp(26px, 3vw, 40px)" }}>
                  Your MVP, <em className="not-italic text-[#326d6d]">live in 4–6 weeks.</em> Not 4 months.
                </h2>
                <p className="text-[15px] text-[#6a6a6a] leading-[1.72] mb-8 max-w-[430px]">
                  We scope, architect, and build your AI SaaS product end-to-end — auth, billing, AI features, dashboards, and production deploy. You own everything.
                </p>
                <div>
                  <Bullet title="Fixed scope, fixed timeline" desc="Scope document locked before sprint one. No moving goalposts, no surprise invoices." />
                  <Bullet title="Full-stack AI integration" desc="AI features are first-class citizens — not bolted on after. Built with Claude, OpenAI, or your preferred model." />
                  <Bullet title="Production-grade from day one" desc="Rate limits, fallback logic, error handling, cost controls — built in, not added later." />
                  <Bullet title="You own the code" desc="Full IP transfer. GitHub repo, deploy scripts, architecture docs. Your product, forever." />
                </div>
                <Outcome text="Healthcare staffing platform — scoped, built, and shipped to production" />
                <Link href="/projects/heart-haven-healthcare-staffing" className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#326d6d] mt-6 group">
                  View the Heart &amp; Haven case study <span className="group-hover:translate-x-0.5 transition-transform inline-flex"><ArrowRight /></span>
                </Link>
              </div>
              <div>
                <div className="rounded-[16px] overflow-hidden border border-[#e4e4e4]" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  <div style={{ height: "300px" }}><ServiceGraphic name="mvp" /></div>
                  <div className="p-5 border-t border-[#f0f0f0] bg-white flex gap-2 flex-wrap">
                    {[
                      { label: "Next.js", color: "#326d6d", bg: "rgba(50,109,109,0.08)", border: "rgba(50,109,109,0.20)" },
                      { label: "Tailwind", color: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.18)" },
                      { label: "PostgreSQL", color: "#0369a1", bg: "rgba(3,105,161,0.08)", border: "rgba(3,105,161,0.18)" },
                      { label: "Stripe", color: "#b45309", bg: "rgba(180,83,9,0.08)", border: "rgba(180,83,9,0.15)" },
                      { label: "Claude AI", color: "#6a6a6a", bg: "#f6f6f6", border: "#e4e4e4" },
                    ].map((tag) => (
                      <span key={tag.label} className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}` }}>{tag.label}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03: Data Infrastructure ── */}
        <section className="border-b border-[#e4e4e4]" style={{ padding: "96px 0" }}>
          <div className="max-w-[1140px] mx-auto px-8">
            <div className="grid gap-10 lg:gap-20 items-start grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#326d6d] mb-3">Service 03 · Data Infrastructure</p>
                <h2 className="font-black tracking-[-0.04em] leading-[1.05] text-[#0c0c0c] mb-4" style={{ fontSize: "clamp(26px, 3vw, 40px)" }}>
                  Make your company data <em className="not-italic text-[#326d6d]">AI-ready.</em>
                </h2>
                <p className="text-[15px] text-[#6a6a6a] leading-[1.72] mb-8 max-w-[430px]">
                  Messy, siloed, or unstructured data blocks every AI initiative. We clean, structure, and connect your data so AI products can actually use it.
                </p>
                <div>
                  <Bullet title="Data audit + classification" desc="Full inventory of your data assets — structured, unstructured, and everything in between." />
                  <Bullet title="ETL + schema design" desc="Build clean pipelines that normalize, deduplicate, and version your data automatically." />
                  <Bullet title="Vector + semantic search" desc="Embeddings, RAG pipelines, and retrieval infrastructure so your AI can query company knowledge." />
                  <Bullet title="Monitoring + observability" desc="Dashboards, data quality alerts, and lineage tracking — so you know what's flowing and when." />
                </div>
                <Outcome text="Legacy data stack rebuilt for AI in one 3-week sprint" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[14px] p-5" style={{ background: "rgba(50,109,109,0.08)", border: "1px solid rgba(50,109,109,0.18)" }}>
                  <div className="text-[20px] font-black line-through tracking-[-0.04em]" style={{ color: "#ccc" }}>Weeks</div>
                  <div className="text-[17px] font-black mt-1 text-[#326d6d]">↓ Days</div>
                  <div className="text-[12px] text-[#6a6a6a] mt-1">Migration time</div>
                  <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}>Faster turnaround</div>
                </div>
                <div className="rounded-[14px] p-5 border border-[#e4e4e4] bg-[#f6f6f6]">
                  <div className="text-[24px] font-black text-[#0c0c0c] tracking-[-0.04em] leading-tight">Clean,<br />queryable</div>
                  <div className="text-[12px] text-[#6a6a6a] mt-1.5 leading-[1.5]">Data structured for AI<br />after pipeline rebuild</div>
                  <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}>Deduplicated &amp; versioned</div>
                </div>
                <div className="col-span-2 rounded-[14px] p-5 border border-[#e4e4e4] bg-[#f6f6f6]">
                  <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#9a9a9a] mb-4">Retrieval quality improves each iteration</div>
                  <div className="flex items-end gap-1 h-12">
                    {[22, 33, 44, 56, 68, 80, 90, 97].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i < 3 ? "#e4e4e4" : i < 5 ? "rgba(50,109,109,0.35)" : "#326d6d" }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-[#9a9a9a]">Early</span>
                    <span className="text-[10px] font-bold text-[#326d6d]">Tuned · illustrative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ═══ EXISTING AI STUDIO CONTENT (What We Build pillars + FAQs) ═══ */}
      <AiProductStudioPage />

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden text-center" style={{ background: "#0c0c0c", padding: "96px 40px" }}>
        <div className="absolute pointer-events-none" style={{ top: "-130px", left: "50%", transform: "translateX(-50%)", width: "560px", height: "560px", background: "radial-gradient(circle, rgba(50,109,109,0.28) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative z-10">
          <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: "rgba(103,232,249,0.7)" }}>Free 30-min consultation</p>
          <h2 className="font-black tracking-[-0.05em] leading-[1.0] text-white mb-3.5" style={{ fontSize: "clamp(28px, 4vw, 54px)" }}>
            Got an AI product idea?<br />
            Let&apos;s scope it <span style={{ color: "#67e8f9" }}>together.</span>
          </h2>
          <p className="text-[15px] max-w-[420px] mx-auto mb-10 leading-[1.65]" style={{ color: "rgba(255,255,255,0.6)" }}>
            We&apos;ll give you a written scope, timeline, and estimate within 48 hours. No obligation.
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-bold bg-white text-[#0c0c0c] px-7 py-3.5 rounded-[9px] hover:bg-gray-100 transition-all hover:-translate-y-0.5">
              Book a Free Call <ArrowRight />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-[9px]" style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.15)" }}>
              See our work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
