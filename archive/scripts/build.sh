mkdir -p dist
yarn syntax \
  --grammar ./grammar/formkl.ast.json \
  --mode SLR1 \
  --output ./dist/formkl.parser.js