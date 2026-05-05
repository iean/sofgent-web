// Renders only the social channels SofGent actually maintains.
// Add Twitter / Instagram links here once those accounts are live —
// do NOT ship href="#" placeholders.

const SOCIAL_LINKS: Array<{
   label: string;
   href: string;
   icon: "facebook" | "linkedin";
}> = [
   {
      label: "Facebook",
      href: "https://www.facebook.com/people/Sofgent/61564357926545/",
      icon: "facebook",
   },
   {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/sofgent/",
      icon: "linkedin",
   },
];

const ICON_PATHS: Record<"facebook" | "linkedin", string> = {
   facebook:
      "M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z",
   linkedin:
      "M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z",
};

const ICON_SIZE: Record<"facebook" | "linkedin", { w: number; h: number; v: string }> = {
   facebook: { w: 11, h: 16, v: "0 0 11 16" },
   linkedin: { w: 17, h: 17, v: "0 0 24 24" },
};

export default function SocialFollow() {
   return (
      <div className="flex items-center gap-[15px]">
         <h2 className="font-semibold text-lg text-slate-900 pr-2.5">
            Follow Us
         </h2>
         {SOCIAL_LINKS.map(({ label, href, icon }) => {
            const size = ICON_SIZE[icon];
            return (
               <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 text-primary hover:text-white rounded-full flex justify-center items-center border border-primary/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-primary before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <span className="relative z-10">
                     <svg
                        width={size.w}
                        height={size.h}
                        viewBox={size.v}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                           d={ICON_PATHS[icon]}
                           fill="currentColor"
                           fillRule={icon === "linkedin" ? "evenodd" : undefined}
                           clipRule={icon === "linkedin" ? "evenodd" : undefined}
                        />
                     </svg>
                  </span>
               </a>
            );
         })}
      </div>
   );
}
