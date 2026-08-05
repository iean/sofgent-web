import { defineCliConfig } from "sanity/cli";
import { assertStudioEnv, dataset, projectId } from "./lib/env";

assertStudioEnv();

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    appId: "cgcwiosope5usf3an1w8ay5k",
    autoUpdates: true,
  },
});
