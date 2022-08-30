const fs = require("fs");
const path = require("path");
const lexer = require("./lexer");
const tokens = require("./tokens");
const bnf = require("./bnf");

const ast = {
  lexer,
  tokens,
  start: Object.keys(bnf)[0],
  bnf,
};

fs.writeFileSync(
  path.resolve(__dirname, "../../.dist-cli/json.ast.json"),
  JSON.stringify(ast, null, 2),
);
