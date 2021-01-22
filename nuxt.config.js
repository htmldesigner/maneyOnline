export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // target: "static",
  // target: "server",
  ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Экспрасс займы",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""}
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/main.css",
    "~/assets/css/form.css",
    "~/assets/css/msg.css",
    "~/sass/main-resources.sass",
    "~/assets/css/font-awesome.min.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: '~/plugins/jquery-3.2.1.slim.min.js', mode: 'client'},
    {src: "~/plugins/bootstrap.min.js", mode: "client"},
    {src: "~/plugins/vee-validate"},
    // {src: "~/plugins/route"}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/moment"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios

    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    '@nuxtjs/proxy',
    "@nuxtjs/axios",
    '@nuxtjs/auth-next',
  ],
  auth: {
    redirect: false,
    // redirect: {
    //   home: false,
    //   logout: '/',
    //   login: false,
    //   callback: false,
    // },
    strategies: {
      local: {
        endpoints: {
          login: {url: '/system/api/login', method: 'post', propertyName: 'data.token'},
          user: false,
          logout: false
        },
        cookie: false,
        localStorage: false,
        token: {
          prefix: 'token_'
        },
      }
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true, // Can be also an object with default options
    baseURL: 'http://express-zaim.web-design.kz'
  },
  // router:{
  //   middleware: ['checkRegistration'],
  // },

  proxy: {
    '/system/api': 'http://express-zaim.web-design.kz',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
  loading: {color: "blue"}
};
