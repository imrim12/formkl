rimraf ./dist
rimraf ./logs

mkdir -p ./dist
mkdir -p ./logs

node ./src/index.js

./node_modules/.bin/syntax-cli \
--grammar ./dist/formkl.ast.json \
--mode slr1 \
--output ./dist/index.js \
--parse 'formkl { "Personal Info 1" Includes { "From Your email" email; US phone; } "Personal Info 2" includes { "Your email" email; US phone; } }'

cp ./dist/index.js ./dist/index.cjs

cjstoesm ./dist/index.js
minify ./dist/index.js > ./dist/index.min.js

vitest run
