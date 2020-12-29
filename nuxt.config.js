export default {
  // 参考: https://qiita.com/shindex/items/a90217b9e4c03c5b5215

  srcDir: './src/',

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sample-project-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/axios',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/sentry', '@nuxtjs/gtm'],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // https://sentry.nuxtjs.org/guide/setup
  sentry: {
    dsn: process.env.SENTRY_DSN,
    publishRelease: true,
    sourceMapStyle: 'hidden-source-map',
    config: {
      release: process.env.GIT_SHA,
    },
    // Monitor Performance
    tracing: true,
    tracesSampleRate: 1.0,
    vueOptions: {
      tracing: true,
      tracingOptions: {
        hooks: ['mount', 'update'],
        timeout: 2000,
        trackComponents: true,
      },
    },
    browserOptions: {},
  },

  gtm: {
    // https://github.com/nuxt-community/gtm-module
    id: process.env.GTM_ID,
    enabled: true, // 消す
    degug: process.env.NODE_ENV !== 'production',
  },

  storybook: {
    // Options (https://storybook.nuxtjs.org/options/)
    stories: ['../stories/**/*.stories.ts'],
    addons: [
      '@storybook/addon-actions',
      '@storybook/addon-docs',
      '@storybook/addon-backgrounds',
      '@storybook/addon-controls',
      '@storybook/addon-toolbars',
      '@storybook/addon-viewport',
    ],
  },
}
