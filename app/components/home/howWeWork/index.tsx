import Image from "next/image";
import SectionTag from "@/app/components/common/SectionTag";
import workProcess from "@assets/images/home/Process-amico.svg";

const steps = [
  {
    serial: "01",
    title: "Map the workflow",
    description:
      "We audit the operational bottleneck, the tools involved, and the decisions the software needs to support.",
  },
  {
    serial: "02",
    title: "Design the system",
    description:
      "We define architecture, data flow, AI touchpoints, and delivery scope before build speed takes over.",
  },
  {
    serial: "03",
    title: "Ship working software",
    description:
      "Weekly demos keep progress visible while we build the app, integrations, and AI workflows together.",
  },
  {
    serial: "04",
    title: "Launch with confidence",
    description:
      "QA, release readiness, monitoring, and support are built in so the system can survive real usage.",
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
                  A delivery model built for AI products that need to work in production
                </h2>
                <p className="text-paragraph mb-8">
                  We keep the process compact: scope the problem, shape the
                  architecture, ship working software, and support the rollout.
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
