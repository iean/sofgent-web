const BenefitCard: React.FC<{ title: string; text: string }> = ({
   title,
   text,
}) => {
   return (
      <div
         data-aos="fade-left"
         data-aos-duration="1000"
         className="max-w-full col-span-3 relative before:w-full before:block before:h-full before:border before:border-brand before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-brand after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right">
         <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10">
            <h1 className="font-semibold text-18 font-inter text-main-black">
               {title}
            </h1>
            <p className="text-paragraph">{text}</p>
         </div>
      </div>
   );
};

export default BenefitCard;
