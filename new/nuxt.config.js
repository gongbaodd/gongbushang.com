import vuetify from "./config/vuetify.ts";
import head from "./config/head.ts";
import server from "./config/server.ts";
import generate from "./config/generate.ts";

export default {
  mode: "spa",
  head,
  loading: { color: "#304FFE" },
  css: ["~/assets/material_icons.css", "~/assets/style.css"],
  plugins: [],
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/eslint-module"
  ],
  modules: ["@nuxtjs/pwa", "@nuxtjs/dotenv"],
  vuetify,
  build: {
    extend(config, ctx) {}
  },
  server,
  generate
};
