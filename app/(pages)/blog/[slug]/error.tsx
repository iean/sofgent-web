"use client";

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-40">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-500">
          Article error
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
          We couldn&apos;t load this article.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {error.message || "Please try again in a moment."}
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
