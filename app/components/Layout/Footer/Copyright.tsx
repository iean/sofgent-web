"use client";

export default function Copyright() {
   const year = new Date().getFullYear();

   return (
      <>
         <span className="text-sm text-white/70">
            {year} © All rights reserved by <b>SofGent</b>
         </span>
      </>
   );
}
