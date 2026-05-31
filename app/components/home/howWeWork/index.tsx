import Image from "next/image";
import SectionTag from "@/app/components/common/SectionTag";
import workProcess from "@assets/images/home/Process-amico.svg";

const steps = [
  {
    serial: "01",
    title: "Discover & Define",
    description:
      "We listen first—clarifying goals, constraints, and success metrics to align on a clear plan.",
  },
  {
    serial: "02",
    title: "Plan & Prototype",
    description:
      "We map architecture, milestones, and UI flows; quick prototypes validate UX and scope early.",
  },
  {
    serial: "03",
    title: "Build & Iterate",
    description:
      "Agile sprints deliver incremental value with CI/CD, code reviews, and tight feedback loops.",
  },
  {
    serial: "04",
    title: "Test, Launch, Support",
    description:
      "Automated + manual QA, secure releases, and ongoing monitoring with iterative improvements.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work">
      <div className="w-full xl:pb-[130px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid-cols-12 xl:grid">
            <div className="col-span-5">
              <div className="title-area">
                <SectionTag tag="How We Work" />
                <h2 className="md:text-48 mt-6 text-34 font-semibold text-main-black mb-[24px]">
                  A clear, collaborative delivery process
                </h2>
                <p className="text-paragraph mb-8">
                  A compact, outcome‑driven workflow designed for software product teams.
                </p>
                <div className="grid grid-cols-1 gap-5">
                  {steps.map((step) => (
                    <div
                      key={step.serial}
                      data-aos="fade-up"
                      className="w-full rounded-[20px] border border-brand bg-gray px-6 md:px-8 py-5 md:py-[30px] overflow-hidden group relative"
                    >
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-brand shrink-0">
                          <span className="font-semibold text-brand">{step.serial}</span>
                        </div>
                        <div>
                          <p className="mb-2 font-semibold text-18 md:text-20 text-main-black">{step.title}</p>
                          <p className="text-paragraph">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <div className="relative flex justify-center w-full h-full xl:justify-end">
                <div className="right-0 h-full xl:absolute">
                  <div className="sticky top-[155px]">
                    <div>
                      <Image
                        width={520}
                        height={520}
                        src={workProcess}
                        alt="How we work illustration"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

