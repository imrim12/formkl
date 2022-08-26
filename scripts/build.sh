mkdir -p dist
yarn nearleyc ./src/grammar.ne -o ./src/grammar.js

cp ./src/parser.js ./dist/index.js

cp ./src/utils.js ./dist/utils.js
cp ./src/grammar.js ./dist/grammar.js
cp ./src/tokenizer.js ./dist/tokenizer.js
