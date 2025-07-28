import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  ignores: [
    '.vscode',
    '.output',
    '.data',
    '.nuxt',
    '.nitro',
    '.cache',
    '.nx',
    'dist',
    'node_modules',
    'logs',
  ],
})
