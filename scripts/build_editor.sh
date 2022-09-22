rimraf packages/editor/dist

mkdir -p packages/editor/dist

cd packages/editor

yarn

vue-tsc --project ./ && vite build --config ./vite.config.ts
