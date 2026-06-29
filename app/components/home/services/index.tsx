import Link from "next/link";

const services = [
  {
    title: "AI SaaS MVP Development",
    desc: "From scoped idea to deployed product in 4–6 weeks. Full stack — architecture, AI layer, and UI.",
    img: "/images/services/software-development.webp",
    href: "/services/saas-mvp-development",
  },
  {
    title: "AI Document Automation",
    desc: "Turn invoices, contracts, and reports into structured data. Automated, end-to-end.",
    img: "/images/services/image-processing.webp",
    href: "/services/ai-solutions",
  },
  {
    title: "AI-Ready Data Infrastructure",
    desc: "Clean, labeled, structured data so your models train on signal, not noise.",
    img: "/images/services/managed-security.webp",
    href: "/services/ai-solutions",
  },
  {
    title: "AI Integration & APIs",
    desc: "Connect OpenAI, Anthropic, or custom models to your systems via clean, well-documented APIs.",
    img: "/images/services/system-integration.webp",
    href: "/services/ai-solutions",
  },
  {
    title: "Product Design & UX",
    desc: "Interface design that converts — from wireframes to pixel-perfect, accessible components.",
    img: "/images/services/ui-ux-design.webp",
    href: "/services/ui-ux-design",
  },
  {
    title: "DevOps & Infrastructure",
    desc: "CI/CD pipelines, cloud architecture, and production monitoring from day one.",
    img: "/images/services/dev-ops.webp",
    href: "/services/dev-ops",
  },
];

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="#326d6d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Services() {
  return (
    <section className="border-b border-[#e6e6e6]" style={{ padding: "112px 0" }}>
      <div className="max-w-[1140px] mx-auto px-8">

        {/* Header row */}
        <div className="flex items-end justify-between mb-11">
          <div>
            <div className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.1em] uppercase text-[#326d6d] mb-3">
              <span className="w-4 h-0.5 rounded-full bg-[#326d6d]" />
              What we build
            </div>
            <h2
              className="font-extrabold tracking-[-0.035em] leading-[1.1] text-[#0c0c0c]"
              style={{ fontSize: "clamp(27px, 3.2vw, 42px)" }}
            >
              Three things we do<br />better than anyone.
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-[13px] font-medium text-[#6a6a6a] border border-[#e6e6e6] px-5 py-2.5 rounded-[9px] hover:border-[#bbb] hover:text-[#0c0c0c] transition-colors self-end"
          >
            View all services
          </Link>
        </div>

        {/* 3×2 grid */}
        <div
          className="grid grid-cols-3 rounded-2xl overflow-hidden border border-[#e6e6e6]"
          style={{ gap: "1px", background: "#e6e6e6" }}
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white hover:bg-[#f7f7f7] transition-colors cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full object-cover h-[196px] transition-all duration-300 [filter:grayscale(15%)] group-hover:[filter:grayscale(0%)] group-hover:scale-[1.04]"
                />
              </div>

              {/* Body */}
              <div className="px-6 pt-5 pb-6">
                <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-2">{svc.title}</h3>
                <p className="text-[13px] text-[#6a6a6a] leading-[1.62]">{svc.desc}</p>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#326d6d] mt-4"
                >
                  Learn more{" "}
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
