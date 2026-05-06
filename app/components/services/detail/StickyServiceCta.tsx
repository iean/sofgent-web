"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export default function StickyServiceCta() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      let lastY = typeof window !== "undefined" ? window.scrollY : 0;
      const onScroll = () => {
         if (typeof window === "undefined") return;
         const y = window.scrollY;
         // Show after the user has scrolled past the hero (≈600px) and
         // hide when they scroll back up near the top.
         setVisible(y > 600 && y - lastY > -2);
         lastY = y;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <div
         aria-hidden={!visible}
         className={`fixed bottom-4 inset-x-4 md:inset-auto md:right-6 md:bottom-6 z-30 transition-all duration-300 ${
            visible
               ? "opacity-100 translate-y-0 pointer-events-auto"
               : "opacity-0 translate-y-3 pointer-events-none"
         }`}>
         <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-cyan-500 text-slate-950 px-6 py-3 text-sm md:text-base font-bold shadow-[0_15px_40px_rgba(6,182,212,0.35)] hover:bg-cyan-400 transition-colors">
            Book a strategy call
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
         </Link>
      </div>
   );
}
