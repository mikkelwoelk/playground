// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  // buildModules: [],
  buildModules: ['@nuxt/postcss8'],
  app: {
    pageTransition: { name: 't-page-main', mode: 'out-in' },
  },
  router: {
    // linkExactActiveClass: 'nuxt-link--exact-active',
    // linkActiveClass: 'nuxt-link--active',
  },
  // css: ['~/assets/css/main.css'],
});
