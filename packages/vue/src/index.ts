import type { Plugin } from 'vue'

import { themeInjectionKey } from './keys/theme'
import Formkl from './main.vue'

const plugin: Plugin = {
  install(app, options) {
    app.component('formkl', Formkl)

    app.provide(themeInjectionKey, options.theme)
  },
}

export { Formkl }

export default plugin
