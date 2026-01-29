export interface ProcessStep {
  title: string;
  description: string;
  outcome: string;
  timeline: string;
  icon: string;
}

export interface MvpPackage {
  name: string;
  badge?: string;
  whoFor: string;
  timeline: string;
  deliverables: string[];
  highlights: string[];
  useCase: string;
  color: string;
}

export interface ComparisonRow {
  feature: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}

export interface TimelineItem {
  week: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: "💡",
    title: "Ideation & Validation",
    description: "We help you sharpen the idea before writing code.",
    timeline: "Week 1",
    outcome: "Clear MVP roadmap with timeline and priorities.",
  },
  {
    icon: "🎨",
    title: "Prototyping",
    description: "We turn ideas into something users can react to.",
    timeline: "Weeks 2-3",
    outcome: "A validated product direction before full development.",
  },
  {
    icon: "🔄",
    title: "Feedback & Iteration",
    description: "We build in short cycles, not long assumptions.",
    timeline: "Weeks 4-5",
    outcome: "A product shaped by real input—not guesswork.",
  },
  {
    icon: "🚀",
    title: "Launch",
    description: "We don't stop at 'it works.'",
    timeline: "Week 6+",
    outcome: "A production-ready SaaS MVP.",
  },
];

export const mvpPackages: MvpPackage[] = [
  {
    name: "Basic MVP",
    whoFor: "Best for idea validation & early demos",
    timeline: "2–4 weeks",
    color: "blue",
    deliverables: [
      "Ideation & scope definition",
      "Core feature implementation",
      "Basic UI",
      "Single environment deployment",
      "Source code & documentation",
    ],
    highlights: [
      "Early validation",
      "Investor demos",
      "Internal proof of concept",
    ],
    useCase: "Early validation, investor demos, internal proof of concept.",
  },
  {
    name: "Standard MVP",
    badge: "Most Popular",
    whoFor: "Best for real users & early traction",
    timeline: "4–6 weeks",
    color: "green",
    deliverables: [
      "Everything in Basic",
      "User authentication & roles",
      "API-first backend",
      "Cloud deployment (dev + production)",
      "CI/CD setup",
      "Feedback-driven iteration cycles",
    ],
    highlights: [
      "Public beta",
      "Early customers",
      "Real user feedback",
    ],
    useCase: "Public beta, early customers, real user feedback.",
  },
  {
    name: "Premium MVP",
    whoFor: "Best for fintech & enterprise-grade SaaS",
    timeline: "6–8 weeks",
    color: "yellow",
    deliverables: [
      "Everything in Standard",
      "Scalable architecture (multi-tenant ready)",
      "Advanced security practices",
      "Monitoring & logging",
      "Performance optimization",
      "Post-launch support window",
    ],
    highlights: [
      "Fintech platforms",
      "Knowledge systems",
      "Long-term products",
    ],
    useCase: "Fintech platforms, knowledge systems, long-term products.",
  },
];

export const comparisonData: ComparisonRow[] = [
  {
    feature: "Ideation & scope workshop",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Wireframes / prototype",
    basic: "light",
    standard: true,
    premium: "full",
  },
  {
    feature: "Core MVP features",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Auth + roles",
    basic: "optional",
    standard: true,
    premium: true,
  },
  {
    feature: "API-first backend",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    feature: "Dev + Production environments",
    basic: "basic",
    standard: true,
    premium: true,
  },
  {
    feature: "CI/CD pipeline",
    basic: "optional",
    standard: true,
    premium: "hardened",
  },
  {
    feature: "Monitoring + logging",
    basic: "minimal",
    standard: "basic",
    premium: "advanced",
  },
  {
    feature: "Security baseline",
    basic: true,
    standard: true,
    premium: "enhanced: audit-ready",
  },
  {
    feature: "Multi-tenant readiness",
    basic: false,
    standard: "optional",
    premium: true,
  },
  {
    feature: "Performance optimization",
    basic: false,
    standard: "basic",
    premium: true,
  },
  {
    feature: "Post-launch support",
    basic: "optional",
    standard: "short window",
    premium: "extended window",
  },
];

export const timelineData: TimelineItem[] = [
  {
    week: "Week 1",
    title: "Ideation",
    description: "Scope, risks, validation",
  },
  {
    week: "Weeks 2–4",
    title: "Prototype + Build",
    description: "Core flows shipped",
  },
  {
    week: "Weeks 4–6",
    title: "Feedback + Iteration",
    description: "Improve with data",
  },
  {
    week: "Weeks 6–8",
    title: "Launch + Scale",
    description: "Deploy, monitor",
  },
];

export const whatMakesDifferent = [
  {
    icon: "🚀",
    title: "Built for Scale",
    description: "No throwaway code. MVPs are designed to grow.",
  },
  {
    icon: "🔁",
    title: "Feedback-Driven",
    description: "Real users shape the product early.",
  },
  {
    icon: "🛡️",
    title: "Security-First",
    description: "Especially important for fintech and enterprise systems.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    description: "We stay beyond launch to help you scale.",
  },
];
