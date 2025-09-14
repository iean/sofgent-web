import Image from "next/image";
import Link from "next/link";

interface ServiceCardPropsType {
   title: string;
   description: string;
   icon: string;
   slug: string;
}
const ServiceCard: React.FC<ServiceCardPropsType> = ({
  title,
  description,
  icon,
  slug,
}) => {
  return (
    <Link
      href={`/services/${slug}`}
      aria-label={`${title} – Learn more`}
      data-aos="zoom-out"
      className="block relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-brand before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-300 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-brand after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:z-0 before:ease-linear after:ease-linear cursor-pointer"
    >
      <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] z-10">
        <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray common-transition text-brand group-hover:text-white overflow-hidden">
          {/* Default service icon */}
          <span className="transition-opacity duration-200 ease-linear opacity-100 group-hover:opacity-0">
            <Image src={icon} alt={title} width={45} height={45} />
          </span>
          {/* Hover hand icon (inline SVG to avoid adding assets) */}
          <span
            aria-hidden
            className="absolute transition-opacity duration-200 ease-linear opacity-0 group-hover:opacity-100 text-brand"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 11v2.5a4.5 4.5 0 0 0 9 0V7.75a.75.75 0 1 1 1.5 0V13.5a6 6 0 1 1-12 0V9.5a.75.75 0 1 1 1.5 0V11Zm3-3.25a.75.75 0 1 1 1.5 0V12a.75.75 0 1 1-1.5 0V7.75Zm-3 1.5a.75.75 0 1 1 1.5 0V12a.75.75 0 1 1-1.5 0V9.25Zm6-2a.75.75 0 1 1 1.5 0V12a.75.75 0 1 1-1.5 0V7.25Zm-6.75.5a1.75 1.75 0 1 0-3.5 0v5.75a7.75 7.75 0 1 0 15.5 0V7.75a1.75 1.75 0 1 0-3.5 0V7.5a1.5 1.5 0 1 0-3 0v-.25a1.5 1.5 0 1 0-3 0v-.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="mt-5 mb-4 text-center">
          <p className="mb-2 font-semibold text-20 text-main-black">{title}</p>
          <p className="text-paragraph">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-paragraph group-hover:text-brand">
          <span className="relative font-medium leading-5 border-b border-transparent font-inter before:inline-block before:border-brand before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 group-hover:before:w-full before:overflow-hidden before:h-5">
            Read More
          </span>
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
