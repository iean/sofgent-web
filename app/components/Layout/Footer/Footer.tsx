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
      <footer className="relative mt-[8rem] overflow-hidden bg-[#07111d] pt-20 text-slate-200">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.12),transparent_22%),radial-gradient(circle_at_top_right,rgba(94,234,212,0.08),transparent_18%)]" />
         <div className="relative mx-auto grid grid-cols-4 gap-4 pb-16 theme-container md:grid-cols-8 xl:grid-cols-12">
            {/* Logo */}
            <div className="col-span-4 rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
               <Link href="/">
                  <Image width={200} height={100} src={logo} alt="logo" />
               </Link>
               <p className="mt-6 max-w-[360px] text-[15px] leading-7 text-slate-300">
                  SofGent is an AI Product Studio that launches MVPs fast,
                  builds custom AI systems, and helps teams rebuild software
                  for scale.
               </p>
               <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a
                     href="mailto:contact@sofgent.com"
                     className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 hover:border-cyan-300/40 hover:text-white">
                     contact@sofgent.com
                  </a>
                  <a
                     href="tel:+8801537740365"
                     className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 hover:border-cyan-300/40 hover:text-white">
                     +880 1537 740365
                  </a>
               </div>
               <div className="mt-6 flex gap-[15px]">
                  {socialMediaList.map((social, index) => (
                     <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        aria-label={social.name}
                        className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:border-cyan-300/40 hover:bg-white/10 hover:text-white">
                        <span>{social.icon}</span>
                     </a>
                  ))}
               </div>
            </div>
            {/* Services */}
            <div className="col-span-4 rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:col-span-2 xl:col-span-3">
               <h1 className="text-18 font-semibold text-white">Services</h1>
               <ul className="mt-5 space-y-3">
                  {serviceList.map((service, index) => (
                     <li key={index}>
                        <Link
                           href={service.url}
                           className="block rounded-2xl px-4 py-3 text-[15px] leading-6 text-slate-300 hover:bg-white/6 hover:text-white">
                           {service.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            {/* Quick Link */}
            <div className="col-span-4 rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:col-span-2">
               <h1 className="text-18 font-semibold text-white">Quick Link</h1>
               <ul className="mt-5 space-y-3">
                  {quickLinks.map((service, index) => (
                     <li key={index}>
                        <Link
                           href={service.url}
                           className="block rounded-2xl px-4 py-3 text-[15px] leading-6 text-slate-300 hover:bg-white/6 hover:text-white">
                           {service.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            {/* Address */}
            <div className="col-span-4 rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:col-span-4 xl:col-span-3">
               <h1 className="text-18 font-semibold text-white">Address</h1>
               <div className="mt-5 rounded-[24px] border border-white/10 bg-white/5 p-5 text-[15px] leading-7 text-slate-300">
                  <span>
                     House - 69 , Road - 06 , Block - A , Mirpur - 12 , Dhaka -
                     1216
                  </span>
               </div>
               <h1 className="mt-6 text-18 font-semibold text-white">Contact</h1>
               <div className="mt-5 rounded-[24px] border border-white/10 bg-white/5 p-5 text-[15px] leading-7 text-slate-300">
                  <span>
                     <a
                        className="hover:text-white"
                        href="mailto:contact@sofgent.com">
                        contact@sofgent.com
                     </a>{" "}
                     <br />
                     <a className="hover:text-white" href="tel:+88045685299">
                        01537740365
                     </a>
                  </span>
               </div>
            </div>
         </div>
         <div className="relative z-10 border-t border-white/10 bg-[#07111d]">
            <div className="mx-auto theme-container">
               <div className="flex min-h-[80px] flex-col items-center justify-between gap-4 py-5 sm:flex-row">
                  <Copyright />
                  <a
                     href="#"
                     aria-label="go top"
                     className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 hover:border-cyan-300/40 hover:text-white">
                     Back to top
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M8 12V4"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                        />
                        <path
                           d="M4.66699 7.33333L8.00033 4L11.3337 7.33333"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </a>
                  <ul className="flex items-center gap-4 sm:gap-6">
                     <li className="text-white/60 hover:text-white">
                        <Link href="privacy-policy">Privacy Policy</Link>
                     </li>
                     <li className="text-white/30">|</li>
                     <li className="text-white/60 hover:text-white">
                        <Link href="terms-conditions">Terms & Conditions</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
