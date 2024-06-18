// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },

  modules: [
    "nuxt-icon",
    // "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],

  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    },
  },

  devtools: { enabled: true },

  alias: {},

  css: ["~/assets/scss/style.scss"],

  plugins: ["~/plugins/bootstrap.client"],

  pwa: {
    manifest: {
      name: "hbsoft test app",
      short_name: "hbsoft",
      description: "This is a hbsoft project test",
      theme_color: "#000000",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      title: "hbsoft test app",
      meta: [
        { name: "theme-color", content: "#000000" },
        {
          hid: "description",
          name: "description",
          content: "Your description here",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      rtlcss: {},
    },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
});
