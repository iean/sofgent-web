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
      validation: (rule) => rule.required().min(20).max(320),
    }),
    defineField({
      name: "icon",
      title: "Icon path or URL",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (rule) => rule.integer().min(1),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "proof",
      title: "Proof line",
      type: "string",
    }),
    defineField({
      name: "isPrimary",
      title: "Primary service",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "catalogPlacements",
      title: "Services page placements",
      type: "array",
      of: [{ type: "serviceCatalogPlacement" }],
      description:
        "Optional card placements for the /services page. Use multiple items to show one service in more than one section.",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      rows: 24,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `/services/${subtitle}` : "Service",
      };
    },
  },
});
