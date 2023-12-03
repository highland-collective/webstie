// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel:"icon", type:"image/x-icon", href: "/images/site/favicon.ico" },
        { rel: 'manifest', href: '/site.webmanifest'}
      ],
      meta: [
        { name: 'theme-color', content: '#1E313B' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      title: 'Highland'
    }
  },
  devserver: {
    host: '0.0.0.0'
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    dirs: ['lib']
  }
})
