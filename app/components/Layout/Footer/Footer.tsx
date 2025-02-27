import { FacebookIcon, LinkedinIcon } from "@/app/utils/SVGIcons";
import logo from "@assets/images/sofgent-logo-white.svg";
import Image from "next/image";
import Link from "next/link";
import Copyright from "./Copyright";

// Services List
const serviceList = [
   {
      title: "Custom Software Development",
      url: "/custom-software-development",
   },
   {
      title: "DevOps Services with Continuous Integration",
      url: "/devops-deployment-continuous-delivery",
   },
   {
      title: "AI Advanced Services",
      url: "/advanced-ai-solutions",
   },
   {
      title: "Custom Saas Solutions ",
      url: "/saas-micro-saas-solutions",
   },
];

// Quick Links List
const quickLinks = [
   {
      title: "Home",
      url: "/",
   },
   {
      title: "About Us",
      url: "/about",
   },
   {
      title: "Services",
      url: "/services",
   },
   {
      title: "Blog",
      url: "/blog",
   },
   {
      title: "Contact Us",
      url: "/contact",
   },
];

// Social Media List
const socialMediaList = [
   {
      name: "Facebook",
      link: "https://www.facebook.com/people/Sofgent/61564357926545/",
      icon: <FacebookIcon />,
   },
   {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/sofgent/",
      icon: <LinkedinIcon />,
   },
];

export default function Footer() {
   return (
      <footer className="relative pt-20 overflow-hidden mt-[10rem] bg-[#2f4858]">
         <div className="grid grid-cols-4 gap-4 mx-auto mb-20 theme-container md:grid-cols-8 xl:grid-cols-12">
            {/* Logo */}
            <div className="col-span-4">
               <Link href="/">
                  <Image width={200} height={100} src={logo} alt="logo" />
               </Link>
               <p className="max-w-[300px] text-white/50 mt-[30px] mb-6">
                  Sofgent is your trusted partner for custom software
                  development, specializing in tailored solutions that drive
                  business growth and efficiency. From scalable platforms to
                  seamless integrations, we deliver innovative software designed
                  to meet your unique needs. Sofgent: Innovating Software.
                  Empowering Businesses.
               </p>

               {/* Social Media */}
               <div className="flex gap-[15px]">
                  {socialMediaList.map((social, index) => (
                     <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        aria-label={social.name}
                        className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-brand before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                        <span className="relative z-10">{social.icon}</span>
                     </a>
                  ))}
               </div>
            </div>
            {/* Services */}
            <div className="col-span-3">
               <h1 className="font-semibold text-white text-18">Services</h1>
               <ul className="mt-3.5">
                  {serviceList.map((service, index) => (
                     <li key={index} className="">
                        <Link href="/project-details">
                           <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                              <svg
                                 className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                                 width="6"
                                 height="12"
                                 viewBox="0 0 6 12"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M1 1L5 6L1 11"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </svg>
                              <span className="transition-all duration-300 group-hover:translate-x-4">
                                 {service.title}
                              </span>
                           </div>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            {/* Quick Link */}
            <div className="col-span-2">
               <h1 className="font-semibold text-white text-18">Quick Link</h1>
               <ul className="mt-3.5">
                  {quickLinks.map((service, index) => (
                     <li key={index} className="">
                        <Link href="/project-details">
                           <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                              <svg
                                 className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                                 width="6"
                                 height="12"
                                 viewBox="0 0 6 12"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M1 1L5 6L1 11"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </svg>
                              <span className="transition-all duration-300 group-hover:translate-x-4">
                                 {service.title}
                              </span>
                           </div>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            {/* Address */}
            <div className="col-span-3">
               <h1 className="font-semibold text-white text-18">Address</h1>
               <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
                  <span className="transition-all duration-300">
                     House - 69 , Road - 06 , Block - A , Mirpur - 12 , Dhaka -
                     1216
                  </span>
               </div>
               <h1 className="font-semibold text-white text-18">Contact</h1>
               <div className="flex gap-2 items-center relative text-white/50 group font-medium transition-all duration-300 mt-3.5">
                  <span className="">
                     <a
                        className="hover:text-white"
                        href="mailto:contact@sofgent.com">
                        contact@sofgent.com
                     </a>{" "}
                     <br />
                     <a className="hover:text-white" href="tel:+88045685299">
                        01537740365
                     </a>
                  </span>
               </div>
            </div>
         </div>
         <div className="w-full h-[80px] md:h-[65px] bg-[#2f4858] border-t border-brand border-1 relative z-10">
            <div className="h-full mx-auto theme-container">
               <div className="flex flex-col items-center justify-between w-full h-full sm:flex-row">
                  <Copyright />
                  <div className="relative">
                     <a
                        href="#"
                        aria-label="go top"
                        className="w-[45px] h-[45px] rounded-full border-[1px] border-brand flex justify-center items-center bg-brand absolute -top-[70px] md:-top-[55px]">
                        <span>
                           <svg
                              width="45"
                              height="45"
                              viewBox="0 0 45 45"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <circle
                                 cx="22.5"
                                 cy="22.5"
                                 r="21"
                                 fill="#326d6d"
                                 stroke="#326d6d"
                                 strokeWidth="1"
                              />
                              <path
                                 d="M19 21L23 17M23 17L27 21M23 17V29"
                                 stroke="white"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </span>
                     </a>
                  </div>
                  <ul className="flex items-center sm:space-x-6">
                     <li className=" hover:text-white hover:underline common-transition text-white/50">
                        <Link href="privacy-policy">Privacy Policy</Link>
                     </li>
                     <li className=" text-white/50">|</li>
                     <li className=" hover:text-white hover:underline common-transition text-white/50">
                        <Link href="terms-conditions">Terms & Conditions</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
