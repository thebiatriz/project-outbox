import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@primevue/nuxt-module', '@nuxtjs/google-fonts'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  primevue: {
    components: {
      include: '*'
    },
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'white',
          cssLayer: false
        }
      }
    }
  },

  googleFonts: {
    families: {
      Roboto: [400],
      Courgette: [400]
    }
  }
})



