"use client";

export default function Topbar() {
   return (
      <div className="w-full bg-gradient-to-r from-gray to-brand h-[45px] justify-between items-center pl-[50px] bg-white border border-[#e7e8e9] hidden xl:flex">
         <span className="hidden 2xl:block">
            Welcome to
            <span className="font-semibold text-brand"> SofGent</span>
         </span>
         <div className="2xl:w-[1021px] w-full h-full flex items-center justify-end">
            <div className="flex space-x-2.5 items-center mr-7">
               <span>
                  <svg
                     width="22"
                     height="20"
                     viewBox="0 0 22 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M21 10.5001C21 10.0087 20.9947 9.01723 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C8.90159 18.4836 9.70108 18.4954 10.5 18.4989"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M1 4L7.91302 7.92462C10.4387 9.35846 11.5613 9.35846 14.087 7.92462L21 4"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M21 15.5L13 15.5M21 15.5C21 14.7998 19.0057 13.4915 18.5 13M21 15.5C21 16.2002 19.0057 17.5085 18.5 18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </span>
               <span className="font-bold text-white">
                  Email : <u>support@sofgent.com</u>
               </span>
            </div>
            <div className="flex space-x-2.5 items-center mr-7">
               <span>
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </span>
               <span className="font-bold text-white">
                  Call : 000 (123) 456 88
               </span>
            </div>
            {/* <!-- social --> */}
            <ul className="flex space-x-[15px] items-center mr-[55px]">
               <li>
                  <a
                     href="https://www.facebook.com/people/Sofgent/61564357926545/"
                     aria-label="facebook"
                     className="text-white opacity-50 hover:opacity-100">
                     <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2H11.3333C8.756 2 6.66667 4.08934 6.66667 6.66667H4V9.33333H6.66667V14H9.33333V9.33333H12V6.66667H9.33333V5.66667C9.33333 5.11438 9.78105 4.66667 10.3333 4.66667H12V2Z" />
                     </svg>
                  </a>
               </li>
               <li>
                  <a
                     href="https://www.linkedin.com/company/sofgent/"
                     aria-label="twitter"
                     className="text-white opacity-50 hover:opacity-100">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                           fill="currentColor"
                           d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                        />
                     </svg>
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     aria-label="instagram"
                     className="text-white opacity-50 hover:opacity-100">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                           fill="currentColor"
                           d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                        />
                     </svg>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
}
