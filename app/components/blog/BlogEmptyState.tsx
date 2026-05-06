import Link from "next/link";

export default function BlogEmptyState({
  title,
  description,
  ctaHref = "/contact",
  ctaLabel = "Talk to SofGent",
}: {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
      <Link
        href={ctaHref}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
