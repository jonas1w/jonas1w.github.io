import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://deportedinto.space",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact()],
});