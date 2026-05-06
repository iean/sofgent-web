import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..", "..");
const caseStudiesPath = path.join(
  repoRoot,
  "app",
  "data",
  "case-studies",
  "case-studies.json",
);
const publicRoot = path.join(repoRoot, "public");

const isDryRun = process.argv.includes("--dry-run");
const client = getCliClient({ apiVersion: "2026-03-29" });

function createPortableTextBlock(text) {
  return {
    _type: "block",
    _key: crypto.randomUUID(),
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: crypto.randomUUID(),
        text,
        marks: [],
      },
    ],
  };
}

function createPortableTextBlocks(values = []) {
  return values
    .filter((value) => typeof value === "string" && value.trim().length > 0)
    .map((value) => createPortableTextBlock(value));
}

async function uploadImageFromLocalSrc(src, label) {
  if (!src || !src.startsWith("/")) {
    return undefined;
  }

  const localPath = path.join(publicRoot, src.replace(/^\//, ""));
  if (!fs.existsSync(localPath)) {
    console.warn(`[seed-case-studies] Missing ${label} at ${localPath}`);
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

  if (image.caption) {
    field.caption = image.caption;
  }

  return field;
}

async function buildCaseStudyDocument(item) {
  return {
    _id: `caseStudy.${item.slug}`,
    _type: "caseStudy",
    title: item.title,
    slug: {
      _type: "slug",
      current: item.slug,
    },
    client: item.client,
    industry: item.industry,
    summary: item.summary,
    featured: Boolean(item.featured),
    publishedAt: item.publishedAt,
    duration: item.duration,
    heroImage: await buildImageField(item.heroImage, `${item.slug} hero image`),
    architectureImage: await buildImageField(
      item.architectureImage,
      `${item.slug} architecture image`,
    ),
    metrics: (item.metrics || []).map((metric) => ({
      _type: "metric",
      _key: crypto.randomUUID(),
      value: metric.value,
      label: metric.label,
      hint: metric.hint,
    })),
    problem: createPortableTextBlocks(item.problem),
    approach: createPortableTextBlocks(item.approach),
    outcome: createPortableTextBlocks(item.outcome),
    techStack: item.techStack || [],
    seoTitle: item.seoTitle,
    seoDescription: item.seoDescription,
  };
}

async function main() {
  const raw = fs.readFileSync(caseStudiesPath, "utf8");
  const items = JSON.parse(raw);

  console.log(
    `[seed-case-studies] ${isDryRun ? "Dry run" : "Importing"} ${items.length} case studies`,
  );

  for (const item of items) {
    const document = await buildCaseStudyDocument(item);

    if (isDryRun) {
      console.log(
        `[seed-case-studies] Would upsert ${document._id} (${document.title})`,
      );
      continue;
    }

    await client.createOrReplace(document);
    console.log(
      `[seed-case-studies] Upserted ${document._id} (${document.title})`,
    );
  }
}

main().catch((error) => {
  console.error("[seed-case-studies] Failed", error);
  process.exit(1);
});
