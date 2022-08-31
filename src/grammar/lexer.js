const { Field } = require("./enum/field.enum");
const { Macro } = require("./enum/macro.enum");
const { Token } = require("./enum/token.enum");
const { ifMatch, returnToken, allowMatchToken } = require("./utils");

module.exports = {
  macros: Macro,
  rules: [
    // Special characters
    ["\\s+", "/* skip whitespace */"],
    allowMatchToken(Token.LPAREN, true),
    allowMatchToken(Token.RPAREN, true),
    allowMatchToken(Token.LBRACE, true),
    allowMatchToken(Token.RBRACE, true),
    allowMatchToken(Token.LBRACK, true),
    allowMatchToken(Token.RBRACK, true),
    allowMatchToken(Token.COMMA, true),
    allowMatchToken(Token.COLON, true),
    // Litteral
    allowMatchToken(Token.TRUE),
    allowMatchToken(Token.FALSE),
    allowMatchToken(Token.NULL),
    [ifMatch(`{INT}{FRAC}?{EXP}?\\b`), returnToken(Token.NUMBER)],
    [
      ifMatch(`"(?:{ESC}["bfnrt/{ESC}]|{ESC}u[a-fA-F0-9]{4}|[^"{ESC}])*"`),
      "yytext = yytext.substr(1,yyleng-2);" + returnToken(Token.STRING),
    ],
    // Custom token
    allowMatchToken(Token.VALID),
    allowMatchToken(Token.REGEX),
    allowMatchToken(Token.REQUIRE),
    ...[...Field.DEFAULT, ...Field.VALIDATED, ...Field.DATETIME, ...Field.PHONE].map((f) => [
      f,
      returnToken(Token.FIELD),
    ]),
  ],
};
