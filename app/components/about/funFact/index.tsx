import CounterUpCard from "../../home/funFact/ConunterCard";

export default function AboutFunFact() {
   return (
      <section className="w-full pb-16 md:pb-[130px]">
         <div className="mx-auto theme-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] h3-about-card relative overflow-hidden w-full">
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
      </section>
   );
}
