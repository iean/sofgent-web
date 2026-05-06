"use client";
import lineAnimation from "@utils/left_lines.json";
import Lottie from "lottie-react";
import { twMerge } from "tailwind-merge";

const LottieLines: React.FC<{ classNames?: string }> = ({ classNames }) => {
   return (
      <div
         className={twMerge(
            "absolute flex justify-between top-1/3",
            classNames
         )}>
         <Lottie animationData={lineAnimation} loop={true} />
         <Lottie
            animationData={lineAnimation}
            className="transform rotate-180"
            loop={true}
         />
      </div>
   );
};

export default LottieLines;
