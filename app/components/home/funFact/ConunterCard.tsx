'use client'
import CountUp from "react-countup";

interface CounterProps {
   number: number;
   title: string;
   append?: string;
}
const CounterUpCard: React.FC<CounterProps> = ({ number, title, append }) => {
   return (
      <div className="rounded-[20px] bg-gray h-[178px] border border-primary bg-main-gray">
         <div className="relative flex items-center justify-center p-8">
            <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
               <p className="font-semibold text-center md:text-5xl text-4xl text-main-black">
                  <CountUp start={0} end={number} />
                  {append}
               </p>
               <hr className="border-[3px] border-primary w-[80px]" />
               <p className="font-semibold text-center text-paragraph text-lg">
                  {title}
               </p>
            </div>
         </div>
      </div>
   );
};

export default CounterUpCard;
