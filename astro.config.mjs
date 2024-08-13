import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
   adapter: vercel({
      webAnalytics: {
         enabled: true
      }
   }),
   integrations: [react(), svelte(), tailwind({
      applyBaseStyles: false,
      nesting: true
   })],
   output: 'server',
});