export default {
  mode: 'universal',
  modern: true,
  target: 'server',
  head: {
    titleTemplate: '%s - blockopt',
    title: 'blockopt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  env: {
    baseUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://block-opt.ru/',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/docs.js' },
    { src: '~/plugins/info.js' },
    { src: '~/plugins/localStore.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    ['@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '91750091',
        webvisor: true,
        clickmap: true,
        debug: true,
        noJS: false,
        disabled: false,
      },
    ],
  ],
  nuxtjsYandexMetrika: {
    id: '91750091',
    webvisor: true,
    clickmap: true,
    debug: true,
    noJS: false,
    disabled: false,
  },
  firebase: {
    lazy: true,
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STAGE_BACKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },

    services: {
      firestore: true,
      functions: false,
      storage: false,
      database: false,
      messaging: false,
      performance: false,
      analytics: false,
      remoteConfig: false,
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: 'auth/setAuthUser',
          onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
        },
      },
    },
  },

  axios: {},
  // PWA module configuration: https://go.nuxtjs.dev/pwa

  middleware: ['auth'],

  serverMiddleware: [
    { path: '/api', handler: '~/server-middleware/rest.js' },

  ],

  proxy: {
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    treeshake: true,
    theme: {
      themes: {
        light: {
          primary: '#D84315',
          accent: '#424242',
          secondary: '#D84315',
          info: '#D84315',
          warning: '#FFC107',
          error: '#DD2C00',
          success: '#1B5E20',
        },
      },
    },
  },
};
