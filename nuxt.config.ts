// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'shadcn-nuxt'],
  css: ['~/assets/css/main.css'],
})
