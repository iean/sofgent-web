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
         <div className="fixed top-0 left-0 z-40 w-full bg-white border-b border-[#e7e8e9] xl:hidden">
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
               <ul className="flex flex-col px-4 pb-4 space-y-2">
                  {navItems.map((item) => (
                     <li key={item.href} className="font-semibold text-paragraph">
                        <Link href={item.href} onClick={() => setOpen(false)}>
                           {item.label}
                        </Link>
                     </li>
                  ))}
               </ul>
            )}
         </div>

         {/* Desktop Header */}
         <div className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs">
            <div className="2xl:px-[110px] px-5 mx-auto relative">
               <Topbar />
               <div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-white border-t-0 relative">
                  <div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
                     <div className="w-2/4">
                        <Link href="/" aria-label="logo">
                           <Image
                              width={200}
                              height={50}
                              src={logo}
                              alt="SoftGen Logo"
                           />
                        </Link>
                     </div>
                     <div className="w-2/4">
                        <ul className="flex items-center space-x-10">
                           {navItems.map((item) => (
                              <li key={item.href} className="font-semibold text-paragraph hover:underline hover:text-brand">
                                 <Link href={item.href}>{item.label}</Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
