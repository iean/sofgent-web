import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..", "..");
const faqsPath = path.join(repoRoot, "app", "content", "shared", "faqs.json");

const isDryRun = process.argv.includes("--dry-run");
const client = getCliClient({ apiVersion: "2026-03-29" });

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function buildFaqDocument(item) {
  return {
    _id: `faq.${slugify(item.section)}.${item.order}.${slugify(item.question)}`,
    _type: "faq",
    question: item.question,
    answer: item.answer,
    section: item.section,
    order: item.order,
  };
}

async function main() {
  const raw = fs.readFileSync(faqsPath, "utf8");
  const items = JSON.parse(raw);

  console.log(
    `[seed-faqs] ${isDryRun ? "Dry run" : "Importing"} ${items.length} FAQs`,
  );

  for (const item of items) {
    const document = buildFaqDocument(item);

    if (isDryRun) {
      console.log(`[seed-faqs] Would upsert ${document._id}`);
      continue;
    }

    await client.createOrReplace(document);
    console.log(`[seed-faqs] Upserted ${document._id}`);
  }
}

main().catch((error) => {
  console.error("[seed-faqs] Failed", error);
  process.exit(1);
});
