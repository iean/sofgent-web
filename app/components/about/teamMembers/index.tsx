import member1 from "@assets/images/about/team1.webp";
import member2 from "@assets/images/about/team2.webp";
import member3 from "@assets/images/about/team3.webp";
import member4 from "@assets/images/about/team4.webp";
import Button from "../../common/Button";
import SectionTag from "../../common/SectionTag";
import MemberCard from "./MemberCard";

// Members
const teamMembers = [
   {
      name: "Pasquale S. Larson",
      position: "Frontend Developer",
      image: member1,
   },
   {
      name: "Steven N. Manning",
      position: "Frontend Developer",
      image: member2,
   },
   {
      name: "Lawrence P. Harrison",
      position: "Frontend Developer",
      image: member3,
   },
   {
      name: "Richard S. Sanders",
      position: "Frontend Developer",
      image: member4,
   },
];
export default function AboutTeam() {
   return (
      <section className="bg-white pt-16 pb-14 md:pt-[130px] md:pb-[120px] relative">
         <div className="w-full mx-auto theme-container">
            <div className="flex flex-col justify-between w-full lg:flex-row">
               <div className="">
                  <SectionTag tag="Team Memebers" />
                  <h2 className="pt-5 font-semibold text-main-black text-24 sm:text-48">
                     Experience Team Member
                  </h2>
               </div>
               <div className="flex flex-col items-center gap-10 sm:flex-row">
                  <h1 className="flex items-center justify-between w-full gap-4 font-semibold text-48 sm:text-65 text-main-black sm:w-fit">
                     <span
                        data-scroll-qs="scroll"
                        data-count-qs="28"
                        data-type-qs="+"
                        data-speed-qs="1000">
                        28+
                     </span>
                     <span className="font-normal text-20 sm:text-22 text-paragraph">
                        Team Member
                     </span>
                  </h1>
                  <Button btnText="Join Our Team" href="/contact" />
               </div>
            </div>
            <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px]">
               {teamMembers.map((member, index) => (
                  <MemberCard
                     key={index}
                     name={member.name}
                     designation={member.position}
                     img={member.image}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
