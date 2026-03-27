import { FacebookIcon, LinkedinIcon } from "@/app/utils/SVGIcons";
import logo from "@assets/images/sofgent-logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import Copyright from "./Copyright";

// Services List
const serviceList = [
   {
      title: "Launch Your SaaS MVP in 30 Days",
      url: "/services",
   },
   {
      title: "Custom AI Systems for Your Business",
      url: "/services",
   },
   {
      title: "AI-Ready Data Engineering",
      url: "/services/ai-ready-data-engineering",
   },
   {
      title: "Document Intelligence Systems",
      url: "/services/document-intelligence-systems",
   },
   {
      title: "Fix, Rebuild, and Scale Your Product",
      url: "/services",
   },
   {
      title: "How We Build SaaS",
      url: "/how-we-build-saas",
   },
];

// Quick Links List
const quickLinks = [
   {
      title: "Home",
      url: "/",
   },
   {
      title: "Services",
      url: "/services",
   },
   {
      title: "Projects",
      url: "/projects",
   },
   {
      title: "How We Build SaaS",
      url: "/how-we-build-saas",
   },
   {
      title: "Contact",
      url: "/contact",
   },
];

// Social Media List
const socialMediaList = [
   {
      name: "Facebook",
      link: "https://www.facebook.com/people/Sofgent/61564357926545/",
      icon: <FacebookIcon />,
   },
   {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/sofgent/",
      icon: <LinkedinIcon />,
   },
];

export default function Footer() {
   return (
      <footer className="relative mt-[8rem] bg-slate-950 pt-16 text-slate-300 border-t border-white/10">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.05),transparent_22%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.05),transparent_18%)] pointer-events-none" />
         <div className="relative mx-auto grid grid-cols-1 gap-12 pb-16 theme-container md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Logo & About */}
            <div className="lg:col-span-4">
               <Link href="/" className="inline-block mb-6">
                  <Image width={160} height={40} src={logo} alt="Sofgent" />
               </Link>
               <p className="max-w-[320px] text-sm leading-relaxed text-slate-400 mb-8">
                  SofGent is an AI Product Studio that launches MVPs fast,
                  builds custom AI systems, and helps teams rebuild software
                  for scale.
               </p>
               <div className="flex gap-3">
                  {socialMediaList.map((social, index) => (
                     <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all">
                        <span className="scale-90">{social.icon}</span>
                     </a>
                  ))}
               </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
               <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Services</h3>
               <ul className="space-y-3.5">
                  {serviceList.map((service, index) => (
                     <li key={index}>
                        <Link
                           href={service.url}
                           className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                           {service.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
               <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h3>
               <ul className="space-y-3.5">
                  {quickLinks.map((service, index) => (
                     <li key={index}>
                        <Link
                           href={service.url}
                           className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                           {service.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
               <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact Us</h3>
               <address className="not-italic text-sm text-slate-400 leading-relaxed mb-6">
                  House - 69 , Road - 06 , Block - A<br/>
                  Mirpur - 12 , Dhaka - 1216
               </address>
               
               <div className="flex flex-col gap-3">
                  <a className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors" href="mailto:contact@sofgent.com">
                     contact@sofgent.com
                  </a>
                  <a className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors" href="tel:+8801537740365">
                     +880 1537 740365
                  </a>
               </div>
            </div>
         </div>

         {/* Bottom Bar */}
         <div className="relative z-10 border-t border-white/5 bg-slate-950">
            <div className="mx-auto theme-container">
               <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
                  <div className="text-sm text-slate-500">
                     <Copyright />
                  </div>
                  <ul className="flex items-center gap-6">
                     <li>
                        <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
                     </li>
                     <li>
                        <Link href="/terms-conditions" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Terms & Conditions</Link>
                     </li>
                  </ul>
                  <a
                     href="#"
                     aria-label="go top"
                     className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all">
                     <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12V4M4.66699 7.33333L8.00033 4L11.3337 7.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
