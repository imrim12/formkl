import { genesisIcons } from '@formkit/icons'
import { defaultConfig, plugin as FormkitPlugin } from '@formkit/vue'

import { createApp } from 'vue'

import App from './App.vue'

import 'virtual:uno.css'

import '@formkl/editor'

import '@formkit/themes/genesis'

import './style.css'

createApp(App)
  .use(FormkitPlugin, defaultConfig({
    icons: genesisIcons,
  }))
  .mount('#app')
