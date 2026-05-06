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
      eyebrow: "SaaS Delivery System",
      headingIcon: Rocket,
      title: "From Product Idea to Launch-Ready SaaS in Weeks",
      description:
         "We turn rough concepts, founder notes, and early requirements into a structured build plan, production-grade architecture, and a launch-ready product that can survive real users.",
      badges: [
         { label: "Built for real users", icon: Users },
         { label: "Launch in 2-6 weeks", icon: Clock },
         { label: "AI-assisted delivery", icon: Sparkles },
      ],
      highlights: [
         {
            text: "Product strategy, AI leverage, and engineering in one delivery team.",
            icon: Layers3,
         },
         {
            text: "Built for launches, investor demos, and real customer onboarding.",
            icon: Rocket,
         },
         {
            text: "Clear scope, clear milestones, and no bloated build cycle.",
            icon: Target,
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
         label: "[IMAGE: SaaS product architecture]",
         description:
            "Placeholder for the system view: app layers, data model, integrations, and launch environment.",
         image: {
            src: "/images/ai-product-studio/hero-architecture.png",
            alt: "Isometric illustration of a SaaS product architecture with services, data layer, and integrations",
         },
         imagePriority: true,
      },
   },
   trustBar: [
      { label: "Built for founders, CTOs, and product teams", icon: Users },
      { label: "Launch in weeks, not months", icon: Rocket },
      { label: "AI + Product + Engineering under one roof", icon: Layers3 },
   ],
   audience: {
      eyebrow: "Who This Is For",
      title: "Built for teams that need product clarity and execution in the same room.",
      description:
         "This offer fits teams that cannot afford months of drift, unclear ownership, or a prototype that collapses as soon as real users show up.",
      visual: {
         label: "[IMAGE: founder and product team fit diagram]",
         description:
            "Placeholder for the ideal customer profile: founders, product teams, operators, and SaaS rebuilds.",
         image: {
            src: "/images/ai-product-studio/audience-fit.png",
            alt: "Diagram of founders, product teams, and operators connecting into a single delivery system",
         },
      },
      items: [
         {
            icon: Users,
            title: "Founders with a product idea and no room for drift",
            description:
               "You need a team that can translate vision into scope, architecture, and a launch path fast.",
         },
         {
            icon: Workflow,
            title: "Businesses turning a service into software",
            description:
               "You want to productize a manual workflow without losing control of how the operation actually works.",
         },
         {
            icon: ShieldCheck,
            title: "Teams rebuilding a fragile first version",
            description:
               "Your version one proved the need, but now the product needs a stronger system underneath it.",
         },
         {
            icon: Gauge,
            title: "Product teams under pressure to launch properly",
            description:
               "You need speed, but not at the cost of structure, deployment quality, or future scale.",
         },
      ],
   },
   problem: {
      eyebrow: "The Real Problem",
      title: "Most SaaS builds do not fail on effort. They fail on structure.",
      description:
         "What looks like a delivery problem is usually a system problem: weak scope, fragmented execution, and no one owning the product end to end.",
      visual: {
         label: "[IMAGE: launch blockers map]",
         description:
            "Placeholder for scope creep, fragmented execution, and launch-risk visualization.",
         image: {
            src: "/images/ai-product-studio/problem-fragmented.png",
            alt: "Illustration of fragmented project work versus a unified launch system",
         },
      },
      items: [
         {
            icon: Target,
            title: "The product scope keeps moving",
            description:
               "Requirements stay loose, priorities shift weekly, and the build never gets tight enough to ship on time.",
         },
         {
            icon: Layers3,
            title: "Teams build before the system is clear",
            description:
               "Design, backend, frontend, and AI work split apart, so decisions break across the stack and delivery slows down.",
         },
         {
            icon: Search,
            title: "Launches slip because architecture was never planned",
            description:
               "What looked fast in week one becomes expensive when auth, billing, data, and deployment collide late in the process.",
         },
         {
            icon: Gauge,
            title: "What ships is hard to demo, sell, or scale",
            description:
               "You end up with a prototype that looks finished but is not ready for users, investors, or growth.",
         },
      ],
   },
   process: {
      eyebrow: "Your Process",
      title: "A four-step build system that keeps momentum high and risk controlled.",
      description:
         "We compress strategy, architecture, build, and launch into one delivery model that is fast enough for founders and disciplined enough for serious product teams.",
      visual: {
         label: "[PIPELINE DIAGRAM: Audit -> Structure -> Build -> Deploy]",
         description:
            "Placeholder for the delivery flow from product shaping to deployment and feedback loops.",
         illustration: "process-pipeline",
      },
      steps: [
         {
            icon: Search,
            step: "Step 1",
            title: "Audit",
            description:
               "We audit the idea, offer, user flow, revenue path, and technical risk before writing production code.",
         },
         {
            icon: Layers3,
            step: "Step 2",
            title: "Structure",
            description:
               "We lock the architecture, schema, backlog, delivery milestones, and launch constraints so the team can move with confidence.",
         },
         {
            icon: Hammer,
            step: "Step 3",
            title: "Build",
            description:
               "UI, backend, integrations, AI workflows, and QA move in one sprint instead of in disconnected handoffs.",
         },
         {
            icon: Rocket,
            step: "Step 4",
            title: "Deploy",
            description:
               "We ship, instrument feedback, and hand over a system ready for customers, demos, and the next release.",
         },
      ],
   },
   deliverables: {
      eyebrow: "What You Actually Deliver",
      title: "A product system the business can launch, operate, and improve.",
      description:
         "This is not a vague sprint. It is a working delivery package designed to move you toward launch and revenue with less rework later.",
      visual: {
         label: "[IMAGE: product dashboard preview]",
         description:
            "Placeholder for admin, analytics, environment status, and release dashboard preview.",
         image: {
            src: "/images/ai-product-studio/deliverables-dashboard.png",
            alt: "Product dashboard preview with analytics, environment status, and release notes",
         },
      },
      items: [
         {
            icon: Target,
            title: "Launch blueprint",
            description:
               "A focused scope, delivery roadmap, and technical plan aligned to the first meaningful release.",
         },
         {
            icon: BrainCircuit,
            title: "AI-ready product architecture",
            description:
               "Data model, auth, services, integrations, and deployment decisions made for version two, not just week one.",
         },
         {
            icon: ServerCog,
            title: "Production build pipeline",
            description:
               "A maintainable codebase, deployment workflow, QA coverage, and launch environment built for real usage.",
         },
         {
            icon: LayoutDashboard,
            title: "Admin, APIs, and operator tooling",
            description:
               "The interfaces and integration surface required to run the product after launch without chaos.",
         },
      ],
   },
   transformation: {
      eyebrow: "Before vs After",
      title: "The engagement changes more than the codebase.",
      description:
         "The real value is a product system the company can actually run, sell, and grow without guessing every next move.",
      visual: {
         label: "[IMAGE: workflow transformation board]",
         description:
            "Placeholder for the shift from vague scope and fragmented work to launch-ready product operations.",
         image: {
            src: "/images/ai-product-studio/transformation-before-after.png",
            alt: "Before-and-after view: vague scope versus a launch-ready product operation",
         },
      },
      before: {
         title: "Before SofGent",
         points: [
            "Loose requirements and no decision framework",
            "Freelancers or agencies moving in different directions",
            "Prototype thinking instead of launch discipline",
            "No confidence around demo readiness, onboarding, or scale",
         ],
      },
      after: {
         title: "After SofGent",
         points: [
            "A clear build plan with product and technical ownership",
            "One connected system across UX, app, data, and AI",
            "A launch-ready MVP that can handle real users",
            "A foundation built for iteration, analytics, and growth",
         ],
      },
   },
   useCases: {
      eyebrow: "Use Cases",
      title: "Where this delivery model creates real leverage.",
      description:
         "We use the same system whether you are launching a new SaaS offer or fixing a product that never got properly structured.",
      visual: {
         label: "[IMAGE: SaaS growth use case grid]",
         description:
            "Placeholder for founder MVPs, productized services, rebuilds, and AI-enabled product workflows.",
         image: {
            src: "/images/ai-product-studio/use-cases-board.png",
            alt: "Grid of SaaS use cases including MVPs, productized services, and rebuilds",
         },
      },
      items: [
         {
            icon: Users,
            title: "Founder idea -> investor-ready MVP",
            description:
               "Turn a raw product concept into a system you can demo, test, and start selling.",
            outcome: "Faster fundraising conversations and earlier customer traction.",
         },
         {
            icon: Workflow,
            title: "Manual workflow -> productized SaaS",
            description:
               "Convert a service-heavy process into a repeatable software experience customers can actually use.",
            outcome: "Higher margins and a more scalable operating model.",
         },
         {
            icon: ShieldCheck,
            title: "Prototype -> scalable rebuild",
            description:
               "Replace the fragile first version with a production-ready foundation that can carry the next stage.",
            outcome: "Less rework, fewer outages, and better delivery confidence.",
         },
         {
            icon: Bot,
            title: "AI concept -> usable workflow",
            description:
               "Wrap AI features inside a product users can trust and teams can manage without manual patchwork.",
            outcome: "Real adoption instead of a demo that never reaches operations.",
         },
      ],
   },
   whySofGent: {
      eyebrow: "Why SofGent",
      title: "This is premium product delivery, not outsourced task completion.",
      description:
         "Teams pay more for this model because it protects the business from slow launches, weak architecture, and expensive rebuilds later.",
      visual: {
         label: "[IMAGE: delivery authority stack]",
         description:
            "Placeholder for product ownership, engineering coverage, AI workflow design, and launch discipline.",
         image: {
            src: "/images/ai-product-studio/why-control-layer.png",
            alt: "Layered delivery stack covering product, engineering, AI, and launch discipline",
         },
      },
      items: [
         {
            icon: ShieldCheck,
            title: "We build systems, not demos",
            description:
               "The goal is a product the business can sell, support, and grow, not a polished prototype that breaks under use.",
         },
         {
            icon: Target,
            title: "We think like product owners, not developers",
            description:
               "Every decision is pushed through the lens of launch readiness, business value, and what users actually need first.",
         },
         {
            icon: BrainCircuit,
            title: "We deliver production-ready AI, not experiments",
            description:
               "AI is folded into the product system with structure, workflows, and control, not bolted on as a novelty feature.",
         },
         {
            icon: ServerCog,
            title: "We keep architecture close to business outcomes",
            description:
               "The technical foundation is shaped around onboarding, revenue paths, integrations, and the next stage of scale.",
         },
      ],
   },
   midCta: {
      eyebrow: "Middle CTA",
      title: "Discuss the product before you spend the next month building the wrong scope.",
      description:
         "A focused strategy conversation is usually enough to expose scope creep, architecture risk, and the fastest path to a product that can actually launch.",
      headingIcon: Lightbulb,
      primaryCta: {
         label: "Discuss Your Product",
         href: "/contact",
      },
      secondaryCta: {
         label: "Build My SaaS",
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
      title: "How we work",
      description:
         "Every engagement is shaped to move from uncertainty to launch without dragging the process out or bloating the team.",
      visual: {
         label: "[DIAGRAM: Week 1 audit -> Weeks 2-4 build -> Weeks 4-6 launch]",
         description:
            "Placeholder for the timeline from discovery and architecture through build and release.",
         image: {
            src: "/images/ai-product-studio/engagement-timeline.png",
            alt: "Engagement timeline from week-1 discovery through build and launch",
         },
      },
      phases: [
         {
            window: "Week 1",
            title: "Discovery + Audit",
            icon: ClipboardList,
            description:
               "We define the product outcome, cut scope, map the architecture, and surface risks before build velocity matters.",
         },
         {
            window: "Weeks 2-4",
            title: "Build",
            icon: Code2,
            description:
               "The product is designed, developed, integrated, and tested with one team moving against a shared plan.",
         },
         {
            window: "Weeks 4-6",
            title: "Launch",
            icon: Rocket,
            description:
               "We deploy, stabilize, onboard initial users, and turn feedback into the next roadmap instead of ending at handoff.",
         },
      ],
   },
   cta: {
      eyebrow: "Strong CTA",
      title: "Let's Build Your SaaS Product",
      description:
         "If the product matters, the build system matters. We can map the fastest route from rough idea to a launch-ready SaaS platform with real technical confidence.",
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
