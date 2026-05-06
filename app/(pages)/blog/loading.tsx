export default function BlogLoading() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1320px] px-4 py-40">
        <div className="mb-10 h-8 w-40 animate-pulse rounded-full bg-slate-200" />
        <div className="mb-16 h-14 w-full max-w-xl animate-pulse rounded-3xl bg-slate-200" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-52 animate-pulse bg-slate-200" />
              <div className="space-y-4 p-6">
                <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
                <div className="h-8 w-full animate-pulse rounded bg-slate-200" />
                <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
