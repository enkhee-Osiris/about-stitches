import react from "@vitejs/plugin-react";

import svgLoader from "vite-svg-loader";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    svgLoader({
      svgo: false,
    }),
  ],
});
