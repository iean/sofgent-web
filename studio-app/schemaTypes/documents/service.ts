import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(8).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "AI", value: "ai" },
          { title: "SaaS / Engineering", value: "saas" },
          { title: "DevOps", value: "devops" },
          { title: "Integration", value: "integration" },
          { title: "QA / Testing", value: "qa" },
          { title: "Maintenance", value: "maintenance" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short subtitle shown under the hero headline.",
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(60).max(280),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "keywords",
      title: "Target keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "SEO keywords this page should rank for.",
    }),
    defineField({
      name: "industries",
      title: "Industries",
      type: "array",
      of: [{ type: "string" }],
      description: "E.g. Fintech, Healthcare, Logistics. Renders as chips.",
    }),
    defineField({
      name: "outcomes",
      title: "Outcome chips",
      type: "array",
      of: [{ type: "string" }],
      description: "Short outcome phrases shown in the trust bar.",
    }),
    defineField({
      name: "problem",
      title: "The problem",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "points",
          title: "Pain points",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "approach",
      title: "Our approach",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "step", title: "Step label", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whyChooseUs",
      title: "Why choose us",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
    defineField({
      name: "useCases",
      title: "Use cases",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
            defineField({ name: "outcome", title: "Outcome", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "proofMetrics",
      title: "Proof metrics",
      description: "Quantified or outcome-oriented proof points shown near the top of the service page.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "architectureHighlights",
      title: "Architecture highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
    defineField({
      name: "idealFit",
      title: "Ideal fit",
      description: "Who this service is best for and what kind of team should buy it.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "object",
      fields: [
        defineField({ name: "from", title: "Starting price", type: "string" }),
        defineField({ name: "model", title: "Engagement model", type: "string" }),
        defineField({ name: "note", title: "Note", type: "string" }),
      ],
    }),
    defineField({
      name: "faqSection",
      title: "FAQ section key",
      type: "string",
      description:
        'Link FAQ documents here. Use "service:<slug>" for service-specific FAQs.',
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers render first on the archive.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "heroImage" },
  },
});
