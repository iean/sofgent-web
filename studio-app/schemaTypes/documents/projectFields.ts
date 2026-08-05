import { defineArrayMember, defineField } from "sanity";

export const projectContentFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (rule) => rule.required().min(4).max(120),
  }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "text",
    rows: 4,
    validation: (rule) => rule.required().min(20).max(600),
  }),
  defineField({
    name: "overview",
    title: "Overview",
    type: "text",
    rows: 6,
  }),
  defineField({
    name: "publishDate",
    title: "Display publish date",
    type: "string",
    description: 'Example: "February 2025"',
  }),
  defineField({
    name: "publishedAt",
    title: "Published at",
    type: "datetime",
  }),
  defineField({
    name: "featuredOnHomepage",
    title: "Feature on homepage",
    type: "boolean",
    initialValue: false,
  }),
  defineField({
    name: "homepageOrder",
    title: "Homepage order",
    type: "number",
    description: "Lower numbers appear first.",
    hidden: ({ document }) => !document?.featuredOnHomepage,
    validation: (rule) => rule.integer().min(1).max(99),
  }),
  defineField({
    name: "previewLink",
    title: "Preview link",
    type: "url",
  }),
  defineField({
    name: "thumbnail",
    title: "Legacy thumbnail path or URL",
    type: "string",
    description: "Kept for existing content. New case studies should use Card image.",
  }),
  defineField({
    name: "cardImage",
    title: "Card image",
    type: "image",
    description: "Project-specific image used on homepage and project listing cards.",
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
        validation: (rule) => rule.required(),
      }),
    ],
  }),
  defineField({
    name: "heroImage",
    title: "Hero image asset",
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
      }),
    ],
  }),
  defineField({
    name: "screenshots",
    title: "Screenshots",
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: "image",
            title: "Image path or URL",
            type: "string",
            validation: (rule) => rule.required(),
          }),
        ],
        preview: {
          select: {
            title: "title",
            subtitle: "image",
          },
        },
      }),
    ],
  }),
  defineField({
    name: "technologies",
    title: "Technologies",
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  }),
  defineField({
    name: "outcomes",
    title: "Outcomes",
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  }),
  defineField({
    name: "challenge",
    title: "Challenge",
    type: "text",
    rows: 5,
  }),
  defineField({
    name: "solution",
    title: "Solution",
    type: "text",
    rows: 5,
  }),
  defineField({
    name: "architectureHighlight",
    title: "Architecture highlight",
    type: "text",
    rows: 4,
  }),
];
