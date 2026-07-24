import Link from "next/link";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you’re looking for doesn’t exist or has moved.",
  robots: { index: false, follow: true },
};

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const links = [
  { href: "/ai-product-studio", label: "AI Product Studio" },
  { href: "/projects", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden" style={{ background: "#0c0c0c", padding: "120px 0 128px" }}>
        <div className="absolute pointer-events-none" style={{ top: "-160px", left: "50%", transform: "translateX(-50%)", width: "560px", height: "560px", background: "radial-gradient(circle, rgba(50,109,109,0.35) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-[1140px] mx-auto px-8 relative text-center">
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "#67e8f9" }}>Error 404</p>
          <h1 className="font-bold tracking-[-0.045em] text-white leading-[1.0] mb-5" style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
            This page didn’t <span style={{ color: "#67e8f9" }}>ship.</span>
          </h1>
          <p className="text-[16px] leading-[1.65] max-w-[440px] mx-auto mb-9" style={{ color: "rgba(255,255,255,0.6)" }}>
            The page you’re looking for doesn’t exist or has moved. Let’s get you back to something that’s live.
          </p>
          <div className="flex items-center justify-center gap-2.5 flex-wrap mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-[14px] font-bold bg-white text-[#0c0c0c] px-7 py-3.5 rounded-[9px] hover:bg-[#f0f0f0] transition-colors">
              Back to home <ArrowRight />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] font-medium px-6 py-3.5 rounded-[9px] transition-colors" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
              Book a Call
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[13px] font-medium transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
