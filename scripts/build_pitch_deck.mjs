import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const PRESENTATIONS_SKILL_DIR =
  "/Users/masud/.codex/plugins/cache/openai-primary-runtime/presentations/26.601.10930/skills/presentations";
const BUILD_SCRIPT = path.join(PRESENTATIONS_SKILL_DIR, "scripts/build_artifact_deck.mjs");
const QA_SCRIPT = path.join(PRESENTATIONS_SKILL_DIR, "scripts/check_layout_quality.mjs");

const THREAD_ID = process.env.CODEX_THREAD_ID || "manual-20260608";
const WORKSPACE = path.join(ROOT_DIR, "outputs", THREAD_ID, "presentations", "sofgent-3-page-pitch");
const SLIDES_DIR = path.join(ROOT_DIR, "deck", "sofgent-pitch");
const PREVIEW_DIR = path.join(WORKSPACE, "preview");
const LAYOUT_DIR = path.join(WORKSPACE, "layout");
const QA_DIR = path.join(WORKSPACE, "qa");
const OUTPUT_DIR = path.join(WORKSPACE, "output");
const OUTPUT_PPTX = path.join(OUTPUT_DIR, "sofgent-ai-product-studio-pitch-deck.pptx");
const OUTPUT_PDF = path.join(OUTPUT_DIR, "sofgent-ai-product-studio-pitch-deck.pdf");
const CONTACT_SHEET = path.join(PREVIEW_DIR, "contact-sheet.png");
const PUBLIC_PDF = path.join(ROOT_DIR, "public", "pitch-deck.pdf");
const PUBLIC_PPTX = path.join(ROOT_DIR, "public", "pitch-deck.pptx");

const profilePlan = `task mode: create
primary deck-profile: product-platform
secondary profile gates: engineering-platform
required proof objects:
- studio-level AI product narrative
- AI services proof band
- MVP delivery path
- augmented team operating model
source / asset requirements:
- SofGent brand language from homepage, services, and launch pages
- existing branded image assets from public/images
- downloadable PDF for website CTA
brand authenticity constraints:
- use SofGent visual language only
- no invented client logos, partner badges, or named customers
- quantified claims must match current site language or offer structure
profile-specific QA gates:
- every slide must have one clear commercial claim
- no generic feature-card grid without operating context
- CTA and contact path must be visible
known missing inputs:
- no client logos/testimonials supplied
- no editable company logo PNG supplied; using existing SVG mark
`;

async function ensureWorkspace() {
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  await fs.mkdir(LAYOUT_DIR, { recursive: true });
  await fs.mkdir(QA_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(path.join(WORKSPACE, "profile-plan.txt"), profilePlan, "utf8");
}

function runNodeScript(scriptPath, args) {
  const result = spawnSync("node", [scriptPath, ...args], {
    cwd: ROOT_DIR,
    encoding: "utf8",
    stdio: "pipe",
  });

  if (result.status !== 0) {
    const message = [result.stdout.trim(), result.stderr.trim()].filter(Boolean).join("\n");
    throw new Error(message || `Command failed: node ${scriptPath}`);
  }

  return result.stdout.trim();
}

function buildPdfFromPreviews() {
  const pythonScript = `
from pathlib import Path
from PIL import Image

preview_dir = Path(r"${PREVIEW_DIR}")
output_pdf = Path(r"${OUTPUT_PDF}")
paths = sorted(preview_dir.glob("slide-*.png"))
if not paths:
    raise SystemExit("No slide previews found for PDF export.")

images = []
for p in paths:
    image = Image.open(p).convert("RGB")
    images.append(image)

first, rest = images[0], images[1:]
first.save(output_pdf, save_all=True, append_images=rest, resolution=144.0)
print(output_pdf)
`;

  const result = spawnSync("python3", ["-c", pythonScript], {
    cwd: ROOT_DIR,
    encoding: "utf8",
    stdio: "pipe",
  });

  if (result.status !== 0) {
    const message = [result.stdout.trim(), result.stderr.trim()].filter(Boolean).join("\n");
    throw new Error(message || "PDF export failed.");
  }
}

async function publishArtifacts() {
  await fs.copyFile(OUTPUT_PPTX, PUBLIC_PPTX);
  await fs.copyFile(OUTPUT_PDF, PUBLIC_PDF);
}

async function main() {
  await ensureWorkspace();

  runNodeScript(BUILD_SCRIPT, [
    "--workspace",
    WORKSPACE,
    "--slides-dir",
    SLIDES_DIR,
    "--out",
    OUTPUT_PPTX,
    "--preview-dir",
    PREVIEW_DIR,
    "--layout-dir",
    LAYOUT_DIR,
    "--contact-sheet",
    CONTACT_SHEET,
    "--slide-count",
    "3",
  ]);

  const qaOutput = runNodeScript(QA_SCRIPT, [
    "--layout",
    LAYOUT_DIR,
    "--warn-only",
  ]);
  await fs.writeFile(path.join(QA_DIR, "layout-check.txt"), `${qaOutput}\n`, "utf8");

  buildPdfFromPreviews();
  await publishArtifacts();

  console.log(
    JSON.stringify(
      {
        workspace: WORKSPACE,
        pptx: OUTPUT_PPTX,
        pdf: OUTPUT_PDF,
        publicPptx: PUBLIC_PPTX,
        publicPdf: PUBLIC_PDF,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exit(1);
});
