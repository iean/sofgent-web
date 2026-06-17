"use client";
import SectionTag from "@/app/components/common/SectionTag";
import Button from "@/app/components/common/Button";
import Timeline from "@/app/components/mvp/Timeline";
import ProcessSteps from "@/app/components/mvp/ProcessSteps";
import MvpPackages from "@/app/components/mvp/MvpPackages";
import ComparisonTable from "@/app/components/mvp/ComparisonTable";
import WhatMakesDifferent from "@/app/components/mvp/WhatMakesDifferent";

const deliveryProcess = [
  {
    icon: "🧩",
    title: "Discovery, Workflow Mapping & Risk Reduction",
    timeline: "Week 1",
    items: [
      "Operations goals, team workflows, and user clarity",
      "AI use-case definition and launch-scope alignment",
      "Architecture, integrations, and data readiness planning",
      "Security, compliance, and delivery-risk assessment",
    ],
    outcome:
      "A validated AI SaaS delivery plan with clear scope, architecture, and launch priorities.",
  },
  {
    icon: "⚙️",
    title: "Architecture-First Product Build",
    timeline: "Weeks 2–6",
    items: [
      "Modular AI-ready application architecture",
      "Secure authentication, permissions, and workflows",
      "Product, automation, and model integration delivery",
      "CI/CD, environments, and cloud-ready infrastructure",
    ],
    outcome: "A working AI-enabled SaaS product built for real operations, not a demo.",
  },
  {
    icon: "🔁",
    title: "Testing, Feedback & Operational Fit",
    timeline: "Ongoing",
    items: [
      "Usage analytics, monitoring, and quality gates",
      "Controlled feature rollouts and operational testing",
      "Fast iteration cycles around real team usage",
      "Backlog decisions based on workflow impact",
    ],
    outcome: "A product that improves safely based on real usage, adoption, and delivery feedback.",
  },
  {
    icon: "🚀",
    title: "Launch Readiness & Scale",
    timeline: "Post-MVP",
    items: [
      "Production deployment and release readiness",
      "Scalable infrastructure and performance planning",
      "Secure backups, monitoring, and support workflows",
      "Cost, reliability, and scaling optimization",
    ],
    outcome: "A production-ready system your team can launch, run, and scale with confidence.",
  },
];

const whatWeBuild = [
  {
    icon: "🤖",
    title: "AI Apps for Operational Workflows",
    description:
      "AI-powered applications that help teams move faster across intake, operations, service delivery, and decision support.",
    includes: [
      "Workflow automation and approvals",
      "AI copilots and task assistance",
      "Operational dashboards and human review flows",
      "Secure deployment for real internal usage",
    ],
  },
  {
    icon: "🚀",
    title: "AI-Enabled SaaS Products",
    description:
      "Production-ready SaaS systems designed for launch readiness, maintainability, and future AI expansion.",
    includes: [
      "Multi-tenant product foundations",
      "Role-based permissions and core business logic",
      "Integrations, billing, and delivery workflows",
      "AI-ready data and product architecture",
    ],
  },
];

const techStack = {
  frontend: ["Angular", "React", "Next.js"],
  backend: ["Django", "Spring Boot", "Node.js"],
  cloud: ["AWS / GCP / Azure", "Docker & Kubernetes", "GitHub Actions / Azure DevOps"],
  data: ["PostgreSQL / MongoDB", "Encryption & access control", "Monitoring & audit logging"],
};

const postLaunchSupport = [
  {
    icon: "🔧",
    title: "Ongoing Product Delivery",
    items: ["Feature enhancements", "AI workflow iteration", "Technical roadmap support"],
  },
  {
    icon: "🛡️",
    title: "Stability & Launch Support",
    items: ["Monitoring and alerts", "Security updates", "Release support"],
  },
  {
    icon: "📈",
    title: "Optimization & Growth",
    items: ["Cloud cost optimization", "Performance tuning", "Scale planning"],
  },
];

const whySofgent = [
  {
    icon: "✔",
    title: "Built for Real Operations",
    description:
      "We design software around working teams, operational bottlenecks, and launch constraints—not slideware.",
  },
  {
    icon: "✔",
    title: "Architecture-First Delivery",
    description: "We make core architecture decisions early so AI and SaaS systems can scale without rewrites.",
  },
  {
    icon: "✔",
    title: "Clear & Predictable Delivery",
    description: "Defined milestones, transparent communication, and measurable progress from scope to launch.",
  },
  {
    icon: "✔",
    title: "Outcome-Led Engineering",
    description: "We build toward usable workflows, adoption, and production readiness—not just feature lists.",
  },
];

export default function HowWeBuildSaaS() {
  return (
    <div className="w-full">
      {/* SECTION 1: Intro */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gray">
        <div className="mx-auto theme-container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTag tag="How We Build AI SaaS That Ships" />
            <h1 className="md:text-48 mt-6 text-34 font-semibold text-main-black mb-6">
              How SofGent Builds AI Products for Operations Teams
            </h1>
            <p className="text-20 text-paragraph">
              We design and deliver AI apps, internal tools, and SaaS systems with an
              architecture-first process that keeps teams moving toward launch readiness.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MVP Development - From Idea to Launch */}
      <section className="w-full xl:py-[100px] py-[60px]">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <SectionTag tag="AI Product Delivery — From Scope to Launch" />
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4 mt-6">
              How We Build the Right Product First
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto mb-8">
              A proven delivery process built to reduce risk, validate operational fit, and ship
              production-ready software faster.
            </p>
            <p className="text-18 font-semibold text-main-black mb-12">
              Discovery → Architecture → Build → Validation → Launch
            </p>
          </div>

          {/* Visual Timeline */}
          <div className="mb-16">
            <Timeline />
          </div>

          {/* Process Steps */}
          <ProcessSteps />
        </div>
      </section>

      {/* SECTION 3: MVP Packages */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gray">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              Delivery Packages
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Choose the engagement that fits your stage, from focused launch planning to
              production-ready AI SaaS delivery.
            </p>
          </div>
          <MvpPackages />
        </div>
      </section>

      {/* SECTION 4: Comparison Table */}
      <section className="w-full xl:py-[100px] py-[60px]">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              Compare Delivery Options
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              A practical view of what is included based on your launch scope, product risk, and
              delivery needs.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* SECTION 5: What Makes Our MVPs Different */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gray">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              What Makes Our Delivery Different
            </h2>
          </div>
          <WhatMakesDifferent />
        </div>
      </section>

      {/* SECTION 6: Delivery Process */}
      <section className="w-full xl:py-[100px] py-[60px]">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              Our Delivery Process
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Each phase is designed to keep architecture, operational fit, and launch readiness
              aligned from the start.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {deliveryProcess.map((process, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-20 font-semibold text-main-black mb-2">{process.title}</h3>
                <p className="text-sm text-brand font-semibold mb-4">Timeline: {process.timeline}</p>
                <ul className="space-y-2 mb-6">
                  {process.items.map((item, i) => (
                    <li key={i} className="text-paragraph flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#e7e8e9]">
                  <p className="text-sm font-semibold text-main-black">Outcome</p>
                  <p className="text-paragraph text-sm mt-1">{process.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: What We Build */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gray">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              What We Build
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              We focus on AI and SaaS products that solve operational bottlenecks and support
              teams with real workflows, not one-off experiments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeBuild.map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-24 font-semibold text-main-black mb-4">{item.title}</h3>
                <p className="text-paragraph mb-6">{item.description}</p>
                <div>
                  <p className="text-sm font-semibold text-main-black mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {item.includes.map((include, i) => (
                      <li key={i} className="text-paragraph flex items-start">
                        <span className="text-brand mr-2">•</span>
                        <span>{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: What Clients Care About */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gray">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              What Clients Care About
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Buyers need clarity on speed, risk, and launch readiness. We structure delivery so
              those concerns are addressed early, not after development starts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-20 font-semibold text-main-black mb-3">Speed to Market</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• Focused launch scope instead of bloated backlogs</li>
                <li>• Automated CI/CD for fast release cycles</li>
                <li>• Reusable foundations for auth, data, and environments</li>
                <li>• Weekly iteration around business priorities</li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-20 font-semibold text-main-black mb-3">Cost Control</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• Scope tied to launch outcomes</li>
                <li>• Cloud cost planning from day one</li>
                <li>• Architecture choices that avoid rewrite-heavy growth</li>
                <li>• Transparent delivery expectations and tradeoffs</li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-20 font-semibold text-main-black mb-3">Risk Mitigation</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• Early workflow and architecture risk review</li>
                <li>• Security, permissions, and compliance considered upfront</li>
                <li>• Production-readiness built into the delivery plan</li>
                <li>• Testing, monitoring, and rollout discipline</li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-20 font-semibold text-main-black mb-3">Iteration & Feedback</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• Usage analytics and team feedback loops</li>
                <li>• Prioritization based on workflow impact</li>
                <li>• Controlled releases for AI and product changes</li>
                <li>• Continuous improvement after launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Technology Stack */}
      <section className="w-full xl:py-[100px] py-[60px]">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              Technology Stack & Platforms
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              We choose frameworks, cloud services, and integration patterns for operational
              reliability, maintainability, and production use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-20 font-semibold text-main-black mb-4">Frontend Frameworks</h3>
              <ul className="space-y-2">
                {techStack.frontend.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">
                Product interfaces built for usability, performance, and long-term evolution
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-20 font-semibold text-main-black mb-4">Backend Platforms</h3>
              <ul className="space-y-2">
                {techStack.backend.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">
                API, workflow, and multi-tenant patterns ready for AI-enabled products
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-20 font-semibold text-main-black mb-4">Cloud Services & DevOps</h3>
              <ul className="space-y-2">
                {techStack.cloud.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">
                Containerized, observable, and repeatable delivery infrastructure
              </p>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-20 font-semibold text-main-black mb-4">Data & Security</h3>
              <ul className="space-y-2">
                {techStack.data.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">
                Security, auditability, and data discipline for business-critical systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Deployment, Maintenance & Post-Launch Support */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gray">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              Deployment, Maintenance & Post-Launch Support
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Launch is one milestone, not the finish line. We support release readiness,
              operational stability, and ongoing product improvement after go-live.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {postLaunchSupport.map((support, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{support.icon}</div>
                <h3 className="text-20 font-semibold text-main-black mb-4">{support.title}</h3>
                <ul className="space-y-2">
                  {support.items.map((item, i) => (
                    <li key={i} className="text-paragraph flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-[20px] border-2 border-brand bg-white p-8">
            <h3 className="text-24 font-semibold text-main-black mb-4">Deployment & Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-main-black mb-2">Multi-Environment Setup</p>
                <p className="text-paragraph text-sm mb-4">
                  Dev, staging, and production environments with automated release pipelines so
                  launches are controlled and repeatable.
                </p>
              </div>
              <div>
                <p className="font-semibold text-main-black mb-2">Cloud Platforms</p>
                <p className="text-paragraph text-sm mb-4">
                  Deploy on AWS, GCP, or Azure with containerized infrastructure sized for
                  operational reliability and future growth.
                </p>
              </div>
              <div>
                <p className="font-semibold text-main-black mb-2">Monitoring & Alerts</p>
                <p className="text-paragraph text-sm mb-4">
                  Real-time observability, performance monitoring, error tracking, and alerts so
                  teams can operate with confidence after launch.
                </p>
              </div>
              <div>
                <p className="font-semibold text-main-black mb-2">Backups & Disaster Recovery</p>
                <p className="text-paragraph text-sm mb-4">
                  Backup, recovery, and data-protection planning designed for business continuity
                  and lower operational risk.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[20px] border border-[#e7e8e9] bg-white p-8">
            <h3 className="text-24 font-semibold text-main-black mb-4">How We Work With You</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-brand mb-2">Long-Term Product Engineering Partner</p>
                <p className="text-paragraph text-sm">
                  Ongoing feature development, AI capability iteration, and roadmap support tied
                  to evolving operational needs.
                </p>
              </div>
              <div>
                <p className="font-semibold text-brand mb-2">Extended Technical Team</p>
                <p className="text-paragraph text-sm">
                  Act as your delivery team across architecture, implementation, integrations, and
                  release execution.
                </p>
              </div>
              <div>
                <p className="font-semibold text-brand mb-2">Fractional CTO Support</p>
                <p className="text-paragraph text-sm">
                  Strategic product and architecture guidance for teams shipping AI-enabled SaaS
                  systems under real business constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Why SofGent */}
      <section className="w-full xl:py-[100px] py-[60px]">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4">
              Why SofGent
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              We help operations-focused teams move from product idea to production system with
              fewer delivery surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {whySofgent.map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-18 font-semibold text-main-black mb-2">{item.title}</h3>
                <p className="text-paragraph text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Call to Action */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gradient-to-r from-brand to-[#6B46C1]">
        <div className="mx-auto theme-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="md:text-40 text-28 font-semibold text-white mb-4">
              Ready to Launch an AI Product That Works in the Real World?
            </h2>
            <p className="text-20 text-white/90 mb-8">
              Whether you are shaping the first release or preparing a production rollout, we help
              you ship AI-powered software with the right architecture behind it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                btnText="👉 Start Your AI Product"
                href="/contact"
                className="bg-white text-brand hover:bg-gray"
              />
              <Button
                btnText="👉 Talk to an Engineer"
                href="/contact"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
