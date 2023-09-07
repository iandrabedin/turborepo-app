import { defineConfig } from "tsup";

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default defineConfig({
  entry: ["src/", "!src/**/*.test.*"],
  format: ["cjs", "esm"],
  clean: true,
  external: ["react"],
  dts: true,
});
