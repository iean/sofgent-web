import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-40">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Not found
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
          This article does not exist.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The blog post may have moved, been unpublished, or the CMS is not
          configured for this environment yet.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Back to blog
        </Link>
      </div>
    </section>
  );
}
