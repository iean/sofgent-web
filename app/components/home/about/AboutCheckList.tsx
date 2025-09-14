import Image from "next/image";
import Link from "next/link";

type AboutCheckListProps = {
   text: string;
   icon: string;
   href: string;
};

const AboutCheckList: React.FC<AboutCheckListProps> = ({ text, icon, href }) => {
   return (
      <li className="flex w-full md:w-auto items-center">
         <Link
            href={href}
            aria-label={text}
            className="flex w-full md:w-auto space-x-2.5 items-center text-brand font-medium px-5 py-3 bg-main-gray border border-gray leading-none rounded-full hover:text-brand hover:border-brand common-transition"
         >
            <span className="inline-flex items-center justify-center w-[18px] h-[18px]">
               <Image src={icon} alt={text} width={18} height={18} />
            </span>
            <span>{text}</span>
         </Link>
      </li>
   );
};

export default AboutCheckList;
