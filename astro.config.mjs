import { defineConfig } from "astro/config";

import solid from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  integrations: [solid()],
  vite: { plugins: [tailwindcss()] },
  site: "https://qr-code-generator.gameroman.workers.dev",
});
