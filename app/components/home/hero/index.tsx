import WinGrid from "@/app/utils/WinGrid";
import Button from "../../common/Button";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section id="home-one-hero">
      <div className="hero-one-section-wrapper w-full xl:h-[905px] overflow-hidden relative">
        <WinGrid />
        <div className="relative z-10 h-full mx-auto theme-container">
          <div className="w-full grid grid-cols-1 xl:grid-cols-[1.3fr_0.7fr] 2xl:grid-cols-[1.4fr_0.6fr] 2xl:gap-24 xl:gap-16 gap-10 items-center lg:pt-[223px] pt-[130px] h-full">
            <div className="article-area relative z-20">
              <div className="inline-flex md:px-6 px-3 py-2.5 md:py-[14px] bg-white space-x-2.5 items-center rounded-full shadow-common mb-5">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_460_7967)">
                      <path
                        d="M10.0005 10.9371L0.0507812 7.62184C0.132029 7.4156 0.3164 7.26529 0.535144 7.23435L6.68811 6.32812L10.0005 10.9371Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                        fill="#F7B84E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_460_7967">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h1 className="text-sm font-semibold pointer-events-auto md:text-20 text-brand">
                  Custom SaaS Development & AI Solutions
                </h1>
              </div>
              <h2 className="text-4xl md:text-[56px] leading-normal text-main-black font-semibold mb-[35px] pointer-events-auto">
                <span>Crafting </span>
                <span className="relative inline-block px-3 font-bold text-white uppercase">
                  <span className="relative z-10">Innovation-First</span>
                  <span className="absolute top-0 left-0 block w-full h-full bg-gradient-to-r from-brand"></span>
                </span>
                <br />
                <span>Next-Gen Software for a Smarter Tomorrow.</span>
              </h2>
              <div className="px-6 py-[14px] bg-white border-l-2 border-brand mb-[35px] pointer-events-auto xl:w-full md:w-[620px]">
                <p className="text-ptwo text-paragraph">
At Sofgent, we offer enterprise software development services that drive scalable SaaS success. As a trusted software development company, we focus on speed, quality, and seamless integration — empowering your business with systems that enhance performance and operational efficiency                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center pointer-events-auto">
                <Button btnText="Our Services" href="/services" />
                <Button
                  btnText="Lets discuss your project"
                  href="/contact"
                  className="bg-transparent text-brand border border-brand hover:bg-brand hover:text-white"
                />
              </div>
            </div>
            {/* Right Image */}
            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
}
