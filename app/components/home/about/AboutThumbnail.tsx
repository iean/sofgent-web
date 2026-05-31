"use client";
import aboutThumb from "@assets/images/about/about.svg";
import aboutShape from "@assets/images/home/about-shapeBg.png";
import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";

export default function AboutThumbnail() {
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
      <div className="w-full about-thumbnil-area">
         <div
            data-aos="fade-right"
            className="xl:absolute relative lg:-left-16 left-0 top-0 lg:w-[682px] w-full">
            <div id="about-shape-mouse-anim">
               <div data-depth="0.20" className="layer">
                  <div
                     data-aos="fade-right"
                     className="hidden thumbnil-wrapper md:block">
                  <Image
                     width={600}
                     height={600}
                     src={aboutShape}
                     alt="About Image Background Shape"
                     className="w-full h-auto max-w-[600px]"
                  />
                  </div>
               </div>
            </div>
            <div
               data-aos="fade-right"
               className="left-0 w-full thumbnil-main md:absolute -bottom-7">
               <div className="flex justify-center w-full">
                  <Image
                     width={650}
                     height={600}
                     src={aboutThumb}
                     alt="About main image"
                     className="rounded-[20px] overflow-hidden w-full h-auto max-w-[650px]"
                  />
               </div>
            </div>
            <div className="w-full md:block hidden absolute left-0 top-0 h-[550px]">
               <div
                  ref={sceneRef}
                  id="home-one-about-mouse-anim"
                  className="h-full">
                  <div
                     className="absolute layer left-2/3 top-36"
                     data-depth="0.30">
                     <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="inline-block h-fit px-[30px] py-2.5 bg-brand text-pone shadow-small text-white rounded-full rounded-bl-none">
                        System Integration
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
