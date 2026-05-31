"use client";
import CountUp from "react-countup";

export default function AwardCounter() {
   return (
      <>
         <h1 className="text-18 text-white font-semibold tracking-tight max-w-[170px]">
            <CountUp start={0} end={25} /> + Awards Winning
         </h1>
      </>
   );
}
