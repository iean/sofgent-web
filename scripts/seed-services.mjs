/**
 * SofGent Service Seeder
 * Pushes 8 clean, SofGent-branded service documents to Sanity.
 *
 * Usage:
 *   node scripts/seed-services.mjs
 *
 * Requires: SANITY_API_READ_TOKEN (or SANITY_API_WRITE_TOKEN) in .env.local
 * The token must have editor/write access to project 2cv744jx.
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load env ──────────────────────────────────────────────────────────────────
const envPath = resolve(__dirname, "../.env.local");
const envContent = readFileSync(envPath, "utf-8");
const env = Object.fromEntries(
  envContent
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => {
      const [k, ...v] = l.split("=");
      return [k.trim(), v.join("=").trim()];
    })
);

const PROJECT_ID = env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2cv744jx";
const DATASET = env.NEXT_PUBLIC_SANITY_DATASET || "production";
const TOKEN = env.SANITY_API_WRITE_TOKEN || env.SANITY_API_READ_TOKEN;
const API_VERSION = "2025-08-15";

if (!TOKEN) {
  console.error("❌ No Sanity token found. Add SANITY_API_WRITE_TOKEN to .env.local");
  process.exit(1);
}

const MUTATIONS_URL = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;

// ── Service definitions ───────────────────────────────────────────────────────
const SERVICES = [
  {
    _id: "service.document-intelligence-systems",
    _type: "service",
    title: "AI Document Automation",
    slug: { _type: "slug", current: "document-intelligence-systems" },
    eyebrow: "From days to minutes",
    description:
      "Turn unstructured documents into structured, queryable data. We build AI pipelines that extract, classify, and route information from PDFs, contracts, invoices, and forms — automatically.",
    proof: "10x faster than manual document processing",
    icon: "📄",
    order: 1,
    isPrimary: true,
    content: `## What We Build

We replace manual document handling with AI pipelines that read, extract, and classify information automatically. PDFs, scanned forms, contracts, invoices, bank statements — our systems process them in seconds, not hours.

## How It Works

1. **Ingest** — Documents arrive via upload, email, or API
2. **Extract** — AI pulls structured fields: dates, names, amounts, clauses, line items
3. **Classify** — Documents are tagged and routed by type and content
4. **Output** — Clean JSON or database records, ready for downstream systems

## Use Cases

- Invoice and receipt processing for finance teams
- Contract review and clause extraction for legal teams
- Bank statement parsing for fintech and lending platforms
- Form digitization for government and healthcare workflows
- Compliance document classification and audit trails

## Technology Stack

- **OCR & Extraction**: AWS Textract, Google Document AI, Azure Form Recognizer
- **AI Reasoning**: OpenAI GPT-4, Anthropic Claude for complex extraction
- **Pipelines**: Python, FastAPI, LangChain
- **Storage**: PostgreSQL, S3, Elasticsearch

## What You Get

A production-ready document processing pipeline tuned to your specific document types, integrated with your existing systems. You stop paying people to copy-paste data from PDFs.`,
  },
  {
    _id: "service.saas-micro-saas-solutions",
    _type: "service",
    title: "AI SaaS MVP Development",
    slug: { _type: "slug", current: "saas-micro-saas-solutions" },
    eyebrow: "Ship in 2–4 weeks",
    description:
      "From validated idea to production-ready AI SaaS product. We handle the full stack — architecture, AI integration, auth, billing, and deployment — so you can start acquiring customers fast.",
    proof: "Production-ready in 2–4 weeks",
    icon: "🚀",
    order: 2,
    isPrimary: true,
    content: `## What We Build

A complete, production-ready SaaS product — not a prototype. Live auth, billing, core AI features, and a dashboard your customers can use from day one. Shipped in 2–4 weeks.

## What's Included

- Full-stack Next.js application with responsive UI
- AI feature integration (GPT-4, Claude, custom models)
- Authentication with Clerk or Auth.js
- Subscription billing with Stripe
- Admin dashboard and user management
- Production deployment to Vercel, Railway, or AWS

## Who It's For

Founders who have validated an idea and need to move fast. CTOs who need a working MVP to secure funding. Operators who want to productize an internal tool and turn it into revenue.

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes, Django, or FastAPI
- **AI Layer**: OpenAI, Anthropic Claude, Hugging Face models
- **Database**: PostgreSQL (Supabase or Neon), Redis
- **Payments**: Stripe Billing
- **Auth**: Clerk or Auth.js

## The Result

A working SaaS product ready for your first paying customer. Not a mockup, not a slide deck — a live URL you can share.`,
  },
  {
    _id: "service.ai-ready-data-engineering",
    _type: "service",
    title: "AI-Ready Data Infrastructure",
    slug: { _type: "slug", current: "ai-ready-data-engineering" },
    eyebrow: "Unlock your data",
    description:
      "Your data is your moat — but only if AI can access it. We build the pipelines, schemas, and vector stores that make your company's data work as a real AI input layer.",
    proof: "From siloed data to AI-queryable knowledge in weeks",
    icon: "🗄️",
    order: 3,
    isPrimary: true,
    content: `## The Problem

Most companies have valuable data trapped in spreadsheets, legacy databases, and disconnected SaaS tools. AI models can't reason over data they can't access. We fix that.

## What We Build

Clean, structured data pipelines that make your company's knowledge accessible to AI — vector databases for semantic search, retrieval APIs for LLM context windows, and ETL pipelines that stay in sync.

## Core Capabilities

- **Data Ingestion** — Pull from databases, files, APIs, and SaaS tools
- **Transformation** — Clean, normalize, and structure raw data with dbt or custom pipelines
- **Vectorization** — Embed content for semantic search using Pinecone, Weaviate, or pgvector
- **Serving** — Fast APIs optimized for retrieval-augmented generation (RAG)

## Use Cases

- Internal knowledge bases that answer questions with your company's actual data
- Customer support AI with access to your product docs and ticket history
- Financial reporting powered by structured data from multiple sources
- Compliance systems with complete document traceability

## Technology Stack

- **Pipelines**: Python, Apache Airflow, dbt
- **Vector Stores**: Pinecone, pgvector, Weaviate, Chroma
- **Databases**: PostgreSQL, Snowflake, BigQuery
- **Cloud**: AWS, GCP, Azure

## Outcome

Your data becomes a competitive advantage — structured, queryable, and ready to power AI products that your competitors can't replicate quickly.`,
  },
  {
    _id: "service.advanced-ai-solutions",
    _type: "service",
    title: "AI Implementation & LLM Integration",
    slug: { _type: "slug", current: "advanced-ai-solutions" },
    eyebrow: "Production-grade AI",
    description:
      "We integrate large language models, transcription, and computer vision into your existing products and workflows. Real AI in production — not demos, not PoCs.",
    proof: "AI features shipped to production, not just prototyped",
    icon: "🤖",
    order: 4,
    isPrimary: true,
    content: `## What We Do

We take AI from concept to production. Whether you need a chatbot that actually knows your business, a voice transcription pipeline, or a recommendation engine — we build it, integrate it, and ship it.

## What We Build

- **AI Chatbots & Assistants** — GPT-4 or Claude-powered with your data as context (RAG)
- **Voice & Transcription** — Real-time and async transcription with Whisper or Deepgram
- **Document Intelligence** — LLM-powered extraction, summarization, and classification
- **Video AI** — AI avatars and video generation with HeyGen, Synthesia integration
- **Recommendation Engines** — Personalization and content matching at scale

## How We Work

1. Scope the AI use case and define success metrics
2. Select the right models and architecture for your requirements
3. Build, test, and fine-tune in a staging environment
4. Deploy to production with monitoring and fallback handling

## Technology Stack

- **LLMs**: OpenAI GPT-4o, Anthropic Claude 3.5, Llama 3, Mistral
- **Transcription**: OpenAI Whisper, Deepgram, AssemblyAI
- **Orchestration**: LangChain, LlamaIndex
- **Video AI**: HeyGen, ElevenLabs, Synthesia
- **Deployment**: Docker, AWS Lambda, Vercel Edge

## The Result

AI features your users actually use — integrated into your product, tested under real conditions, and built to handle production load.`,
  },
  {
    _id: "service.custom-software-development",
    _type: "service",
    title: "Custom Software Development",
    slug: { _type: "slug", current: "custom-software-development" },
    eyebrow: "Built for your business",
    description:
      "Purpose-built software that fits your operations. We design and develop full-stack applications using modern frameworks — Next.js, .NET, Django, React — with clean architecture and long-term maintainability.",
    proof: "50+ production systems shipped",
    icon: "⚙️",
    order: 5,
    isPrimary: true,
    content: `## What We Build

Software built around your specific workflows — not generic off-the-shelf tools adapted to fit. We design, develop, and deliver full-stack applications that your team actually wants to use.

## What We Cover

- **Web Applications** — Full-stack apps with modern React frontends and robust APIs
- **Admin Dashboards** — Internal tools for operations, finance, and management teams
- **Customer Portals** — B2B portals with authentication, permissions, and data visibility
- **API Development** — Clean RESTful and GraphQL APIs built for long-term use
- **Legacy System Replacement** — Modernize systems that are holding your team back

## How We Work

We start with your business logic, not our preferred framework. Architecture decisions are made based on your scale, team, and maintenance needs — then we build it clean.

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: .NET Core / ASP.NET, Django, FastAPI, Node.js
- **Architecture**: Clean Architecture, Domain-Driven Design
- **Database**: PostgreSQL, SQL Server, MongoDB
- **Cloud**: AWS, Azure, Vercel, Railway

## What You Get

Software that works the way your business works — maintainable, documented, and built to last beyond the first version.`,
  },
  {
    _id: "service.system-integration",
    _type: "service",
    title: "Workflow Automation & Integrations",
    slug: { _type: "slug", current: "system-integration" },
    eyebrow: "Connect your stack",
    description:
      "We automate the manual work that slows your team down. From POS and ERP integrations to custom API connectors and event-driven pipelines — data flows automatically, without the copy-paste.",
    proof: "Hours of manual work eliminated daily",
    icon: "🔗",
    order: 6,
    isPrimary: true,
    content: `## The Problem

Your team spends hours moving data between systems that don't talk to each other. Orders from your POS don't sync with inventory. Customer data lives in three different tools. Reports are assembled manually every Monday morning.

## What We Build

Custom integrations and automation pipelines that connect your tools and eliminate manual data handling. We build to your exact workflows — not generic Zapier templates.

## Integration Types

- **ERP & Accounting** — Sync with SAP, QuickBooks, Xero, Sage
- **POS & Inventory** — Connect point-of-sale systems to inventory and fulfillment
- **CRM Pipelines** — Automate lead routing, customer updates, and sales workflows
- **Payment & Finance** — Stripe, PayPal, and banking API integrations
- **Custom APIs** — Any system with an API, connected to any other

## How We Work

1. Map your current manual workflow and identify every handoff
2. Design an event-driven integration architecture
3. Build, test, and deploy with monitoring and error alerting
4. Hand over with documentation your team can maintain

## Technology Stack

- **Integration Layer**: Python, Node.js, custom middleware
- **Message Queues**: RabbitMQ, Redis Pub/Sub, AWS SQS
- **API Standards**: REST, GraphQL, webhooks, EDI
- **Monitoring**: Datadog, Sentry, custom alerting

## The Result

Your tools work together. Your team stops copying data between spreadsheets. Errors that came from manual entry disappear.`,
  },
  {
    _id: "service.devops-deployment-continuous-delivery",
    _type: "service",
    title: "DevOps & Cloud Infrastructure",
    slug: { _type: "slug", current: "devops-deployment-continuous-delivery" },
    eyebrow: "Ship with confidence",
    description:
      "CI/CD pipelines, containerized deployments, and cloud infrastructure that scales. We set up your environments so your team ships fast, safely, and without surprises.",
    proof: "Zero-downtime deployments, every time",
    icon: "☁️",
    order: 7,
    isPrimary: true,
    content: `## What We Set Up

Infrastructure that lets your team ship confidently — automated testing, staging environments, one-click deploys, and rollback capability. Built once, maintained cheaply.

## Core Services

- **CI/CD Pipelines** — GitHub Actions, GitLab CI, or Bitbucket pipelines with automated testing gates
- **Container Infrastructure** — Docker and Kubernetes setup, from single-node to multi-region clusters
- **Cloud Environments** — AWS, Azure, or GCP infrastructure provisioned with Terraform
- **Monitoring & Alerting** — Datadog, CloudWatch, or Grafana dashboards with on-call alerting
- **Security Hardening** — Secrets management, network policies, vulnerability scanning

## How We Work

We start with your current deployment pain — slow releases, flaky tests, manual steps — and fix the bottlenecks first. Then we build the foundation that scales.

## Technology Stack

- **CI/CD**: GitHub Actions, GitLab CI, CircleCI
- **Containers**: Docker, Kubernetes (EKS, AKS, GKE)
- **Cloud**: AWS, Azure, GCP
- **IaC**: Terraform, Pulumi, AWS CDK
- **Monitoring**: Datadog, Prometheus + Grafana, Sentry

## The Result

Your team ships to production multiple times per day, with confidence. Outages get caught before users notice. Infrastructure cost is predictable and right-sized.`,
  },
  {
    _id: "service.software-testing",
    _type: "service",
    title: "Software Testing & QA",
    slug: { _type: "slug", current: "software-testing" },
    eyebrow: "Ship without surprises",
    description:
      "Comprehensive test coverage — unit, integration, end-to-end — for critical systems. We build automated test suites that catch regressions before they reach your customers.",
    proof: "Critical bugs caught before production",
    icon: "✅",
    order: 8,
    isPrimary: true,
    content: `## Why This Matters

The most expensive bugs are the ones your customers find. A solid test suite pays for itself the first time it catches a regression in production code.

## What We Build

Automated test suites designed around your risk areas — the flows that matter most, the integrations most likely to break, the edge cases that have burned you before.

## Coverage Types

- **Unit Tests** — Fast, isolated tests for business logic and utility functions
- **Integration Tests** — API contract tests, database interactions, service boundaries
- **End-to-End Tests** — Browser automation with Playwright or Cypress for critical user flows
- **Performance Testing** — Load and stress tests for APIs and background jobs
- **Regression Suites** — Baseline tests that protect against regressions on every PR

## How We Work

1. Audit your current coverage and identify gaps in critical paths
2. Write tests for the highest-risk areas first
3. Set up CI integration so tests run on every pull request
4. Document test strategies so your team can maintain and extend them

## Technology Stack

- **Unit & Integration**: Jest, Vitest, xUnit, pytest
- **End-to-End**: Playwright, Cypress
- **API Testing**: Postman, Supertest, HTTPie
- **Performance**: k6, Locust, JMeter

## The Result

Your team merges code with confidence. Regressions get caught in CI, not by customers. Every new feature ships with a safety net.`,
  },
];

// ── Mutations helper ──────────────────────────────────────────────────────────
async function mutate(mutations) {
  const response = await fetch(MUTATIONS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(`Sanity error: ${JSON.stringify(json)}`);
  }
  return json;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🚀 SofGent Service Seeder`);
  console.log(`   Project: ${PROJECT_ID} / ${DATASET}`);
  console.log(`   Services: ${SERVICES.length}\n`);

  // Check which docs exist
  const checkUrl = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(
    '*[_type == "service"]{_id, title, slug}'
  )}`;
  const checkRes = await fetch(checkUrl, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const existing = await checkRes.json();
  const existingIds = new Set((existing.result || []).map((d) => d._id));

  console.log(`   Found ${existingIds.size} existing service docs in Sanity`);
  console.log(`   IDs: ${[...existingIds].join(", ")}\n`);

  // Build mutations — createOrReplace for each service
  const mutations = SERVICES.map((svc) => ({
    createOrReplace: svc,
  }));

  console.log(`📝 Upserting ${mutations.length} services...`);
  const result = await mutate(mutations);
  console.log(`   ✅ Mutations applied: ${result.results?.length ?? "?"} results`);

  // Publish all (remove drafts prefix since these are direct IDs)
  // Publish via separate mutations
  const publishMutations = SERVICES.map((svc) => ({
    patch: {
      id: svc._id,
      set: { _id: svc._id },
    },
  }));

  // For Sanity, publishing means removing the drafts. prefix. With createOrReplace
  // on non-draft IDs, the document is already published. Just verify:
  console.log(`\n✅ Services are published (createOrReplace on non-draft IDs)`);
  console.log(`\n📋 Summary of services pushed:`);
  SERVICES.forEach((s) => {
    const icon = existingIds.has(s._id) ? "↺ Updated" : "+ Created";
    console.log(`   ${icon}: [${s.order}] ${s.title} → /services/${s.slug.current}`);
  });

  console.log(`\n✅ Done! Visit http://localhost:3000/services to see the changes.\n`);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
