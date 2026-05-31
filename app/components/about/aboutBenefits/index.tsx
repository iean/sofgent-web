import benefitsImage from "@assets/images/about/benifits.jpg";
import Image from "next/image";
import SectionTag from "../../common/SectionTag";
import BenefitCard from "./BenefitCard";

// Benefits list
const benefitsList = [
   {
      title: "Customizable",
      text: "We provide highly customizable software solutions that can be tailored to your specific business needs and requirements, ensuring a perfect fit for your organization.",
   },
   {
      title: "Flexible",
      text: "Our flexible development approach allows us to adapt quickly to changing requirements and deliver solutions that scale with your business growth and evolving needs.",
   },
   {
      title: "Professional",
      text: "With over 25 years of experience, our team of professional developers and engineers brings deep expertise and industry best practices to every project we undertake.",
   },
   {
      title: "Innovative",
      text: "We stay at the forefront of technology, leveraging cutting-edge tools and innovative approaches to deliver modern, efficient, and future-proof software solutions.",
   },
];
export default function AboutBenefit() {
   return (
      <section id="benefit" className="bg-gray">
         <div className="benefit-section-wrapper w-full py-16 md:py-[130px]">
            <div className="mx-auto theme-container">
               <div className="w-full">
                  <div className="flex flex-col items-center">
                     <SectionTag
                        className="bg-white border-brand border-1"
                        tag="Our Benefits"
                     />
                     <h2 className="text-24 sm:text-48 font-semibold text-main-black mb-[60px] text-center max-w-[653px]">
                        Empowering Your Business Through Software Excellence
                     </h2>
                  </div>
               </div>
               <div className="w-full grid grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-[70px]">
                  <div className="flex items-center justify-center col-span-6">
                     <Image
                        width={550}
                        height={600}
                        src={benefitsImage}
                        alt="About Benefits"
                        className="rounded-2xl"
                     />
                  </div>
                  <div className="flex items-center col-span-6">
                     <div className="grid grid-cols-3 sm:grid-cols-6 gap-[30px]">
                        {benefitsList.map((benefit, index) => (
                           <BenefitCard
                              key={index}
                              title={benefit.title}
                              text={benefit.text}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
