import { defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(8).max(140),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: "Public name or anonymized label (e.g. 'Series A Fintech').",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      description: "Used as a chip on the card (e.g. 'Document Automation').",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(60).max(360),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Show in the homepage portfolio strip.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Engagement duration",
      type: "string",
      description: "Example: '4 weeks', '2 sprints'.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
    defineField({
      name: "architectureImage",
      title: "Architecture diagram",
      type: "image",
      description:
        "Optional. If empty, the page renders the in-app process-pipeline SVG.",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "metrics",
      title: "Outcome metrics",
      type: "array",
      description: "3 to 5 key results.",
      of: [
        {
          type: "object",
          name: "metric",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description: "Example: '80%', '1.2M docs', '4 weeks'.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "hint",
              title: "Hint",
              type: "string",
              description: "Optional sub-label, e.g. 'docs processed / month'.",
            }),
          ],
        },
      ],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: "problem",
      title: "The problem",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "approach",
      title: "Our approach",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "outcome",
      title: "The outcome",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
      description: "Chips rendered on the detail page.",
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
    select: {
      title: "title",
      subtitle: "industry",
      media: "heroImage",
    },
  },
});
