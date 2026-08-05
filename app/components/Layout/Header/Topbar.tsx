export default function Topbar() {
  return (
    <div
      className="w-full hidden xl:block"
      style={{ background: "#326d6d", padding: "8px 32px" }}
    >
      <div className="max-w-[1140px] mx-auto flex items-center justify-between gap-6">
        <p className="text-[12.5px]" style={{ color: "rgba(255,255,255,0.85)" }}>
          Most AI projects die in pilot. <strong className="text-white">SofGent</strong> ships yours to production in 4–6 weeks — fixed scope, fixed price.
        </p>
        <div className="flex items-center gap-5 shrink-0">
          <a
            href="mailto:contact@sofgent.com"
            className="flex items-center gap-1.5 text-[12px] transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            contact@sofgent.com
          </a>
          <a
            href="tel:+8801537740365"
            className="flex items-center gap-1.5 text-[12px] transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.27h3a2 2 0 0 1 2 1.72c.13.97.35 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.09-1.08a2 2 0 0 1 2.11-.45c.89.35 1.84.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +880 153 7740365
          </a>
        </div>
      </div>
    </div>
  );
}
