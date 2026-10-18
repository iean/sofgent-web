import { defineField, defineType } from "sanity";

export const blogPostType = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(10).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .slice(0, 96),
      },
      validation: (rule) =>
        rule.required().custom((value?: { current?: string }) =>
          value?.current && value.current !== value.current.toLowerCase()
            ? "Use lower-case slugs only"
            : true,
        ),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(40).max(220),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "SofGent",
      description:
        'Use a real team member\'s name for E-E-A-T. "SofGent" is treated as the organisation, not a person.',
    }),
    defineField({
      name: "authorRole",
      title: "Author role",
      type: "string",
      description: 'Shown next to the byline and used as jobTitle in structured data, e.g. "AI/ML Engineer".',
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      description: 'Example: "6 min read"',
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
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
    defineField({
      name: "tldr",
      title: "TL;DR",
      type: "array",
      of: [{ type: "string" }],
      description: "2–5 one-line takeaways shown in a box at the top of the post. Answer-engines quote these.",
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      description: "Primary sources cited in the post. Every external number needs one.",
      of: [
        {
          type: "object",
          name: "source",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
            }),
            defineField({ name: "publisher", title: "Publisher", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "url" } },
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
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
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage",
    },
  },
});
