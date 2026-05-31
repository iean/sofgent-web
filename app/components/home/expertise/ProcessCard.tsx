interface ProcessPropsType {
   title: string;
   description: string;
   serial: string;
}
const ProcessCard: React.FC<ProcessPropsType> = ({
   title,
   description,
   serial,
}) => {
   return (
      <div
         data-aos="fade-up"
         className="w-full rounded-[20px] border border-brand  bg-gray px-10 py-[30px] overflow-hidden group relative">
         <div className="relative z-10 flex flex-col space-y-5">
            <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-brand">
               <span className="font-semibold text-brand">{serial}</span>
            </div>
            <div>
               <p className="mb-4 font-semibold text-20 text-main-black">
                  {title}
               </p>
               <p className="text-paragraph">{description}</p>
            </div>
         </div>
      </div>
   );
};

export default ProcessCard;
