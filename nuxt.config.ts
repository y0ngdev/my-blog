// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode"
  ],

  colorMode: {
    preference: 'dark',
    // fallback: 'dark', // fallback value if not system preference found
    classSuffix: '',
  }
})