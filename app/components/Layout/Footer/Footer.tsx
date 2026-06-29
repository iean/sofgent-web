import Image from "next/image";
import Link from "next/link";
import logo from "@assets/images/sofgent-logo.svg";

const services = [
  { title: "AI Product & MVP Development", href: "/product-development" },
  { title: "AI Document Automation", href: "/ai-product-studio" },
  { title: "Integration & Automation", href: "/custom-software" },
  { title: "AI-Ready Data Infrastructure", href: "/ai-product-studio" },
  { title: "DevOps & Infrastructure", href: "/custom-software" },
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

        {/* 4-col top */}
        <div
          className="grid gap-12 mb-14"
          style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
        >
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src={logo} alt="SofGent" width={130} height={36} style={{ width: "130px", height: "auto" }} />
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
                <a href="mailto:support@sofgent.com" className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                  support@sofgent.com
                </a>
              </li>
              <li>
                <a href="tel:+8801537740365" className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                  +880 153 7740365
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-[13.5px] text-[#6a6a6a] hover:text-[#0c0c0c] transition-colors">
                  Book a free call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between pt-7"
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
