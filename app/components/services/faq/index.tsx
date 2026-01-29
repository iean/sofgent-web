"use client";
import { useState } from "react";
import LottieLines from "../../common/LottieLine";

// Faq Items
const faqItems = [
   {
     "question": "Why should I outsource custom software development to Sofgent?",
     "answer": "Outsourcing to Sofgent allows you to leverage a team of experienced developers, cutting-edge technology, and proven processes. We focus on delivering high-quality, scalable software solutions tailored to your specific business needs, all while helping you save time and reduce costs."
   },
   {
     "question": "How do you ensure the security of my project and data?",
     "answer": "We take security very seriously. From NDA agreements to secure coding practices and data encryption, every step of our process ensures your intellectual property and sensitive information remain protected. Our systems comply with industry standards like GDPR and ISO for added peace of mind."
   },
   {
     "question": "What industries do you specialize in for custom software development?",
     "answer": "Sofgent has successfully delivered solutions for a wide range of industries, including Healthcare, Finance and FinTech, E-commerce, Education and eLearning, Logistics and Supply Chain, and Real Estate. If your industry isn’t listed, we’re confident in our ability to adapt and meet your specific needs."
   },
   {
     "question": "How will I stay updated on the progress of my project?",
     "answer": "Transparency is a cornerstone of our process. We keep you informed through regular progress reports, weekly or bi-weekly meetings (as per your preference), and direct communication channels via email, Slack, or other tools. Our project management ensures you’re involved and informed every step of the way."
   },
   {
     "question": "What technologies do you use in software development?",
     "answer": "We leverage a wide range of modern technologies, including Angular, React, Vue.js (Frontend); ASP.NET Core, .NET Core API, Spring Boot, Node.js (Backend); MySQL, PostgreSQL, MongoDB (Database); and Kubernetes, GitHub Actions, Azure DevOps (DevOps). Our team continuously updates its knowledge base to stay at the forefront of technological advancements."
   },
   {
     "question": "Can you integrate third-party services and APIs into my software?",
     "answer": "Yes, we specialize in integrating third-party tools and APIs seamlessly into your software. Whether it’s payment gateways like Stripe, CRM systems like Zoho, or AI-powered tools like ChatGPT, we ensure smooth functionality."
   },
   {
     "question": "How do you manage time zone differences?",
     "answer": "Our team is experienced in working across time zones and ensures flexibility to match your working hours. We schedule meetings and updates at times that suit your convenience to ensure smooth collaboration."
   },
   {
     "question": "What is your typical project timeline?",
     "answer": "Timelines depend on the complexity and scope of the project. However, we follow an agile approach to deliver an MVP (Minimum Viable Product) quickly, ensuring you see results early while continuing iterative improvements."
   },
   {
     "question": "What is the cost of outsourcing a custom software development project?",
     "answer": "The cost varies based on project complexity, features, and timelines. We provide transparent, flexible pricing models, including fixed-cost, time-and-materials, or dedicated team models, tailored to your budget and goals."
   },
   {
     "question": "Will I own the code and intellectual property?",
     "answer": "Yes, once the project is complete and all payments are made, you own 100% of the code, designs, and intellectual property. We transfer full ownership rights to you, ensuring your business retains complete control."
   },
   {
     "question": "What happens after the project is delivered?",
     "answer": "We provide comprehensive post-launch support, including bug fixes and updates, feature enhancements, and maintenance and monitoring services. You can choose from flexible support packages to keep your software running smoothly."
   },
   {
     "question": "How do I start my project with Sofgent?",
     "answer": "Getting started is simple! Contact us through our website or email with your requirements, schedule a free consultation to discuss your goals, receive a tailored proposal with timelines and pricing, and kick off your project with our dedicated team!"
   },
   {
     "question": "Can I scale up or down my outsourced team?",
     "answer": "Absolutely. Our flexible engagement models allow you to scale your team based on project requirements, ensuring you only pay for the resources you need."
   },
   {
     "question": "How do you handle project delays or unexpected challenges?",
     "answer": "We mitigate risks with thorough planning and agile methodologies. If challenges arise, we proactively communicate, adapt our strategies, and work diligently to stay on track without compromising quality."
   },
   {
     "question": "Why choose Sofgent over other outsourcing agencies?",
     "answer": "With Sofgent, you gain access to a proven track record of delivering successful projects, expertise in modern technologies and industry best practices, transparent communication and customer-centric processes, and tailored solutions designed to align with your unique business goals."
   }
 ]
 

export default function Faq() {
   const [activeFaq, setActiveFaq] = useState(0);

   const toggleFAQ = (index: number) => {
      setActiveFaq(activeFaq === index ? 0 : index);
   };

   return (
      <section className="relative mt-40" id="faq">
         <div className="w-full relative z-10">
            <div className="mx-auto theme-container">
               <div className="relative flex items-center justify-center px-4 py-10 overflow-hidden border md:px-0 md:py-20 rounded-3xl border-brandBorder bg-gray">
                  {/* <!-- animation circle  --> */}

                  <div className="absolute flex items-center justify-center w-2 h-2 -bottom-1 -right-1">
                     <div className="animated_circle bg-brand/10"></div>
                     <div className="animated_circle2 bg-brand/10"></div>
                     <div className="animated_circle3 bg-brand/10"></div>
                     <div className="animated_circle4 bg-brand/10"></div>
                  </div>
                  <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
                     <h1 className="py-0.5 px-5 bg-white border-brand border rounded-[30px] font-medium text-blue-seo">
                        FAQs
                     </h1>
                     <h2 className="mt-5 font-semibold text-24 sm:text-48">
                        Asked Questions & Answer
                     </h2>

                     <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
                        {faqItems.map((faq, index) => (
                           <div
                              onClick={() => toggleFAQ(index)}
                              key={index}
                              className="py-2">
                              <h2>
                                 <button className="flex items-center justify-between w-full text-left font-semibold py-2">
                                    <span>{faq.question}</span>
                                    <svg
                                       className="fill-brand shrink-0 ml-8"
                                       width="16"
                                       height="16"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <rect
                                          y="7"
                                          width="16"
                                          height="2"
                                          rx="1"
                                          className={`transform origin-center transition duration-200 ease-out ${
                                             activeFaq === index &&
                                             "!rotate-180"
                                          }`}
                                       />
                                       <rect
                                          y="7"
                                          width="16"
                                          height="2"
                                          rx="1"
                                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                             activeFaq === index &&
                                             "!rotate-180"
                                          }`}
                                       />
                                    </svg>
                                 </button>
                              </h2>
                              <div
                                 id={`accordion-text-01`}
                                 role="region"
                                 aria-labelledby={`accordion-title-01`}
                                 className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeFaq === index
                                       ? "grid-rows-[1fr] opacity-100"
                                       : "grid-rows-[0fr] opacity-0"
                                 }`}>
                                 <div className="overflow-hidden">
                                    <p className="pb-3">{faq.answer}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <LottieLines classNames="top-32" />
      </section>
   );
}
