rimraf packages/editor/dist

mkdir -p packages/editor/dist

vue-tsc --project ./packages/editor && vite build --config ./packages/editor/vite.config.ts
