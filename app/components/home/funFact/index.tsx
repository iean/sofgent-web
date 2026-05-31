
import Button from "@components/common/Button";
import CounterUpCard from "./ConunterCard";
import SectionTag from "../../common/SectionTag";

export default function FunFact() {
   return (
      <section id="fun-fact">
         <div className="fun-fact-wrapper w-full xl:pb-[130px] pb-[60px]">
            <div className="mx-auto theme-container">
               <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-[155px]">
                  <div className="w-full">
                     <SectionTag tag="Our Story"/>
                     <h2 className="md:text-48 mt-10 text-34 font-semibold text-main-black mb-[50px]">
                        We worked with diverse clients and industries.
                     </h2>
                     <p className="text-paragraph mb-[40px] pl-5 border-l-[3px] border-brand">
                        Defined by digital dynamism, our digital marketing
                        agency emerges beacon of innovation and strategic
                        prowess.
                     </p>
                     <Button btnText="Learn More"/>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 pt-10 md:pt-0">
                     <CounterUpCard
                        number={15}
                        title="Project Complete"
                        append="K+"
                     />
                     <CounterUpCard
                        number={6}
                        title="Years of Experience"
                        append="+"
                     />
                     <CounterUpCard
                        number={15}
                        title="Satisfied Customer"
                        append="K+"
                     />
                     <CounterUpCard
                        number={17}
                        title="Project Complete"
                        append="K+"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
