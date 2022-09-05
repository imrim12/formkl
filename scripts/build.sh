mkdir -p dist
mkdir -p logs

node ./src/index.js

yarn syntax \
--grammar ./dist/formkl.ast.json \
--mode slr1 \
--output ./dist/index.js \
--parse 'formkl { "Personal Info 1" Includes { "Your email" email; US phone; } "Personal Info 2" includes { "Your email" email; US phone; } }'

minify ./dist/index.js > ./dist/index.min.js
