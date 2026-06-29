import Link from "next/link";

export default function Cta({ className }: { className?: string }) {
  return (
    <section className={className} style={{ padding: "112px 0" }}>
      <div className="max-w-[1140px] mx-auto px-8">
        <div
          className="relative overflow-hidden rounded-[24px] px-[72px] py-[80px] grid items-center gap-14"
          style={{
            background: "#0c0c0c",
            gridTemplateColumns: "1fr auto",
          }}
        >
          {/* Teal glow top-left */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-100px", left: "-80px",
              width: "320px", height: "320px",
              background: "radial-gradient(circle, rgba(50,109,109,0.4) 0%, transparent 70%)",
            }}
          />
          {/* Cyan glow bottom-right */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-100px", right: "-60px",
              width: "280px", height: "280px",
              background: "radial-gradient(circle, rgba(103,232,249,0.10) 0%, transparent 70%)",
            }}
          />
          {/* Diagonal stripe texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 40px)",
            }}
          />

          {/* Left content */}
          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                color: "#67e8f9",
                background: "rgba(103,232,249,0.10)",
                border: "1px solid rgba(103,232,249,0.15)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              Free 30-min consultation
            </div>
            <h2
              className="font-extrabold tracking-[-0.035em] leading-[1.08] text-white mb-3"
              style={{ fontSize: "clamp(26px, 3vw, 44px)" }}
            >
              Ready to ship your<br />AI product?
            </h2>
            <p className="text-[15px] leading-[1.65] max-w-[420px]" style={{ color: "rgba(255,255,255,0.42)" }}>
              Book a call. We&apos;ll scope your project, give you a timeline, and tell you exactly what it&apos;ll take.
            </p>
          </div>

          {/* Right buttons */}
          <div className="relative z-10 flex flex-col gap-2 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-[#0c0c0c] bg-white px-8 py-3.5 rounded-[10px] whitespace-nowrap hover:bg-[#f0f0f0] transition-colors"
            >
              Book a Call
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[13.5px] font-medium px-8 py-3.5 rounded-[10px] whitespace-nowrap transition-colors"
              style={{
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
              onMouseEnter={undefined}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
