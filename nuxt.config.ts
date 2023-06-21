// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    pageTransition: { name: 't-page-main', mode: 'out-in' },
  },
  // css: ['~/assets/css/index.css'],
});
