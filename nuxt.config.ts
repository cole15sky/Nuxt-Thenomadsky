// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'swiper/swiper-bundle.css',
     'assets/global.css'

  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [ '@nuxt/fonts', '@nuxt/ui'],
  
})
