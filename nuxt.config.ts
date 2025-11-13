export default ({
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n'],
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        vueI18n: './i18n.config.ts'
    },
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
})
