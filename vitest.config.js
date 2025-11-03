/// <reference types="vitest/config" />
// import { URL, fileURLToPath } from "url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["**/node_modules/**", "**/dist/**"],
    coverage: {
      exclude: ["src/**/index.ts", "src/**/constants.ts"],
      include: ["src/helpers/**/*.ts"],
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
    },
  },
  //   resolve: {
  //     alias: {
  //       "~": fileURLToPath(new URL("./src", import.meta.url)),
  //     },
  //   },
});
