import Image from "next/image";
import Link from "next/link";
import logo from "@assets/images/sofgent-logo.svg";

const services = [
  { title: "AI Product & MVP Development", href: "/product-development" },
  { title: "AI Document Automation", href: "/services/document-intelligence-systems" },
  { title: "AI Integration & Automation", href: "/custom-software" },
  { title: "All Services", href: "/services" },
];

const solutions = [
  { title: "AI Knowledge Base", href: "/services/saas-micro-saas-solutions" },
  { title: "OCR Document Automation", href: "/services/document-intelligence-systems" },
  { title: "AI Knowledge & Quality", href: "/services/advanced-ai-solutions" },
  { title: "AI Employee Onboarding", href: "/services/system-integration" },
  { title: "AI-Enabled Custom CRM", href: "/services/custom-software-development" },
];

const company = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "How We Build SaaS", href: "/how-we-build-saas" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#f7f7f7", borderTop: "1px solid #e6e6e6", padding: "64px 0 36px" }}>
      <div className="max-w-[1140px] mx-auto px-8">

        {/* 5-col top */}
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1.1fr_1.1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src={logo} alt="SofGent" width={130} height={38} style={{ width: "130px", height: "auto" }} />
            </Link>
            <p className="text-[13px] text-[#6a6a6a] leading-[1.7] max-w-[240px]">
              We build production-ready AI products in 4–6 weeks for founders, CTOs, and operations teams.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.07em] uppercase text-[#0c0c0c] mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href={s.href} className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.07em] uppercase text-[#0c0c0c] mb-4">Solutions</h4>
            <ul className="flex flex-col gap-2.5">
              {solutions.map((s) => (
                <li key={s.title}>
                  <Link href={s.href} className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.07em] uppercase text-[#0c0c0c] mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.title}>
                  <Link href={c.href} className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.07em] uppercase text-[#0c0c0c] mb-4">Get in touch</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="mailto:contact@sofgent.com" className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                  contact@sofgent.com
                </a>
              </li>
              <li>
                <a href="tel:+8801537740365" className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                  +880 153 7740365
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                  Book a Free Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid #e6e6e6" }}
        >
          <span className="text-[12.5px] text-[#bbb]">© 2026 SofGent. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-[12.5px] text-[#bbb] hover:text-[#0c0c0c] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-[12.5px] text-[#bbb] hover:text-[#0c0c0c] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
