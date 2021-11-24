/* eslint-disable prettier/prettier */
import { configs } from './config.js';

export default {
    env: {
        ...configs,
    },
    ssr: true,
    telemetry: false,
    target: 'server',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Inotek Corp.',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&family=Roboto:wght@900&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
            },
            // {
            //   rel: 'stylesheet',
            //   href: 'css/vendor/font-awesome/font-awesome-v5.15.4.css',
            // },
            // {rel:"stylesheet", href:"~/assets/css/vendor/bootstrap/bootstrap-v5.1.css" }
            // {rel:"stylesheet", href:"~/assets/css/style.css"},
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
            },
        ],
        script: [{
                src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
                type: 'text/javascript',
            },
            {
                src: 'https://cdn.rawgit.com/matthieua/WOW/1.0.1/dist/wow.min.js',
                body: true,
            },
            {
                src: 'js/vendor/bootstrap-v5.1.js',
                body: true,
            },
            {
                src: 'js/vendor/popper/popper-v2.9.2.js',
                body: true,
            },
            {
                src: 'js/main.js',
                body: true,
            },
            {
                src: 'js/vendor/parallax.min.js',
                body: true,
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // { src: '~/static/css/vendor/animate/animation4-1-1.css', lang: 'css' },
        { src: '~/assets/css/vendor/bootstrap-v5.1.css', lang: 'css' },
        // { src: '~/assets/css/vendor/font-awesome/font-awesome-v5.15.4.css', lang: 'css' },
        // { src: '~/static/css/style.css', lang: 'css' },
        '~/assets/css/global.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios-accessor.ts',
        // '~/plugins/service.ts',
        '~/plugins/vee-validate.ts',
        '~/plugins/composition-api.ts',
        { src: '~/plugins/wow.ts', mode: 'client' },
        '~/plugins/nuxt-i18n.ts',
        // '~/utils/store-accessor.ts'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module',
        '@nuxtjs/google-analytics',
        // '@nuxtjs/dotenv'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        '@nuxtjs/axios',
        'cookie-universal-nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/auth-next',
        'vue-sweetalert2/nuxt',
        '@nuxtjs/style-resources', [
            'primevue/nuxt',
            {
                theme: 'md-light-indigo',
                ripple: true,
                components: ['InputText', 'Button', 'DataTable', 'Dialog'],
                directives: ['Tooltip', 'Badge'],
            },
        ],
        [
            '@nuxtjs/recaptcha',
            {
                siteKey: configs.SITE_KEY,
                version: 3,
            },
        ],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate', 'primevue'],
    },

    i18n: {
        baseUrl: configs.baseUrl,
        legacy: false,
        locales: [
            { code: 'ja', iso: 'ja-JA', file: 'ja.json' },
            { code: 'en', iso: 'en-US', file: 'en.json' },
            { code: 'vi', iso: 'vi-VI', file: 'vi.json' },
        ],
        defaultLocale: 'en',
        vueI18nLoader: true,
        vueI18n: {
            fallbackLocale: 'en',
        },
        lazy: true,
        langDir: '~/assets/i18n/',
        strategy: 'no_prefix',
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/api/login',
                        method: 'post',
                        propertyName: 'token',
                    },
                    user: false,
                },
                autoFetchUser: false,
            },
        },
        redirect: {
            login: '/profile1',
        },
    },

    styleResources: {
        scss: ['~/assets/css/*.scss'],
    },

    googleAnalytics: {
        id: configs.googleAnalytics,
    },

    axios: {
        baseURL: configs.API_URL,
    },

    sweetalert: {
        confirmButtonColor: '#F36F21',
        background: '#121212',
        color: '#fff',
    },
};