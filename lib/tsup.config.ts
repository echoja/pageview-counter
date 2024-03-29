import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/next-app.tsx"],
  minify: true,
  target: "es2018",
  bundle: true,
  external: ["react"],
  sourcemap: true,
  dts: true,
  format: ["esm", "cjs"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
