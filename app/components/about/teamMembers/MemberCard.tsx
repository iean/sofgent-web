import Image, { StaticImageData } from "next/image";

const MemberCard: React.FC<{
   img: StaticImageData;
   name: string;
   designation: string;
}> = ({ img, name, designation }) => {
   return (
      <div className="col-span-3">
         <div className="relative flex items-center justify-center overflow-hidden group/main">
            <Image
               width={300}
               height={350}
               src={img}
               alt={name}
               className="object-cover w-full overflow-hidden rounded-lg"
            />
            {/* <!-- social links  --> */}
            <div className="flex bg-brand absolute bottom-5 translate-y-16 group-hover/main:translate-y-0 transition-all duration-300">
               <a
                  href="#"
                  aria-label="facebook"
                  target="blank"
                  className="relative flex items-center justify-center w-10 h-10 overflow-hidden group before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <svg
                     className="relative z-10"
                     width="11"
                     height="16"
                     viewBox="0 0 11 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        className="group-hover:fill-brand"
                        d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                        fill="white"
                     />
                  </svg>
               </a>
               <a
                  href="#"
                  aria-label="twitter"
                  target="blank"
                  className="relative flex items-center justify-center w-10 h-10 overflow-hidden group before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <svg
                     className="relative z-10"
                     width="17"
                     height="15"
                     viewBox="0 0 17 15"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        className="group-hover:fill-brand"
                        d="M11.5668 0C9.63779 0 8.07406 1.642 8.07406 3.6675C8.07406 3.97357 8.10976 4.27089 8.17704 4.5551C6.32228 4.5551 3.52859 4.18011 1.19541 1.84256C0.885157 1.53172 0.313054 1.73955 0.334575 2.1782C0.680352 9.2262 3.69878 11.2821 5.25319 11.41C4.24944 12.4014 2.79138 13.1839 1.32419 13.5351C0.936969 13.6278 0.841313 14.0517 1.21995 14.1748C2.2698 14.5163 3.7725 14.6478 4.58135 14.67C10.3034 14.67 14.9542 9.85378 15.0577 3.87132C15.809 3.38276 16.2902 2.32199 16.5606 1.57052C16.6264 1.38751 16.3265 1.17427 16.1469 1.24902C15.5857 1.48266 14.8732 1.53804 14.2663 1.34029C13.6258 0.521946 12.6543 0 11.5668 0Z"
                        fill="white"
                     />
                  </svg>
               </a>
               <a
                  href="#"
                  target="blank"
                  aria-label="instagram"
                  className="relative flex items-center justify-center w-10 h-10 overflow-hidden group before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <svg
                     className="relative z-10"
                     width="15"
                     height="15"
                     viewBox="0 0 15 15"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        className="group-hover:fill-brand"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.56934 0C2.80791 0 0.569336 2.23858 0.569336 5V9.33C0.569336 12.0914 2.80792 14.33 5.56934 14.33H9.89934C12.6608 14.33 14.8993 12.0914 14.8993 9.33V5C14.8993 2.23858 12.6608 0 9.89933 0H5.56934ZM12.0334 3.58233C12.4291 3.58233 12.7499 3.26154 12.7499 2.86583C12.7499 2.47012 12.4291 2.14933 12.0334 2.14933C11.6377 2.14933 11.3169 2.47012 11.3169 2.86583C11.3169 3.26154 11.6377 3.58233 12.0334 3.58233ZM11.3169 7.16502C11.3169 9.14358 9.71291 10.7475 7.73435 10.7475C5.75579 10.7475 4.15185 9.14358 4.15185 7.16502C4.15185 5.18646 5.75579 3.58252 7.73435 3.58252C9.71291 3.58252 11.3169 5.18646 11.3169 7.16502ZM7.73454 9.31425C8.92168 9.31425 9.88404 8.35189 9.88404 7.16475C9.88404 5.97762 8.92168 5.01525 7.73454 5.01525C6.54741 5.01525 5.58504 5.97762 5.58504 7.16475C5.58504 8.35189 6.54741 9.31425 7.73454 9.31425Z"
                        fill="white"
                     />
                  </svg>
               </a>
               <a
                  href="#"
                  target="blank"
                  aria-label="dribble"
                  className="relative flex items-center justify-center w-10 h-10 overflow-hidden group before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300">
                  <svg
                     className="relative z-10"
                     width="16"
                     height="15"
                     viewBox="0 0 16 15"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        className="group-hover:fill-brand"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.968753 8.16852C1.3202 10.6761 2.96959 12.7675 5.21595 13.7416C5.31427 11.7206 5.73159 9.77884 6.42092 7.95977C5.6861 7.81945 4.92517 7.74572 4.14551 7.74572C3.04198 7.74572 1.97613 7.89342 0.968753 8.16852ZM6.27698 14.1053C6.84824 14.252 7.44703 14.33 8.06403 14.33C10.1206 14.33 11.9747 13.4636 13.2814 12.0759C11.8551 10.2641 9.82956 8.88853 7.47551 8.21147C6.75912 10.0592 6.34161 12.0411 6.27698 14.1053ZM13.9721 11.2198C14.765 10.0668 15.229 8.67009 15.229 7.165C15.229 7.0389 15.2258 6.91356 15.2193 6.78906C14.4565 6.92722 13.6692 6.99948 12.8644 6.99948C11.2888 6.99948 9.78041 6.72248 8.39159 6.21657C8.21662 6.54406 8.05151 6.87697 7.89663 7.21496C10.3292 7.94113 12.4408 9.3553 13.9721 11.2198ZM15.0835 5.72129C14.7111 3.90088 13.6483 2.33192 12.1806 1.29989C10.9206 2.47864 9.82691 3.81285 8.93454 5.26896C10.1582 5.69289 11.4819 5.92473 12.8644 5.92473C13.6243 5.92473 14.3663 5.8547 15.0835 5.72129ZM11.2196 0.730487C10.2675 0.262702 9.19644 0 8.06403 0C6.40492 0 4.87752 0.563911 3.66304 1.51052C4.75951 2.93208 6.2221 4.09151 7.92282 4.86481C8.83048 3.35221 9.94128 1.96311 11.2196 0.730487ZM2.86484 2.2349C1.66558 3.4992 0.92259 5.20056 0.899582 7.07527C1.93493 6.81151 3.02324 6.67097 4.14551 6.67097C5.06971 6.67097 5.9708 6.76628 6.8382 6.94719C7.01093 6.55986 7.19623 6.1788 7.39363 5.80445C5.59834 4.97229 4.04546 3.74276 2.86484 2.2349Z"
                        fill="white"
                     />
                  </svg>
               </a>
            </div>
         </div>

         <h1 className="mt-6 font-semibold text-22 text-main-black white_card_title">
            {name}
         </h1>

         <p className="mt-1 text-paragraph">{designation}</p>
      </div>
   );
};

export default MemberCard;
