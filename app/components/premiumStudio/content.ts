import {
   BarChart3,
   Bot,
   BrainCircuit,
   Building2,
   CalendarClock,
   ClipboardList,
   Clock,
   Code2,
   Cpu,
   Database,
   FileText,
   Gauge,
   Hammer,
   Layers3,
   LayoutDashboard,
   LayoutGrid,
   Lightbulb,
   LineChart,
   Rocket,
   Search,
   ServerCog,
   ShieldCheck,
   Sparkles,
   Target,
   Users,
   Workflow,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import type { StudioPageContent } from "./types";

export const howWeBuildSaaSContent: StudioPageContent = {
   hero: {
      eyebrow: "SaaS Release Process",
      headingIcon: Rocket,
      title: "How SofGent takes a SaaS product from product decision to production release.",
      description:
         "Entrepreneurs do not just need developers. They need a delivery process that turns product intent into a scoped roadmap, a release-safe architecture, and software that can survive onboarding, billing, integrations, and real users.",
      badges: [
         { label: "Architecture before code", icon: Layers3 },
         { label: "Launch in 2-6 weeks", icon: Clock },
         { label: "Release-ready systems", icon: ShieldCheck },
      ],
      highlights: [
         {
            text: "Product scoping, technical design, build, and release handled in one execution model.",
            icon: Workflow,
         },
         {
            text: "Designed for customer onboarding, internal operations, and version-two growth decisions.",
            icon: Rocket,
         },
         {
            text: "Clear milestones, working demos, and release discipline instead of open-ended delivery.",
            icon: Target,
         },
      ],
      primaryCta: {
         label: "Book Process Review",
         href: CALENDLY_URL,
      },
      secondaryCta: {
         label: "See Release Process",
         href: "#process",
      },
      visual: {
         label: "[DIAGRAM: SaaS release architecture]",
         description:
            "Application core, data layer, integrations, staging, and production release path.",
         illustration: "release-architecture",
      },
   },
   trustBar: [
      { label: "Built for founders, operators, and product teams", icon: Users },
      { label: "Release path defined before sprint velocity", icon: Rocket },
      { label: "Product, architecture, and engineering in one team", icon: Layers3 },
   ],
   audience: {
      eyebrow: "Who This Process Fits",
      title: "Built for entrepreneurs choosing a delivery partner, not shopping for generic development hours.",
      description:
         "This page is for teams evaluating whether the process behind the build is strong enough to protect budget, release quality, and the next stage of growth.",
      visual: {
         label: "[IMAGE: founder and product team fit diagram]",
         description:
            "Founders, product teams, operators, and SaaS rebuilds.",
         image: {
            src: "/images/ai-product-studio/audience-fit.png",
            alt: "Diagram of founders, product teams, and operators connecting into a single delivery system",
         },
      },
      items: [
         {
            icon: Users,
            title: "Founders who need clarity before they commit budget",
            description:
               "You need a team that can translate rough product intent into scope, architecture, and a release plan without wasting a month in abstraction.",
         },
         {
            icon: Workflow,
            title: "Operators turning a service workflow into software",
            description:
               "You want to productize a manual process without losing the underlying business logic that makes the operation work.",
         },
         {
            icon: ShieldCheck,
            title: "Teams replacing a fragile first version",
            description:
               "The first build proved demand, but now you need better tenancy, auth, billing, data structure, and release safety.",
         },
         {
            icon: Gauge,
            title: "Product teams under pressure to release with confidence",
            description:
               "You need speed, but not at the cost of staging discipline, deployment quality, or future scale decisions.",
         },
      ],
   },
   problem: {
      eyebrow: "Why Builds Slip",
      title: "Most SaaS projects do not fail because people worked too little. They fail because the release system was weak.",
      description:
         "When founders evaluate a build partner, the real question is not who can code. It is who can reduce release risk, protect scope, and keep business decisions attached to technical decisions.",
      visual: {
         label: "[IMAGE: launch blockers map]",
         description:
            "Scope creep, fragmented execution, and release-risk visualization.",
         image: {
            src: "/images/ai-product-studio/problem-fragmented.png",
            alt: "Illustration of fragmented project work versus a unified launch system",
         },
      },
      items: [
         {
            icon: Target,
            title: "The commercial goal is never translated into a release scope",
            description:
               "Requirements stay loose, priorities change every week, and the team never gets tight enough around one release-worthy product decision.",
         },
         {
            icon: Layers3,
            title: "Teams start building before the architecture is resolved",
            description:
               "Frontend, backend, AI, and ops concerns split apart early, so important decisions break across the stack and slow everything down later.",
         },
         {
            icon: Search,
            title: "Release blockers surface late",
            description:
               "Auth, billing, roles, staging, data migration, and integrations only become real near the end, when they are most expensive to fix.",
         },
         {
            icon: Gauge,
            title: "What ships looks complete but is not operationally ready",
            description:
               "The interface may be present, but the release lacks the internal controls, feedback loops, and deployment discipline needed for real usage.",
         },
      ],
   },
   process: {
      eyebrow: "Our Delivery Workflow",
      title: "A six-stage process that moves from product decision to production release without breaking scope or quality.",
      description:
         "This is the part most founders look for when choosing a technical partner: how decisions move, where risk gets caught, and what has to exist before a release is considered ready.",
      visual: {
         label: "[PIPELINE DIAGRAM: Discovery -> Architecture -> Build -> QA -> UAT -> Release]",
         description:
            "The delivery flow from product shaping to release and feedback loops.",
         illustration: "saas-delivery-workflow",
      },
      steps: [
         {
            icon: Search,
            step: "Stage 1",
            title: "Discovery & decision framing",
            description:
               "We align the business goal, the target user, the first release scope, and the technical risk before production work starts.",
         },
         {
            icon: Layers3,
            step: "Stage 2",
            title: "Architecture & backlog design",
            description:
               "We define the app structure, auth model, data model, integrations, AI touchpoints, and delivery milestones so scope stays stable.",
         },
         {
            icon: Hammer,
            step: "Stage 3",
            title: "Sprint-based software development",
            description:
               "UI, backend, workflows, APIs, and operator tooling are built in one coordinated sprint loop with weekly progress visibility.",
         },
         {
            icon: ShieldCheck,
            step: "Stage 4",
            title: "Internal QA & release hardening",
            description:
               "We validate key flows, roles, integrations, and failure paths so the release does not break the first time real users touch it.",
         },
         {
            icon: ClipboardList,
            step: "Stage 5",
            title: "Staging, demos, and user acceptance",
            description:
               "The build moves through staging with demo-ready flows, stakeholder review, and the final fixes required before production.",
         },
         {
            icon: Rocket,
            step: "Stage 6",
            title: "Production release & next-iteration planning",
            description:
               "We deploy, monitor, gather first feedback, and shape the next release based on real usage instead of assumption.",
         },
      ],
   },
   deliverables: {
      eyebrow: "What The Business Gets",
      title: "A release-ready SaaS product with the technical layers entrepreneurs usually find out about too late.",
      description:
         "Good software delivery is not just a UI and an API. It is the set of release assets, technical decisions, and operator controls that let the business launch without improvising.",
      visual: {
         label: "[DIAGRAM: release architecture and operating layers]",
         description:
            "Admin, app surface, services, integrations, staging, and production flow.",
         illustration: "release-architecture",
      },
      items: [
         {
            icon: Target,
            title: "Release blueprint",
            description:
               "A defined release scope, milestone plan, and decision framework aligned to the first commercial launch.",
         },
         {
            icon: BrainCircuit,
            title: "Production-grade product architecture",
            description:
               "Data model, roles, tenancy, integrations, and deployment structure decided early enough to avoid expensive rebuilds.",
         },
         {
            icon: ServerCog,
            title: "Release pipeline and deployment controls",
            description:
               "A maintainable codebase, staging path, QA coverage, observability, and production deployment setup built for live use.",
         },
         {
            icon: LayoutDashboard,
            title: "Admin, APIs, and operator tooling",
            description:
               "The internal surfaces required to support onboarding, operations, support, reporting, and the next release cycle.",
         },
      ],
   },
   transformation: {
      eyebrow: "What Changes",
      title: "The value is not just the code. It is the shift from uncertain build effort to a product the business can actually release.",
      description:
         "Entrepreneurs are usually comparing two risks: spending money without getting a releasable product, or delaying too long and losing momentum. The right process changes both.",
      visual: {
         label: "[IMAGE: workflow transformation board]",
         description:
            "The shift from vague scope and fragmented work to launch-ready product operations.",
         image: {
            src: "/images/ai-product-studio/transformation-before-after.png",
            alt: "Before-and-after view: vague scope versus a launch-ready product operation",
         },
      },
      before: {
         title: "Before a disciplined release process",
         points: [
            "Loose requirements and no release decision framework",
            "Frontend, backend, and ops concerns handled separately",
            "Prototype thinking instead of launch discipline",
            "No confidence around onboarding, support, or production readiness",
         ],
      },
      after: {
         title: "After SofGent",
         points: [
            "A clear build plan with product and technical ownership attached",
            "One connected system across product, app, data, and release logic",
            "A launch-ready SaaS product that can handle real users and real workflows",
            "A foundation built for iteration, analytics, and operational growth",
         ],
      },
   },
   useCases: {
      eyebrow: "When This Process Wins",
      title: "Where an architecture-first release process creates the most leverage.",
      description:
         "We use the same decision model whether you are launching a new SaaS offer, productizing a service workflow, or rebuilding a product that outgrew its first version.",
      visual: {
         label: "[IMAGE: SaaS growth use case grid]",
         description:
            "Founder MVPs, productized services, rebuilds, and AI-enabled product workflows.",
         image: {
            src: "/images/ai-product-studio/use-cases-board.png",
            alt: "Grid of SaaS use cases including MVPs, productized services, and rebuilds",
         },
      },
      items: [
         {
            icon: Users,
            title: "Founder idea -> launch-ready MVP",
            description:
               "Turn a raw product concept into software you can demo, onboard users into, and improve through real release cycles.",
            outcome: "Faster fundraising conversations and earlier customer traction.",
         },
         {
            icon: Workflow,
            title: "Manual workflow -> productized SaaS",
            description:
               "Convert a service-heavy internal or client-facing process into a repeatable product with real operator controls.",
            outcome: "Higher margins and a more scalable operating model.",
         },
         {
            icon: ShieldCheck,
            title: "Prototype -> releasable rebuild",
            description:
               "Replace the fragile first version with a stronger architecture before scale and customer expectations go up.",
            outcome: "Less rework, fewer outages, and better delivery confidence.",
         },
         {
            icon: Bot,
            title: "AI concept -> usable workflow",
            description:
               "Wrap AI capability inside a product or internal system people can actually operate without manual patchwork.",
            outcome: "Real adoption instead of a demo that never reaches operations.",
         },
      ],
   },
   whySofGent: {
      eyebrow: "Why SofGent",
      title: "Why this process is different from buying generic development capacity.",
      description:
         "Entrepreneurs choose this model when they want release quality, decision clarity, and technical ownership - not just extra hands writing code against a vague brief.",
      visual: {
         label: "[IMAGE: delivery authority stack]",
         description:
            "Product ownership, engineering coverage, AI workflow design, and launch discipline.",
         image: {
            src: "/images/ai-product-studio/why-control-layer.png",
            alt: "Layered delivery stack covering product, engineering, AI, and launch discipline",
         },
      },
      items: [
         {
            icon: ShieldCheck,
            title: "We build for release, not just for demo day",
            description:
               "The goal is software the business can sell, support, and operate, not a polished prototype that fails under real usage.",
         },
         {
            icon: Target,
            title: "We think like product owners, not ticket processors",
            description:
               "Every decision is filtered through launch readiness, business value, and what the first release actually has to prove.",
         },
         {
            icon: BrainCircuit,
            title: "We keep business logic close to technical decisions",
            description:
               "Scope, architecture, integrations, release timing, and operator workflow are handled together instead of in isolated handoffs.",
         },
         {
            icon: ServerCog,
            title: "We design for version two while shipping version one",
            description:
               "The technical foundation is shaped around onboarding, billing, data integrity, and the next stage of scale while still moving fast now.",
         },
      ],
   },
   midCta: {
      eyebrow: "Release Review",
      title: "Discuss the product before you spend the next month building the wrong release scope.",
      description:
         "A short process review is usually enough to expose weak scope, missing release steps, and the technical risks most teams discover too late.",
      headingIcon: Lightbulb,
      primaryCta: {
         label: "Discuss Your Product",
         href: "/contact",
      },
      secondaryCta: {
         label: "Get Release Advice",
         href: "/contact",
      },
      visual: {
         label: "[IMAGE: delivery brief snapshot]",
         description:
            "Placeholder for the product brief, technical audit notes, scope map, and launch plan.",
         image: {
            src: "/images/ai-product-studio/mid-cta-planning.png",
            alt: "Snapshot of a delivery brief with audit notes, scope map, and launch plan",
         },
      },
   },
   engagement: {
      eyebrow: "Engagement Model",
      title: "What the engagement actually looks like from week one to release.",
      description:
         "The engagement is designed to move from uncertainty to production release without dragging the process out or bloating the team before it is necessary.",
      visual: {
         label: "[DIAGRAM: Week 1 decision framing -> Weeks 2-4 build -> Weeks 4-6 release]",
         description:
            "Timeline from discovery and architecture through build and release.",
         image: {
            src: "/images/ai-product-studio/engagement-timeline.png",
            alt: "Engagement timeline from week-1 discovery through build and launch",
         },
      },
      phases: [
         {
            window: "Week 1",
            title: "Discovery + architecture audit",
            icon: ClipboardList,
            description:
               "We define the product outcome, cut scope, map the architecture, and surface release risks before velocity matters.",
         },
         {
            window: "Weeks 2-4",
            title: "Build + internal release prep",
            icon: Code2,
            description:
               "The product is designed, developed, integrated, and tested with one team moving against a shared release plan.",
         },
         {
            window: "Weeks 4-6",
            title: "Launch + iteration plan",
            icon: Rocket,
            description:
               "We deploy, stabilize, onboard initial users, and convert real feedback into the next release roadmap instead of stopping at handoff.",
         },
      ],
   },
   cta: {
      eyebrow: "Next Step",
      title: "See whether your product idea is ready for the release process it actually needs.",
      description:
         "If the product matters, the release system matters. We can map the fastest route from rough idea or fragile MVP to a SaaS platform with real technical confidence.",
      headingIcon: Rocket,
      urgency: "Limited onboarding slots for hands-on build engagements",
      primaryCta: {
         label: "Book a Free Strategy Call",
         href: CALENDLY_URL,
      },
      secondaryCta: {
         label: "Send Product Details",
         href: "/contact",
      },
      visual: {
         label: "[IMAGE: onboarding roadmap]",
         description:
            "Placeholder for the kickoff roadmap, technical audit notes, and delivery milestones shared during onboarding.",
         tone: "dark",
         image: {
            src: "/images/ai-product-studio/cta-workshop.png",
            alt: "Onboarding roadmap with kickoff milestones and audit notes",
         },
      },
   },
};

export const aiProductStudioContent: StudioPageContent = {
   hero: {
      eyebrow: "AI Product Studio",
      headingIcon: Cpu,
      title: "From Raw Operations to AI-Powered Systems That Drive Revenue",
      description:
         "We design and build production-ready AI systems that turn scattered data, manual work, and disconnected tools into software that answers, automates, and compounds operational value.",
      badges: [
         { label: "AI-first delivery", icon: Cpu },
         { label: "Production over prototypes", icon: ShieldCheck },
         { label: "Data + apps + automation", icon: Layers3 },
      ],
      highlights: [
         {
            text: "AI strategy, data engineering, and product delivery in one engagement.",
            icon: BrainCircuit,
         },
         {
            text: "Built for document-heavy, operations-heavy, and workflow-heavy businesses.",
            icon: Building2,
         },
         {
            text: "Designed for deployment, adoption, and measurable business impact.",
            icon: LineChart,
         },
      ],
      primaryCta: {
         label: "Book Strategy Call",
         href: CALENDLY_URL,
      },
      secondaryCta: {
         label: "See How It Works",
         href: "#process",
      },
      visual: {
         label: "[IMAGE: AI system architecture]",
         description:
            "Orchestration layer, retrieval stack, dashboards, APIs, and human review loop.",
         image: {
            src: "/images/ai-product-studio/hero-architecture.png",
            alt: "Isometric illustration of AI system architecture with data pipelines and dashboards in teal and slate tones",
         },
         imagePriority: true,
      },
   },
   trustBar: [
      { label: "Built for founders, CTOs, and product teams", icon: Users },
      { label: "Launch in weeks, not months", icon: Rocket },
      { label: "AI + Data + Engineering under one roof", icon: Database },
   ],
   audience: {
      eyebrow: "Who This Is For",
      title: "Built for businesses that have workflows, documents, and data - but no usable AI system around them.",
      description:
         "This fits operations-heavy teams that know there is leverage in the workflow, but need the right architecture and implementation partner to unlock it.",
      headingIcon: Users,
      visual: {
         label: "[IMAGE: AI studio fit map]",
         description:
            "Operations-heavy teams, document workflows, internal tools, and AI-enabled products.",
         image: {
            src: "/images/ai-product-studio/audience-fit.png",
            alt: "Abstract illustration of teams and workflows connecting into an organized AI-ready system",
         },
      },
      items: [
         {
            icon: Workflow,
            title: "Operations-heavy businesses buried in manual work",
            description:
               "You need the workflow automated, not just another dashboard or isolated experiment.",
         },
         {
            icon: Database,
            title: "Teams with messy data and low reporting confidence",
            description:
               "Your systems create data, but the business still cannot use it cleanly for automation or decision-making.",
         },
         {
            icon: Bot,
            title: "Companies adding AI inside a real product",
            description:
               "You need AI embedded inside a usable system, not a stand-alone proof of concept that never gets adopted.",
         },
         {
            icon: Users,
            title: "Internal teams needing better tools and workflow control",
            description:
               "You want internal software that reduces friction, speeds up work, and gives leadership cleaner signal.",
         },
      ],
   },
   problem: {
      eyebrow: "The Real Problem",
      title: "Most AI initiatives stall before they create measurable value.",
      description:
         "The issue is rarely the model. The issue is everything around it: bad data, broken workflows, weak orchestration, and no production delivery.",
      headingIcon: BarChart3,
      visual: {
         label: "[IMAGE: fragmented data to AI map]",
         description:
            "Tool sprawl, document inputs, broken workflow handoffs, and slow decision paths.",
         image: {
            src: "/images/ai-product-studio/problem-fragmented.png",
            alt: "Illustration of fragmented data sources versus a unified AI hub",
         },
      },
      items: [
         {
            icon: Database,
            title: "Your data is scattered",
            description:
               "Key context lives in PDFs, inboxes, spreadsheets, CRMs, and internal tools that do not talk to each other.",
         },
         {
            icon: BrainCircuit,
            title: "AI experiments keep failing",
            description:
               "Pilots look impressive in demos, but fall apart without clean context, validation, and workflow design.",
         },
         {
            icon: Workflow,
            title: "Teams are stuck in manual workflows",
            description:
               "People still retype, verify, and chase data by hand across document, operations, and reporting processes.",
         },
         {
            icon: BarChart3,
            title: "Decision-making stays slow",
            description:
               "Without structured outputs and operational visibility, the business cannot trust or scale AI.",
         },
      ],
   },
   process: {
      eyebrow: "Your Process",
      title: "Our AI system build pipeline is designed for production, not theater.",
      description:
         "We do not drop a chatbot into your stack and call it transformation. We build the operational layer around the intelligence so the system can be trusted.",
      headingIcon: Workflow,
      visual: {
         label:
            "[PIPELINE DIAGRAM: Data sources -> Structuring -> AI layer -> Automation -> Output]",
         description:
            "End-to-end AI system from messy inputs to structured actions and outputs.",
         illustration: "process-pipeline",
      },
      steps: [
         {
            icon: Search,
            step: "Step 1",
            title: "Audit",
            description:
               "We audit the workflows, source systems, failure points, and commercial value before choosing the architecture.",
         },
         {
            icon: Layers3,
            step: "Step 2",
            title: "Structure",
            description:
               "We clean the schema, define storage, validation logic, and data movement so AI has reliable inputs.",
         },
         {
            icon: Hammer,
            step: "Step 3",
            title: "Build",
            description:
               "We implement extraction, agents, retrieval, dashboards, APIs, and business rules as one connected system.",
         },
         {
            icon: Rocket,
            step: "Step 4",
            title: "Deploy",
            description:
               "We ship the workflow into production with review loops, monitoring, and a path to scale.",
         },
      ],
   },
   deliverables: {
      eyebrow: "What You Actually Deliver",
      title: "Operational AI infrastructure the business can use every day.",
      description:
         "The outcome is not a one-off prototype. It is a system that processes work, creates structured data, and supports decisions at scale.",
      headingIcon: LayoutDashboard,
      visual: {
         label: "[IMAGE: AI operations dashboard]",
         description:
            "Workflow status, review queues, system health, outputs, and KPI tracking.",
         image: {
            src: "/images/ai-product-studio/deliverables-dashboard.png",
            alt: "Modern analytics dashboard with charts and KPIs in teal on dark slate",
         },
      },
      items: [
         {
            icon: Database,
            title: "AI-ready data infrastructure",
            description:
               "Structured datasets, schemas, and storage layers the system can reason over without brittle manual cleanup.",
         },
         {
            icon: ServerCog,
            title: "Production-grade pipelines",
            description:
               "Reliable flows for ingestion, extraction, orchestration, validation, and output across live business operations.",
         },
         {
            icon: Bot,
            title: "Custom AI systems",
            description:
               "Assistants, document intelligence, and workflow automation built around how the business actually runs.",
         },
         {
            icon: LayoutDashboard,
            title: "APIs + dashboards",
            description:
               "Interfaces for teams, integrations, and reporting that keep the system usable long after the launch sprint.",
         },
      ],
   },
   transformation: {
      eyebrow: "Before vs After",
      title: "The difference shows up in throughput, accuracy, and trust.",
      description:
         "When the system goes live, the business stops treating AI as an experiment and starts using it as operational infrastructure.",
      headingIcon: Sparkles,
      visual: {
         label: "[IMAGE: AI workflow before and after]",
         description:
            "The shift from manual processing and fragmented data to structured automated operations.",
         image: {
            src: "/images/ai-product-studio/transformation-before-after.png",
            alt: "Before and after visualization from chaotic manual work to organized automated workflows",
         },
      },
      before: {
         title: "Before SofGent",
         points: [
            "Manual work across documents, spreadsheets, and inboxes",
            "Unstructured data that AI cannot use reliably",
            "No automation between intake, review, and output",
            "Slow decisions because reporting is delayed or incomplete",
         ],
      },
      after: {
         title: "After SofGent",
         points: [
            "AI-powered workflows that process work at the source",
            "Structured systems that create usable business data",
            "Scalable automation with human review where it matters",
            "Faster reporting, clearer visibility, and better decisions",
         ],
      },
   },
   useCases: {
      eyebrow: "Use Cases",
      title: "High-value AI systems businesses actually pay for.",
      description:
         "These are the systems that remove cost, unlock speed, and create leverage across data-heavy and workflow-heavy operations.",
      headingIcon: LayoutGrid,
      visual: {
         label: "[IMAGE: AI use case board]",
         description:
            "Document AI, knowledge systems, reporting layers, and automation workflows.",
         image: {
            src: "/images/ai-product-studio/use-cases-board.png",
            alt: "Grid of AI use case concepts including documents, assistants, analytics, and automation",
         },
      },
      items: [
         {
            icon: FileText,
            title: "Document -> structured data",
            description:
               "Turn PDFs, scans, and forms into validated outputs that can feed downstream systems and teams.",
            outcome: "Less manual entry, faster turnaround, and cleaner operations.",
         },
         {
            icon: Bot,
            title: "Knowledge base -> AI assistant",
            description:
               "Convert internal documents and SOPs into a useful assistant that can answer and route work.",
            outcome: "Faster answers, better execution, and less internal friction.",
         },
         {
            icon: BarChart3,
            title: "Reports -> dashboards",
            description:
               "Transform fragmented reporting into live operational visibility with structured outputs and clear KPIs.",
            outcome: "Better decisions without manual report assembly every week.",
         },
         {
            icon: Workflow,
            title: "Workflow -> automation",
            description:
               "Automate repeatable steps across intake, validation, routing, escalation, and follow-up.",
            outcome: "More throughput without adding headcount or process drag.",
         },
      ],
   },
   whySofGent: {
      eyebrow: "Why SofGent",
      title: "We are hired to build the system around the model, not just the model.",
      description:
         "The work includes data, orchestration, interfaces, review logic, and operational control so the business can trust what gets deployed.",
      headingIcon: ShieldCheck,
      visual: {
         label: "[IMAGE: AI delivery control layer]",
         description:
            "Ingestion, validation, orchestration, interfaces, and human review checkpoints.",
         image: {
            src: "/images/ai-product-studio/why-control-layer.png",
            alt: "Layered control and trust diagram for AI ingestion, validation, and review",
         },
      },
      items: [
         {
            icon: ShieldCheck,
            title: "We build systems, not demos",
            description:
               "The goal is operational infrastructure that teams can run every day, not a slide-deck experiment.",
         },
         {
            icon: Target,
            title: "We think like product owners, not developers",
            description:
               "The system is shaped around business flow, adoption, and measurable value, not isolated technical tasks.",
         },
         {
            icon: BrainCircuit,
            title: "We deliver production-ready AI, not experiments",
            description:
               "Reliability, review loops, validation, and edge cases are part of the build from day one.",
         },
         {
            icon: Database,
            title: "We bring AI, data, and engineering together",
            description:
               "One team owns the architecture across ingestion, intelligence, interfaces, and output so nothing gets lost in handoffs.",
         },
      ],
   },
   midCta: {
      eyebrow: "Middle CTA",
      title: "Plan the workflow before you plug in the model.",
      description:
         "The business value usually comes from the system around the AI: data movement, document handling, review logic, interfaces, and automation paths.",
      headingIcon: Lightbulb,
      primaryCta: {
         label: "Plan Your AI Workflow",
         href: "/contact",
      },
      secondaryCta: {
         label: "Turn My Data Into a Working System",
         href: "/contact",
      },
      visual: {
         label: "[IMAGE: AI workflow planning board]",
         description:
            "Workflow map, source systems, review loop, and deployment path for an AI system.",
         image: {
            src: "/images/ai-product-studio/mid-cta-planning.png",
            alt: "Workflow planning board with connected tasks and systems",
         },
      },
   },
   engagement: {
      eyebrow: "Engagement Model",
      title: "How we work",
      description:
         "A focused engagement that gets from messy operations to a deployed AI system quickly without compromising production quality.",
      headingIcon: CalendarClock,
      visual: {
         label: "[DIAGRAM: Week 1 audit -> Weeks 2-4 build -> Weeks 4-6 launch]",
         description:
            "Timeline from workflow audit through production build and rollout.",
         image: {
            src: "/images/ai-product-studio/engagement-timeline.png",
            alt: "Project timeline from discovery through build to launch",
         },
      },
      phases: [
         {
            window: "Week 1",
            title: "Discovery + Audit",
            icon: Search,
            description:
               "We map workflows, source systems, data quality, failure points, and the highest-value automation opportunities.",
         },
         {
            window: "Weeks 2-4",
            title: "Build",
            icon: Hammer,
            description:
               "We design the system, structure the data layer, implement automation, and wire the interfaces needed for real use.",
         },
         {
            window: "Weeks 4-6",
            title: "Launch",
            icon: Rocket,
            description:
               "We deploy, validate outputs, support adoption, and set up the next iteration with better operational signal.",
         },
      ],
   },
   cta: {
      eyebrow: "Strong CTA",
      title: "Let's Build Your AI System",
      description:
         "If your team is sitting on messy data, manual workflows, or stalled AI pilots, we can map the path to a production-ready system fast.",
      headingIcon: Rocket,
      urgency: "Limited onboarding slots per month",
      primaryCta: {
         label: "Book a Free Strategy Call",
         href: CALENDLY_URL,
      },
      secondaryCta: {
         label: "Get a Data Audit",
         href: "/contact",
      },
      visual: {
         label: "[IMAGE: strategy workshop board]",
         description:
            "Audit snapshot, architecture notes, and business-priority system map shared during kickoff.",
         tone: "dark",
         image: {
            src: "/images/ai-product-studio/cta-workshop.png",
            alt: "Strategy workshop with diagrams and collaboration in a professional studio setting",
         },
      },
   },
};
