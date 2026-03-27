import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface PropsType {
   className?: string;
   href?: string;
   btnText?: string;
   external?: boolean;
   variant?: "primary" | "secondary" | "outline" | "ghost";
   icon?: React.ReactNode;
}

const Button: React.FC<PropsType> = ({
   className,
   href,
   btnText,
   external = false,
   variant = "primary",
   icon,
}) => {
   const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 hover:-translate-y-0.5";
   
   const variantStyles = {
      primary: "bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand/90",
      secondary: "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800",
      outline: "border border-slate-200 bg-white text-slate-900 hover:border-brand hover:text-brand shadow-sm",
      ghost: "text-slate-600 hover:bg-slate-50 hover:text-brand",
   };

   const defaultIcon = external ? (
      <RxOpenInNewWindow className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
   ) : (
      <FaArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
   );

   const buttonContent = (
      <>
         {btnText}
         {icon !== undefined ? icon : defaultIcon}
      </>
   );

   if (external) {
      return (
         <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(baseStyles, variantStyles[variant], "group", className)}
         >
            {buttonContent}
         </a>
      );
   }

   return (
      <Link
         href={href || "#"}
         className={twMerge(baseStyles, variantStyles[variant], "group", className)}
      >
         {buttonContent}
      </Link>
   );
};

export default Button;
