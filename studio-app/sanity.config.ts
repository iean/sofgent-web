import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { assertStudioEnv, dataset, projectId } from "./lib/env";
import { schemaTypes } from "./schemaTypes";

assertStudioEnv();

export default defineConfig({
  name: "default",
  title: "SofGent CMS",
  projectId,
  dataset,
  basePath: "/",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
