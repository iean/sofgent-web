import Link from "next/link";

const projects = [
  {
    full: true,
    img: "/images/project/haven/HOME_Financing.jpg",
    tag: "Case Study",
    title: "Haven — AI-Powered Home Financing Platform",
    desc: "End-to-end document processing and loan decision automation for a UK care services provider.",
    metrics: [
      { value: "80%", label: "Less manual review time", hi: true },
      { value: "6 mo → 3 wk", label: "Time to automate", hi: true },
      { value: "0", label: "Critical launch bugs", hi: true },
    ],
    pills: ["Document Automation", "AI Decision Engine", "Next.js"],
    href: "/projects",
  },
  {
    full: false,
    img: "/images/project/haven/home_card_staffing.jpg",
    tag: "Product",
    title: "Staffing Operations SaaS",
    desc: "AI-assisted scheduling for domiciliary care providers.",
    metrics: [
      { value: "8 wk → 3 wk", label: "MVP shipped in", hi: true },
      { value: "40%", label: "Fewer scheduling errors", hi: false },
    ],
    pills: ["SaaS MVP", "AI Workflows"],
    href: "/projects",
  },
  {
    full: false,
    img: "/images/project/haven/home_card_supported_living.jpg",
    tag: "Platform",
    title: "Supported Living Management Portal",
    desc: "Compliance dashboards and audit-ready record management.",
    metrics: [
      { value: "100%", label: "Audit pass rate", hi: true },
      { value: "Zero", label: "Legacy dependencies", hi: false },
    ],
    pills: ["Data Infrastructure", "Compliance"],
    href: "/projects",
  },
];

export default function Work() {
  return (
    <section className="border-b border-[#e6e6e6]" style={{ padding: "112px 0" }}>
      <div className="max-w-[1140px] mx-auto px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-11">
          <div>
            <div className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3">
              <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
              Selected work
            </div>
            <h2
              className="font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0c0c0c]"
              style={{ fontSize: "clamp(27px, 3.2vw, 42px)" }}
            >
              Products we&apos;ve shipped.
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-[13px] font-medium text-[#6a6a6a] border border-[#e6e6e6] px-5 py-2.5 rounded-[9px] hover:border-[#bbb] hover:text-[#0c0c0c] transition-colors self-end"
          >
            All projects
          </Link>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 rounded-2xl overflow-hidden border border-[#e6e6e6]"
          style={{ gap: "1px", background: "#e6e6e6" }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white hover:bg-[#f7f7f7] transition-colors overflow-hidden cursor-pointer"
              style={p.full ? { gridColumn: "span 2" } : {}}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ height: p.full ? "300px" : "240px" }}
                />
                <span
                  className="absolute top-3.5 left-3.5 text-[10px] font-bold tracking-[0.1em] uppercase text-white px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
                >
                  {p.tag}
                </span>
              </div>

              {/* Body */}
              <div className="px-6 pt-5 pb-6">
                <h3 className="text-[16px] font-bold tracking-[-0.025em] text-[#0c0c0c] mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#6a6a6a] leading-[1.6]">{p.desc}</p>

                {/* Metric chips */}
                <div className="flex gap-2 mt-4">
                  {p.metrics.map((m, j) => (
                    <div
                      key={j}
                      className="flex-1 rounded-[8px] px-3 py-2.5 border"
                      style={
                        m.hi
                          ? { background: "rgba(50,109,109,0.06)", borderColor: "rgba(50,109,109,0.18)" }
                          : { background: "#f7f7f7", borderColor: "#e6e6e6" }
                      }
                    >
                      <div
                        className="text-[17px] font-extrabold tracking-[-0.03em]"
                        style={{ color: m.hi ? "#326d6d" : "#0c0c0c" }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[10.5px] text-[#6a6a6a] mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pills */}
                <div className="flex gap-1.5 mt-4 flex-wrap">
                  {p.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-[10.5px] font-semibold text-[#326d6d] px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(50,109,109,0.08)" }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
