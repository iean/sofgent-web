import Link from "next/link";
import BreadcrumbStructuredData from "@/app/components/seo/BreadcrumbStructuredData";
import { getSiteOriginFromEnv } from "@/lib/runtime/deployment";

export default function PageIntro({
  eyebrow,
  title,
  description,
  currentPage,
  currentPath,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  currentPage: string;
  currentPath: string;
  compact?: boolean;
}) {
  const siteOrigin = getSiteOriginFromEnv();
  const breadcrumbItems = [
    { name: "Home", item: siteOrigin },
    { name: currentPage, item: `${siteOrigin}${currentPath}` },
  ];

  return (
    <section
      className={`relative overflow-hidden border-b border-slate-200 bg-white ${
        compact ? "pt-[96px] md:pt-[128px]" : "pt-[112px] md:pt-[160px]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div
        className={`relative theme-container ${
          compact ? "py-10 md:py-12" : "py-14 md:py-16"
        }`}
      >
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-800">
            {eyebrow}
          </div>
          <h1
            className={`mt-6 font-bold tracking-[-0.04em] text-slate-950 ${
              compact ? "text-4xl sm:text-5xl" : "text-4xl sm:text-5xl md:text-6xl"
            }`}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500"
          >
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium hover:border-slate-300 hover:text-slate-900"
            >
              Home
            </Link>
            <span aria-hidden="true" className="text-cyan-600">
              /
            </span>
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 font-semibold text-cyan-800">
              {currentPage}
            </span>
          </nav>
        </div>
      </div>
      <BreadcrumbStructuredData items={breadcrumbItems} />
    </section>
  );
}
