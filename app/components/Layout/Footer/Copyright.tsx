/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

export default function Copyright() {
   const [year, setYear] = useState(new Date().getFullYear());

   return (
      <>
         <span className="text-white">
            {year} © All rights reserved by <b>SofGent</b>
         </span>
      </>
   );
}
