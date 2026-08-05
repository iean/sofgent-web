import { defineArrayMember, defineField, defineType } from "sanity";

export const liveProjectType = defineType({
  name: "liveProject",
  title: "Live Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(4).max(140),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Card category",
      type: "string",
      description: 'Short context such as "AI knowledge · SaaS".',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "relationship",
      title: "SofGent relationship",
      type: "string",
      description: 'For example: "Product support" or "Delivered platform".',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "description",
      title: "Card description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().min(20).max(500),
    }),
    defineField({
      name: "overview",
      title: "Detail-page overview",
      type: "text",
      rows: 7,
      validation: (rule) => rule.required().min(40).max(1200),
    }),
    defineField({
      name: "supportScope",
      title: "What SofGent does",
      type: "text",
      rows: 5,
      description: "Describe the delivery or support relationship without overstating it.",
    }),
    defineField({
      name: "websiteUrl",
      title: "Live website URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["http", "https"], allowRelative: false }),
    }),
    defineField({
      name: "cardImage",
      title: "Card and hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies and capabilities",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.max(8),
    }),
    defineField({
      name: "highlights",
      title: "Proof highlights",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (rule) => rule.required().max(30),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required().max(80),
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        }),
      ],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 10,
      validation: (rule) => rule.required().integer().min(1).max(999),
    }),
    defineField({
      name: "isVisible",
      title: "Show on website",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "relationship",
      media: "cardImage",
    },
  },
});
