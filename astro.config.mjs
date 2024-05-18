import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import node from "@astrojs/node";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  integrations: [db(), react()],
  output: "server",
  adapter: netlify()
});