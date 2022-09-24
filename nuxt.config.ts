// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    download: true,
    families: {
      Kalam: [400, 700],
      Montserrat: [400, 700],
      Oswald: [400, 500, 700],
    },
    overwriting: true,
  },
});
