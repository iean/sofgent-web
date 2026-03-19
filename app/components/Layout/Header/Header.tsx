"use client";

import { useState } from "react";
import logo from "@assets/images/sofgent-logo.svg";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Topbar from "./Topbar";

const Header = () => {
   const [open, setOpen] = useState(false);
   const pathname = usePathname();

   const navItems = [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/how-we-build-saas", label: "How We Build" },
      { href: "/ai-product-studio", label: "AI Studio" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/launch-your-mvp", label: "Launch MVP" },
   ];

   const isActive = (href: string) => {
      if (href === "/") {
         return pathname === "/";
      }

      return pathname === href || pathname.startsWith(`${href}/`);
   };

   return (
      <header className="relative z-40">
         <div className="fixed top-0 left-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/82 xl:hidden">
            <div className="mx-auto flex h-[72px] max-w-[1330px] items-center justify-between px-4">
               <Link href="/" aria-label="logo">
                  <Image width={160} height={40} src={logo} alt="Sofgent Logo" />
               </Link>
               <button
                  aria-label="Toggle menu"
                  onClick={() => setOpen(!open)}
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-slate-200 bg-white text-slate-700 shadow-sm">
                  {open ? (
                     <X className="h-5 w-5" strokeWidth={1.9} />
                  ) : (
                     <Menu className="h-5 w-5" strokeWidth={1.9} />
                  )}
               </button>
            </div>
            {open && (
               <div className="border-t border-slate-200 bg-white/94 px-4 pb-5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/82">
                  <ul className="grid gap-2 py-4">
                     {navItems.map((item) => (
                        <li key={item.href}>
                           <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`block rounded-[16px] px-4 py-3 text-[15px] font-medium ${
                                 isActive(item.href)
                                    ? "bg-slate-950 text-white"
                                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                              }`}>
                              {item.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
                  <Link
                     href="/contact"
                     onClick={() => setOpen(false)}
                     className="inline-flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#12324a] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,50,74,0.18)] hover:bg-[#0d2537]">
                     Book a Call
                     <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
               </div>
            )}
         </div>

         <div className="fixed top-0 left-0 z-40 hidden w-full xl:block">
            <div className="mx-auto max-w-[1460px] px-6 pt-4">
               <Topbar />
               <div className="mt-3 rounded-[24px] border border-slate-200/80 bg-white/88 shadow-[0_22px_54px_rgba(15,23,42,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/82">
                  <div className="theme-container flex h-[84px] items-center justify-between gap-6">
                     <Link href="/" aria-label="logo" className="shrink-0">
                        <Image
                           width={194}
                           height={48}
                           src={logo}
                           alt="Sofgent Logo"
                        />
                     </Link>
                     <nav className="flex min-w-0 flex-1 items-center justify-end gap-4">
                        <ul className="flex min-w-0 items-center gap-1 rounded-[20px] border border-slate-200 bg-slate-50/75 p-1.5">
                           {navItems.map((item) => (
                              <li key={item.href}>
                                 <Link
                                    href={item.href}
                                    className={`inline-flex whitespace-nowrap rounded-[14px] px-4 py-2.5 text-[14px] font-medium tracking-[-0.01em] ${
                                       isActive(item.href)
                                          ? "bg-white text-slate-950 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
                                          : "text-slate-500 hover:bg-white/90 hover:text-slate-900"
                                    }`}>
                                    {item.label}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                        <Link
                           href="/contact"
                           className="inline-flex min-w-[148px] whitespace-nowrap items-center justify-center gap-2 rounded-[18px] bg-[#12324a] px-6 py-3.5 text-sm font-semibold tracking-[-0.01em] text-white shadow-[0_20px_44px_rgba(18,50,74,0.18)] hover:bg-[#0d2537]">
                           Book a Call
                           <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                        </Link>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
