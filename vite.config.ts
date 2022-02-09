import react from "@vitejs/plugin-react";

// import legacyPlugin from "vite-plugin-legacy";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // legacyPlugin({
    //   targets: ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"],
    //   polyfills: [],
    //   ignoreBrowserslistConfig: false,
    //   corejs: true,
    // }),
    react(),
  ],
});
