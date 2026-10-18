import { getBlogPostBySlug, getAllBlogPosts } from "@/app/lib/blogs";
import type { SanityPortableTextBlock, SanityPortableTextSpan } from "@/lib/sanity/types";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/app/components/seo/JsonLd";
import { breadcrumbList, ORG_ID, SITE_URL } from "@/app/components/seo/schema";

// ── generateStaticParams ──────────────────────────────────────
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug.toLowerCase() }));
}

// ── generateMetadata ──────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  const image = post.imageUrl || "/opengraph-image";
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  return {
    title: `${title} | SofGent Blog`,
    description,
    alternates: { canonical: `https://www.sofgent.com/blog/${slug.toLowerCase()}` },
    openGraph: { title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// ── Category utils ────────────────────────────────────────────
const CAT_COLORS: Record<string, string> = {
  blog: "#326d6d",
  "case study": "#7c3aed",
  guide: "#0369a1",
  insight: "#b45309",
};
const CAT_BG: Record<string, string> = {
  blog: "rgba(50,109,109,0.1)",
  "case study": "rgba(124,58,237,0.08)",
  guide: "rgba(3,105,161,0.08)",
  insight: "rgba(180,83,9,0.08)",
};

function getCatStyle(categories?: string[]) {
  const label = (categories?.[0] ?? "blog").toLowerCase();
  return {
    label: categories?.[0] ?? "Blog",
    color: CAT_COLORS[label] ?? "#326d6d",
    bg: CAT_BG[label] ?? "rgba(50,109,109,0.1)",
  };
}

function formatDate(date: string | null) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// ── Heading normalisation ─────────────────────────────────────
// Older posts start their outline at H3, H4 or even H4/H5. Shift heading levels
// so the top level is always H2 (H1 = post title), cap at H4, and give each H2
// a stable anchor id for the table of contents.
type AnchoredBlock = SanityPortableTextBlock & { _anchor?: string };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
}

const HEADING_LEVEL: Record<string, number> = { h2: 2, h3: 3, h4: 4, h5: 5, h6: 6 };

function normalizeHeadings(content: SanityPortableTextBlock[]): AnchoredBlock[] {
  const levels = content.map((b) => HEADING_LEVEL[b.style ?? ""]).filter(Boolean);
  const offset = levels.length ? Math.min(...levels) - 2 : 0;
  const used = new Set<string>();
  return content.map((b) => {
    const level = HEADING_LEVEL[b.style ?? ""];
    if (!level) return b;
    const style = `h${Math.min(level - offset, 4)}`;
    if (style !== "h2") return style === b.style ? b : { ...b, style };
    const text = (b.children ?? []).map((c) => c.text).join("");
    const base = slugify(text) || "section";
    let id = base;
    let n = 2;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    return { ...b, style, _anchor: id };
  });
}

function isOrganisationAuthor(author?: string | null) {
  return !author || /^sofgent( team)?$/i.test(author.trim());
}

// ── Portable Text renderer ────────────────────────────────────
function renderSpans(block: SanityPortableTextBlock) {
  const markDefs = block.markDefs ?? [];
  return (block.children ?? []).map((child: SanityPortableTextSpan, i: number) => {
    const k = child._key ?? `${block._key}-${i}`;
    const linkDef = (child.marks ?? []).reduce<{ href?: string } | null>((found, mark) => {
      if (found) return found;
      return markDefs.find((d) => d._key === mark && d.href) ?? null;
    }, null);

    const isBold = child.marks?.includes("strong");
    const isItalic = child.marks?.includes("em");
    const isCode = child.marks?.includes("code");

    let node: React.ReactNode = child.text;
    if (isCode) node = <code key={k} style={{ background: "rgba(50,109,109,0.08)", color: "#326d6d", padding: "1px 5px", borderRadius: "4px", fontSize: "0.9em", fontFamily: "monospace" }}>{child.text}</code>;
    else if (isBold && isItalic) node = <strong key={k}><em>{child.text}</em></strong>;
    else if (isBold) node = <strong key={k}>{child.text}</strong>;
    else if (isItalic) node = <em key={k}>{child.text}</em>;

    if (linkDef?.href) {
      return <a key={k} href={linkDef.href} target="_blank" rel="noreferrer" style={{ color: "#326d6d", textDecoration: "underline", textUnderlineOffset: "3px" }}>{node ?? child.text}</a>;
    }
    return <React.Fragment key={k}>{node}</React.Fragment>;
  });
}

function renderBlock(block: AnchoredBlock, index: number) {
  const k = block._key ?? `${block._type}-${index}`;

  if (block._type === "image" && block.imageUrl) {
    return (
      <figure key={k} style={{ margin: "2rem 0" }}>
        <img loading="lazy" decoding="async" src={block.imageUrl} alt={block.alt ?? "Article image"} style={{ width: "100%", borderRadius: "12px", display: "block" }} />
        {block.caption && <figcaption style={{ marginTop: "10px", fontSize: "13px", color: "#999", textAlign: "center" }}>{block.caption}</figcaption>}
      </figure>
    );
  }

  if (block.listItem === "bullet") {
    return (
      <li key={k} style={{ marginBottom: "6px", paddingLeft: "4px", color: "#444", fontSize: "17px", lineHeight: "1.75" }}>
        {renderSpans(block)}
      </li>
    );
  }
  if (block.listItem === "number") {
    return (
      <li key={k} style={{ marginBottom: "6px", paddingLeft: "4px", color: "#444", fontSize: "17px", lineHeight: "1.75" }}>
        {renderSpans(block)}
      </li>
    );
  }

  switch (block.style) {
    case "h2":
      return <h2 key={k} id={block._anchor} style={{ scrollMarginTop: "96px", fontSize: "22px", fontWeight: 800, letterSpacing: "-0.03em", color: "#0c0c0c", marginTop: "2.5rem", marginBottom: "0.75rem", lineHeight: 1.2 }}>{renderSpans(block)}</h2>;
    case "h3":
      return <h3 key={k} style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.02em", color: "#0c0c0c", marginTop: "1.75rem", marginBottom: "0.5rem", lineHeight: 1.3 }}>{renderSpans(block)}</h3>;
    case "h4":
      return <h4 key={k} style={{ fontSize: "15px", fontWeight: 700, color: "#0c0c0c", marginTop: "1.5rem", marginBottom: "0.5rem" }}>{renderSpans(block)}</h4>;
    case "blockquote":
      return (
        <blockquote key={k} style={{ margin: "2rem 0", padding: "1.25rem 1.5rem", borderLeft: "3px solid #326d6d", background: "rgba(50,109,109,0.05)", borderRadius: "0 10px 10px 0" }}>
          <p style={{ fontSize: "17px", fontStyle: "italic", color: "#2a5f5f", lineHeight: 1.7, margin: 0 }}>{renderSpans(block)}</p>
        </blockquote>
      );
    default:
      return <p key={k} style={{ fontSize: "17px", color: "#444", lineHeight: 1.75, marginBottom: "1.2rem" }}>{renderSpans(block)}</p>;
  }
}

// Groups consecutive list items into <ul>/<ol>
function renderContent(content: AnchoredBlock[]) {
  const nodes: React.ReactNode[] = [];
  let i = 0;
  while (i < content.length) {
    const block = content[i];
    if (block.listItem === "bullet") {
      const items: React.ReactNode[] = [];
      while (i < content.length && content[i].listItem === "bullet") {
        items.push(renderBlock(content[i], i));
        i++;
      }
      nodes.push(<ul key={`ul-${i}`} style={{ listStyle: "disc", paddingLeft: "1.5rem", margin: "1.25rem 0", color: "#444" }}>{items}</ul>);
    } else if (block.listItem === "number") {
      const items: React.ReactNode[] = [];
      while (i < content.length && content[i].listItem === "number") {
        items.push(renderBlock(content[i], i));
        i++;
      }
      nodes.push(<ol key={`ol-${i}`} style={{ listStyle: "decimal", paddingLeft: "1.5rem", margin: "1.25rem 0", color: "#444" }}>{items}</ol>);
    } else {
      nodes.push(renderBlock(block, i));
      i++;
    }
  }
  return nodes;
}

// ── Page ──────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // URLs are canonical in lower case; redirect legacy mixed-case slugs.
  if (slug !== slug.toLowerCase()) permanentRedirect(`/blog/${slug.toLowerCase()}`);
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const cat = getCatStyle((post as { categories?: string[] }).categories);
  const authorInitials = post.author?.slice(0, 2).toUpperCase() ?? "SG";
  const content = normalizeHeadings(post.content ?? []);
  const tldr = (post.tldr ?? []).filter(Boolean);
  const sources = (post.sources ?? []).filter((s) => s?.url);

  // H2 outline for the table of contents (anchors set in normalizeHeadings)
  const headings = content.filter((b) => b.style === "h2" && b._anchor).map((b) => ({
    key: b._anchor as string,
    text: b.children?.map((c) => c.text).join("") ?? "",
    id: b._anchor as string,
  }));

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const postImage = post.imageUrl
    ? post.imageUrl.startsWith("http") ? post.imageUrl : `${SITE_URL}${post.imageUrl}`
    : `${SITE_URL}/opengraph-image`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: postUrl,
      mainEntityOfPage: postUrl,
      image: postImage,
      ...(post.date ? { datePublished: post.date } : {}),
      author: isOrganisationAuthor(post.author)
        ? { "@id": ORG_ID }
        : {
            "@type": "Person",
            name: post.author,
            ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
            worksFor: { "@id": ORG_ID },
          },
      ...(sources.length ? { citation: sources.map((s) => s.url) } : {}),
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${slug}` },
    ]),
  ];

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <JsonLd id="blogposting-jsonld" data={schema} />
      {/* ── ARTICLE HEADER ──────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #eaeaea", padding: "48px 0 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 32px" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6a6a6a", marginBottom: "28px", textDecoration: "none" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Blog
          </Link>

          {/* Category + read time */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: cat.color,
                background: cat.bg,
                padding: "3px 10px",
                borderRadius: "100px",
              }}
            >
              {cat.label}
            </span>
            <span style={{ fontSize: "12px", color: "#999" }}>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#0c0c0c",
              maxWidth: "760px",
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p style={{ fontSize: "17px", color: "#6a6a6a", lineHeight: 1.65, maxWidth: "680px", marginBottom: "28px" }}>
            {post.excerpt}
          </p>

          {/* Author + date row */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "28px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(50,109,109,0.1)",
                color: "#326d6d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {authorInitials}
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#0c0c0c" }}>
                {post.author}
                {post.authorRole && <span style={{ fontWeight: 400, color: "#6a6a6a" }}> · {post.authorRole}</span>}
              </div>
              <div style={{ fontSize: "12px", color: "#999" }}>{formatDate(post.date)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COVER IMAGE ─────────────────────────────────── */}
      {post.imageUrl && (
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "32px 32px 0" }}>
          <div style={{ borderRadius: "16px", overflow: "hidden", maxHeight: "460px" }}>
            <img width={1600} height={900} decoding="async"
              src={post.imageUrl}
              alt={post.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      )}

      {/* ── CONTENT LAYOUT ──────────────────────────────── */}
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "56px 32px 96px",
          display: "grid",
          gridTemplateColumns: headings.length > 1 ? "1fr 260px" : "760px",
          gap: "64px",
          alignItems: "start",
          justifyContent: headings.length <= 1 ? "center" : "unset",
        }}
      >
        {/* ── ARTICLE BODY ── */}
        <article style={{ minWidth: 0 }}>
          {tldr.length > 0 && (
            <aside
              aria-label="TL;DR"
              style={{ margin: "0 0 2.25rem", padding: "1.25rem 1.5rem", borderRadius: "12px", border: "1px solid rgba(50,109,109,0.2)", background: "rgba(50,109,109,0.05)" }}
            >
              <h2 style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#326d6d", margin: "0 0 0.6rem" }}>TL;DR</h2>
              <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", margin: 0 }}>
                {tldr.map((line, i) => (
                  <li key={i} style={{ fontSize: "16px", color: "#2a2a2a", lineHeight: 1.6, marginBottom: "4px" }}>{line}</li>
                ))}
              </ul>
            </aside>
          )}

          {renderContent(content)}

          {sources.length > 0 && (
            <section aria-labelledby="sources-heading" style={{ marginTop: "2.5rem" }}>
              <h2 id="sources-heading" style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "-0.02em", color: "#0c0c0c", marginBottom: "0.75rem" }}>Sources</h2>
              <ol style={{ listStyle: "decimal", paddingLeft: "1.5rem", margin: 0 }}>
                {sources.map((src, i) => (
                  <li key={i} style={{ fontSize: "14px", color: "#444", lineHeight: 1.6, marginBottom: "6px" }}>
                    <a href={src.url} target="_blank" rel="noreferrer" style={{ color: "#326d6d", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                      {src.title || src.url}
                    </a>
                    {src.publisher && <span style={{ color: "#999" }}> — {src.publisher}</span>}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Share / tag row */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #eaeaea",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "12px", color: "#999", fontWeight: 600 }}>SHARE</span>
              {[
                {
                  label: "Twitter / X",
                  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sofgent.com/blog/${post.slug}`)}`,
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sofgent.com/blog/${post.slug}`)}`,
                  icon: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={`Share on ${label}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid #eaeaea",
                    color: "#6a6a6a",
                    textDecoration: "none",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <Link
              href="/blog"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#6a6a6a",
                border: "1px solid #eaeaea",
                padding: "8px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ← All articles
            </Link>
          </div>
        </article>

        {/* ── SIDEBAR (only if enough headings) ── */}
        {headings.length > 1 && (
          <aside style={{ position: "sticky", top: "88px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Table of contents */}
            <div
              style={{
                background: "#f7f7f7",
                border: "1px solid #eaeaea",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: "14px" }}>
                Contents
              </div>
              <nav>
                {headings.map((h, i) => (
                  <div key={h.key} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#326d6d", minWidth: "18px", lineHeight: "1.5" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a href={`#${h.id}`} style={{ fontSize: "13px", color: "#444", lineHeight: 1.45, fontWeight: 500, textDecoration: "none" }}>
                      {h.text}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            {/* CTA */}
            <div
              style={{
                background: "rgba(50,109,109,0.07)",
                border: "1px solid rgba(50,109,109,0.2)",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#326d6d", marginBottom: "8px" }}>
                Ready to build?
              </h3>
              <p style={{ fontSize: "13px", color: "#6a6a6a", lineHeight: 1.6, marginBottom: "14px" }}>
                Production-ready AI products in 4–6 weeks. Free 30-minute scoping call.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#326d6d",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 700,
                  padding: "10px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Book a Free Call →
              </Link>
            </div>

            {/* Author card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #eaeaea",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(50,109,109,0.1)",
                    color: "#326d6d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {authorInitials}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#0c0c0c" }}>{post.author}</div>
                  <div style={{ fontSize: "11px", color: "#999" }}>SofGent AI Studio</div>
                </div>
              </div>
              <p style={{ fontSize: "12.5px", color: "#6a6a6a", lineHeight: 1.6, margin: 0 }}>
                Building production-ready AI products for founders, CTOs, and operations teams.
              </p>
            </div>
          </aside>
        )}
      </div>

      {/* ── CTA STRIP ───────────────────────────────────── */}
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 32px 96px" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            background: "#0c0c0c",
            padding: "56px 64px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div style={{ position: "absolute", top: "-80px", left: "-60px", width: "240px", height: "240px", background: "radial-gradient(circle, rgba(50,109,109,0.45) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-60px", right: "-40px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(103,232,249,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#67e8f9", marginBottom: "10px" }}>
              Free 30-min consultation
            </div>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1, color: "#fff", marginBottom: "8px" }}>
              Got an AI product idea?{" "}<br />Let&apos;s scope it together.
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.42)", maxWidth: "380px", lineHeight: 1.6 }}>
              We&apos;ll give you a written scope, timeline, and estimate within 48 hours. No obligation.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              position: "relative",
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 700,
              color: "#0c0c0c",
              background: "#fff",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            Book a Free Call
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
