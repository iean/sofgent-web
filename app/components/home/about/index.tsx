import Button from "../../common/Button";
import SectionTag from "../../common/SectionTag";
import AboutCheckList from "./AboutCheckList";
import AboutThumbnail from "./AboutThumbnail";

const checkList = [
  "Full SaaS Development",
  "Advanced AI Solutions",
  "Mastery in Integrations",
  "Quick Delivery",
];
export default function About() {
  return (
    <section className="pt-28" id="home-one-about">
      <div className="home-one-about-wrapper w-full xl:pb-[153px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid xl:grid-cols-2 grid-cols-1 md:gap-[130px] gap-10 md:items-center relative">
            <AboutThumbnail />
            <div className="about-article-area">
              <SectionTag tag="About Company" />
              <h2 className="md:text-48 mt-6 text-34 font-semibold text-main-black mb-[30px] md:w-[80%] w-full xl:w-full">
                Innovating the Future, Your Partner in Cloud Based SaaS Services
              </h2>

              <p>SofGent, a leading custom application development company, delivers end-to-end software development, seamless system integration, advanced image processing, and scalable SaaS services. As a trusted software development company, we combine technical expertise with a commitment to quality. Our robust DevOps services ensure high performance, scalability, and continuous delivery. This document outlines our core offerings and the value SofGent brings to every project.</p>
              <p className="text-paragraph mb-[50px]">
                In todays rapidly evolving digital landscape, businesses require
                tailored software solutions to remain competitive. Sofgent
                stands out by offering a wide range of services designed to meet
                the unique needs of clients across various industries. From
                software development to system integration and image processing,
                Sofgent employs teams of skilled professionals dedicated to
                delivering high-quality results. This document outlines the
                comprehensive services offered by Sofgent, emphasizing the
                processes and expertise involved.
              </p>
              <ul className="flex flex-wrap md:gap-[30px] gap-5 mb-[50px]">
                {checkList.map((check, index) => (
                  <AboutCheckList key={index} text={check} />
                ))}
              </ul>
              <Button btnText="Learn More" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
