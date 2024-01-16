// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
  },
  app: {
    head: {
      title: 'SR Industry',
      link: [
        {rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"},
        {rel: "preload", as: "style", crossorigin: "anonymous", href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"},
        {rel: "preconnect", href: "https://cdn.jsdelivr.net", crossorigin: "anonymous"}
      ]
    }
  },
})
