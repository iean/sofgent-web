/**
 * SofGent Blog Seed Script
 * Run: node scripts/seed-blog.mjs
 *
 * Requires SANITY_API_WRITE_TOKEN env var (or falls back to SANITY_API_READ_TOKEN if it has write access).
 * Set in your shell: export SANITY_API_WRITE_TOKEN=your_token_here
 * Or: SANITY_API_WRITE_TOKEN=sk... node scripts/seed-blog.mjs
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-08-15";
const token =
  process.env.SANITY_API_WRITE_TOKEN ??
  process.env.SANITY_API_READ_TOKEN ??
  process.env.SANITY_READ_TOKEN;

if (!projectId || !token) {
  console.error("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

// ── Portable Text helpers ─────────────────────────────────────
let keyCounter = 0;
const key = () => `k${++keyCounter}`;

const block = (text, style = "normal", marks = []) => ({
  _type: "block",
  _key: key(),
  style,
  children: [{ _type: "span", _key: key(), text, marks }],
  markDefs: [],
});

const h2 = (text) => block(text, "h2");
const h3 = (text) => block(text, "h3");
const p = (text) => block(text, "normal");
const bullet = (text) => ({
  _type: "block",
  _key: key(),
  style: "normal",
  listItem: "bullet",
  level: 1,
  children: [{ _type: "span", _key: key(), text, marks: [] }],
  markDefs: [],
});
const blockquote = (text) => block(text, "blockquote");

// ── Blog post data ────────────────────────────────────────────
const posts = [
  {
    title: "Why Most AI SaaS Projects Fail in the First 60 Days — And How We Prevent It",
    slug: "why-most-ai-saas-projects-fail",
    excerpt:
      "The failure pattern is almost always the same: unclear scope, no production mindset, and an AI layer bolted on after the fact. Here's the process we use to ensure every project ships and sticks.",
    author: "Masud S.",
    readTime: "8 min read",
    categories: ["Blog"],
    publishedAt: "2026-06-12T09:00:00Z",
    body: [
      p("Most AI SaaS projects don't die from bad technology. They die from bad decisions made before a single line of code is written. After shipping over 30 AI products, we've seen the failure pattern clearly — and we've built our entire process around preventing it."),
      h2("The Three Killers"),
      h3("1. Unclear Scope"),
      p("When founders say 'build me an AI that handles our workflow,' they mean something very specific in their head but communicate something dangerously vague. Without a written scope that both sides sign off on before sprint one begins, every decision becomes a negotiation and every feature becomes a potential scope creep."),
      p("We require a written brief — including what the product will NOT do — before we quote a single number. This protects both sides."),
      h3("2. No Production Mindset"),
      p("There's a huge difference between a demo that impresses in a meeting and a product that survives 500 concurrent users, a bad network connection, and a user who tries to upload a 400MB PDF. Most AI MVPs are built for the demo. We build for production from day one."),
      p("This means proper error handling, rate limiting, retry logic, cost controls, and monitoring before launch — not as a phase two afterthought."),
      h3("3. AI as an Afterthought"),
      p("The worst outcome is spending weeks building a product and then trying to bolt AI onto it. AI isn't a feature. It's an architectural decision. The data model, the API contracts, the storage layer — all of these need to be designed with AI in mind from the start."),
      h2("How We Prevent It"),
      p("Our process is built around three locked phases before any AI implementation begins:"),
      bullet("Days 1–2: Written scope, fixed price, agreed by both parties"),
      bullet("Days 3–5: Data model, API contracts, and AI layer design with client sign-off"),
      bullet("Week 2+: Build against the spec — no surprises, daily standups, weekly demos"),
      blockquote("If the scope is locked and the architecture is right, the build is just execution. Execution is the part we're very good at."),
      h2("The Result"),
      p("Projects that go through this process ship. Not always on the exact day planned — real software has surprises — but they ship, they work in production, and the client owns the code. That's the guarantee we make and the bar we hold ourselves to."),
      p("If you're evaluating AI development partners, ask them what happens when the scope changes mid-sprint. Their answer will tell you everything."),
    ],
  },

  {
    title: "How We Built a Document Intelligence System in 3 Weeks for a UK Care Provider",
    slug: "document-intelligence-system-3-weeks",
    excerpt:
      "End-to-end OCR, classification, and structured extraction — deployed to production with zero manual review. A full technical walkthrough.",
    author: "SofGent",
    readTime: "6 min read",
    categories: ["Blog"],
    publishedAt: "2026-06-09T09:00:00Z",
    body: [
      p("A UK-based care services provider came to us with a problem that's common in regulated industries: hundreds of incoming documents per week — referrals, assessments, consent forms — all processed by hand, copied into spreadsheets, and routed to the right team by someone who already had too much to do."),
      h2("The Problem"),
      p("The process had three failure modes. Documents were misrouted when the manual router was overloaded. Data was entered incorrectly when copied from scans. And processing time averaged 4–6 business days, which in care services means delayed support for vulnerable people."),
      p("The brief we received: automate as much of this as possible, maintain a human review queue for low-confidence extractions, and integrate with the existing CRM."),
      h2("The Architecture"),
      h3("Stage 1: Ingestion"),
      p("Documents arrive via email (PDF attachments), a staff web portal, and occasionally fax-to-email. We built a unified ingestion service that normalises all three sources into a processing queue within seconds of receipt."),
      h3("Stage 2: OCR and Preprocessing"),
      p("We used Tesseract with preprocessing (deskew, denoise, contrast normalisation) for scanned documents, and pdfplumber for digital PDFs. The system auto-selects the right approach based on PDF metadata."),
      h3("Stage 3: Classification"),
      p("A fine-tuned transformer model classifies each document into one of 11 categories. We trained on 2,400 labelled examples provided by the client. Classification accuracy hit 96.8% after two training iterations."),
      h3("Stage 4: Extraction"),
      p("Structured extraction uses a combination of regex patterns, NER, and template matching depending on document type. Referral forms, for example, have a predictable structure — we can extract name, date of birth, referral reason, and urgency flag with 98.3% accuracy."),
      h3("Stage 5: Review Queue"),
      p("Any field with confidence below 0.85 routes to a human review interface. Reviewers see the original document alongside the extracted data, can correct it in one click, and their corrections feed back into the training pipeline."),
      h2("What Shipped"),
      p("Three weeks from brief to production. The system now processes 94% of incoming documents without manual intervention. Average processing time dropped from 4–6 days to under 2 hours. The review queue handles the remaining 6%, and reviewers spend less time per document than they did on manual processing."),
      bullet("94% straight-through processing rate"),
      bullet("2-hour average processing time (was 4–6 days)"),
      bullet("Zero critical production incidents in the first 60 days"),
      p("The system is live, the client owns the code, and we're in a 30-day support window. After that, they have a maintainable system and a team that understands it."),
    ],
  },

  {
    title: "The Founder's Guide to Scoping an AI MVP: What to Decide Before You Write Code",
    slug: "founders-guide-scoping-ai-mvp",
    excerpt:
      "Scope creep kills AI projects. This is the framework we use to lock in scope before sprint one — including the 5 questions every founder must answer first.",
    author: "Masud S.",
    readTime: "10 min read",
    categories: ["Guide"],
    publishedAt: "2026-05-28T09:00:00Z",
    body: [
      p("Founders who've never shipped software before often think scoping is about listing features. It isn't. Scoping is about making decisions — especially the hard decisions about what the product will NOT do — before any money changes hands or any code gets written."),
      p("After scoping over 50 AI projects, here's the framework we use every time."),
      h2("The 5 Questions You Must Answer First"),
      h3("1. What is the single action the user takes to get value?"),
      p("Not a journey. Not a funnel. One action. If you can't name it in a sentence, the product isn't scoped yet. For a document automation tool: 'The user uploads a PDF and gets structured JSON back.' That's it. Everything else is secondary."),
      h3("2. What data does the AI need, and do you have it?"),
      p("AI features don't work on aspirational data. They work on actual data. If your model needs 5,000 labelled examples and you have 200, that's a project-killer that needs to be on the scope document on day one."),
      h3("3. Where does the AI output go?"),
      p("Too many MVPs show AI output on a screen and call it done. But the value is almost always in what happens next: the data going into a CRM, triggering a workflow, generating a document. Scope includes the downstream integration."),
      h3("4. What happens when the AI is wrong?"),
      p("It will be wrong. The question is what the system does about it. A confidence threshold that routes to human review? An undo mechanism? An audit log? This isn't an edge case — it's a core feature for any production AI system."),
      h3("5. What does success look like in 30 days?"),
      p("Not in 6 months. In 30 days. If you can't define a measurable outcome at the 30-day mark, you don't have a product — you have a research project. Those have very different cost structures."),
      h2("What Goes Into the Written Scope"),
      bullet("One-paragraph product statement (what it does, for whom, why it's better than the status quo)"),
      bullet("Feature list — with explicit OUT OF SCOPE items"),
      bullet("Data requirements and sources"),
      bullet("Integration points (what systems does it touch?)"),
      bullet("Non-functional requirements (latency, uptime, cost per unit)"),
      bullet("Success metrics for week 4"),
      bullet("Ownership and IP assignment"),
      h2("The Scope Review"),
      p("Before we start any sprint, we do a 90-minute scope review where we walk through every line of the scope document with the founder or CTO. If something is ambiguous, we resolve it in writing before leaving the call."),
      blockquote("Ambiguity at the scope stage costs thousands of dollars in rework at the build stage. We'd rather spend an extra hour on the call."),
      h2("When to Push Back on Scope"),
      p("If a founder insists on including a feature that adds significant complexity without significantly increasing the value of the MVP, we push back. Not because we can't build it, but because every extra feature is risk — risk that the project runs long, goes over budget, or ships with a bug in a feature that wasn't even in the original brief."),
      p("The best MVPs we've shipped have been the most ruthlessly scoped ones. Do less. Do it right. Expand from a working foundation."),
    ],
  },

  {
    title: "Haven: From 6-Month Manual Process to Fully Automated in 18 Days",
    slug: "haven-automation-case-study",
    excerpt:
      "How we replaced a 6-month document review workflow with an AI pipeline — and launched with zero critical bugs on day one.",
    author: "SofGent",
    readTime: "5 min read",
    categories: ["Case Study"],
    publishedAt: "2026-06-03T09:00:00Z",
    body: [
      p("Haven Care is a UK-based provider of domiciliary care, staffing, and supported living services. When they came to us, their document intake process was a 6-month-old patchwork of email chains, spreadsheets, and manual data entry — processing over 200 documents per week."),
      h2("The Challenge"),
      p("The team was spending approximately 3 hours per day on document triage alone. Referrals were occasionally lost in inboxes. Data entry errors were creating downstream problems in care coordination. And the system had no audit trail — a significant issue for a CQC-regulated provider."),
      h2("What We Built"),
      p("We scoped, designed, and shipped a full document intelligence system in 18 days:"),
      bullet("Unified ingestion from email, web portal, and fax-to-email"),
      bullet("OCR pipeline with preprocessing for scanned documents"),
      bullet("Transformer-based classification across 11 document categories"),
      bullet("Structured extraction for referral data, consent records, and assessments"),
      bullet("Human review queue for low-confidence extractions"),
      bullet("CRM integration for automatic record creation"),
      bullet("Full audit trail with timestamped processing events"),
      h2("The Result"),
      p("Day one of production: zero critical bugs. Week one: 89% straight-through processing rate. Week four: 94%."),
      p("The team's document triage time dropped from 3 hours per day to 20 minutes — time now spent on the 6% of documents that genuinely need human judgment. The audit trail satisfies CQC requirements. And the system processes documents in under 2 hours versus the previous 4–6 day average."),
      blockquote("\"The system just works. We upload the documents and they appear in our system, correctly categorised and with the data already filled in. It's changed how the whole team operates.\" — Operations Lead, Haven Care"),
      h2("What Made This Possible"),
      p("Three things: a locked scope before sprint one, a client who provided labelled training data quickly, and a team that builds for production rather than for the demo."),
      p("Haven now owns the code outright. We're in a 30-day support window and have documentation that lets their internal team maintain the system going forward."),
    ],
  },

  {
    title: "Claude vs OpenAI for Production AI: Which Model Actually Ships Better?",
    slug: "claude-vs-openai-production",
    excerpt:
      "We've shipped products with both. Here's an honest breakdown of where each model wins — based on real production use, not benchmarks.",
    author: "Masud S.",
    readTime: "7 min read",
    categories: ["Blog"],
    publishedAt: "2026-05-21T09:00:00Z",
    body: [
      p("We've shipped production AI products using both Claude (Anthropic) and GPT-4 series models (OpenAI). We don't have a preferred vendor — we choose based on the job. But founders ask us constantly which model to use, so here's the honest breakdown."),
      h2("Where Claude Wins"),
      h3("Long-context document processing"),
      p("Claude's context windows are genuinely useful for document work. When you're processing a 100-page compliance document and need coherent extraction across the entire thing, Claude handles it with fewer hallucinations and better structure in the output. For document automation work, Claude is our default."),
      h3("Instruction following"),
      p("When you need a model to follow a very specific output format — structured JSON, a particular template, a constrained set of decisions — Claude is more consistent. GPT models are creative, which is a feature in many contexts but a liability when you need reliable, predictable output."),
      h3("Handling ambiguity gracefully"),
      p("Claude is better at saying 'I'm not sure' and asking for clarification rather than confidently producing wrong output. In production systems with a human review queue, this matters: a model that knows its confidence level is more useful than one that always sounds certain."),
      h2("Where OpenAI Wins"),
      h3("Code generation"),
      p("For coding tasks — especially complex, multi-file codebases — GPT-4o and o-series models produce higher quality code with fewer errors on the first pass. If your AI product involves code generation as a core feature, OpenAI is currently ahead."),
      h3("Speed"),
      p("GPT-4o-mini is fast. For use cases where latency matters more than perfect output quality — real-time chat, short-form content, interactive tools — the speed advantage is real and noticeable."),
      h3("Ecosystem and tooling"),
      p("OpenAI's ecosystem is more mature: structured outputs, function calling, fine-tuning, batch processing. If you need specific production infrastructure features, check the OpenAI docs first — there's a higher chance it's already supported."),
      h2("The Honest Answer"),
      p("For document-heavy, instruction-following, long-context work: Claude. For code generation, speed-critical, or tooling-dependent work: OpenAI. For most production products: you'll use both. We typically route different tasks to different models based on what they're actually good at."),
      blockquote("Vendor loyalty is for marketing budgets. We pick the model that does the job correctly."),
      p("The worst decision you can make is choosing a model based on a benchmark and then discovering in production that it handles your specific data poorly. Test with your actual data before you commit."),
    ],
  },

  {
    title: "RAG in Production: The Practical Setup Nobody Writes About",
    slug: "rag-in-production-practical",
    excerpt:
      "Everyone writes about how RAG works in theory. Here's what the actual production setup looks like — chunking strategy, embedding models, retrieval scoring, and where it breaks.",
    author: "SofGent",
    readTime: "12 min read",
    categories: ["Guide"],
    publishedAt: "2026-05-07T09:00:00Z",
    body: [
      p("Every RAG tutorial shows you the happy path: chunk your documents, embed them, store in a vector database, retrieve at query time, pass to an LLM, get a great answer. This works beautifully in a notebook with 10 sample documents. It falls apart in production with 50,000 documents, mixed quality data, and users who ask questions the embeddings don't handle well."),
      p("Here's what the actual production setup looks like."),
      h2("Chunking Strategy"),
      p("The default advice is 'chunk by token count.' This is wrong for most real-world documents. A 500-token chunk that splits in the middle of a table, a bulleted list, or a procedure step will produce retrieval results that are semantically incomplete."),
      p("What actually works:"),
      bullet("Semantic chunking: split on paragraph and section boundaries, not token count"),
      bullet("Sliding window with overlap for dense technical documents"),
      bullet("Hierarchical chunking: store both the paragraph and its parent section, retrieve both"),
      bullet("Minimum chunk size of ~150 tokens — smaller chunks lose context and produce noisy retrieval"),
      h2("Embedding Models"),
      p("text-embedding-3-small is fast and cheap. text-embedding-3-large is more accurate. For most production RAG systems, the difference matters most for short queries against long documents. Test both on your actual data before deciding — the cost difference is negligible at most production volumes."),
      p("For multilingual or domain-specific content, consider BAAI/bge or domain-specific fine-tuned embeddings. Generic embeddings underperform on highly specialised vocabulary."),
      h2("Retrieval Scoring"),
      p("Cosine similarity alone is not enough. In production, you need:"),
      bullet("Hybrid retrieval: combine vector similarity with BM25 keyword search — this handles exact term matches that embeddings miss"),
      bullet("Reranking: use a cross-encoder (e.g., Cohere Rerank, or a local model) to re-score the top-N retrieved chunks before passing to the LLM"),
      bullet("Metadata filtering: always filter by document type, date range, or tenant before retrieval — searching 50,000 chunks when 2,000 are relevant wastes latency and budget"),
      h2("Where It Breaks"),
      h3("Negation queries"),
      p("'What are we NOT allowed to do in this contract?' — vector retrieval retrieves content about things you can do, not content about prohibitions. You need special handling or prompt engineering for negation queries."),
      h3("Comparative queries"),
      p("'How does our policy compare to industry standard?' requires retrieving from multiple document sets and synthesising. Single-corpus RAG doesn't handle this well."),
      h3("Freshness"),
      p("If your documents update frequently, you need a re-indexing pipeline that triggers on document change, not a nightly batch job. Stale indexes produce confident wrong answers, which is worse than a correct 'I don't know.'"),
      h2("The Production Stack"),
      bullet("pgvector (PostgreSQL extension) for most use cases — avoids running a separate vector DB"),
      bullet("Pinecone or Weaviate if you need managed vector search at scale"),
      bullet("LangChain or custom orchestration depending on complexity"),
      bullet("Redis for caching high-frequency queries"),
      bullet("Structured logging of every retrieval event — you need to debug why a query retrieved the wrong chunk"),
      blockquote("The retrieval quality determines the answer quality. Spend more time on the retrieval layer than on prompt engineering."),
      p("RAG is powerful but it's not magic. The systems that work in production are the ones that treat retrieval as an engineering problem, not a configuration problem."),
    ],
  },

  {
    title: "Tokens Aren't Spend — They're Units of Work. Here's Why That Changes Pricing.",
    slug: "tokens-are-units-of-work",
    excerpt:
      "Most companies measure AI cost in dollars per API call. The ones actually getting ROI measure it in work completed per dollar. A reframe that changes everything.",
    author: "Masud S.",
    readTime: "4 min read",
    categories: ["Insight"],
    publishedAt: "2026-05-14T09:00:00Z",
    body: [
      p("When most teams first look at AI API costs, they see a line on their infrastructure bill labelled 'OpenAI' or 'Anthropic' and try to minimise it. This is the wrong frame."),
      h2("The Wrong Question"),
      p("'How do we reduce our token spend?' is the wrong question. It leads to: shorter prompts that miss context, cheaper models that produce worse output, caching strategies that serve stale responses, and ultimately, a product that costs less to run but also does less and is used less."),
      h2("The Right Question"),
      p("'How much work does each dollar of token spend produce?' is the right question."),
      p("If your AI pipeline costs £0.02 per document and processes a document that would cost £0.80 in manual processing time, you're getting a 40:1 return on token spend. Trying to reduce that cost by 50% to £0.01 per document might save you money, but if it also reduces straight-through processing rate from 94% to 80%, you've just increased your total processing cost."),
      h2("How to Measure It"),
      bullet("Define the unit of work (document processed, query answered, code generated)"),
      bullet("Measure cost per unit of work, not cost per API call"),
      bullet("Track success rate per unit — partial results aren't the same as complete results"),
      bullet("Calculate the manual cost equivalent and compare"),
      h2("Implications for Pricing"),
      p("For AI development studios, this reframe matters enormously. We price our work based on the business outcome — automation rate, hours saved, error reduction — not on the number of API calls we make or the size of the models we use."),
      p("For founders, it means your AI budget conversation shouldn't be 'how much will the API cost' but 'what's the unit economics of AI-processed work versus human-processed work, and at what volume does AI become unambiguously cheaper?'"),
      blockquote("Token spend is a proxy metric. Work completed per dollar is the real metric."),
      p("The companies extracting real value from AI are the ones who've made this reframe. They're not looking at their AI bill and trying to cut it — they're looking at the ratio of AI cost to work completed and trying to improve it."),
    ],
  },

  {
    title: "What \"Production-Ready\" Actually Means for an AI Product in 2026",
    slug: "what-production-ready-means-ai",
    excerpt:
      "Not just \"it runs.\" Monitoring, fallback logic, rate-limit handling, cost controls, and the 12 other things that separate a demo from a product people pay for.",
    author: "SofGent",
    readTime: "9 min read",
    categories: ["Blog"],
    publishedAt: "2026-04-22T09:00:00Z",
    body: [
      p("'Production-ready' used to mean 'it doesn't crash.' For AI products in 2026, it means something much more demanding. Here's the checklist we run before any AI product ships."),
      h2("Reliability"),
      bullet("Graceful degradation when the AI API is unavailable (fallback logic, queue, or human escalation)"),
      bullet("Retry logic with exponential backoff — don't let a single transient API error kill a user session"),
      bullet("Timeout handling — LLM responses can take 30+ seconds; your UX must handle this gracefully"),
      bullet("Circuit breaker — if the upstream AI service is having an incident, fail fast instead of queueing 1,000 requests that will all fail"),
      h2("Cost Controls"),
      bullet("Per-user and per-tenant rate limiting"),
      bullet("Hard spend caps per day and per month"),
      bullet("Token budget enforcement — don't let a single request consume 100k tokens unless it's supposed to"),
      bullet("Cost anomaly alerting — if spend spikes 5x unexpectedly, someone gets paged"),
      h2("Observability"),
      bullet("Every LLM call logged with: input, output, model, token count, latency, cost"),
      bullet("Confidence scores tracked over time — degradation in output quality is detectable before users complain"),
      bullet("Error rate dashboards — which inputs cause failures, and at what rate"),
      bullet("Structured logging that lets you replay any request"),
      h2("Data Safety"),
      bullet("PII handling — are you sending user data to a third-party AI API? Do you have a DPA?"),
      bullet("Data retention for AI inputs and outputs — what do you store, for how long, and who can access it?"),
      bullet("Audit trail — for regulated industries, you need a record of every AI decision and its inputs"),
      h2("Output Quality"),
      bullet("Output validation — check AI output against expected schema before returning it to the user"),
      bullet("Human review queue — for any output below a confidence threshold"),
      bullet("A/B infrastructure — to test model or prompt changes on a subset of traffic before full rollout"),
      h2("The Honest Truth"),
      p("Most AI demos at pitch events are not production-ready. They work for the 10 inputs the founder tested. They break on input 11. Production-readiness is an engineering mindset, not a feature — it's the difference between a prototype and a product."),
      blockquote("If you wouldn't be comfortable putting your name on what happens when it breaks, it's not production-ready."),
      p("Every product we ship goes through this checklist. Not because clients always ask for it — but because it's what separates AI products that last from AI products that become liabilities."),
    ],
  },
];

// ── Create posts ──────────────────────────────────────────────
async function seedBlogPosts() {
  console.log(`\n🌱 Seeding ${posts.length} blog posts to Sanity (${projectId}/${dataset})...\n`);

  for (const post of posts) {
    const doc = {
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      author: post.author,
      readTime: post.readTime,
      categories: post.categories,
      publishedAt: post.publishedAt,
      body: post.body,
    };

    try {
      const existing = await client.fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]._id`,
        { slug: post.slug }
      );

      if (existing) {
        await client.patch(existing).set(doc).commit();
        console.log(`  ✅ Updated: ${post.title}`);
      } else {
        await client.create(doc);
        console.log(`  ✅ Created: ${post.title}`);
      }
    } catch (err) {
      console.error(`  ❌ Failed: ${post.title}\n     ${err.message}`);
    }
  }

  console.log("\n✅ Done! Refresh your Sanity Studio to see the posts.\n");
}

seedBlogPosts();
