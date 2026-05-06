"use client";
import ctaImg1 from "@assets/images/home/cta-image.svg";
import Image from "next/image";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";

export default function CtaRightPart() {
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
   // Es LInk return the html
   return (
      <div className="md:w-2/4 w-full pt-10 md:pt-0">
         <div
            ref={sceneRef}
            id="consaltaion-mouse-move-anim"
            className="relative justify-end w-full">
            <div data-depth="0.40">
               <Image
                  className="rounded-full"
                  width={500}
                  height={500}
                  src={ctaImg1}
                  alt="CTA Man Image"
               />
            </div>
         </div>
      </div>
   );
}
