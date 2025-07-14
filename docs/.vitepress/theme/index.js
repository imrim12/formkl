import formklTheme from '@formkl/elemento'

import FormklPlugin from '@formkl/vue'

import DefaultTheme from 'vitepress/theme'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    if (DefaultTheme.enhanceApp)
      DefaultTheme.enhanceApp(ctx)

    FormklPlugin.install(ctx.app, {
      theme: formklTheme,
    })
  },
}
