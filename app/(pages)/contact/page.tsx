import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";
import ContactFormModern from "@/app/components/contact/ContactFormModern";

export function generateMetadata(): Metadata {
  return getPageMeta("/contact");
}

export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#0c0c0c", padding: "84px 0 72px" }}>
        <div className="absolute pointer-events-none" style={{ top: "-160px", left: "-120px", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(50,109,109,0.5) 0%, transparent 70%)" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-180px", right: "-100px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)" }} />
        <div className="max-w-[1140px] mx-auto px-8 relative">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full mb-5" style={{ color: "#67e8f9", background: "rgba(103,232,249,0.1)", border: "1px solid rgba(103,232,249,0.18)" }}>Contact</span>
            <h1 className="font-bold tracking-[-0.045em] text-white leading-[1.0] mb-5" style={{ fontSize: "clamp(38px, 5vw, 58px)" }}>Tell us the problem. <span style={{ color: "#67e8f9" }}>We&apos;ll bring the plan.</span></h1>
            <p className="text-[17px] leading-[1.65] max-w-[540px]" style={{ color: "rgba(255,255,255,0.6)" }}>Book a free 30-minute call. We&apos;ll scope your project, give you a timeline, and tell you exactly what it&apos;ll take — no obligation.</p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section style={{ padding: "80px 0" }}>
        <div className="max-w-[1140px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 items-start">
            {/* left */}
            <div>
              <div className="flex items-center gap-2 mb-3"><span className="w-4 h-0.5 rounded-full bg-[#326d6d]" /><p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#326d6d]">What happens next</p></div>
              <h2 className="font-bold tracking-[-0.02em] text-[#0c0c0c] mb-6" style={{ fontSize: "28px" }}>From message to plan in 3 steps.</h2>
              <ul className="flex flex-col gap-3.5 mb-9">
                {[
                  ["1", "You send a few details.", "Just enough for us to understand the problem and the goal."],
                  ["2", "We book a 30-min call.", "We dig into scope, constraints, and what success looks like."],
                  ["3", "You get a scoped plan.", "A written timeline and fixed price — usually within 48 hours."],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-3 text-[13.5px] text-[#1a1a1a]">
                    <span className="w-[22px] h-[22px] rounded-full text-white text-[11px] font-bold flex items-center justify-center shrink-0" style={{ background: "#326d6d" }}>{n}</span>
                    <span><strong>{t}</strong> {d}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-[16px] p-6" style={{ border: "1px solid #e6e6e6" }}>
                {[
                  ["Email", "contact@sofgent.com", "mailto:contact@sofgent.com", <svg key="e" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>],
                  ["Phone", "+880 153 7740365", "tel:+8801537740365", <svg key="p" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.27h3a2 2 0 0 1 2 1.72c.13.97.35 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.09-1.08a2 2 0 0 1 2.11-.45c.89.35 1.84.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>],
                ].map(([lbl, val, href, icon], i) => (
                  <div key={lbl as string} className="flex items-start gap-3 py-4" style={i === 0 ? { borderBottom: "1px solid #f0f0f0" } : {}}>
                    <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center shrink-0" style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}>{icon}</div>
                    <div><div className="text-[11.5px] text-[#9a9a9a]">{lbl as string}</div><a href={href as string} className="text-[14px] font-semibold text-[#0c0c0c]">{val as string}</a></div>
                  </div>
                ))}
                <div className="flex items-start gap-3 py-4" style={{ borderTop: "1px solid #f0f0f0" }}>
                  <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center shrink-0" style={{ background: "rgba(50,109,109,0.10)", color: "#326d6d" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                  <div><div className="text-[11.5px] text-[#9a9a9a]">Response time</div><div className="text-[14px] font-semibold text-[#0c0c0c]">Within 1 business day</div></div>
                </div>
              </div>
            </div>

            {/* right: form */}
            <ContactFormModern />
          </div>
        </div>
      </section>
    </main>
  );
}
