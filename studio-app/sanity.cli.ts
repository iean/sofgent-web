import { defineCliConfig } from "sanity/cli";
import { assertStudioEnv, dataset, projectId } from "./lib/env";

assertStudioEnv();

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
