import Button from "../../common/Button";
import SectionTag from "../../common/SectionTag";
import AboutCheckList from "./AboutCheckList";
import AboutThumbnail from "./AboutThumbnail";

type CheckItem = {
  text: string;
  href: string;
  icon: string;
};

const checkList: CheckItem[] = [
  {
    text: "AI Apps for Operations Teams",
    href: "/services#service",
    icon: "/icons/services/software-development.svg",
  },
  {
    text: "Internal AI Tools & Assistants",
    href: "/services#service",
    icon: "/icons/services/image-processing.svg",
  },
  {
    text: "AI-Powered SaaS MVP Delivery",
    href: "/services#service",
    icon: "/icons/services/ui-ux-design.svg",
  },
  {
    text: "Workflow Automation & Integrations",
    href: "/services#service",
    icon: "/icons/services/system-integration.svg",
  },
];
export default function About() {
  return (
    <section className="pt-28" id="home-one-about">
      <div className="home-one-about-wrapper w-full xl:pb-[153px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid xl:grid-cols-2 grid-cols-1 md:gap-[130px] gap-10 md:items-center relative">
            <AboutThumbnail />
            <div className="about-article-area">
              <SectionTag tag="What We Build" />
              <h2 className="md:text-48 mt-6 text-34 font-semibold text-main-black mb-[30px] md:w-[80%] w-full xl:w-full">
                AI products built around real workflows, not vague transformation plans
              </h2>

              <p className="text-paragraph mb-[50px]">
                SofGent helps operations-heavy teams turn manual work, scattered
                data, and disconnected tools into AI-enabled software that people
                can actually use day to day. We focus on practical delivery:
                internal AI apps, workflow automation, and SaaS systems built on
                a production path from the first sprint.
              </p>
              <p className="text-paragraph mb-[50px]">
                Instead of presenting every engineering capability as a separate
                offer, we package the work around outcomes. That means clearer
                scope, faster working demos, and software designed for adoption,
                handoff, and scale rather than one-off experiments.
              </p>
              <ul className="flex flex-wrap md:gap-[30px] gap-5 mb-[50px]">
                {checkList.map((item, index) => (
                  <AboutCheckList key={index} text={item.text} icon={item.icon} href={item.href} />
                ))}
              </ul>
              <Button btnText="See Service Focus" href="/services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
