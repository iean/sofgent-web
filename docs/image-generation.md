# Website Image Generation

This repo includes a local image-generation workflow for marketing assets. It is designed for creating reviewable images in `public/images/...` and then using those files in the existing website sections.

It supports:

- OpenAI GPT Image, which is the better default when you want PNG output that drops directly into the current content paths.
- Freepik text-to-image, which is useful as an alternative provider and is handled as an async task flow.

## Setup

Add one provider key to your local env file:

```bash
OPENAI_API_KEY=...
# optional
OPENAI_IMAGE_MODEL=gpt-image-1.5

# or
FREEPIK_API_KEY=...
# optional
FREEPIK_IMAGE_MODEL=seedream-v5-lite
```

You can also set:

```bash
WEBSITE_IMAGE_PROVIDER=openai
```

## Common Commands

List the built-in presets:

```bash
npm run image:list-presets
```

Preview the resolved settings without calling any API:

```bash
npm run image:generate -- --preset ai-product-studio:hero --dry-run
```

Generate an image for an existing AI Product Studio slot with OpenAI:

```bash
npm run image:generate -- --preset ai-product-studio:hero --provider openai
```

Generate a brand-new image to a custom path:

```bash
npm run image:generate -- \
  --provider openai \
  --prompt "Create a premium B2B illustration of AI-assisted workflow automation for a landing page. Light background, teal and slate palette, no text." \
  --output public/images/custom/ai-workflow-hero.png
```

Generate with Freepik instead:

```bash
npm run image:generate -- \
  --provider freepik \
  --prompt "Create a premium editorial illustration of connected operations dashboards and AI automation for a B2B website. No text." \
  --output public/images/custom/operations-automation
```

## Presets

The current preset set is focused on the existing `ai-product-studio` visuals:

- `ai-product-studio:hero`
- `ai-product-studio:audience`
- `ai-product-studio:problem`
- `ai-product-studio:deliverables`
- `ai-product-studio:transformation`
- `ai-product-studio:use-cases`
- `ai-product-studio:why-sofgent`
- `ai-product-studio:mid-cta`
- `ai-product-studio:engagement`
- `ai-product-studio:cta`

## Notes

- The generator is intentionally local and server-side. It does not expose a public website endpoint for image generation.
- OpenAI defaults to PNG output. Freepik may return JPEG or WebP; the CLI will save the file using the actual returned format.
- After generating a new asset, update the relevant content reference if the filename changes.
