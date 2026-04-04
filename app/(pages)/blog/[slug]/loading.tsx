export default function BlogPostLoading() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-40">
        <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
        <div className="mt-8 h-14 w-full max-w-3xl animate-pulse rounded-3xl bg-slate-200" />
        <div className="mt-6 h-6 w-full max-w-2xl animate-pulse rounded bg-slate-200" />
        <div className="mt-12 h-[360px] animate-pulse rounded-[2rem] bg-slate-200" />
        <div className="mt-12 space-y-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-5 animate-pulse rounded bg-slate-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
