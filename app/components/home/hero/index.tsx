import Image from "next/image";
import Link from "next/link";
import heroImg from "@assets/images/home/hero-right-image.png";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#e6e6e6]"
      style={{ padding: "100px 0 88px" }}
    >
      {/* Teal dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(50,109,109,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Fade out toward bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 40%, #ffffff 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-8">
        <div className="grid items-center gap-16" style={{ gridTemplateColumns: "55fr 45fr" }}>

          {/* ── Left column ─────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase"
              style={{
                color: "#326d6d",
                background: "rgba(50,109,109,0.10)",
                border: "1px solid rgba(50,109,109,0.20)",
              }}
            >
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{
                  background: "#326d6d",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              AI Product Studio
            </div>

            {/* Headline */}
            <h1
              className="font-black tracking-[-0.045em] leading-[0.98] text-[#0c0c0c] mb-5"
              style={{ fontSize: "clamp(44px, 5.8vw, 76px)" }}
            >
              Ship your AI<br />
              product in<br />
              <span style={{ color: "#326d6d" }}>4–6 weeks.</span>
            </h1>

            {/* Sub */}
            <p className="text-[16px] text-[#6a6a6a] leading-[1.72] max-w-[420px] mb-9">
              Document automation, AI SaaS MVPs, and data infrastructure — production-ready for founders, CTOs, and ops teams.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-2.5 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white px-7 py-3.5 rounded-[9px] transition-all hover:-translate-y-0.5"
                style={{ background: "#0c0c0c" }}
              >
                Book a Free Call
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 6.5h10M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6a6a6a] px-6 py-3.5 rounded-[9px] border border-[#e6e6e6] transition-colors hover:border-[#bbb] hover:text-[#0c0c0c]"
              >
                See Our Work
              </Link>
            </div>

            {/* KPI strip */}
            <div className="flex gap-0 border-t border-[#e6e6e6] pt-7">
              <div className="flex-1 pr-6 mr-6 border-r border-[#e6e6e6]">
                <div className="text-[26px] font-extrabold tracking-[-0.04em] text-[#0c0c0c]">2–4 wks</div>
                <div className="text-[11.5px] text-[#6a6a6a] mt-0.5">Avg. delivery time</div>
              </div>
              <div className="flex-1 pr-6 mr-6 border-r border-[#e6e6e6]">
                <div className="text-[26px] font-extrabold tracking-[-0.04em] text-[#0c0c0c]">30+</div>
                <div className="text-[11.5px] text-[#6a6a6a] mt-0.5">AI products shipped</div>
              </div>
              <div className="flex-1">
                <div className="text-[26px] font-extrabold tracking-[-0.04em] text-[#0c0c0c]">0</div>
                <div className="text-[11.5px] text-[#6a6a6a] mt-0.5">Critical launch bugs</div>
              </div>
            </div>
          </div>

          {/* ── Right column — image composition ─────── */}
          <div className="relative">
            {/* Main image */}
            <div
              className="relative rounded-[18px] overflow-hidden border border-[#e6e6e6]"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.09)" }}
            >
              <Image
                src={heroImg}
                alt="SofGent product"
                width={520}
                height={300}
                className="w-full object-cover"
                style={{ height: "300px" }}
                priority
              />
              {/* Teal overlay tint */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(50,109,109,0.06) 0%, transparent 55%)" }}
              />

              {/* Float card top-left */}
              <div
                className="absolute flex items-center gap-2.5 rounded-[12px] px-3.5 py-2.5 bg-white border border-[#e6e6e6]"
                style={{ top: "-12px", left: "-16px", boxShadow: "0 8px 28px rgba(0,0,0,0.09)" }}
              >
                <div
                  className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(50,109,109,0.10)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#326d6d" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[15px] font-extrabold tracking-[-0.03em] text-[#0c0c0c]">18 days</div>
                  <div className="text-[10px] text-[#6a6a6a]">Avg. time to ship</div>
                </div>
              </div>

              {/* Float card bottom-right */}
              <div
                className="absolute flex items-center gap-2.5 rounded-[12px] px-3.5 py-2.5 bg-white border border-[#e6e6e6]"
                style={{ bottom: "-12px", right: "-16px", boxShadow: "0 8px 28px rgba(0,0,0,0.09)" }}
              >
                <div
                  className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(50,109,109,0.10)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#326d6d" strokeWidth="2" strokeLinecap="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[15px] font-extrabold tracking-[-0.03em] text-[#0c0c0c]">30+ shipped</div>
                  <div className="text-[10px] text-[#6a6a6a]">To production</div>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="relative rounded-[12px] overflow-hidden border border-[#e6e6e6]">
                <img
                  src="/images/project/haven/home_card_staffing.jpg"
                  alt="Staffing SaaS"
                  className="w-full object-cover"
                  style={{ height: "100px" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-2.5 pb-2 pt-4 text-[10.5px] font-semibold text-white"
                  style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.68), transparent)" }}
                >
                  Haven — Staffing SaaS
                </div>
              </div>
              <div className="relative rounded-[12px] overflow-hidden border border-[#e6e6e6]">
                <img
                  src="/images/project/haven/home_card_supported_living.jpg"
                  alt="Supported Living"
                  className="w-full object-cover"
                  style={{ height: "100px" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-2.5 pb-2 pt-4 text-[10.5px] font-semibold text-white"
                  style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.68), transparent)" }}
                >
                  Haven — Supported Living
                </div>
              </div>
            </div>

            {/* Stack chips */}
            <div className="flex items-center gap-1.5 flex-wrap mt-2">
              <span className="text-[10px] font-bold text-[#6a6a6a]">Built with</span>
              {["Next.js", "Claude AI", "OpenAI", "Sanity", "Vercel"].map((chip) => (
                <span
                  key={chip}
                  className="text-[10px] font-bold text-[#6a6a6a] px-2.5 py-1 rounded-full border border-[#e6e6e6] bg-[#f7f7f7]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(0.6); }
        }
      `}</style>
    </section>
  );
}
