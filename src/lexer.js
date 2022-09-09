const { Field } = require("./enum/field.enum");
const { Macro } = require("./enum/macro.enum");
const { Token } = require("./enum/token.enum");
const { returnToken, allowMatchToken } = require("./utils");

module.exports = {
  macros: Macro,
  rules: [
    // Comments
    ["\\/\\/.*", `/* skip single line comments */`],
    ["/\\*[\\s\\S]*?\\*/", `/* skip multiline comments */`],
    [`[\\s\\n]+`, `/* skip whitespace */`],
    // Litteral
    allowMatchToken(Token.TRUE),
    allowMatchToken(Token.FALSE),
    allowMatchToken(Token.NULL),
    ["{INT}{FRAC}?{EXP}?\\b", returnToken(Token.NUMBER)],
    [
      `\\"(?:[^\\"{ESC}]|{ESC}.)*\\"`,
      "yytext = yytext.substr(1,yyleng-2);" + returnToken(Token.STRING),
    ],
    // Special characters
    allowMatchToken(Token.LPAREN, true),
    allowMatchToken(Token.RPAREN, true),
    allowMatchToken(Token.LBRACE, true),
    allowMatchToken(Token.RBRACE, true),
    allowMatchToken(Token.LBRACK, true),
    allowMatchToken(Token.RBRACK, true),
    allowMatchToken(Token.COMMA, true),
    allowMatchToken(Token.COLON, true),
    allowMatchToken(Token.SEMICOLON, true),
    // Must goes before GT and LT
    allowMatchToken(Token.GTEQ, true),
    allowMatchToken(Token.LTEQ, true),
    allowMatchToken(Token.EQ, true),
    // Must goes after GTEQ and LTEQ
    allowMatchToken(Token.GT, true),
    allowMatchToken(Token.LT, true),
    allowMatchToken(Token.OR, true),
    allowMatchToken(Token.AND, true),
    // Custom token
    allowMatchToken(Token.VALID, false, true),
    allowMatchToken(Token.REGEX, false, true),
    allowMatchToken(Token.URL, false, true),
    allowMatchToken(Token.REQUIRE, false, true),
    allowMatchToken(Token.FORMKL, false, true),
    allowMatchToken(Token.INCLUDES, false, true),
    allowMatchToken(Token.MULTIPLE, false, true),
    allowMatchToken(Token.AS, false, true),
    ...Field.PHONE.map((f) => [f, returnToken(Token.FIELD)]),
    ...Field.DATETIME.map((f) => [f, returnToken(Token.FIELDDATETIME)]),
    ...Field.VALIDATED.map((f) => [f, returnToken(Token.FIELDVALIDATED)]),
    ...Field.SELECTION.map((f) => [f, returnToken(Token.FIELDSELECT)]),
    ...Field.DEFAULT.map((f) => [f, returnToken(Token.FIELD)]),
  ],
};
