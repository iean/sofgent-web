import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface PropsType {
   className?: string;
   href?: string;
   btnText?: string;
   external?: boolean | false;
}
const Button: React.FC<PropsType> = ({
   className,
   href,
   btnText,
   external,
}) => {
   const baseClassName =
      "inline-flex items-center justify-center gap-2 rounded-[16px] border border-transparent px-6 py-3.5 mt-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(18,50,74,0.16)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 sm:mt-0";

   return (
      <>
         {external ? (
            <>
               <a
                  href={href ? href : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={twMerge(
                     baseClassName,
                     "group bg-[#12324a] hover:bg-[#0d2537]",
                     className
                  )}>
                  {btnText}
                  <RxOpenInNewWindow className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
               </a>
            </>
         ) : (
            <>
               <Link
                  href={href ? href : "#"}
                  className={twMerge(
                     baseClassName,
                     "group bg-[#12324a] hover:bg-[#0d2537]",
                     className
                  )}>
                  {btnText}
                  <FaArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
               </Link>
            </>
         )}
      </>
   );
};

export default Button;
