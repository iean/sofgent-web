import { defineField, defineType } from "sanity";

export const serviceCatalogPlacementType = defineType({
  name: "serviceCatalogPlacement",
  title: "Service catalog placement",
  type: "object",
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "Primary catalog", value: "primary" },
          { title: "Additional services", value: "legacy" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: [
          { title: "Core", value: "Core" },
          { title: "Add-on", value: "Add-on" },
          { title: "Standalone", value: "Standalone" },
        ],
      },
      hidden: ({ parent }) => parent?.section !== "primary",
    }),
    defineField({
      name: "title",
      title: "Card title override",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Card description override",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "graphic",
      title: "Card graphic",
      type: "string",
      options: {
        list: [
          "mvp",
          "document-automation",
          "data",
          "integration",
          "design",
          "devops",
          "web",
          "mobile",
          "qa",
          "architecture",
          "ai-feature",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Card order",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      section: "section",
      tag: "tag",
      order: "order",
    },
    prepare({ title, section, tag, order }) {
      return {
        title: title || "Uses service title",
        subtitle: [section, tag, order ? `order ${order}` : null].filter(Boolean).join(" · "),
      };
    },
  },
});
