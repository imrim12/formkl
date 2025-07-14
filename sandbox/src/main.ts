import formklTheme from '@formkl/elemento'

import FormklPlugin from '@formkl/vue'

import ElementPlus from 'element-plus'

import { createApp } from 'vue'

import App from './App.vue'

import 'virtual:uno.css'

import '@formkl/editor'

import './style.css'

createApp(App)
  .use(FormklPlugin, {
    theme: formklTheme,
  })
  .use(ElementPlus)
  .mount('#app')
