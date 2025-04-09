import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "GlowUp Carrer Consultant",
      htmlAttrs: {
        lang: "id",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "GlowUp Carrer Consultant",
        },
        {
          name: "keywords",
          content: "GlowUp Carrer Consultant",
        },
        {
          name: "author",
          content: "GlowUp Carrer Consultant",
        },
        {
          property: "og:title",
          content: "GlowUp Carrer Consultant",
        },
        {
          property: "og:description",
          content: "GlowUp Carrer Consultant",
        },
        /**
         * TODO : Add Open Graph Image and Twitter Card
         */
        // {
        //   property: "og:image",
        //   content: "https://example.com/og-image.jpg",
        // },
        // {
        //   property: "twitter:title",
        //   content: "GlowUp Carrer Consultant",
        // },
        // {
        //   property: "twitter:description",
        //   content: "GlowUp Carrer Consultant",
        // },
        // {
        //   property: "twitter:image",
        //   content: "https://example.com/og-image.jpg",
        // },
      ],
    },
  },

  modules: ["@nuxt/fonts"],
});