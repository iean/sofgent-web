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
    title: "Discovery & Risk Reduction",
    timeline: "Week 1",
    items: [
      "Business goals & user clarity",
      "MVP scope definition",
      "Architecture & data modeling",
      "Security and compliance planning",
    ],
    outcome: "A validated MVP plan with clear scope, timeline, and technology stack.",
  },
  {
    icon: "⚙️",
    title: "MVP Development",
    timeline: "Weeks 2–6",
    items: [
      "Modular, API-first architecture",
      "Secure authentication & roles",
      "CI/CD pipelines",
      "Cloud-ready infrastructure",
    ],
    outcome: "A working, production-grade SaaS MVP—not a prototype.",
  },
  {
    icon: "🔁",
    title: "Iteration & Feedback Loops",
    timeline: "Ongoing",
    items: [
      "Usage analytics & monitoring",
      "Controlled feature rollouts",
      "Fast iteration cycles",
      "User-driven prioritization",
    ],
    outcome: "A product that evolves safely based on real user behavior.",
  },
  {
    icon: "🚀",
    title: "Production & Scaling",
    timeline: "Post-MVP",
    items: [
      "Multi-environment deployment",
      "Horizontal scaling support",
      "Secure backups & monitoring",
      "Cost and performance optimization",
    ],
    outcome: "A scale-ready SaaS platform built for long-term growth.",
  },
];

const whatWeBuild = [
  {
    icon: "🏦",
    title: "Fintech Systems",
    description:
      "Secure, compliant, and scalable fintech platforms designed for real-world usage.",
    includes: [
      "Authentication & authorization",
      "Secure data handling",
      "Audit logs and access control",
      "Cloud-native deployment",
    ],
  },
  {
    icon: "📚",
    title: "Knowledge Base & Enterprise Systems",
    description:
      "Knowledge platforms designed for collaboration, structure, and long-term maintainability.",
    includes: [
      "Multi-tenant architecture",
      "Role-based permissions",
      "Search, tagging, and content workflows",
      "AI-ready data foundations",
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
    title: "Ongoing Development",
    items: ["Feature enhancements", "Product iteration", "Technical roadmap support"],
  },
  {
    icon: "🛡️",
    title: "Stability & Security",
    items: ["Monitoring and alerts", "Security updates", "Dependency management"],
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
    title: "Built Real Systems",
    description: "Experience delivering fintech and enterprise knowledge platforms—not demos.",
  },
  {
    icon: "✔",
    title: "Scale-First Architecture",
    description: "Designed from day one to grow without rewrites.",
  },
  {
    icon: "✔",
    title: "Clear & Predictable Delivery",
    description: "Defined timelines, transparent communication, and measurable progress.",
  },
  {
    icon: "✔",
    title: "Product-Led Engineering",
    description: "We think in outcomes, not just features.",
  },
];

export default function HowWeBuildSaaS() {
  return (
    <div className="w-full">
      {/* SECTION 1: Intro */}
      <section className="w-full xl:py-[100px] py-[60px] bg-gray">
        <div className="mx-auto theme-container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTag tag="How We Build SaaS That Scales" />
            <h1 className="md:text-5xl mt-6 text-4xl font-semibold text-main-black mb-6">
              How SofGent Builds Secure, Scalable SaaS Products
            </h1>
            <p className="text-xl text-paragraph">
              From fintech platforms to enterprise knowledge systems, we engineer SaaS products
              with a clear path from MVP to scale—without costly rewrites.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MVP Development - From Idea to Launch */}
      <section className="w-full xl:py-[100px] py-[60px]">
        <div className="mx-auto theme-container">
          <div className="text-center mb-12">
            <SectionTag tag="MVP Development — From Idea to Launch" />
            <h2 className="md:text-40 text-28 font-semibold text-main-black mb-4 mt-6">
              How We Build Your MVP
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto mb-8">
              A proven, feedback-driven process designed to reduce risk and ship fast.
            </p>
            <p className="text-lg font-semibold text-main-black mb-12">
              Ideation → Prototyping → Feedback → Iteration → Launch
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
              MVP Packages
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Choose the package that fits your stage—from idea validation to production-ready platforms.
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
              Compare MVP Packages
            </h2>
            <p className="text-paragraph max-w-3xl mx-auto">
              Detailed feature comparison to help you choose the right package for your needs.
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
              What Makes Our MVPs Different
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {deliveryProcess.map((process, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold text-main-black mb-2">{process.title}</h3>
                <p className="text-sm text-primary font-semibold mb-4">Timeline: {process.timeline}</p>
                <ul className="space-y-2 mb-6">
                  {process.items.map((item, i) => (
                    <li key={i} className="text-paragraph flex items-start">
                      <span className="text-primary mr-2">•</span>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeBuild.map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-main-black mb-4">{item.title}</h3>
                <p className="text-paragraph mb-6">{item.description}</p>
                <div>
                  <p className="text-sm font-semibold text-main-black mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {item.includes.map((include, i) => (
                      <li key={i} className="text-paragraph flex items-start">
                        <span className="text-primary mr-2">•</span>
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
              We understand your priorities: speed to market, cost control, risk mitigation, and the ability to iterate based on real user feedback.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-main-black mb-3">Speed to Market</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• MVP in 4-6 weeks, not months</li>
                <li>• Automated CI/CD for instant deployments</li>
                <li>• Pre-built authentication & infrastructure</li>
                <li>• Fast iteration cycles (weekly sprints)</li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-main-black mb-3">Cost Control</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• Fixed-scope MVP pricing</li>
                <li>• Cloud cost optimization from day one</li>
                <li>• No costly rewrites—scale-ready architecture</li>
                <li>• Transparent pricing and timelines</li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-main-black mb-3">Risk Mitigation</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• Week 1 risk assessment & planning</li>
                <li>• Security & compliance built-in</li>
                <li>• Production-grade from launch</li>
                <li>• Automated testing & monitoring</li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-main-black mb-3">Iteration & Feedback</h3>
              <ul className="space-y-2 text-paragraph text-sm">
                <li>• Real-time usage analytics</li>
                <li>• User-driven feature prioritization</li>
                <li>• Controlled feature rollouts</li>
                <li>• Continuous improvement loops</li>
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
              Enterprise-tested frameworks, platforms, and cloud services chosen for performance, scalability, and maintainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-xl font-semibold text-main-black mb-4">Frontend Frameworks</h3>
              <ul className="space-y-2">
                {techStack.frontend.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">Component-based, performance-optimized builds</p>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-xl font-semibold text-main-black mb-4">Backend Platforms</h3>
              <ul className="space-y-2">
                {techStack.backend.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">REST & event-driven, multi-tenant SaaS patterns</p>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-xl font-semibold text-main-black mb-4">Cloud Services & DevOps</h3>
              <ul className="space-y-2">
                {techStack.cloud.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">Containerized, scalable, automated deployments</p>
            </div>
            <div className="rounded-[20px] border border-[#e7e8e9] bg-white p-6">
              <h3 className="text-xl font-semibold text-main-black mb-4">Data & Security</h3>
              <ul className="space-y-2">
                {techStack.data.map((tech, i) => (
                  <li key={i} className="text-paragraph">{tech}</li>
                ))}
              </ul>
              <p className="text-sm text-paragraph mt-4">Fintech-grade security practices</p>
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
              Launching is just the beginning. We provide comprehensive deployment, ongoing maintenance, and product engineering support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {postLaunchSupport.map((support, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{support.icon}</div>
                <h3 className="text-xl font-semibold text-main-black mb-4">{support.title}</h3>
                <ul className="space-y-2">
                  {support.items.map((item, i) => (
                    <li key={i} className="text-paragraph flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-[20px] border-2 border-primary bg-white p-8">
            <h3 className="text-2xl font-semibold text-main-black mb-4">Deployment & Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-main-black mb-2">Multi-Environment Setup</p>
                <p className="text-paragraph text-sm mb-4">
                  Dev, staging, and production environments with automated deployments via CI/CD pipelines (GitHub Actions, Azure DevOps).
                </p>
              </div>
              <div>
                <p className="font-semibold text-main-black mb-2">Cloud Platforms</p>
                <p className="text-paragraph text-sm mb-4">
                  Deploy on AWS, GCP, or Azure with Docker & Kubernetes for containerized, horizontally scalable infrastructure.
                </p>
              </div>
              <div>
                <p className="font-semibold text-main-black mb-2">Monitoring & Alerts</p>
                <p className="text-paragraph text-sm mb-4">
                  Real-time system observability, performance monitoring, error tracking, and automated alerting for proactive issue resolution.
                </p>
              </div>
              <div>
                <p className="font-semibold text-main-black mb-2">Backups & Disaster Recovery</p>
                <p className="text-paragraph text-sm mb-4">
                  Automated daily backups, secure data handling, and disaster recovery plans to ensure business continuity.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[20px] border border-[#e7e8e9] bg-white p-8">
            <h3 className="text-2xl font-semibold text-main-black mb-4">How We Work With You</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-primary mb-2">Long-Term Product Engineering Partner</p>
                <p className="text-paragraph text-sm">
                  Ongoing feature development, technical roadmap support, and product evolution based on user needs.
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Extended Technical Team</p>
                <p className="text-paragraph text-sm">
                  Act as your dedicated development team, handling everything from infrastructure to feature development.
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Fractional CTO Support</p>
                <p className="text-paragraph text-sm">
                  Strategic technical guidance for growing SaaS companies, architecture decisions, and scaling strategies.
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {whySofgent.map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-main-black mb-2">{item.title}</h3>
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
              Ready to Launch Your SaaS MVP?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you&apos;re validating an idea or building a production-ready platform, we help you move fast—without cutting corners.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                btnText="👉 Start Your MVP"
                href="/contact"
                className="bg-white text-primary hover:bg-gray"
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
