import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createRulesPlugin } from 'vuetify/labs/rules'


import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

app.use(createRulesPlugin({ /* options */ }, vuetify.locale))

