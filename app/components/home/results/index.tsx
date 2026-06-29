const results = [
  {
    beforeLabel: "Manual review time",
    from: "6 months",
    to: "3 weeks",
    desc: "Document automation pipeline replaced a 6-month manual review process on day one of launch.",
    client: "Haven Finance",
    initials: "HF",
    service: "AI Document Automation",
  },
  {
    beforeLabel: "Time to working MVP",
    from: "12 weeks",
    to: "18 days",
    desc: "Fully scoped, built, and deployed SaaS product including AI integration and production infrastructure.",
    client: "FinStack",
    initials: "FS",
    service: "SaaS MVP Development",
  },
  {
    beforeLabel: "Data prep for AI training",
    from: "Months",
    to: "1 sprint",
    desc: "Clean, labeled, structured datasets ready for model training — delivered in a single 2-week engagement.",
    client: "NovaSME",
    initials: "NS",
    service: "AI-Ready Data Infrastructure",
  },
];

export default function Results() {
  return (
    <section className="border-b border-[#e6e6e6]" style={{ padding: "96px 0", background: "#f7f7f7" }}>
      <div className="max-w-[1140px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-13">
          <div className="inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3">
            <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
            Real outcomes
          </div>
          <h2
            className="font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0c0c0c] mt-2.5"
            style={{ fontSize: "clamp(27px, 3.2vw, 42px)" }}
          >
            Numbers from production.
          </h2>
          <p className="text-[15px] text-[#6a6a6a] leading-[1.68] mx-auto mt-2.5 max-w-[420px]">
            Not projections. Results from shipped projects with real clients.
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-3 rounded-[20px] overflow-hidden border border-[#e6e6e6]"
          style={{ gap: "1px", background: "#e6e6e6", marginTop: "52px" }}
        >
          {results.map((r) => (
            <div key={r.client} className="bg-white px-8 py-9">
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#6a6a6a] mb-2">
                {r.beforeLabel}
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="text-[24px] font-extrabold tracking-[-0.04em]"
                  style={{ color: "#ccc", textDecoration: "line-through", textDecorationColor: "#ddd" }}
                >
                  {r.from}
                </span>
                <span className="text-[16px] font-bold text-[#326d6d]">→</span>
                <span className="text-[28px] font-black tracking-[-0.04em] text-[#0c0c0c]">{r.to}</span>
              </div>
              <p className="text-[13.5px] text-[#6a6a6a] leading-[1.6]">{r.desc}</p>
              <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[#e6e6e6]">
                <div
                  className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[9px] font-extrabold flex-shrink-0"
                  style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[#0c0c0c]">{r.client}</div>
                  <div className="text-[11px] text-[#6a6a6a]">{r.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
