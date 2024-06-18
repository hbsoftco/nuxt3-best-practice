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

  devtools: { enabled: true },

  alias: {},

  css: ["~/assets/scss/style.scss"],

  plugins: ["~/plugins/bootstrap.client"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
    },
  },

  postcss: {
    plugins: {
      rtlcss: {},
    },
  },
});
