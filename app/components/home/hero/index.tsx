import WinGrid from "@/app/utils/WinGrid";
import Button from "../../common/Button";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section id="home-one-hero" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_26%),radial-gradient(circle_at_top_right,rgba(50,109,109,0.1),transparent_30%)]" />
      <div className="hero-one-section-wrapper relative w-full overflow-hidden xl:min-h-[905px]">
        <WinGrid />
        <div className="relative z-10 h-full mx-auto theme-container">
          <div className="grid h-full w-full grid-cols-1 items-center gap-10 pt-[130px] lg:pt-[223px] xl:grid-cols-[1.3fr_0.7fr] xl:gap-16 2xl:grid-cols-[1.4fr_0.6fr] 2xl:gap-24">
            <div className="article-area relative z-20">
              <div className="mb-6 inline-flex items-center space-x-2.5 rounded-full border border-white/80 bg-white/88 px-3 py-2.5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:px-6 md:py-[14px]">
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
                <p className="pointer-events-auto text-sm font-semibold text-brand md:text-20">
                  AI software for teams that need clarity, not complexity
                </p>
              </div>
              <h2 className="mb-6 text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-slate-950 pointer-events-auto md:text-[60px]">
                <span>Modern software systems for </span>
                <span className="relative inline-block rounded-[18px] bg-[#08111f] px-4 py-2 text-white">
                  growing companies
                </span>
                <br />
                <span>that want AI, SaaS, and operations to feel simpler.</span>
              </h2>
              <div className="mb-8 max-w-[760px] rounded-[28px] border border-white/80 bg-white/86 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.08)] pointer-events-auto md:p-7">
                <p className="text-[17px] leading-8 text-slate-600">
                  SofGent helps CTOs, founders, and owners build software that
                  is easier to use, easier to scale, and easier to trust. We
                  combine product thinking, AI workflows, and solid engineering
                  so teams can move faster without creating delivery chaos.
                </p>
              </div>
              <div className="pointer-events-auto flex flex-wrap items-center gap-4">
                <Button btnText="Explore Services" href="/services" />
                <Button
                  btnText="Book a discovery call"
                  href="/contact"
                  className="border border-slate-200 bg-white text-slate-900 shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:bg-slate-900 hover:text-white"
                />
              </div>

              <div className="mt-10 grid gap-4 md:max-w-[760px] md:grid-cols-3">
                {[
                  {
                    title: "For owners",
                    copy: "Clear roadmaps and simpler software decisions.",
                  },
                  {
                    title: "For CTOs",
                    copy: "Reliable architecture with delivery discipline.",
                  },
                  {
                    title: "For teams",
                    copy: "AI workflows that reduce manual operational work.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/80 bg-white/70 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {item.title}
                    </p>
                    <p className="mt-3 text-[15px] leading-7 text-slate-700">
                      {item.copy}
                    </p>
                  </div>
                ))}
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
