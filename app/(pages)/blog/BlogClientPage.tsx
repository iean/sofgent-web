"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { SanityBlogPostSummary } from "@/lib/sanity/types";

// ── Types ────────────────────────────────────────────────────
type PostCat = "all" | "blog" | "case" | "guide" | "insight";

interface Post {
  cat: Exclude<PostCat, "all">;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  img: string;
  slug: string;
  featured?: boolean;
  authorInitials?: string;
  authorName?: string;
}

// ── Static fallback data ─────────────────────────────────────
const FEATURED: Post = {
  cat: "blog",
  tag: "Featured · Blog",
  tagColor: "#326d6d",
  title: "Why Most AI SaaS Projects Fail in the First 60 Days — And How We Prevent It",
  excerpt:
    "The failure pattern is almost always the same: unclear scope, no production mindset, and an AI layer bolted on after the fact. Here's the process we use to ensure every project ships and sticks.",
  date: "Jun 12, 2026",
  read: "8 min read",
  img: "/images/services/software-development.webp",
  slug: "why-most-ai-saas-projects-fail",
  authorInitials: "MS",
  authorName: "Masud S.",
};

const POSTS: Post[] = [
  {
    cat: "blog",
    tag: "Blog",
    tagColor: "#326d6d",
    title: "How We Built a Document Intelligence System in 3 Weeks for a UK Care Provider",
    excerpt:
      "End-to-end OCR, classification, and structured extraction — deployed to production with zero manual review. A full technical walkthrough.",
    date: "Jun 9, 2026",
    read: "6 min read",
    img: "/images/services/image-processing.webp",
    slug: "document-intelligence-system-3-weeks",
  },
  {
    cat: "case",
    tag: "Case Study",
    tagColor: "#7c3aed",
    title: "Haven: From 6-Month Manual Process to Fully Automated in 18 Days",
    excerpt:
      "How we replaced a 6-month document review workflow with an AI pipeline — and launched with zero critical bugs on day one.",
    date: "Jun 3, 2026",
    read: "5 min read",
    img: "/images/project/haven/HOME_Financing.jpg",
    slug: "haven-automation-case-study",
  },
  {
    cat: "guide",
    tag: "Guide",
    tagColor: "#0369a1",
    title: "The Founder's Guide to Scoping an AI MVP: What to Decide Before You Write Code",
    excerpt:
      "Scope creep kills AI projects. This is the framework we use to lock in scope before sprint one — including the 5 questions every founder must answer first.",
    date: "May 28, 2026",
    read: "10 min read",
    img: "/images/services/software-development.webp",
    slug: "founders-guide-scoping-ai-mvp",
  },
  {
    cat: "blog",
    tag: "Blog",
    tagColor: "#326d6d",
    title: "Claude vs OpenAI for Production AI: Which Model Actually Ships Better?",
    excerpt:
      "We've shipped products with both. Here's an honest breakdown of where each model wins — based on real production use, not benchmarks.",
    date: "May 21, 2026",
    read: "7 min read",
    img: "/images/services/system-integration.webp",
    slug: "claude-vs-openai-production",
  },
  {
    cat: "insight",
    tag: "Insight",
    tagColor: "#b45309",
    title: "Tokens Aren't Spend — They're Units of Work. Here's Why That Changes Pricing.",
    excerpt:
      "Most companies measure AI cost in dollars per API call. The ones actually getting ROI measure it in work completed per dollar. A reframe that changes everything.",
    date: "May 14, 2026",
    read: "4 min read",
    img: "/images/services/managed-security.webp",
    slug: "tokens-are-units-of-work",
  },
  {
    cat: "guide",
    tag: "Guide",
    tagColor: "#0369a1",
    title: "RAG in Production: The Practical Setup Nobody Writes About",
    excerpt:
      "Everyone writes about how RAG works in theory. Here's what the actual production setup looks like — chunking strategy, embedding models, retrieval scoring, and where it breaks.",
    date: "May 7, 2026",
    read: "12 min read",
    img: "/images/services/dev-ops.webp",
    slug: "rag-in-production-practical",
  },
  {
    cat: "case",
    tag: "Case Study",
    tagColor: "#7c3aed",
    title: "Staffing SaaS MVP: Scoped, Built, and Shipped in 21 Days",
    excerpt:
      "How we turned a care operations brief into a working AI-assisted scheduling tool — live in production, zero onboarding issues, 40% fewer scheduling errors week one.",
    date: "Apr 30, 2026",
    read: "5 min read",
    img: "/images/project/haven/home_card_staffing.jpg",
    slug: "staffing-saas-mvp-21-days",
  },
  {
    cat: "blog",
    tag: "Blog",
    tagColor: "#326d6d",
    title: "What \"Production-Ready\" Actually Means for an AI Product in 2026",
    excerpt:
      "Not just \"it runs.\" Monitoring, fallback logic, rate-limit handling, cost controls, and the 12 other things that separate a demo from a product people pay for.",
    date: "Apr 22, 2026",
    read: "9 min read",
    img: "/images/services/software-testing.webp",
    slug: "what-production-ready-means-ai",
  },
  // hidden initially
  {
    cat: "blog",
    tag: "Blog",
    tagColor: "#326d6d",
    title: "The Hidden Cost of Building AI Features Without Data Infrastructure",
    excerpt:
      "Teams rush to add AI features on top of messy data. It always comes back to bite them. Here's how to build the foundation before the model.",
    date: "Apr 15, 2026",
    read: "7 min read",
    img: "/images/services/system-maintenance.webp",
    slug: "hidden-cost-ai-without-data-infra",
  },
  {
    cat: "case",
    tag: "Case Study",
    tagColor: "#7c3aed",
    title: "Supported Living Portal: Building Compliance-Ready Infrastructure from Zero",
    excerpt:
      "Audit-ready dashboards, data versioning, and zero legacy dependencies — delivered in 4–6 weeks for a supported living provider with strict regulatory requirements.",
    date: "Apr 8, 2026",
    read: "5 min read",
    img: "/images/project/haven/home_card_supported_living.jpg",
    slug: "supported-living-portal-compliance",
  },
  {
    cat: "guide",
    tag: "Guide",
    tagColor: "#0369a1",
    title: "Next.js App Router for AI Products: The Architecture Decisions That Matter",
    excerpt:
      "Server components, streaming responses, edge functions — here's how we wire Next.js App Router for AI-heavy products that need to be fast and reliable.",
    date: "Mar 31, 2026",
    read: "11 min read",
    img: "/images/services/ui-ux-design.webp",
    slug: "nextjs-app-router-ai-products",
  },
  {
    cat: "insight",
    tag: "Insight",
    tagColor: "#b45309",
    title: "Why Founders Underestimate the Ops Layer of an AI Product",
    excerpt:
      "The AI layer is the easy part. It's the orchestration, rate limiting, retry logic, and cost management that determine whether the product survives real users.",
    date: "Mar 24, 2026",
    read: "5 min read",
    img: "/images/services/managed-security.webp",
    slug: "founders-underestimate-ops-layer",
  },
  {
    cat: "guide",
    tag: "Guide",
    tagColor: "#0369a1",
    title: "How to Evaluate an AI Development Agency: 8 Questions That Actually Matter",
    excerpt:
      "Speed claims are easy. Here's the checklist we'd use if we were hiring someone else — covering architecture, delivery process, post-launch support, and red flags.",
    date: "Mar 17, 2026",
    read: "8 min read",
    img: "/images/services/software-development.webp",
    slug: "evaluate-ai-development-agency",
  },
  {
    cat: "blog",
    tag: "Blog",
    tagColor: "#326d6d",
    title: "Document Automation for Fintech: Why OCR Alone Isn't Enough",
    excerpt:
      "OCR gives you text. Understanding gives you data. The difference between them is what separates an invoice scanner from a real document intelligence system.",
    date: "Mar 10, 2026",
    read: "6 min read",
    img: "/images/services/image-processing.webp",
    slug: "document-automation-fintech-ocr",
  },
];

const INITIAL_VISIBLE = 8;

// TABS counts are computed dynamically inside the component using allPosts
const STATIC_TABS: { label: string; value: PostCat }[] = [
  { label: "All", value: "all" },
  { label: "Blog", value: "blog" },
  { label: "Case Study", value: "case" },
  { label: "Guide", value: "guide" },
  { label: "Insight", value: "insight" },
];

const TOPICS = [
  "AI Development",
  "Document Automation",
  "SaaS MVP",
  "Data Infrastructure",
  "Next.js",
  "Claude AI",
  "Product Design",
  "DevOps",
  "Case Studies",
];

const POPULAR = [
  { n: "01", title: "Why Most AI SaaS Projects Fail in the First 60 Days", tag: "Blog · 8 min", slug: "why-most-ai-saas-projects-fail" },
  { n: "02", title: "RAG in Production: The Practical Setup Nobody Writes About", tag: "Guide · 12 min", slug: "rag-in-production-practical" },
  { n: "03", title: "Haven: From 6-Month Process to Automated in 18 Days", tag: "Case Study · 5 min", slug: "haven-automation-case-study" },
  { n: "04", title: "Claude vs OpenAI for Production AI: Which Ships Better?", tag: "Blog · 7 min", slug: "claude-vs-openai-production" },
];

// ── Arrow icon ────────────────────────────────────────────────
function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Map Sanity category string → PostCat ──────────────────────
function mapCat(categories?: string[]): Exclude<PostCat, "all"> {
  const first = (categories?.[0] ?? "").toLowerCase();
  if (first.includes("case")) return "case";
  if (first.includes("guide")) return "guide";
  if (first.includes("insight")) return "insight";
  return "blog";
}

// ── Convert Sanity post → local Post ─────────────────────────
const CAT_COLORS: Record<Exclude<PostCat, "all">, string> = {
  blog: "#326d6d",
  case: "#7c3aed",
  guide: "#0369a1",
  insight: "#b45309",
};
const CAT_LABELS: Record<Exclude<PostCat, "all">, string> = {
  blog: "Blog",
  case: "Case Study",
  guide: "Guide",
  insight: "Insight",
};

function toPost(s: SanityBlogPostSummary): Post {
  const cat = mapCat(s.categories);
  return {
    cat,
    tag: s.categories?.[0] ?? CAT_LABELS[cat],
    tagColor: CAT_COLORS[cat],
    title: s.title,
    excerpt: s.excerpt,
    date: s.date ? new Date(s.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "",
    read: s.readTime,
    img: s.imageUrl ?? "/images/services/software-development.webp",
    slug: s.slug,
  };
}

// ── Main client component ─────────────────────────────────────
interface BlogClientPageProps {
  sanityPosts?: SanityBlogPostSummary[];
}

export default function BlogClientPage({ sanityPosts }: BlogClientPageProps) {
  const [activeFilter, setActiveFilter] = useState<PostCat>("all");
  const [showAll, setShowAll] = useState(false);
  const [activeTopic, setActiveTopic] = useState("AI Development");

  // Merge: use Sanity posts if available, else hardcoded fallback
  const allPosts = useMemo<Post[]>(() => {
    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts.map(toPost);
    }
    return POSTS;
  }, [sanityPosts]);

  const featured = useMemo<Post>(() => {
    if (sanityPosts && sanityPosts.length > 0) {
      const first = sanityPosts[0];
      return { ...toPost(first), authorInitials: first.author?.slice(0, 2).toUpperCase() ?? "SG", authorName: first.author };
    }
    return FEATURED;
  }, [sanityPosts]);

  const filtered =
    activeFilter === "all" ? allPosts : allPosts.filter((p) => p.cat === activeFilter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = !showAll && filtered.length > INITIAL_VISIBLE;

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #e6e6e6", paddingTop: "56px" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <p
            className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2.5"
            style={{ color: "#999" }}
          >
            Resource Library
          </p>
          <h1
            className="font-black tracking-[-0.045em] leading-[1.0] text-[#0c0c0c] mb-3"
            style={{ fontSize: "clamp(36px,4.5vw,58px)" }}
          >
            Insights on building{" "}
            <em className="not-italic" style={{ color: "#326d6d" }}>
              AI products.
            </em>
          </h1>
          <p
            className="text-[15px] leading-[1.65] mb-9"
            style={{ color: "#6a6a6a", maxWidth: "480px" }}
          >
            Practical writing on AI development, document automation, SaaS architecture, and how we
            build — from the team that ships it.
          </p>

          {/* Filter tabs */}
          <div className="flex items-center" style={{ borderTop: "1px solid #e6e6e6" }}>
            {STATIC_TABS.map((tab) => {
              const count = tab.value === "all"
                ? allPosts.length
                : allPosts.filter((p) => p.cat === tab.value).length;
              return (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveFilter(tab.value);
                  setShowAll(false);
                }}
                className={`text-[13px] font-medium px-5 py-[14px] cursor-pointer transition-colors whitespace-nowrap border-b-2 ${
                  tab.value === "all" ? "pl-0" : ""
                }`}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeFilter === tab.value ? "2px solid #0c0c0c" : "2px solid transparent",
                  color: activeFilter === tab.value ? "#0c0c0c" : "#6a6a6a",
                  fontWeight: activeFilter === tab.value ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                {tab.label}{" "}
                <span
                  className="text-[11px] font-semibold ml-1.5 px-1.5 py-0.5 rounded-full"
                  style={{
                    background: activeFilter === tab.value ? "rgba(50,109,109,0.1)" : "#f5f5f5",
                    color: activeFilter === tab.value ? "#326d6d" : "#999",
                  }}
                >
                  {count}
                </span>
              </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ─────────────────────────────── */}
      <div className="max-w-[1140px] mx-auto px-8">
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 300px", gap: "64px", padding: "64px 0 96px", alignItems: "start" }}
        >
          {/* ── LEFT: Posts ── */}
          <div>
            {/* Featured post — only show when filter = all */}
            {activeFilter === "all" && (
              <div className="mb-0.5">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="grid overflow-hidden group transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]"
                  style={{
                    gridTemplateColumns: "1fr 1fr",
                    background: "#fff",
                    border: "1px solid #e6e6e6",
                    borderRadius: "16px",
                  }}
                >
                  {/* Image */}
                  <div className="overflow-hidden" style={{ height: "280px" }}>
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  {/* Body */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-3.5"
                        style={{
                          color: "#326d6d",
                          background: "rgba(50,109,109,0.1)",
                          border: "1px solid rgba(50,109,109,0.2)",
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                        {featured.tag}
                      </div>
                      <h2
                        className="font-extrabold tracking-[-0.03em] leading-[1.2] text-[#0c0c0c] mb-3"
                        style={{ fontSize: "clamp(18px,1.8vw,24px)" }}
                      >
                        {featured.title}
                      </h2>
                      <p className="text-[14px] leading-[1.68]" style={{ color: "#6a6a6a" }}>
                        {featured.excerpt}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-3 mt-6 pt-5"
                      style={{ borderTop: "1px solid #f0f0f0" }}
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-extrabold shrink-0"
                        style={{ background: "rgba(50,109,109,0.1)", color: "#326d6d" }}
                      >
                        {featured.authorInitials ?? "SG"}
                      </div>
                      <div>
                        <div className="text-[12.5px] font-semibold text-[#0c0c0c]">{featured.authorName ?? "SofGent"}</div>
                        <div className="text-[12px]" style={{ color: "#999" }}>{featured.date}</div>
                      </div>
                      <span className="ml-auto text-[12px]" style={{ color: "#999" }}>{featured.read}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* List divider */}
            <div
              className="text-[10.5px] font-bold tracking-[0.1em] uppercase py-6"
              style={{ color: "#999", borderBottom: "1px solid #e6e6e6" }}
            >
              {activeFilter === "all" ? "Latest" : STATIC_TABS.find((t) => t.value === activeFilter)?.label}
            </div>

            {/* Post rows */}
            <div className="flex flex-col">
              {visible.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="grid items-start gap-6 py-[22px] group"
                  style={{
                    gridTemplateColumns: "1fr auto",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div>
                    <div
                      className="text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5"
                      style={{ color: post.tagColor }}
                    >
                      {post.tag}
                    </div>
                    <div
                      className="text-[15.5px] font-bold tracking-[-0.02em] leading-[1.3] mb-1.5 transition-colors group-hover:text-[#326d6d]"
                      style={{ color: "#0c0c0c" }}
                    >
                      {post.title}
                    </div>
                    <div className="text-[13px] leading-[1.62]" style={{ color: "#6a6a6a" }}>
                      {post.excerpt}
                    </div>
                    <div className="flex items-center gap-2.5 mt-3">
                      <span className="text-[11.5px]" style={{ color: "#999" }}>{post.date}</span>
                      <span className="w-[3px] h-[3px] rounded-full" style={{ background: "#e6e6e6", display: "block" }} />
                      <span className="text-[11.5px]" style={{ color: "#999" }}>{post.read}</span>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden shrink-0"
                    style={{ width: "120px", height: "80px", borderRadius: "10px" }}
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Load more */}
            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold px-7 py-3 rounded-[9px] transition-colors"
                  style={{ color: "#6a6a6a", border: "1px solid #e6e6e6", background: "none", cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#bbb";
                    (e.currentTarget as HTMLButtonElement).style.color = "#0c0c0c";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#e6e6e6";
                    (e.currentTarget as HTMLButtonElement).style.color = "#6a6a6a";
                  }}
                >
                  Load more articles
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M6.5 2v9M2.5 7.5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="flex flex-col gap-7" style={{ position: "sticky", top: "88px" }}>

            {/* Newsletter */}
            <div
              className="rounded-[14px] p-6"
              style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="text-[14.5px] font-extrabold tracking-[-0.02em] text-white mb-2">
                Stay in the loop.
              </h3>
              <p className="text-[13px] leading-[1.6] mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                Get new articles on AI development, SaaS architecture, and product building — once a week, no noise.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full text-[13px] px-3.5 py-2.5 rounded-[8px] mb-2 outline-none font-[inherit]"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
              <button
                className="w-full text-[13px] font-bold py-2.5 rounded-[8px] text-white transition-colors font-[inherit]"
                style={{ background: "#326d6d", border: "none", cursor: "pointer" }}
              >
                Subscribe
              </button>
            </div>

            {/* Topics */}
            <div
              className="rounded-[14px] p-6"
              style={{ background: "#f7f7f7", border: "1px solid #e6e6e6" }}
            >
              <h3 className="text-[14.5px] font-extrabold tracking-[-0.02em] text-[#0c0c0c] mb-3">
                Topics
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {TOPICS.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className="text-[11.5px] font-semibold px-3 py-1.5 rounded-full transition-colors font-[inherit]"
                    style={{
                      background: activeTopic === topic ? "rgba(50,109,109,0.1)" : "#fff",
                      border: activeTopic === topic ? "1px solid rgba(50,109,109,0.3)" : "1px solid #e6e6e6",
                      color: activeTopic === topic ? "#326d6d" : "#6a6a6a",
                      cursor: "pointer",
                    }}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular */}
            <div
              className="rounded-[14px] p-6"
              style={{ background: "#f7f7f7", border: "1px solid #e6e6e6" }}
            >
              <h3 className="text-[14.5px] font-extrabold tracking-[-0.02em] text-[#0c0c0c] mb-4">
                Most read
              </h3>
              <div className="flex flex-col gap-4">
                {POPULAR.map((item) => (
                  <Link
                    key={item.n}
                    href={`/blog/${item.slug}`}
                    className="flex gap-3 items-start group"
                  >
                    <span
                      className="text-[22px] font-black tracking-[-0.04em] shrink-0 leading-none mt-0.5"
                      style={{ color: "#e6e6e6" }}
                    >
                      {item.n}
                    </span>
                    <div>
                      <div className="text-[13px] font-semibold text-[#0c0c0c] leading-[1.4] transition-colors group-hover:text-[#326d6d]">
                        {item.title}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: "#999" }}>{item.tag}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-[14px] p-6"
              style={{ background: "rgba(50,109,109,0.08)", border: "1px solid rgba(50,109,109,0.2)" }}
            >
              <h3 className="text-[14.5px] font-extrabold tracking-[-0.02em] mb-2" style={{ color: "#326d6d" }}>
                Ready to ship?
              </h3>
              <p className="text-[13px] text-[#6a6a6a] leading-[1.6] mb-3.5">
                We build production-ready AI products in 4–6 weeks. Book a free 30-minute call.
              </p>
              <Link
                href="/contact"
                className="block text-center text-[13px] font-bold text-white py-2.5 px-4 rounded-[8px] transition-colors"
                style={{ background: "#326d6d" }}
              >
                Book a Free Call →
              </Link>
            </div>

          </div>
        </div>

        {/* ── CTA STRIP ───────────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-[20px] mb-24"
          style={{
            background: "#0c0c0c",
            padding: "56px 64px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Glow blobs */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-80px",
              left: "-60px",
              width: "240px",
              height: "240px",
              background: "radial-gradient(circle, rgba(50,109,109,0.45) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-60px",
              right: "-40px",
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, rgba(103,232,249,0.1) 0%, transparent 70%)",
            }}
          />
          {/* Stripe texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 40px)",
            }}
          />
          <div className="relative z-10">
            <div
              className="text-[10px] font-bold tracking-[0.1em] uppercase mb-2.5"
              style={{ color: "#67e8f9" }}
            >
              Free 30-min consultation
            </div>
            <h2
              className="font-extrabold tracking-[-0.035em] leading-[1.1] text-white mb-2"
              style={{ fontSize: "clamp(22px,2.5vw,36px)" }}
            >
              Got an AI product idea?
              <br />
              Let&apos;s scope it together.
            </h2>
            <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.42)", maxWidth: "380px" }}>
              We&apos;ll give you a written scope, timeline, and estimate within 48 hours. No obligation.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0c0c0c] px-7 py-3.5 rounded-[10px] transition-colors shrink-0"
            style={{ background: "#fff" }}
          >
            Book a Free Call
            <ArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}
