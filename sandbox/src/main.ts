import { genesisIcons } from '@formkit/icons'
import { defaultConfig, plugin as FormkitPlugin } from '@formkit/vue'
// Import FormKit inputs configuration from elemento package
import { formkitElementoInputs } from '@formkl/elemento'

import { createApp } from 'vue'

import App from './App.vue'

import 'virtual:uno.css'

import '@formkl/editor'

import 'element-plus/dist/index.css'
import './style.css'

createApp(App)
  .use(FormkitPlugin, defaultConfig({
    icons: genesisIcons,
    inputs: formkitElementoInputs,
  }))
  .mount('#app')
