mkdir -p dist
yarn nearleyc ./src/_grammar.bnf -o ./src/_grammar.js

cp ./src/index.js ./dist/index.js

cp ./src/utils.js ./dist/utils.js
cp ./src/_grammar.js ./dist/_grammar.js
cp ./src/tokenizer.js ./dist/tokenizer.js
