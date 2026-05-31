import getServicesMeta from "@/app/utils/getServicesMeta";
import { ServiceCatIcon, SupportIcon } from "@/app/utils/SVGIcons";
import Link from "next/link";

export default function ServiceDetailsSidebar({ slug }: { slug: string }) {
   const services = getServicesMeta("/app/data/services");
   const filteredServices = services.filter((service) => service.slug !== slug);
   return (
      <div
         data-aos="fade-up"
         data-aos-delay="100"
         className="col-span-8 lg:col-span-4 sticky top-[30px] self-start">
         <div className="border border-brand/10 rounded-2xl py-[30px] bg-main-gray">
            <div className="flex gap-5 items-center px-10 pb-[30px]">
               <ServiceCatIcon />
               <h2 className="font-semibold text-22 text-main-black">
                  More Services
               </h2>
            </div>
            <hr className="bg-brand/10" />
            <div className="pt-10 flex flex-col px-10 gap-[30px]">
               {filteredServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                     <div className="flex items-center gap-2 group text-gray-69 hover:text-brand">
                        <svg
                           width="7"
                           height="11"
                           viewBox="0 0 7 11"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              className="transition-all duration-300"
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                        <p className="text-18 font-medium text-gray-69 font-inter leading-5 transition-colors duration-300 hover:text-brand">
                           {service.title}
                        </p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
         <div className="border border-brand/10 rounded-2xl py-[30px] bg-main-gray mt-[30px]">
            <div className="flex gap-5 items-center px-10 pb-[30px]">
               <SupportIcon />
               <h1 className="font-semibold text-22 text-main-black">
                  Get Consultation
               </h1>
            </div>
            <hr className="bg-brand/10" />
            <div className="pt-10 flex flex-col px-10 gap-[30px]">
               <form action="mailer.php" method="POST">
                  <input
                     placeholder="Full Name"
                     id="fullName"
                     type="text"
                     name="name"
                     className="placeholder:text-paragraph my-2 w-full h-[56px] bg-white border border-brandBorder rounded-md focus:border-brand focus:outline-none focus:right-0 px-[25px]"
                  />
                  <input
                     placeholder="Enter your email..."
                     id="eOne"
                     type="text"
                     name="email"
                     className="placeholder:text-paragraph my-2 w-full h-[56px] bg-white border border-brandBorder rounded-md focus:border-brand focus:outline-none focus:right-0 px-[25px]"
                  />
                  <textarea
                     placeholder="Your message..."
                     id="message"
                     name="message"
                     className="placeholder:text-paragraph w-full bg-white border border-brandBorder rounded-md focus:border-brand focus:outline-none focus:right-0 px-[25px] py-5 h-[140px]"></textarea>
                  <button
                     type="submit"
                     className="rounded-full w-full inline-block px-5 py-2.5 overflow-hidden group bg-brand relative hover:bg-gradient-to-r hover:from-[#5ca979] text-white transition-all ease-out duration-300">
                     Get a Quote
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}
