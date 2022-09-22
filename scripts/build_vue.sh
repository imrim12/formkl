rimraf packages/adapters/vue/dist

mkdir -p packages/adapters/vue/dist

cd packages/adapters/vue

yarn

vue-tsc --project ./ && vite build --config ./vite.config.ts
