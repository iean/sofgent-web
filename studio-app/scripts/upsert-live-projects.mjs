import { createReadStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const workspaceDir = resolve(scriptDir, "../..");
const client = getCliClient({ apiVersion: "2026-03-29" });

async function uploadCardImage(relativePath, filename) {
  const asset = await client.assets.upload(
    "image",
    createReadStream(resolve(workspaceDir, relativePath)),
    { filename },
  );

  return asset._id;
}

function cardImage(assetId, alt) {
  return {
    _type: "image",
    asset: { _type: "reference", _ref: assetId },
    alt,
  };
}

const [easyKtAssetId, heartHavenAssetId, solidarityAssetId] = await Promise.all([
  uploadCardImage("public/images/live-projects/easykt-ai-knowledge.svg", "easykt-ai-knowledge.svg"),
  uploadCardImage("public/images/project/haven/home_card_staffing.jpg", "heart-haven-healthcare-team.jpg"),
  uploadCardImage("public/images/case-studies/solidarity-website.svg", "solidarity-center-tannery-workers.svg"),
]);

const liveProjects = [
  {
    _id: "liveProject.easykt",
    _type: "liveProject",
    title: "EasyKT — Knowledge Transfer & Onboarding Platform",
    slug: { _type: "slug", current: "easykt-ai-knowledge-base" },
    eyebrow: "Knowledge ops · SaaS",
    relationship: "Ongoing product engineering",
    description:
      "A live workspace for knowledge transfer, onboarding, and governed internal search that syncs source material and turns team know-how into usable training content.",
    overview:
      "EasyKT is a live product for teams that need operational knowledge to stay usable after the meeting ends and after the expert walks away. The current platform combines workspace sync for Google Drive and uploads, pipeline tracking, searchable knowledge, onboarding flows, skill matrices, and source-scoped training draft generation so teams can capture, find, and reuse what matters.",
    supportScope:
      "SofGent continues to support product design, engineering, and release hardening as EasyKT expands its source sync, onboarding, and knowledge operations workflows.",
    websiteUrl: "https://easykt.com/",
    cardImage: cardImage(
      easyKtAssetId,
      "EasyKT AI knowledge flow from scattered sources to search, training, and workflow action",
    ),
    technologies: ["Google Drive sync", "Knowledge search", "Onboarding flows", "Training drafts"],
    highlights: [
      { _key: "live", _type: "object", value: "Live", label: "easykt.com" },
      { _key: "sources", _type: "object", value: "Synced", label: "Drive + uploads" },
      { _key: "flows", _type: "object", value: "Role-based", label: "Onboarding workflows" },
    ],
    order: 1,
    isVisible: true,
  },
  {
    _id: "liveProject.heart-haven-care",
    _type: "liveProject",
    title: "Heart & Haven Care — Healthcare Services Platform",
    slug: { _type: "slug", current: "heart-haven-healthcare-platform" },
    eyebrow: "Healthcare · UK",
    relationship: "Delivered platform",
    description:
      "A production healthcare platform covering Domiciliary Care, Temporary Staffing, and Supported Living for a CQC-registered UK provider.",
    overview:
      "Heart & Haven Care uses a live healthcare services platform to present its Domiciliary Care, Temporary Staffing, and Supported Living services. The responsive site makes care information easier to understand and provides clear routes for prospective clients, families, and staffing candidates.",
    supportScope:
      "SofGent delivered the responsive Next.js platform with a focus on accessibility, performance, service clarity, and future content growth.",
    websiteUrl: "https://www.heartandhavenhealthcare.co.uk/",
    cardImage: cardImage(
      heartHavenAssetId,
      "Heart & Haven Care healthcare team in branded uniforms",
    ),
    technologies: ["Next.js", "React", "Accessibility", "CQC-aligned"],
    highlights: [
      { _key: "services", _type: "object", value: "3", label: "Service areas live" },
      { _key: "live", _type: "object", value: "Live", label: "Production website" },
    ],
    order: 2,
    isVisible: true,
  },
  {
    _id: "liveProject.solidarity-center",
    _type: "liveProject",
    title: "Solidarity Center — Tannery Workers Website",
    slug: { _type: "slug", current: "solidarity-center-tannery-workers" },
    eyebrow: "Non-profit · Labor rights",
    relationship: "Delivered website",
    description:
      "A live website for the American Center for International Labor Solidarity supporting tannery workers through clear, accessible information.",
    overview:
      "The Solidarity Center tannery-workers website was created to make labor-rights information clearer and easier to access. Its content structure prioritizes reach, readability, and practical access for the workers and communities the initiative supports.",
    supportScope:
      "SofGent delivered the website experience with an emphasis on accessible content, clarity, and dependable web delivery.",
    cardImage: cardImage(
      solidarityAssetId,
      "Illustration of an accessible tannery workers information website",
    ),
    technologies: ["Web platform", "Accessibility", "Content delivery"],
    highlights: [
      { _key: "live", _type: "object", value: "Live", label: "In production" },
      { _key: "ngo", _type: "object", value: "NGO", label: "Labor solidarity" },
    ],
    order: 3,
    isVisible: true,
  },
];

const transaction = liveProjects.reduce(
  (current, document) => current.createOrReplace(document),
  client.transaction(),
);

await transaction.commit();

console.log(`Upserted ${liveProjects.length} live projects.`);
