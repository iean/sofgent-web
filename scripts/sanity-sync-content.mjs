import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDir = process.cwd();
const servicesDir = path.join(rootDir, "app/data/services");
const projectsPath = path.join(rootDir, "app/data/projects/projects.json");
const seedDir = path.join(rootDir, "studio-app/seed");
const seedFile = path.join(seedDir, "website-content.ndjson");

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  return fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .reduce((accumulator, line) => {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        return accumulator;
      }

      const separatorIndex = trimmed.indexOf("=");

      if (separatorIndex === -1) {
        return accumulator;
      }

      const key = trimmed.slice(0, separatorIndex).trim();
      const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, "");

      accumulator[key] = value;
      return accumulator;
    }, {});
}

const fileEnv = {
  ...readEnvFile(path.join(rootDir, ".env")),
  ...readEnvFile(path.join(rootDir, ".env.local")),
  ...readEnvFile(path.join(rootDir, "studio-app/.env")),
  ...readEnvFile(path.join(rootDir, "studio-app/.env.local")),
};

function envValue(...keys) {
  for (const key of keys) {
    if (process.env[key]) {
      return process.env[key];
    }

    if (fileEnv[key]) {
      return fileEnv[key];
    }
  }

  return "";
}

const projectId = envValue("SANITY_STUDIO_PROJECT_ID", "NEXT_PUBLIC_SANITY_PROJECT_ID");
const dataset = envValue("SANITY_STUDIO_DATASET", "NEXT_PUBLIC_SANITY_DATASET") || "production";
const apiVersion = envValue("SANITY_STUDIO_API_VERSION", "NEXT_PUBLIC_SANITY_API_VERSION") || "2026-03-29";
const token = envValue("SANITY_WRITE_TOKEN", "SANITY_AUTH_TOKEN", "SANITY_API_WRITE_TOKEN");

if (!projectId) {
  console.error("Missing `SANITY_STUDIO_PROJECT_ID` or `NEXT_PUBLIC_SANITY_PROJECT_ID`.");
  process.exit(1);
}

const syntheticAiStudioServices = [
  {
    _id: "service.document-intelligence-systems",
    _type: "service",
    title: "AI document systems",
    slug: { _type: "slug", current: "document-intelligence-systems" },
    description:
      "Turn PDFs, forms, scans, and attachments into validated operational data with OCR and extraction pipelines.",
    icon: "/icons/services/image-processing.svg",
    order: 4,
    eyebrow: "Document-heavy operations",
    proof: "OCR, classification, extraction, and review in one system.",
    isPrimary: true,
    content: `# AI Document Systems

SofGent designs document-heavy operational systems where OCR, classification, extraction, validation, and human review work in one governed workflow.

## What this service covers

- OCR and document ingestion pipelines
- Structured extraction for forms, PDFs, and scanned files
- Review queues for confidence-based exceptions
- API delivery into downstream business systems
- Auditability and retry-safe workflow design

## Best fit

This is a strong fit for onboarding, compliance, finance ops, healthcare admin, claims handling, and other document-bound team workflows.
`,
  },
  {
    _id: "service.ai-ready-data-engineering",
    _type: "service",
    title: "AI-ready data engineering",
    slug: { _type: "slug", current: "ai-ready-data-engineering" },
    description:
      "Structure fragmented business data into schemas, pipelines, and APIs your analytics and AI systems can trust.",
    icon: "/icons/services/system-integration.svg",
    order: 5,
    eyebrow: "Data foundation",
    proof: "Designed for retrieval, automation, and reporting.",
    isPrimary: true,
    content: `# AI-ready Data Engineering

SofGent helps teams turn fragmented operational data into reliable schemas, pipelines, and interfaces that support reporting, automation, and AI systems.

## What this service covers

- Data modeling for operational systems
- ETL and event pipeline design
- API normalization across disconnected tools
- Retrieval-ready content and structured records
- Reporting foundations for AI-assisted workflows

## Best fit

This fits teams whose AI goals are blocked by inconsistent data, duplicated records, missing schemas, or disconnected business tools.
`,
  },
];

const aiStudioServiceOverrides = {
  "saas-micro-saas-solutions": {
    title: "SaaS MVP development",
    description:
      "Launch customer-ready SaaS products with tenancy, auth, billing, and deployment already in place.",
    eyebrow: "Launch fast",
    proof: "Built for real customers, not prototype rewrites.",
    isPrimary: true,
  },
  "advanced-ai-solutions": {
    title: "AI implementation",
    description:
      "Deploy AI features, assistants, and workflow automation inside the systems your team already runs.",
    eyebrow: "Operational AI",
    proof: "Control layers, validation, and human review included.",
    isPrimary: true,
  },
  "system-integration": {
    title: "Workflow automation & integrations",
    description:
      "Connect ERPs, CRMs, payment tools, and internal apps so data moves without manual re-entry.",
    eyebrow: "Connected stack",
    proof: "Built for resilience, retries, and auditability.",
    isPrimary: true,
  },
  "custom-software-development": {
    title: "Custom business systems",
    description:
      "Replace brittle spreadsheets and legacy tools with internal software built around the way your team actually operates.",
    eyebrow: "Internal modernization",
    proof: "Production-grade software aligned to workflow reality.",
    isPrimary: true,
  },
};

function toKey(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

function normalizeUrl(value) {
  if (!value || typeof value !== "string") {
    return "";
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  if (value.startsWith("www.")) {
    return `https://${value}`;
  }

  return value;
}

function mapScreenshots(items = []) {
  return items.map((item, index) => ({
    _key: toKey(`${item.title || "screenshot"}-${index + 1}`),
    title: item.title || `Screenshot ${index + 1}`,
    image: item.image || "",
  }));
}

function loadLocalServices() {
  const files = fs.readdirSync(servicesDir).filter((file) => file.endsWith(".md"));

  const localItems = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(servicesDir, filename), "utf8");
    const parsed = matter(fileContent);
    const slug = filename.replace(".md", "");
    const override = aiStudioServiceOverrides[slug];

    return {
      _id: `service.${slug}`,
      _type: "service",
      title: override?.title ?? parsed.data.title,
      slug: { _type: "slug", current: slug },
      description: override?.description ?? parsed.data.description,
      icon: parsed.data.icon ?? "",
      content: parsed.content.trim(),
      order: parsed.data.order ?? undefined,
      eyebrow: override?.eyebrow ?? "",
      proof: override?.proof ?? "",
      isPrimary: override?.isPrimary ?? false,
    };
  });

  return [...syntheticAiStudioServices, ...localItems].filter(
    (item, index, items) => items.findIndex((entry) => entry.slug.current === item.slug.current) === index,
  );
}

function loadProjects() {
  const projects = JSON.parse(fs.readFileSync(projectsPath, "utf8"));

  return projects.map((project) => ({
    _id: `projectEntry.${project.slug}`,
    _type: "projectEntry",
    title: project.title,
    slug: { _type: "slug", current: project.slug },
    publishDate: project.publish_date || "",
    previewLink: normalizeUrl(project.preview_link || ""),
    description: project.description,
    overview: project.overview || "",
    thumbnail: project.thumbnail || "",
    screenshots: mapScreenshots(Array.isArray(project.screenshots) ? project.screenshots : []),
    technologies: [],
    outcomes: [],
  }));
}

function loadCaseStudies() {
  return [
    {
      _id: "caseStudy.ai-knowledge-platform",
      _type: "caseStudy",
      title: "AI Knowledge Platform",
      slug: { _type: "slug", current: "ai-knowledge-platform" },
      publishedAt: "2026-06-10T00:00:00.000Z",
      description:
        "Built a multi-tenant knowledge platform with ingestion, vector search, access controls, and answer workflows.",
      overview:
        "Operational knowledge was buried across documents, SOPs, and disconnected team systems. SofGent designed a retrieval platform that made institutional knowledge searchable, governed, and usable in production.",
      challenge:
        "Operational knowledge was buried across documents, SOPs, and disconnected team systems.",
      solution:
        "Built a multi-tenant knowledge platform with ingestion, vector search, access controls, and answer workflows.",
      architectureHighlight:
        "Tenant-isolated retrieval architecture with ingestion, indexing, and review controls.",
      technologies: ["Next.js", "Python", "PostgreSQL", "pgvector", "AWS"],
      outcomes: ["3x faster knowledge retrieval", "Lower onboarding friction"],
      thumbnail: "/images/project/haven/banner_01.png",
      screenshots: mapScreenshots([
        {
          title: "Knowledge platform overview",
          image: "/images/project/haven/banner_01.png",
        },
      ]),
    },
    {
      _id: "caseStudy.fintech-payment-integration-system",
      _type: "caseStudy",
      title: "Fintech & Payment Integration System",
      slug: { _type: "slug", current: "fintech-payment-integration-system" },
      publishedAt: "2026-06-10T00:00:00.000Z",
      description:
        "Designed an integration and orchestration layer for payments, reconciliation, ledger updates, and exception handling.",
      overview:
        "Payment operations depended on manual reconciliation, inconsistent partner APIs, and fragile back-office handoffs. The resulting platform normalized events and cleaned up operational risk.",
      challenge:
        "Payment operations depended on manual reconciliation, inconsistent partner APIs, and fragile back-office handoffs.",
      solution:
        "Designed an integration and orchestration layer for payments, reconciliation, ledger updates, and exception handling.",
      architectureHighlight:
        "Separated payment events, ledger logic, and retry-safe integration workflows.",
      technologies: [".NET", "PostgreSQL", "Stripe", "AWS SQS", "Docker"],
      outcomes: ["55% faster ops handling", "Cleaner reconciliation workflow"],
      thumbnail: "/images/project/haven/banner_02.jpg",
      screenshots: mapScreenshots([
        {
          title: "Payments workflow overview",
          image: "/images/project/haven/banner_02.jpg",
        },
      ]),
    },
    {
      _id: "caseStudy.ocr-document-automation-system",
      _type: "caseStudy",
      title: "AI Document Automation Platform",
      slug: { _type: "slug", current: "ocr-document-automation-system" },
      publishedAt: "2026-06-10T00:00:00.000Z",
      description:
        "Built OCR, classification, extraction, validation, and human review into one document pipeline.",
      overview:
        "High-volume forms and PDFs were slowing onboarding and increasing manual review costs. The new platform turned document-heavy operations into a governed pipeline.",
      challenge:
        "High-volume forms and PDFs were slowing onboarding and increasing manual review costs.",
      solution:
        "Built OCR, classification, extraction, validation, and human review into one document pipeline.",
      architectureHighlight:
        "OCR and extraction pipeline with structured outputs, review queue, and API delivery layer.",
      technologies: ["FastAPI", "Transformers", "Tesseract", "Angular", "AWS"],
      outcomes: ["78% less manual document work", "Faster verification turnaround"],
      thumbnail: "/images/project/haven/banner_03.png",
      screenshots: mapScreenshots([
        {
          title: "Document pipeline overview",
          image: "/images/project/haven/banner_03.png",
        },
      ]),
    },
  ];
}

async function pushDocuments(documents) {
  const mutations = documents.map((document) => ({
    createOrReplace: document,
  }));

  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations }),
    },
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Sanity mutate failed: ${response.status} ${message}`);
  }

  return response.json();
}

const documents = [...loadLocalServices(), ...loadProjects(), ...loadCaseStudies()];

fs.mkdirSync(seedDir, { recursive: true });
fs.writeFileSync(seedFile, documents.map((document) => JSON.stringify(document)).join("\n") + "\n");

console.log(`Prepared ${documents.length} documents.`);
console.log(`Seed export written to ${path.relative(rootDir, seedFile)}.`);

if (!token) {
  console.log("No Sanity write token found. Export generated only.");
  process.exit(0);
}

const result = await pushDocuments(documents);
console.log(`Uploaded ${documents.length} documents to Sanity dataset "${dataset}".`);
console.log(JSON.stringify(result, null, 2));
