import Link from "next/link";
import { getServiceBySlug, getServiceSlugs, getServices } from "@/lib/sanity/content";
import { getFallbackServices } from "@/lib/content/fallback";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
   return getPageMeta(`/services/${params.slug}`);
}

export async function generateStaticParams() {
   // Union Sanity slugs with the local markdown-backed services so every
   // service (including ones not yet in Sanity) gets a pre-rendered detail page.
   const sanitySlugs = await getServiceSlugs();
   const fallbackSlugs = getFallbackServices().map((s) => s.slug);
   const slugs = Array.from(new Set([...sanitySlugs, ...fallbackSlugs]));
   return slugs.map((slug) => ({ slug }));
}

// ── Simple markdown → React renderer ─────────────────────────────────────────
function renderInline(text: string) {
   // bold, italic, code
   const parts: React.ReactNode[] = [];
   const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)|(\*(.+?)\*)/g;
   let last = 0;
   let m: RegExpExecArray | null;
   while ((m = regex.exec(text)) !== null) {
      if (m.index > last) parts.push(text.slice(last, m.index));
      if (m[1]) parts.push(<strong key={m.index} className="font-semibold text-[#0c0c0c]">{m[2]}</strong>);
      else if (m[3]) parts.push(<code key={m.index} className="bg-[#f0f5f5] text-[#326d6d] px-1.5 py-0.5 rounded text-sm font-mono">{m[4]}</code>);
      else if (m[5]) parts.push(<em key={m.index}>{m[6]}</em>);
      last = m.index + m[0].length;
   }
   if (last < text.length) parts.push(text.slice(last));
   return parts;
}

function renderContent(markdown: string) {
   const lines = markdown.split("\n");
   const nodes: React.ReactNode[] = [];
   let i = 0;
   let key = 0;

   while (i < lines.length) {
      const line = lines[i];

      // h2
      if (line.startsWith("## ")) {
         nodes.push(
            <h2 key={key++} className="text-2xl font-bold text-[#0c0c0c] mt-10 mb-4 pb-2 border-b border-[#eaeaea]">
               {line.slice(3)}
            </h2>
         );
         i++;
         continue;
      }

      // h3
      if (line.startsWith("### ")) {
         nodes.push(
            <h3 key={key++} className="text-lg font-semibold text-[#0c0c0c] mt-6 mb-3">
               {line.slice(4)}
            </h3>
         );
         i++;
         continue;
      }

      // bullet list block
      if (line.startsWith("- ")) {
         const items: React.ReactNode[] = [];
         while (i < lines.length && lines[i].startsWith("- ")) {
            items.push(
               <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#326d6d] flex-shrink-0" />
                  <span>{renderInline(lines[i].slice(2))}</span>
               </li>
            );
            i++;
         }
         nodes.push(
            <ul key={key++} className="space-y-2 my-4 text-[#333] leading-relaxed">
               {items}
            </ul>
         );
         continue;
      }

      // numbered list block
      if (/^\d+\. /.test(line)) {
         const items: React.ReactNode[] = [];
         let num = 1;
         while (i < lines.length && /^\d+\. /.test(lines[i])) {
            const text = lines[i].replace(/^\d+\. /, "");
            items.push(
               <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#326d6d] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                     {num}
                  </span>
                  <span>{renderInline(text)}</span>
               </li>
            );
            i++;
            num++;
         }
         nodes.push(
            <ol key={key++} className="space-y-3 my-4 text-[#333] leading-relaxed">
               {items}
            </ol>
         );
         continue;
      }

      // blank line
      if (line.trim() === "") {
         i++;
         continue;
      }

      // paragraph
      nodes.push(
         <p key={key++} className="text-[#444] leading-relaxed my-3">
            {renderInline(line)}
         </p>
      );
      i++;
   }

   return nodes;
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ServiceDetail({
   params,
}: {
   params: { slug: string };
}) {
   const [service, allServices] = await Promise.all([
      getServiceBySlug(params.slug),
      getServices(),
   ]);

   if (!service) {
      notFound();
   }

   const related = allServices
      .filter((s) => s.slug !== params.slug && s.isPrimary)
      .slice(0, 4);

   // Parse tech stack section from content for the sidebar
   const techMatch = service.content?.match(/## Technology Stack\n([\s\S]*?)(\n## |$)/);
   const techLines = techMatch
      ? techMatch[1]
           .split("\n")
           .filter((l) => l.startsWith("- "))
           .map((l) => l.slice(2))
      : [];

   return (
      <div className="bg-white min-h-screen">
         {/* ── Breadcrumb ── */}
         <div style={{ borderBottom: "0.5px solid #eaeaea" }}>
            <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center gap-2 text-sm text-[#666]">
               <Link href="/" className="hover:text-[#326d6d] transition-colors">Home</Link>
               <span className="text-[#ccc]">/</span>
               <Link href="/services" className="hover:text-[#326d6d] transition-colors">Services</Link>
               <span className="text-[#ccc]">/</span>
               <span className="text-[#0c0c0c]">{service.title}</span>
            </div>
         </div>

         {/* ── Hero ── */}
         <div className="bg-[#fafafa]" style={{ borderBottom: "0.5px solid #eaeaea" }}>
            <div className="max-w-[1200px] mx-auto px-8 py-16 md:py-20">
               <div className="max-w-[760px]">
                  {service.eyebrow && (
                     <div className="inline-flex items-center gap-2 bg-[#e8f0f0] text-[#326d6d] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#326d6d]" />
                        {service.eyebrow}
                     </div>
                  )}
                  <h1 className="text-4xl md:text-5xl font-bold text-[#0c0c0c] leading-tight mb-5">
                     {service.title}
                  </h1>
                  <p className="text-xl text-[#555] leading-relaxed mb-8 max-w-[640px]">
                     {service.description}
                  </p>

                  {/* Proof metric */}
                  {service.proof && (
                     <div className="inline-flex items-center gap-3 bg-white border border-[#e0eded] rounded-xl px-5 py-3 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-[#326d6d] flex items-center justify-center flex-shrink-0">
                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </div>
                        <span className="text-sm font-medium text-[#326d6d]">{service.proof}</span>
                     </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 mt-8">
                     <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#326d6d] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#1e4848] transition-colors"
                     >
                        Book a discovery call
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                           <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </Link>
                     <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-[#555] text-sm hover:text-[#326d6d] transition-colors"
                     >
                        ← All services
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* ── Body ── */}
         <div className="max-w-[1200px] mx-auto px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

               {/* Main content */}
               <article>
                  {service.content ? (
                     <div className="text-base">
                        {renderContent(service.content)}
                     </div>
                  ) : (
                     <div className="text-[#888] text-center py-12">
                        <p>Detailed service information is being prepared.</p>
                        <p className="mt-2">
                           <Link href="/contact" className="text-[#326d6d] font-medium hover:underline">
                              Contact us to learn more →
                           </Link>
                        </p>
                     </div>
                  )}
               </article>

               {/* Sidebar */}
               <aside className="space-y-6">
                  {/* CTA card */}
                  <div className="bg-[#326d6d] text-white rounded-2xl p-6">
                     <div className="text-xs font-semibold uppercase tracking-wider text-[#a8cece] mb-3">
                        Ready to start?
                     </div>
                     <h3 className="text-lg font-bold mb-3 leading-snug">
                        Get a scoped proposal in 48 hours
                     </h3>
                     <p className="text-sm text-[#c5dede] mb-5 leading-relaxed">
                        Tell us about your project. We&apos;ll scope it, price it, and tell you exactly what we can deliver.
                     </p>
                     <Link
                        href="/contact"
                        className="block w-full text-center bg-white text-[#326d6d] font-semibold text-sm px-4 py-3 rounded-xl hover:bg-[#f0f5f5] transition-colors"
                     >
                        Book a discovery call
                     </Link>
                  </div>

                  {/* Tech stack */}
                  {techLines.length > 0 && (
                     <div className="border border-[#eaeaea] rounded-2xl p-5">
                        <h3 className="text-sm font-semibold text-[#0c0c0c] mb-3 uppercase tracking-wide">
                           Tech we use
                        </h3>
                        <div className="space-y-2">
                           {techLines.map((line, idx) => {
                              const [label, tools] = line.split(": ");
                              return (
                                 <div key={idx}>
                                    {tools ? (
                                       <>
                                          <span className="text-xs font-semibold text-[#555]">{label}:</span>
                                          <div className="flex flex-wrap gap-1.5 mt-1">
                                             {tools.split(", ").map((t) => (
                                                <span key={t} className="text-xs bg-[#f0f5f5] text-[#326d6d] px-2 py-1 rounded-lg font-medium">
                                                   {t.trim()}
                                                </span>
                                             ))}
                                          </div>
                                       </>
                                    ) : (
                                       <span className="text-xs bg-[#f0f5f5] text-[#326d6d] px-2 py-1 rounded-lg font-medium inline-block">
                                          {line}
                                       </span>
                                    )}
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  )}

                  {/* Related services */}
                  {related.length > 0 && (
                     <div className="border border-[#eaeaea] rounded-2xl p-5">
                        <h3 className="text-sm font-semibold text-[#0c0c0c] mb-3 uppercase tracking-wide">
                           Other services
                        </h3>
                        <div className="space-y-2">
                           {related.map((s) => (
                              <Link
                                 key={s._id}
                                 href={`/services/${s.slug}`}
                                 className="flex items-center gap-2 text-sm text-[#555] hover:text-[#326d6d] py-1.5 transition-colors group"
                              >
                                 <span className="w-4 h-px bg-[#ccc] group-hover:bg-[#326d6d] transition-colors flex-shrink-0" />
                                 {s.title}
                              </Link>
                           ))}
                        </div>
                     </div>
                  )}

                  {/* Delivery promise */}
                  <div className="bg-[#fafafa] border border-[#eaeaea] rounded-2xl p-5">
                     <h3 className="text-sm font-semibold text-[#0c0c0c] mb-3 uppercase tracking-wide">
                        How we work
                     </h3>
                     <div className="space-y-3">
                        {[
                           { n: "1", label: "Discovery", desc: "1 call to scope the project" },
                           { n: "2", label: "Proposal", desc: "Scope + timeline in 48h" },
                           { n: "3", label: "Build", desc: "Weekly updates, real progress" },
                           { n: "4", label: "Ship", desc: "Production-ready delivery" },
                        ].map((step) => (
                           <div key={step.n} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-[#326d6d] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                 {step.n}
                              </span>
                              <div>
                                 <div className="text-xs font-semibold text-[#0c0c0c]">{step.label}</div>
                                 <div className="text-xs text-[#777]">{step.desc}</div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </aside>
            </div>
         </div>

         {/* ── Dark CTA strip ── */}
         <div className="bg-[#0c0c0c] text-white">
            <div className="max-w-[1200px] mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#666] mb-2">
                     SofGent · AI Product Studio
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-lg">
                     We build production-ready AI products in 4–6 weeks.
                  </h2>
                  <p className="text-[#888] mt-3 max-w-md leading-relaxed">
                     Not prototypes. Not pilots. Working software your team and customers can use from day one.
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link
                     href="/contact"
                     className="inline-flex items-center justify-center gap-2 bg-[#326d6d] text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#1e4848] transition-colors whitespace-nowrap"
                  >
                     Book a discovery call
                  </Link>
                  <Link
                     href="/services"
                     className="inline-flex items-center justify-center gap-2 border border-[#333] text-[#999] px-7 py-3.5 rounded-xl text-sm font-semibold hover:border-[#555] hover:text-white transition-colors whitespace-nowrap"
                  >
                     View all services
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
