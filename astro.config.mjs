// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The public site URL. Update this to the real domain once it is live.
// Used by Astro for canonical URLs and by @astrojs/sitemap.
const SITE_URL = "https://copykit.dev";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
