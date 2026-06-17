import { defineType } from "sanity";
import { projectContentFields } from "./projectFields";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
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
        subtitle: subtitle ? `/projects/${subtitle}` : "Case study",
      };
    },
  },
});
