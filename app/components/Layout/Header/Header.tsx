"use client";
import { useState } from "react";
import logo from "@assets/images/sofgent-logo.svg";
import Image from "next/image";
import Link from "next/link";
import Topbar from "./Topbar";

const Header = () => {
   const [open, setOpen] = useState(false);

   const navItems = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
   ];

   return (
      <header>
         {/* Mobile Header */}
         <div className="fixed top-0 left-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[#e7e8e9] xl:hidden">
            <div className="flex items-center justify-between h-[60px] px-4">
               <Link href="/" aria-label="logo">
                  <Image width={160} height={40} src={logo} alt="SoftGen Logo" />
               </Link>
               <button
                  aria-label="Toggle menu"
                  onClick={() => setOpen(!open)}
                  className="text-brand"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-7 h-7"
                  >
                     {open ? (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     ) : (
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                     )}
                  </svg>
               </button>
            </div>
            {open && (
               <div className="px-4 pb-4 border-t border-[#e7e8e9] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                  <ul className="flex flex-col py-2 space-y-2">
                     {navItems.map((item) => (
                        <li key={item.href} className="font-semibold text-paragraph">
                           <Link href={item.href} onClick={() => setOpen(false)}>
                              {item.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
                  <Link
                     href="/contact"
                     onClick={() => setOpen(false)}
                     className="inline-flex items-center justify-center w-full px-4 py-3 mt-2 font-semibold text-white rounded-lg bg-brand hover:bg-secondary"
                  >
                     Get a Quote
                  </Link>
               </div>
            )}
         </div>

         {/* Desktop Header */}
         <div className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs">
            <div className="mx-auto relative">
               <Topbar />
               <div className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[#e7e8e9]">
                  <div className="theme-container h-[90px] flex items-center justify-between">
                     <Link href="/" aria-label="logo" className="shrink-0">
                        <Image
                           width={200}
                           height={50}
                           src={logo}
                           alt="SoftGen Logo"
                        />
                     </Link>
                     <nav className="flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                           {navItems.map((item) => (
                              <li key={item.href}>
                                 <Link
                                    href={item.href}
                                    className="font-semibold text-paragraph text-main-black hover:text-brand underlines"
                                 >
                                    {item.label}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                        <Link
                           href="/contact"
                           className="inline-flex items-center px-4 py-2 font-semibold text-white rounded-md bg-brand hover:bg-secondary shadow-sm"
                        >
                           Get a Quote
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
