mkdir -p .dist-cli
mkdir -p .logs-cli

node ./src/grammar/index.js

yarn syntax \
--grammar ./.dist-cli/json.ast.json \
--mode slr1 \
--output ./.dist-cli/json-parser.js
