// playwright.config.ts
import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  reporter: [
    [
      "./src/index.ts",
      {
        jira: {
          url: "https://client.atlassian.net/",
          type: "cloud", // cloud, server
          apiVersion: "1.0",
        },
        cloud: {
          client_id: "B013993C259B4E528537FC5BAB94B44D",
          client_secret: "6e7f761f4d67aa2e3e0c9fa77a6315b7d5ee682da8f8576563aad3bb680ec971",
        },
        server: {
          token: "",
        },
        projectKey: "MYT",
        testPlan: "MYT-1",
      },
    ],
  ],
  use: {
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "Chrome",
      use: {
        browserName: "chromium",
        channel: "chrome",
      },
    },
  ],
};
export default config;
