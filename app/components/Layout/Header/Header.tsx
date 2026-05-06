"use client";

import { useState, useEffect } from "react";
import logo from "@assets/images/sofgent-logo.svg";
import logoWhite from "@assets/images/sofgent-logo-white.svg";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Topbar from "./Topbar";
import { CALENDLY_URL } from "@/lib/constants";

const Header = () => {
   const [open, setOpen] = useState(false);
   const [headerTheme, setHeaderTheme] = useState<"dark" | "light">("dark");
   const pathname = usePathname();

   // Dynamic theme detector based on underlying content background
   useEffect(() => {
      const handleScroll = () => {
         // Get elements at center x, and 40px down from viewport top (roughly where the header sits)
         const els = document.elementsFromPoint(window.innerWidth / 2, 40);
         if (!els || els.length === 0) return;
         
         // Find the first element that is NOT part of the header itself
         const targetEl = els.find(el => !el.closest('header'));
         if (!targetEl) return;

         let current: HTMLElement | null = targetEl as HTMLElement;
         let isDark = true; // Default to dark if we can't determine
         
         while (current && current !== document.body) {
            const style = window.getComputedStyle(current);
            const bg = style.backgroundColor;
            
            if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
               const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
               if (match) {
                  const r = parseInt(match[1], 10);
                  const g = parseInt(match[2], 10);
                  const b = parseInt(match[3], 10);
                  // Calculate relative luminance
                  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                  isDark = luminance < 0.5;
                  break;
               }
            }
            current = current.parentElement;
         }
         
         setHeaderTheme(isDark ? "dark" : "light");
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      // Run once on mount after a slight delay to ensure rendering
      setTimeout(handleScroll, 100);
      
      return () => window.removeEventListener('scroll', handleScroll);
   }, [pathname]);

   const isDarkTheme = headerTheme === "dark";
   const desktopLogo = isDarkTheme ? logoWhite : logo;

   const navItems = [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/ai-product-studio", label: "AI Studio" },
      { href: "/how-we-build-saas", label: "How We Build" },
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
                     href={CALENDLY_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     onClick={() => setOpen(false)}
                     className="inline-flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#12324a] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,50,74,0.18)] hover:bg-[#0d2537]">
                     Book a Call
                     <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
               </div>
            )}
         </div>

         <div className="fixed top-0 left-0 z-40 hidden w-full xl:block pointer-events-none pt-4">
            <div className={`mx-auto w-[96%] max-w-[1600px] pointer-events-auto rounded-[24px] border shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden transition-colors duration-500 ${isDarkTheme ? 'border-white/10 bg-slate-900/50' : 'border-slate-200/80 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.06)]'}`}>
               {/* MAIN MENU */}
               <div className="flex h-[84px] items-center justify-between gap-4 px-6 relative z-10 w-full">
                  <Link href="/" aria-label="logo" className="shrink-0 pl-2">
                     <Image
                        width={180}
                        height={44}
                        src={desktopLogo}
                        alt="Sofgent Logo"
                     />
                  </Link>
                  <nav className="flex items-center justify-end gap-3 xl:gap-4 overflow-hidden min-w-0">
                     <ul className={`flex items-center gap-0.5 rounded-[20px] border p-1 xl:p-1.5 overflow-x-auto no-scrollbar min-w-0 transition-colors duration-500 ${isDarkTheme ? 'border-white/10 bg-white/5' : 'border-slate-200/80 bg-slate-50/80'}`}>
                        {navItems.map((item) => {
                           const active = isActive(item.href);
                           let linkClass = '';
                           if (isDarkTheme) {
                              linkClass = active 
                                 ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                                 : "text-slate-300 hover:bg-white/10 hover:text-white border border-transparent";
                           } else {
                              linkClass = active
                                 ? "bg-white text-slate-950 border border-slate-200/50 shadow-sm"
                                 : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 border border-transparent";
                           }

                           return (
                              <li key={item.href} className="shrink-0">
                                 <Link
                                    href={item.href}
                                    className={`inline-flex whitespace-nowrap rounded-[14px] px-2.5 xl:px-3.5 py-2.5 text-[12px] xl:text-[13px] font-bold tracking-wide transition-all duration-300 ${linkClass}`}>
                                    {item.label}
                                 </Link>
                              </li>
                           );
                        })}
                     </ul>
                     <div className="hidden shrink-0 lg:block border-l border-white/10 pl-6 my-4 transition-colors duration-500">
                        <Link
                           href={CALENDLY_URL}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${isDarkTheme ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>
                           Book a Call
                           <ArrowUpRight className={`h-4 w-4 ${isDarkTheme ? 'text-slate-950' : 'text-white'}`} strokeWidth={2.5} />
                        </Link>
                     </div>
                  </nav>
               </div>

               {/* SUBSCRIPT MENU (TOPBAR) */}
               <div className={`border-t w-full relative z-0 transition-colors duration-500 ${isDarkTheme ? 'border-white/10 bg-black/20' : 'border-slate-200/60 bg-slate-50/50'}`}>
                  <div className="w-full">
                     <Topbar theme={headerTheme} />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
