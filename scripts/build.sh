mkdir -p dist
yarn nearleyc ./grammar.ne -o ./grammar.js

cp ./tokenizer.js ./dist/tokenizer.js
cp ./grammar.js ./dist/grammar.js
cp ./parser.js ./dist/parser.js
