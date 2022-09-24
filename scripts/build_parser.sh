rimraf ./language/dist
rimraf ./language/logs

mkdir -p ./language/dist
mkdir -p ./language/logs

node ./language/src/index.js

./node_modules/.bin/syntax-cli \
--grammar ./language/dist/formkl.ast.json \
--mode slr1 \
--output ./language/dist/index.js \
--parse 'formkl { "Personal Info 1" Includes { "From Your email" email; US phone; } "Personal Info 2" includes { "Your email" email; US phone; } }'

minify ./language/dist/index.js > ./language/dist/index.min.js

vitest run language
