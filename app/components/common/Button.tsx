import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface PropsType {
   className?: string;
   href?: string;
   btnText?: string;
   external?: boolean|false;
}
const Button: React.FC<PropsType> = ({
   className,
   href,
   btnText,
   external,
}) => {
   return (
      <>
         {external ? (
            <>
               <a
                  href={href ? href : "#"}
                  className={twMerge(
                     "inline-flex items-center px-6 py-3 mt-4 sm:mt-0 bg-brand text-white rounded-lg font-semibold shadow-md hover:bg-secondary transform hover:-translate-y-0.5 transition-all duration-200 group",
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
                     "inline-flex items-center px-6 py-3 mt-4 sm:mt-0 bg-brand text-white rounded-lg font-semibold shadow-md hover:bg-secondary transform hover:-translate-y-0.5 transition-all duration-200 group",
                     className
                  )}>
                  {btnText}
                  <FaArrowRight className="w-4 h-4 ml-2" />
               </Link>
            </>
         )}
      </>
   );
};

export default Button;
