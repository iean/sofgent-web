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
              Services built to ship AI systems and SaaS products for operations teams
            </h1>
            <p className="pb-10 mt-5 md:mt-10 text-paragraph">
              This page should not read like a generic service catalog. The
              core offer is AI Product Studio: SofGent builds AI apps, internal
              AI tools, and AI-powered SaaS systems with architecture-first
              delivery, weekly working demos, and production-focused execution.
            </p>
            <p className="pb-10 text-paragraph">
              The service entries below still come from Sanity, but the top-line
              message is narrower. We lead with AI product delivery and SaaS MVP
              execution, then support that work with integrations, data systems,
              document intelligence, QA, and deployment capability.
            </p>
            <Button
              btnText="See How We Build"
              href="/how-we-build-saas"
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
