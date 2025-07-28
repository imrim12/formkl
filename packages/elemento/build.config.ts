import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  entries: ['./src/index.ts'],
  externals: [
    '@formkl/shared',
    '@formkit/vue',
    '@formkit/core',
    'ofetch',
    'element-plus',
    'vue',
  ],
})
