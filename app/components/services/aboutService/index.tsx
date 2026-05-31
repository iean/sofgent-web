import ServiceHero from "@assets/images/services/service-art.svg";
import Image from "next/image";
import Button from "../../common/Button";

export default function AboutService() {
  return (
    <section className="w-full py-16 md:pt-[94px] md:pb-[130px] items-center">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-24 md:text-48 font-semibold mt-2.5 md:mt-5">
              Sofgent Offers a Wide Range of Services
            </h1>
            <p className="pb-10 mt-5 md:mt-10 text-paragraph">
              In today&apos;s rapidly evolving digital landscape, businesses
              require tailored software solutions to remain competitive. Sofgent
              stands out by offering a wide range of services designed to meet
              the unique needs of clients across various industries. From
              software development to system integration and image processing,
              Sofgent employs teams of skilled professionals dedicated to
              delivering high-quality results. This document outlines the
              comprehensive services offered by Sofgen, emphasizing the
              processes and expertise involved.
            </p>
            <Button
              btnText="Explore Service"
              href="/services"
            />
          </div>
          <div>
            <Image
              width={700}
              height={700}
              src={ServiceHero}
              alt="Service Hero Image"
              className="mt-9 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
