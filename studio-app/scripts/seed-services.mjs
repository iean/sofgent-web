import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..", "..");
const servicesPath = path.join(
  repoRoot,
  "app",
  "data",
  "services",
  "services.json",
);
const publicRoot = path.join(repoRoot, "public");

const isDryRun = process.argv.includes("--dry-run");
const client = getCliClient({ apiVersion: "2026-03-29" });

function createArrayObject(fields) {
  return {
    _type: "object",
    _key: crypto.randomUUID(),
    ...fields,
  };
}

async function uploadImageFromLocalSrc(src, label) {
  if (!src || !src.startsWith("/")) {
    return undefined;
  }

  const localPath = path.join(publicRoot, src.replace(/^\//, ""));
  if (!fs.existsSync(localPath)) {
    console.warn(`[seed-services] Missing ${label} at ${localPath}`);
    return undefined;
  }

  if (isDryRun) {
    return {
      _type: "reference",
      _ref: `dry-run-${path.basename(localPath)}`,
    };
  }

  const stream = fs.createReadStream(localPath);
  const asset = await client.assets.upload("image", stream, {
    filename: path.basename(localPath),
  });

  return {
    _type: "reference",
    _ref: asset._id,
  };
}

async function buildImageField(image, label) {
  if (!image?.src) {
    return undefined;
  }

  const asset = await uploadImageFromLocalSrc(image.src, label);
  if (!asset) {
    return undefined;
  }

  const field = {
    _type: "image",
    asset,
  };

  if (image.alt) {
    field.alt = image.alt;
  }

  return field;
}

async function buildServiceDocument(item) {
  return {
    _id: `service.${item.slug}`,
    _type: "service",
    title: item.title,
    slug: {
      _type: "slug",
      current: item.slug,
    },
    category: item.category,
    tagline: item.tagline,
    summary: item.summary,
    heroImage: await buildImageField(item.heroImage, `${item.slug} hero image`),
    keywords: item.keywords || [],
    industries: item.industries || [],
    outcomes: item.outcomes || [],
    problem: item.problem
      ? {
          eyebrow: item.problem.eyebrow,
          title: item.problem.title,
          points: (item.problem.points || []).map((point) =>
            createArrayObject({
              title: point.title,
              body: point.body,
            }),
          ),
        }
      : undefined,
    approach: item.approach
      ? {
          eyebrow: item.approach.eyebrow,
          title: item.approach.title,
          steps: (item.approach.steps || []).map((step) =>
            createArrayObject({
              step: step.step,
              title: step.title,
              body: step.body,
            }),
          ),
        }
      : undefined,
    deliverables: item.deliverables || [],
    techStack: item.techStack || [],
    whyChooseUs: (item.whyChooseUs || []).map((pillar) =>
      createArrayObject({
        title: pillar.title,
        body: pillar.body,
      }),
    ),
    useCases: (item.useCases || []).map((useCase) =>
      createArrayObject({
        title: useCase.title,
        body: useCase.body,
        outcome: useCase.outcome,
      }),
    ),
    pricing: item.pricing,
    faqSection: item.faqSection,
    featured: Boolean(item.featured),
    order: item.order,
    publishedAt: item.publishedAt,
    seoTitle: item.seoTitle,
    seoDescription: item.seoDescription,
  };
}

async function main() {
  const raw = fs.readFileSync(servicesPath, "utf8");
  const items = JSON.parse(raw);

  console.log(
    `[seed-services] ${isDryRun ? "Dry run" : "Importing"} ${items.length} services`,
  );

  for (const item of items) {
    const document = await buildServiceDocument(item);

    if (isDryRun) {
      console.log(
        `[seed-services] Would upsert ${document._id} (${document.title})`,
      );
      continue;
    }

    await client.createOrReplace(document);
    console.log(`[seed-services] Upserted ${document._id} (${document.title})`);
  }
}

main().catch((error) => {
  console.error("[seed-services] Failed", error);
  process.exit(1);
});
