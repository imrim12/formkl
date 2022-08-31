const fs = require("fs");
const path = require("path");
const lexer = require("./lexer");
const bnf = require("./bnf");
const { Token } = require("./enum/token.enum");

const ast = {
  lex: lexer,
  tokens: Object.values(Token).join(" "),
  start: Object.keys(bnf)[0],
  bnf,
};

fs.writeFileSync(
  path.resolve(__dirname, "../../.dist-cli/json.ast.json"),
  JSON.stringify(ast, null, 2),
);
