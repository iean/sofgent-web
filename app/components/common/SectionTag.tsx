import { twMerge } from "tailwind-merge";

const SectionTag: React.FC<{ tag: string,className?:string }> = ({ tag,className }) => {
   return (
      <>
         <span className={twMerge('mb-5 p-2 bg-gray text-center text-brand rounded-full',className)}>
            {tag}
         </span>
      </>
   );
};

export default SectionTag;
