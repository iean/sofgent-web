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
      <div className="relative h-full image-area">
         <div className="xl:absolute relative 2xl:w-[752px] lg:w-[600px] w-full left-0 top-0 h-full">
            {/* <!-- main image --> */}
            <div className="relative bottom-0 left-10 z-10 w-full xl:absolute">
               <div className="flex justify-center w-full">
                  <Image
                     width={600}
                     height={700}
                     src={HeroRightImage}
                     alt="Home - Hero Right Image"
                     className="w-full h-auto max-w-[600px]"
                  />
               </div>
            </div>
            {/* <!-- tags --> */}
            <div className="absolute bottom-0 left-0 hidden w-full h-full md:block">
               <div
                  ref={sceneRef}
                  id="hero-mouse-move-anim"
                  className="relative z-10 w-full h-full pointer-events-auto">
                  <div data-depth="0.20" className="layer">
                     <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-brand 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full">
                        Full SaaS Development
                     </span>
                  </div>
                  <div data-depth="0.30" className="layer">
                     <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-brand 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none">
                        Advanced AI Solutions
                     </span>
                  </div>
                  <div data-depth="0.40" className="layer h-fit">
                     <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-brand 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full h-fit">
                        Software Development
                     </span>
                  </div>
                  <div data-depth="0.50" className="layer h-fit">
                     <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-brand 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none h-fit">
                        Mastery in Integrations
                     </span>
                  </div>
               </div>
            </div>
            {/* <!-- white circle --> */}
            <div className="absolute left-0 bottom-[100px] w-full md:block hidden">
               <div className="flex justify-center">
                  <div className="w-[533px] h-[585px] bg-white rounded-[266px]"></div>
               </div>
            </div>
            {/* <!-- shadow --> */}
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
