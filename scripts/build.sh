mkdir -p .dist
mkdir -p .logs

yarn nearleyc ./src/grammar.bnf -o ./.dist/grammar.js

cp ./templates/index.js ./.dist/index.js

cp ./src/utils.js ./.dist/utils.js
cp ./src/tokenizer.js ./.dist/tokenizer.js
