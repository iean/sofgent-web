import { defineType } from "sanity";
import { projectContentFields } from "./projectFields";

export const projectEntryType = defineType({
  name: "projectEntry",
  title: "Project",
  type: "document",
  fields: projectContentFields,
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `/projects/${subtitle}` : "Project",
      };
    },
  },
});
