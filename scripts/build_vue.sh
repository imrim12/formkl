rimraf packages/adapters/vue/dist

mkdir -p packages/adapters/vue/dist

vue-tsc --project ./packages/adapters/vue && vite build --config ./packages/adapters/vue/vite.config.ts
