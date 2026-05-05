#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { websiteImagePresets } from "./image-presets.mjs";

const cwd = process.cwd();
const openAiEndpoint = "https://api.openai.com/v1/images";
const freepikBaseUrl = "https://api.freepik.com/v1/ai/text-to-image";

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (!token.startsWith("--")) {
      continue;
    }

    if (token.includes("=")) {
      const [key, ...rest] = token.slice(2).split("=");
      args[key] = rest.join("=");
      continue;
    }

    const key = token.slice(2);
    const next = argv[index + 1];

    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return args;
}

function printHelp() {
  console.log(`Website image generator

Usage:
  npm run image:generate -- --preset ai-product-studio:hero
  npm run image:generate -- --provider openai --prompt "..." --output public/images/custom/hero.png
  npm run image:generate -- --provider freepik --prompt "..." --output public/images/custom/scene

Flags:
  --provider openai|freepik|auto   Defaults to WEBSITE_IMAGE_PROVIDER, otherwise auto-detects from env keys
  --preset <name>                  Uses a repo preset prompt and output path
  --prompt "<text>"                Required unless --preset is used
  --output <path>                  Required unless --preset is used
  --size <value>                   OpenAI only. Example: 1536x1024
  --quality <value>                OpenAI only. Example: high
  --background <value>             OpenAI only. opaque | transparent
  --format <value>                 OpenAI only. png | jpeg | webp
  --aspect-ratio <value>           Freepik only. Example: widescreen_16_9
  --timeout-ms <value>             Freepik polling timeout. Default: 120000
  --poll-ms <value>                Freepik polling interval. Default: 3000
  --list-presets                   Prints available presets
  --dry-run                        Resolves settings without calling an API
  --help                           Prints this message

Environment:
  OPENAI_API_KEY                   Required for provider=openai
  OPENAI_IMAGE_MODEL               Optional. Defaults to gpt-image-1.5
  FREEPIK_API_KEY                  Required for provider=freepik
  FREEPIK_IMAGE_MODEL              Optional. Defaults to seedream-v5-lite
  WEBSITE_IMAGE_PROVIDER           Optional default provider
`);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function ensureValue(value, message) {
  if (!value) {
    throw new Error(message);
  }

  return value;
}

function inferProvider(requestedProvider) {
  if (requestedProvider && requestedProvider !== "auto") {
    return requestedProvider;
  }

  if (process.env.WEBSITE_IMAGE_PROVIDER) {
    return process.env.WEBSITE_IMAGE_PROVIDER;
  }

  if (process.env.OPENAI_API_KEY) {
    return "openai";
  }

  if (process.env.FREEPIK_API_KEY) {
    return "freepik";
  }

  throw new Error(
    "No provider could be resolved. Set WEBSITE_IMAGE_PROVIDER or add OPENAI_API_KEY / FREEPIK_API_KEY."
  );
}

function resolvePreset(name) {
  if (!name) {
    return null;
  }

  const preset = websiteImagePresets[name];

  if (!preset) {
    const available = Object.keys(websiteImagePresets)
      .sort()
      .join(", ");
    throw new Error(`Unknown preset "${name}". Available presets: ${available}`);
  }

  return preset;
}

function extFromFormat(format) {
  switch (format) {
    case "jpeg":
      return ".jpg";
    case "webp":
      return ".webp";
    case "png":
    default:
      return ".png";
  }
}

function formatFromContentType(contentType) {
  if (contentType.includes("image/jpeg")) {
    return "jpeg";
  }

  if (contentType.includes("image/webp")) {
    return "webp";
  }

  return "png";
}

function resolveOutputPath(requestedOutput, format) {
  const absolute = path.resolve(cwd, requestedOutput);
  const extension = extFromFormat(format);
  const currentExtension = path.extname(absolute);

  if (!currentExtension) {
    return `${absolute}${extension}`;
  }

  if (currentExtension.toLowerCase() === extension) {
    return absolute;
  }

  return absolute.slice(0, -currentExtension.length) + extension;
}

async function readJson(response) {
  const text = await response.text();

  try {
    return text ? JSON.parse(text) : {};
  } catch (error) {
    throw new Error(`Failed to parse JSON response (${response.status}): ${text}`);
  }
}

async function fetchBuffer(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download generated image: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") || "image/png";
  const buffer = Buffer.from(await response.arrayBuffer());

  return {
    buffer,
    format: formatFromContentType(contentType),
  };
}

async function generateWithOpenAi({ prompt, preset, args }) {
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1.5";
  const size = args.size || preset?.openai?.size || "1536x1024";
  const quality = args.quality || preset?.openai?.quality || "medium";
  const background = args.background || preset?.openai?.background || "opaque";
  const outputFormat = args.format || preset?.openai?.outputFormat || "png";

  const body = {
    model,
    prompt,
    size,
    quality,
    background,
    output_format: outputFormat,
  };

  if (args["dry-run"]) {
    return {
      provider: "openai",
      model,
      prompt,
      size,
      quality,
      background,
      format: outputFormat,
      buffer: null,
    };
  }

  const apiKey = ensureValue(
    process.env.OPENAI_API_KEY,
    "OPENAI_API_KEY is required when provider=openai."
  );

  const response = await fetch(openAiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  const json = await readJson(response);

  if (!response.ok) {
    throw new Error(
      `OpenAI image generation failed: ${response.status} ${response.statusText}\n${JSON.stringify(
        json
      )}`
    );
  }

  const image = json.data?.[0];

  if (image?.b64_json) {
    return {
      provider: "openai",
      model,
      prompt,
      size,
      quality,
      background,
      format: outputFormat,
      revisedPrompt: image.revised_prompt || null,
      buffer: Buffer.from(image.b64_json, "base64"),
    };
  }

  if (image?.url) {
    const downloaded = await fetchBuffer(image.url);
    return {
      provider: "openai",
      model,
      prompt,
      size,
      quality,
      background,
      format: downloaded.format,
      revisedPrompt: image.revised_prompt || null,
      buffer: downloaded.buffer,
    };
  }

  throw new Error("OpenAI returned no image payload.");
}

async function generateWithFreepik({ prompt, preset, args }) {
  const model = process.env.FREEPIK_IMAGE_MODEL || "seedream-v5-lite";
  const aspectRatio =
    args["aspect-ratio"] || preset?.freepik?.aspectRatio || "widescreen_16_9";
  const timeoutMs = Number(args["timeout-ms"] || 120000);
  const pollMs = Number(args["poll-ms"] || 3000);

  if (args["dry-run"]) {
    return {
      provider: "freepik",
      model,
      prompt,
      aspectRatio,
      timeoutMs,
      pollMs,
      format: null,
      buffer: null,
    };
  }

  const apiKey = ensureValue(
    process.env.FREEPIK_API_KEY,
    "FREEPIK_API_KEY is required when provider=freepik."
  );

  const createResponse = await fetch(`${freepikBaseUrl}/${model}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-freepik-api-key": apiKey,
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio: aspectRatio,
    }),
  });

  const createJson = await readJson(createResponse);

  if (!createResponse.ok) {
    throw new Error(
      `Freepik image generation failed: ${createResponse.status} ${createResponse.statusText}\n${JSON.stringify(
        createJson
      )}`
    );
  }

  const taskId = createJson.data?.task_id;
  ensureValue(taskId, "Freepik did not return a task_id.");

  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    const statusResponse = await fetch(`${freepikBaseUrl}/${model}/${taskId}`, {
      headers: {
        "x-freepik-api-key": apiKey,
      },
    });

    const statusJson = await readJson(statusResponse);

    if (!statusResponse.ok) {
      throw new Error(
        `Freepik task polling failed: ${statusResponse.status} ${statusResponse.statusText}\n${JSON.stringify(
          statusJson
        )}`
      );
    }

    const data = statusJson.data || {};
    const status = data.status;

    if (status === "COMPLETED" && Array.isArray(data.generated) && data.generated[0]) {
      const downloaded = await fetchBuffer(data.generated[0]);
      return {
        provider: "freepik",
        model,
        prompt,
        aspectRatio,
        timeoutMs,
        pollMs,
        taskId,
        format: downloaded.format,
        buffer: downloaded.buffer,
      };
    }

    if (status === "FAILED" || status === "ERROR" || status === "CANCELLED") {
      throw new Error(`Freepik task ${taskId} ended with status ${status}.`);
    }

    await sleep(pollMs);
  }

  throw new Error(`Freepik task timed out after ${timeoutMs}ms.`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    return;
  }

  if (args["list-presets"]) {
    Object.entries(websiteImagePresets)
      .sort(([left], [right]) => left.localeCompare(right))
      .forEach(([name, preset]) => {
        console.log(`${name} -> ${preset.output}`);
      });
    return;
  }

  const preset = resolvePreset(args.preset);
  const provider = inferProvider(args.provider);
  const prompt = args.prompt || preset?.prompt;
  const requestedOutput = args.output || preset?.output;

  ensureValue(prompt, "A prompt is required. Pass --prompt or --preset.");
  ensureValue(requestedOutput, "An output path is required. Pass --output or --preset.");

  const generation =
    provider === "freepik"
      ? await generateWithFreepik({ prompt, preset, args })
      : await generateWithOpenAi({ prompt, preset, args });

  const outputPath = resolveOutputPath(
    requestedOutput,
    generation.format || args.format || "png"
  );

  if (args["dry-run"]) {
    console.log(JSON.stringify(
      {
        provider,
        preset: args.preset || null,
        prompt,
        outputPath,
        model: generation.model,
        size: generation.size || null,
        quality: generation.quality || null,
        background: generation.background || null,
        aspectRatio: generation.aspectRatio || null,
      },
      null,
      2
    ));
    return;
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, generation.buffer);

  console.log(JSON.stringify(
    {
      ok: true,
      provider,
      preset: args.preset || null,
      outputPath,
      model: generation.model,
      revisedPrompt: generation.revisedPrompt || null,
      alt: preset?.alt || null,
    },
    null,
    2
  ));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
