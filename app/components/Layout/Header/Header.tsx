"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@assets/images/sofgent-logo.svg";
import Topbar from "./Topbar";

/* ═══ NAV STRUCTURE ═══════════════════════════════════════ */
const nav = [
  {
    label: "Services",
    children: [
      {
        href: "/ai-product-studio",
        label: "AI Studio",
        sub: "Document automation, AI apps & data infrastructure",
        icon: (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M3 1h6l3 3v10H3V1z" /><path d="M9 1v3h3M5 7h5M5 10h3" />
          </svg>
        ),
      },
      {
        href: "/product-development",
        label: "Product Development",
        sub: "MVP SaaS — full-stack, AI-powered, live in 4–6 weeks",
        icon: (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <rect x="1.5" y="3" width="12" height="9" rx="1.5" /><path d="M5 7l2 2 4-4" />
          </svg>
        ),
      },
      {
        href: "/custom-software",
        label: "Custom Software",
        sub: "Full service range — web, mobile, DevOps, QA & more",
        icon: (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M2 4l4 4-4 4M8 12h5" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        href: "/about",
        label: "About",
        sub: "Who we are, how we work, and what we care about",
        icon: (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="7.5" cy="5" r="2.5" /><path d="M2.5 13c0-2.8 2.2-5 5-5s5 2.2 5 5" />
          </svg>
        ),
      },
      {
        href: "/contact",
        label: "Contact",
        sub: "Book a Call, send a brief, or just say hello",
        icon: (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M13 9.5c0 .4-.1.8-.3 1.2L11.5 13H3.5L2.3 10.7A3 3 0 0 1 2 9.5V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v5.5z" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        href: "/projects",
        label: "Projects & Case Studies",
        sub: "Real results from shipped AI and SaaS products",
        icon: (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <rect x="1.5" y="1.5" width="5" height="5" rx="1" /><rect x="8.5" y="1.5" width="5" height="5" rx="1" />
            <rect x="1.5" y="8.5" width="5" height="5" rx="1" /><rect x="8.5" y="8.5" width="5" height="5" rx="1" />
          </svg>
        ),
      },
      {
        href: "/blog",
        label: "Blog",
        sub: "Insights on AI, SaaS delivery, and product engineering",
        icon: (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M2 3h11M2 7h8M2 11h6" />
          </svg>
        ),
      },
    ],
  },
];

/* ═══ CHEVRON ═══════════════════════════════════════════= */
const Chevron = ({ open }: { open: boolean }) => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s ease" }}>
    <path d="M2 3.5l3.5 3.5 3.5-3.5" />
  </svg>
);

/* ═══ DESKTOP DROPDOWN ══════════════════════════════════= */
function DropdownMenu({ item }: { item: (typeof nav)[0] }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = item.children.some((c) => pathname.startsWith(c.href));
  const menuId = `nav-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 110); };
  const close = () => { if (timer.current) clearTimeout(timer.current); setOpen(false); };

  return (
    <div
      className="relative"
      ref={containerRef}
      onMouseEnter={show}
      onMouseLeave={hide}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          close();
          (containerRef.current?.querySelector("button") as HTMLButtonElement | null)?.focus();
        }
      }}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node | null)) close();
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") { e.preventDefault(); show(); }
        }}
        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[13.5px] font-medium transition-colors whitespace-nowrap ${
          isActive ? "text-[#0c0c0c] bg-[#f5f5f5] font-semibold" : "text-[#555] hover:text-[#0c0c0c] hover:bg-[#f5f5f5]"
        }`}
      >
        {item.label} <Chevron open={open} />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label={item.label}
          className="absolute top-full left-0 mt-1.5 rounded-[12px] overflow-hidden"
          style={{
            background: "#fff",
            border: "1px solid #eaeaea",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)",
            minWidth: "260px",
          }}
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <div className="p-1.5">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                onClick={close}
                className="flex items-start gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] focus:outline-none transition-colors group"
              >
                <div className="w-[30px] h-[30px] rounded-[7px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(50,109,109,0.09)", color: "#326d6d" }}>
                  {child.icon}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#0c0c0c] leading-snug">{child.label}</div>
                  <div className="text-[11.5px] text-[#9a9a9a] leading-snug mt-0.5">{child.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══ HEADER ════════════════════════════════════════════= */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const toggle = (label: string) =>
    setMobileExpanded((prev) => (prev === label ? null : label));

  return (
    <header>
      {/* ── MOBILE ─────────────────────────────────── */}
      <div className="fixed top-0 left-0 z-50 w-full bg-white/97 backdrop-blur border-b border-[#eaeaea] xl:hidden">
        <div className="flex items-center justify-between h-[58px] px-5">
          <Link href="/" aria-label="logo">
            <Image src={logo} alt="SofGent" width={118} height={34} priority style={{ width: "118px", height: "auto" }} />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#0c0c0c]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              {mobileOpen
                ? <><path d="M4 4l12 12M16 4L4 16" /></>
                : <><path d="M3 6h14M3 10h14M3 14h14" /></>}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-nav" className="border-t border-[#eaeaea] bg-white px-4 pb-5 pt-3">
            <ul className="space-y-0.5 mb-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={mobileExpanded === item.label}
                    aria-controls={`mobile-sub-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => toggle(item.label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-medium text-[#6a6a6a] hover:text-[#0c0c0c] hover:bg-[#f5f5f5] transition-colors"
                  >
                    {item.label}
                    <Chevron open={mobileExpanded === item.label} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div id={`mobile-sub-${item.label.toLowerCase().replace(/\s+/g, "-")}`} className="ml-3 mt-1 space-y-0.5 border-l-2 border-[#f0f0f0] pl-3 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-2 py-2 rounded-md text-[13.5px] font-medium transition-colors ${
                            pathname.startsWith(child.href) ? "text-[#326d6d]" : "text-[#6a6a6a] hover:text-[#0c0c0c]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link href="/" onClick={() => setMobileOpen(false)} className={`block px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${pathname === "/" ? "text-[#0c0c0c] bg-[#f5f5f5]" : "text-[#6a6a6a] hover:text-[#0c0c0c] hover:bg-[#f5f5f5]"}`}>Home</Link>
              </li>
            </ul>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-4 py-2.5 text-[14px] font-semibold text-white rounded-[8px] transition-colors"
              style={{ background: "#326d6d" }}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>

      {/* ── DESKTOP ────────────────────────────────── */}
      <div className="fixed top-0 left-0 z-50 hidden w-full xl:block">
        <Topbar />
        <div className="w-full border-b border-[#eaeaea]" style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}>
          <div className="max-w-[1140px] mx-auto px-8 h-[58px] flex items-center justify-between gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src={logo} alt="SofGent" width={118} height={34} priority style={{ width: "118px", height: "auto" }} />
            </Link>

            {/* Nav — dropdowns */}
            <nav aria-label="Primary" className="flex items-center gap-0.5 flex-1">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-md text-[13.5px] font-medium transition-colors whitespace-nowrap ${
                  pathname === "/" ? "text-[#0c0c0c] bg-[#f5f5f5] font-semibold" : "text-[#555] hover:text-[#0c0c0c] hover:bg-[#f5f5f5]"
                }`}
              >
                Home
              </Link>
              {nav.map((item) => (
                <DropdownMenu key={item.label} item={item} />
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold text-white rounded-[8px] transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: "#326d6d" }}
            >
              Book a Call
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round"><path d="M1.5 5.5h8M5.5 2l4 3.5L5.5 9" /></svg>
            </Link>

          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[58px] xl:h-[94px]" />
    </header>
  );
};

export default Header;
