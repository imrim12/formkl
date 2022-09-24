rimraf utils/dist

mkdir -p utils/dist

vue-tsc --project ./utils && vite build --config ./utils/vite.config.ts
