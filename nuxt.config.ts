// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  alias: {
    "@image": resolve(__dirname, "assets/img"),
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  runtimeConfig: {
    public: {
      baseUrl : process.env.BASE_URL
    }}
  
})
