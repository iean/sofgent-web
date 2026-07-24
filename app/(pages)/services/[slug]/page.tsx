import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import getPageMeta from "@/app/utils/getPageMeta";
import { getFallbackServices } from "@/lib/content/fallback";
import { getPrimaryServiceCatalogEntry } from "@/lib/content/serviceCatalog";
import { getServiceBySlug, getServiceSlugs, getServices } from "@/lib/sanity/content";

type ContentSection = {
  title: string;
  body: string[];
};

type ParsedServiceContent = {
  heroImage?: { alt: string; src: string };
  intro: string[];
  sections: ContentSection[];
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getPageMeta(`/services/${params.slug}`);
}

export async function generateStaticParams() {
  const sanitySlugs = await getServiceSlugs();
  const fallbackSlugs = getFallbackServices().map((service) => service.slug);
  const slugs = Array.from(new Set([...sanitySlugs, ...fallbackSlugs]));
  return slugs.map((slug) => ({ slug }));
}

function slugToLabel(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function extractHeroImage(markdown: string) {
  const imageMatch = markdown.match(/!\[(.*?)\]\((.*?)\)/);
  if (!imageMatch) return undefined;

  return {
    alt: imageMatch[1] || "Service image",
    src: imageMatch[2],
  };
}

function normalizeMarkdown(markdown?: string) {
  return (markdown ?? "")
    .replace(/!\[(.*?)\]\((.*?)\)/g, "")
    .replace(/<br\s*\/?>/g, "")
    .replace(/\r/g, "")
    .trim();
}

function parseContent(markdown?: string): ParsedServiceContent {
  const content = normalizeMarkdown(markdown);
  if (!content) {
    return { intro: [], sections: [] };
  }

  const heroImage = extractHeroImage(markdown ?? "");
  const lines = content.split("\n");
  const intro: string[] = [];
  const sections: ContentSection[] = [];
  let currentSection: ContentSection | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      if (currentSection && currentSection.body[currentSection.body.length - 1] !== "") {
        currentSection.body.push("");
      } else if (!currentSection && intro[intro.length - 1] !== "") {
        intro.push("");
      }
      continue;
    }

    if (line.startsWith("## ")) {
      currentSection = { title: line.slice(3).trim(), body: [] };
      sections.push(currentSection);
      continue;
    }

    if (!currentSection) {
      intro.push(line);
      continue;
    }

    currentSection.body.push(line);
  }

  const compact = (items: string[]) =>
    items.filter((item, index) => !(item === "" && (index === 0 || items[index - 1] === "")));

  return {
    heroImage,
    intro: compact(intro),
    sections: sections.map((section) => ({ ...section, body: compact(section.body) })),
  };
}

function renderInline(text: string) {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)|(\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1]) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-[#111]">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      nodes.push(
        <code
          key={match.index}
          className="rounded-md bg-[#eef5f5] px-1.5 py-0.5 text-[0.9em] text-[#326d6d]"
        >
          {match[4]}
        </code>,
      );
    } else if (match[5]) {
      nodes.push(
        <em key={match.index} className="italic">
          {match[6]}
        </em>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderLine(line: string, key: string) {
  if (line.startsWith("### ")) {
    return (
      <h3 key={key} className="mt-8 text-[20px] font-bold tracking-[-0.02em] text-[#111] first:mt-0">
        {line.slice(4)}
      </h3>
    );
  }

  if (/^\d+\.\s+\*\*(.+?)\*\*/.test(line)) {
    const label = line.replace(/^\d+\.\s+\*\*(.+?)\*\*.*/, "$1");
    return (
      <div key={key} className="mt-8 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#326d6d] text-sm font-bold text-white">
          {line.match(/^\d+/)?.[0]}
        </div>
        <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#111]">{label}</h3>
      </div>
    );
  }

  if (/^\d+\.\s+/.test(line)) {
    return (
      <div key={key} className="mt-6 flex gap-3 rounded-2xl border border-[#e7ecec] bg-white p-4">
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#eef5f5] text-xs font-bold text-[#326d6d]">
          {line.match(/^\d+/)?.[0]}
        </div>
        <p className="text-[15px] leading-7 text-[#4d4d4d]">{renderInline(line.replace(/^\d+\.\s+/, ""))}</p>
      </div>
    );
  }

  if (line.startsWith("- ")) {
    return (
      <li key={key} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#326d6d]" />
        <span>{renderInline(line.slice(2))}</span>
      </li>
    );
  }

  if (/^\*\*(.+?)\*\*/.test(line)) {
    return (
      <p key={key} className="mt-6 text-[15px] font-semibold leading-7 text-[#111]">
        {renderInline(line)}
      </p>
    );
  }

  return (
    <p key={key} className="text-[15px] leading-8 text-[#4d4d4d]">
      {renderInline(line)}
    </p>
  );
}

function renderSectionBody(lines: string[]) {
  const nodes: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (keyPrefix: string) => {
    if (listItems.length === 0) return;
    nodes.push(
      <ul key={`${keyPrefix}-list`} className="space-y-3 text-[15px] leading-7 text-[#4d4d4d]">
        {listItems.map((item, index) => renderLine(item, `${keyPrefix}-${index}`))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    if (!line) {
      flushList(`gap-${index}`);
      return;
    }

    if (line.startsWith("- ")) {
      listItems.push(line);
      return;
    }

    flushList(`block-${index}`);
    nodes.push(renderLine(line, `line-${index}`));
  });

  flushList("final");
  return nodes;
}

function getTechnologyGroups(sections: ContentSection[]) {
  const technologySection = sections.find((section) =>
    /technology stack|tools and platforms/i.test(section.title),
  );

  if (!technologySection) return [];

  const groups: Array<{ label: string; items: string[] }> = [];
  let currentGroup: { label: string; items: string[] } | null = null;

  for (const line of technologySection.body) {
    if (!line) continue;

    const headingMatch = line.match(/^\*\*(.+?)\*\*$/);
    if (headingMatch) {
      currentGroup = { label: headingMatch[1], items: [] };
      groups.push(currentGroup);
      continue;
    }

    if (line.startsWith("- ")) {
      if (!currentGroup) {
        currentGroup = { label: "Technology", items: [] };
        groups.push(currentGroup);
      }

      currentGroup.items.push(
        line
          .slice(2)
          .replace(/\*\*/g, "")
          .replace(/:\s+/g, " — "),
      );
    }
  }

  return groups.filter((group) => group.items.length > 0);
}

function getFaqs(sections: ContentSection[]) {
  const faqSection = sections.find((section) => /faq/i.test(section.title));
  if (!faqSection) return [];

  const faqs: Array<{ question: string; answer: string[] }> = [];
  let currentFaq: { question: string; answer: string[] } | null = null;

  for (const line of faqSection.body) {
    if (!line) continue;

    const question = line.match(/^\*\*(.+?)\*\*/)?.[1];
    if (question) {
      currentFaq = { question, answer: [] };
      faqs.push(currentFaq);
      continue;
    }

    if (!currentFaq) continue;
    currentFaq.answer.push(line);
  }

  return faqs.filter((faq) => faq.answer.length > 0);
}

function buildHighlights(service: Awaited<ReturnType<typeof getServiceBySlug>>) {
  if (!service) return [];

  return [
    service.description,
    service.proof,
    service.eyebrow ? `${service.eyebrow} teams use this to move faster without rebuilding core systems.` : undefined,
  ].filter(Boolean) as string[];
}

function buildPrimaryStats(service: NonNullable<Awaited<ReturnType<typeof getServiceBySlug>>>, sections: ContentSection[]) {
  const bulletCount = sections.reduce(
    (count, section) => count + section.body.filter((line) => line.startsWith("- ")).length,
    0,
  );

  return [
    { label: "Delivery model", value: "Scoped project or retained team" },
    { label: "Typical timeline", value: bulletCount > 10 ? "4–8 weeks to launch" : "2–6 weeks to deliver" },
    { label: "Engagement focus", value: service.eyebrow ?? "Production-ready engineering" },
  ];
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const [service, allServices] = await Promise.all([getServiceBySlug(params.slug), getServices()]);

  if (!service) {
    notFound();
  }

  const parsed = parseContent(service.content);
  const related = allServices.filter((item) => item.slug !== service.slug).slice(0, 4);
  const serviceCatalogEntry = getPrimaryServiceCatalogEntry(service);
  const techGroups = getTechnologyGroups(parsed.sections);
  const faqs = getFaqs(parsed.sections);
  const primaryStats = buildPrimaryStats(service, parsed.sections);
  const highlights = buildHighlights(service);
  const sectionLinks = parsed.sections.filter((section) => !/faq|get started today|let’s build|lets build/i.test(section.title));

  return (
    <main className="min-h-screen bg-[#f7f8f8]">
      <div className="border-b border-[#e5e7e7] bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center gap-2 px-6 py-4 text-[13px] text-[#5f6666] md:px-8">
          <Link href="/" className="transition-colors hover:text-[#326d6d]">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="transition-colors hover:text-[#326d6d]">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#111]">{service.title}</span>
        </div>
      </div>

      <section className="border-b border-[#e5e7e7] bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:px-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7e6e6] bg-[#eef6f5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#326d6d]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#326d6d]" />
              {service.eyebrow ?? slugToLabel(service.slug)}
            </div>

            <h1 className="max-w-[760px] text-[38px] font-black leading-[1.04] tracking-[-0.05em] text-[#111] md:text-[56px]">
              {service.title}
            </h1>
            <p className="mt-5 max-w-[700px] text-[18px] leading-8 text-[#4f5656] md:text-[20px]">
              {service.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {primaryStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#e5ecec] bg-[#fbfcfc] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7a8383]">{stat.label}</div>
                  <div className="mt-2 text-[15px] font-semibold leading-6 text-[#111]">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#326d6d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#244f4f]"
              >
                Book a discovery call
                <span>→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-[#d7dddd] px-6 py-3.5 text-sm font-semibold text-[#394141] transition-colors hover:border-[#326d6d] hover:text-[#326d6d]"
              >
                View all services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#dbe5e5] bg-[#0d1b1b] shadow-[0_30px_70px_rgba(12,12,12,0.12)]">
            {serviceCatalogEntry?.artwork ? (
              <div className="relative h-[300px] w-full overflow-hidden md:h-[360px]">
                <Image
                  src={serviceCatalogEntry.artwork}
                  alt={serviceCatalogEntry.artworkAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_64%,rgba(7,19,20,0.45)_100%)]" />
              </div>
            ) : parsed.heroImage ? (
              <img
                src={parsed.heroImage.src}
                alt={parsed.heroImage.alt}
                className="h-[260px] w-full object-cover md:h-[320px]"
              />
            ) : (
              <div className="flex h-[320px] items-center justify-center bg-[radial-gradient(circle_at_top,rgba(76,164,164,0.35),transparent_55%),linear-gradient(135deg,#0d1b1b,#244f4f)] p-8">
                <div className="max-w-[320px] text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9ed1d1]">SofGent delivery</div>
                  <h2 className="mt-3 text-[28px] font-black leading-[1.08] tracking-[-0.04em]">
                    Production-ready systems built around your workflow.
                  </h2>
                </div>
              </div>
            )}

            <div className="grid gap-4 bg-[#0f2020] p-6 text-white sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#326d6d] text-xs font-bold">
                      ✓
                    </span>
                    <p className="text-[14px] leading-6 text-[rgba(255,255,255,0.84)]">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            {parsed.intro.length > 0 && (
              <div className="rounded-[28px] border border-[#e4ebeb] bg-white p-7 shadow-[0_16px_40px_rgba(12,12,12,0.04)] md:p-9">
                <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#326d6d]">Overview</div>
                <div className="space-y-4">
                  {parsed.intro.map((line, index) =>
                    line ? (
                      <p key={index} className="text-[16px] leading-8 text-[#464d4d]">
                        {renderInline(line)}
                      </p>
                    ) : null,
                  )}
                </div>
              </div>
            )}

            {sectionLinks.map((section, index) => (
              <div
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="rounded-[28px] border border-[#e4ebeb] bg-white p-7 shadow-[0_16px_40px_rgba(12,12,12,0.04)] md:p-9"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef6f5] text-sm font-bold text-[#326d6d]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-[28px] font-black tracking-[-0.04em] text-[#111]">{section.title}</h2>
                </div>
                <div className="space-y-4">{renderSectionBody(section.body)}</div>
              </div>
            ))}

            {faqs.length > 0 && (
              <div className="rounded-[28px] border border-[#e4ebeb] bg-white p-7 shadow-[0_16px_40px_rgba(12,12,12,0.04)] md:p-9">
                <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#326d6d]">FAQs</div>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-[#e7ecec] bg-[#fbfcfc] p-5">
                      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#111]">{faq.question}</h3>
                      <div className="mt-3 space-y-3">
                        {faq.answer.map((line, index) =>
                          line ? (
                            <p key={index} className="text-[15px] leading-7 text-[#4d4d4d]">
                              {renderInline(line.replace(/^\*\*(.+?)\*\*/, "$1"))}
                            </p>
                          ) : null,
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="overflow-hidden rounded-[28px] bg-[#0d0f10] p-8 text-white md:p-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7ca7a7]">Next step</div>
              <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-[620px]">
                  <h2 className="text-[32px] font-black leading-[1.06] tracking-[-0.04em]">
                    Need this service scoped against your real system?
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-[rgba(255,255,255,0.72)]">
                    We turn requirements into a practical delivery plan, timeline, and architecture recommendation before build work starts.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#326d6d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#244f4f]"
                >
                  Request a scoped proposal
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            {sectionLinks.length > 0 && (
              <div className="rounded-[24px] border border-[#e4ebeb] bg-white p-6 shadow-[0_16px_40px_rgba(12,12,12,0.04)]">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#326d6d]">On this page</div>
                <div className="space-y-2">
                  {sectionLinks.map((section) => (
                    <a
                      key={section.title}
                      href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="block rounded-xl px-3 py-2 text-[14px] text-[#505757] transition-colors hover:bg-[#f3f7f7] hover:text-[#326d6d]"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {techGroups.length > 0 && (
              <div className="rounded-[24px] border border-[#e4ebeb] bg-white p-6 shadow-[0_16px_40px_rgba(12,12,12,0.04)]">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#326d6d]">Technology stack</div>
                <div className="space-y-4">
                  {techGroups.map((group) => (
                    <div key={group.label}>
                      <div className="text-[13px] font-semibold text-[#111]">{group.label}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#dbe7e7] bg-[#f4f8f8] px-3 py-1.5 text-[12px] font-medium text-[#326d6d]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[24px] bg-[#326d6d] p-6 text-white shadow-[0_18px_50px_rgba(50,109,109,0.28)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#b9dddd]">Ready to start?</div>
              <h3 className="mt-3 text-[26px] font-black leading-[1.08] tracking-[-0.04em]">
                Get a scoped proposal in 48 hours.
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-[rgba(255,255,255,0.82)]">
                Tell us about the workflow, system, or product you need to improve. We will map scope, approach, and delivery options.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#326d6d] transition-colors hover:bg-[#edf5f5]"
              >
                Book a discovery call
              </Link>
            </div>

            {related.length > 0 && (
              <div className="rounded-[24px] border border-[#e4ebeb] bg-white p-6 shadow-[0_16px_40px_rgba(12,12,12,0.04)]">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#326d6d]">Related services</div>
                <div className="space-y-2">
                  {related.map((item) => (
                    <Link
                      key={item._id}
                      href={`/services/${item.slug}`}
                      className="flex items-center justify-between rounded-xl border border-transparent px-3 py-3 text-[14px] text-[#505757] transition-colors hover:border-[#e4ebeb] hover:bg-[#f8fbfb] hover:text-[#326d6d]"
                    >
                      <span>{item.title}</span>
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[24px] border border-[#e4ebeb] bg-white p-6 shadow-[0_16px_40px_rgba(12,12,12,0.04)]">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#326d6d]">How we work</div>
              <div className="space-y-4">
                {[
                  ["Discovery", "1 focused call to map systems, constraints, and delivery goals."],
                  ["Proposal", "Written scope, timeline, and technical approach."],
                  ["Build", "Weekly progress updates with production-minded implementation."],
                  ["Launch", "Release support, handover, and post-launch follow-up."],
                ].map(([label, text], index) => (
                  <div key={label} className="flex gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#eef5f5] text-xs font-bold text-[#326d6d]">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#111]">{label}</div>
                      <p className="mt-1 text-[13px] leading-6 text-[#5a6161]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
