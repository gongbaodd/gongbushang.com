import vuetify from "./config/vuetify.ts";
import head from "./config/head.ts";
import server from "./config/server.ts";
import generate from "./config/generate.ts";
import optimizedImages from "./config/optimizedImages.ts";
import sentry from "./config/sentry.ts";
import googleAnalytics from "./config/googleAnalytics.ts";
import csp from "./config/csp.ts";

export default {
  mode: "spa",
  head,
  loading: { color: "#304FFE" },
  css: ["~/assets/material_icons.css", "~/assets/style.css"],
  plugins: [],
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/eslint-module",
    "@bazzite/nuxt-optimized-images",
    "@nuxtjs/sentry",
    "@nuxtjs/google-analytics",
    "nuxt-helmet",
  ],
  modules: ["@nuxtjs/pwa", "@nuxtjs/dotenv"],
  vuetify,
  server,
  generate,
  optimizedImages,
  sentry,
  googleAnalytics,
  helmet: {},
  build: {
    extend(config, ctx) {},
  },
  render: {
    csp,
  },
};
