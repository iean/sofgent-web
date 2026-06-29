const clients = [
  "Haven",
  "FinStack",
  "DocFlow",
  "NovaSME",
  "Clearbase",
  "Acme Bank",
  "EasyKT",
  "Meridian AI",
];

// Double for seamless loop
const marqueeItems = [...clients, ...clients];

export default function LogoMarquee() {
  return (
    <section className="border-b border-[#e4e4e4] py-7 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-8 mb-6">
        <p className="text-[10.5px] font-bold tracking-[0.1em] uppercase text-center" style={{ color: "#ccc" }}>
          Trusted by growth-stage teams &amp; founders
        </p>
      </div>

      {/* Fade edges + scroll track */}
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex gap-16 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((name, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#326d6d", opacity: 0.5 }}
              />
              <span className="text-[15px] font-bold tracking-[-0.02em] text-[#bbb]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
