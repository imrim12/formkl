mkdir -p dist
yarn syntax \
  --grammar ./grammar/json.ast.json \
  --mode SLR1 \
  --collection \
  --table \
  --parse '{"x": 10, "y": {"z": [1, 2, 3]}}' \
  --output ./dist/json.parser.js