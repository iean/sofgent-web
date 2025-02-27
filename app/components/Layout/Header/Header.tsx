import logo from "@assets/images/sofgent-logo.svg";
import Image from "next/image";
import Link from "next/link";
import Topbar from "./Topbar";

const Header = () => {
   return (
      <header>
         <div className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs">
            <div className="2xl:px-[110px] px-5 mx-auto relative">
               <Topbar />
               <div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-white border-t-0 relative">
                  <div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
                     <div className="w-2/4">
                        <Link href="/" aria-label="logo">
                           <Image
                              width={200}
                              height={50}
                              src={logo}
                              alt="SoftGen Logo"
                           />
                        </Link>
                     </div>
                     <div className="w-2/4">
                        <ul className="flex items-center space-x-10">
                           <li className="font-semibold text-paragraph hover:underline hover:text-brand">
                              <Link href="/">Home</Link>
                           </li>
                           <li className="font-semibold text-paragraph hover:underline hover:text-brand">
                              <Link href="/about">About</Link>
                           </li>
                           <li className="font-semibold text-paragraph hover:underline hover:text-brand">
                              <Link href="/services">Services</Link>
                           </li>
                           <li className="font-semibold text-paragraph hover:underline hover:text-brand">
                              <Link href="/projects">Projects</Link>
                           </li>
                           <li className="font-semibold text-paragraph hover:underline hover:text-brand">
                              <Link href="/blog">Blog</Link>
                           </li>
                           <li className="font-semibold text-paragraph hover:underline hover:text-brand">
                              <Link href="/contact">Contact</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
