// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap' 
        }
      ]
    }
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css' ,
    '@/assets/styles/main.scss', // main.scss

  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
})
