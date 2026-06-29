const testimonials = [
  {
    quote: "SofGent delivered a fully working document automation pipeline in 3 weeks. We replaced a 6-month manual process on day one.",
    name: "James K.",
    role: "CTO, FinStack",
    initials: "JK",
  },
  {
    quote: "They scoped, built, and launched our AI SaaS MVP faster than I thought possible. Clean code, zero handholding needed.",
    name: "Sara R.",
    role: "Founder, DocFlow",
    initials: "SR",
  },
  {
    quote: "The data-readiness audit alone saved us months. Our models now train on clean, structured data from day one.",
    name: "Alex M.",
    role: "Head of Ops, NovaSME",
    initials: "AM",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-[#e6e6e6]" style={{ padding: "112px 0" }}>
      <div className="max-w-[1140px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3"
          >
            <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
            Client results
          </div>
          <h2
            className="font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0c0c0c]"
            style={{ fontSize: "clamp(27px, 3.2vw, 42px)", marginTop: "10px" }}
          >
            What clients say.
          </h2>
        </div>

        {/* 3-col grid */}
        <div
          className="grid grid-cols-3 rounded-2xl overflow-hidden border border-[#e6e6e6]"
          style={{ gap: "1px", background: "#e6e6e6" }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white px-7 py-8">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4 text-[#f59e0b] text-[13px]">
                ★★★★★
              </div>
              {/* Quote */}
              <p className="text-[14.5px] text-[#444] leading-[1.75] mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[11px] font-extrabold flex-shrink-0"
                  style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#0c0c0c]">{t.name}</div>
                  <div className="text-[11px] text-[#6a6a6a]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
