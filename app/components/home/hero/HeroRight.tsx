"use client";
import HeroRightBg from "@assets/images/home/hero-right-bg.svg";
import HeroRightImage from "@assets/images/home/hero-right-image.png";
import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";

export default function HeroRight() {
   const sceneRef = useRef(null);

   useEffect(() => {
      if (sceneRef.current) {
         const parallaxInstance = new Parallax(sceneRef.current);
         // Cleanup the parallax instance on component unmount
         return () => {
            parallaxInstance.disable();
         };
      }
   }, []);
   return (
      <div className="image-area relative h-full">
         <div className="relative left-0 top-0 h-full w-full lg:w-[600px] 2xl:w-[752px] xl:absolute">
            <div className="absolute inset-x-4 top-10 hidden h-[78%] rounded-[42px] bg-[linear-gradient(180deg,rgba(8,17,31,0.92)_0%,rgba(36,71,95,0.74)_100%)] shadow-[0_35px_100px_rgba(8,17,31,0.18)] md:block" />
            <div className="absolute inset-x-10 top-16 hidden h-[72%] rounded-[36px] border border-white/20 bg-white/10 backdrop-blur-sm md:block" />

            <div className="relative z-10 flex w-full justify-center px-4 pt-8 xl:absolute xl:bottom-0 xl:left-0 xl:px-0 xl:pt-0">
               <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/60 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                  <Image
                     width={600}
                     height={700}
                     src={HeroRightImage}
                     alt="Home - Hero Right Image"
                     className="h-auto w-full max-w-[600px]"
                  />
               </div>
            </div>

            <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
               <div
                  ref={sceneRef}
                  id="hero-mouse-move-anim"
                  className="relative z-20 h-full w-full pointer-events-auto">
                  <div data-depth="0.20" className="layer">
                     <span className="inline-flex rounded-full border border-white/25 bg-white/12 px-6 py-2.5 text-white shadow-[0_18px_45px_rgba(8,17,31,0.15)] backdrop-blur-md xl:px-[30px]">
                        Simpler AI workflows
                     </span>
                  </div>
                  <div data-depth="0.30" className="layer">
                     <span className="inline-flex rounded-full border border-white/25 bg-white/12 px-6 py-2.5 text-white shadow-[0_18px_45px_rgba(8,17,31,0.15)] backdrop-blur-md xl:px-[30px]">
                        SaaS architecture
                     </span>
                  </div>
                  <div data-depth="0.40" className="layer h-fit">
                     <span className="inline-flex h-fit rounded-full border border-white/25 bg-white/12 px-6 py-2.5 text-white shadow-[0_18px_45px_rgba(8,17,31,0.15)] backdrop-blur-md xl:px-[30px]">
                        Secure delivery systems
                     </span>
                  </div>
                  <div data-depth="0.50" className="layer h-fit">
                     <span className="inline-flex h-fit rounded-full border border-white/25 bg-white/12 px-6 py-2.5 text-white shadow-[0_18px_45px_rgba(8,17,31,0.15)] backdrop-blur-md xl:px-[30px]">
                        Enterprise integrations
                     </span>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
               <div className="flex justify-center">
                  <Image
                     width={750}
                     height={420}
                     src={HeroRightBg}
                     alt="hero Right Bg"
                     className="w-full h-auto max-w-[750px]"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
