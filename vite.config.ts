import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import mdx from "vite-plugin-mdx";

export default defineConfig({
  plugins: [preact(), mdx()],
});
