mkdir -p dist
yarn nearleyc ./grammar/formkl.grammar.ne -o ./dist/formkl.grammar.js
cp ./grammar/formkl.tokenizer.js ./dist/formkl.tokenizer.js

echo "
const nearley = require('nearley');
const grammar = require('./formkl.grammar.js');
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

module.exports = parser;
" > ./dist/index.js
