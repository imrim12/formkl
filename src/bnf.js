const { Token } = require("./enum/token.enum");

module.exports = {
  ExpressionForm: [["formkl { ExpressionSectionList }", "return $$ = { sections: $3 };"]],

  ExpressionSectionList: [
    ["ExpressionSection", "$$ = [$1];"],
    ["ExpressionSectionList ExpressionSection", "$$ = [...$1, $2];"],
  ],

  ExpressionSection: [
    ["LiteralString includes { ExpressionFieldValidList }", "$$ = { title: $1, fields: $4 };"],
  ],

  ExpressionFieldValidList: [
    ["ExpressionFieldValid", "$$ = [$1];"],
    ["ExpressionFieldValidList ExpressionFieldValid", "$$ = [...$1, $2];"],
  ],

  ExpressionFieldValid: [
    ["ExpressionField ;", "$$ = $1;"],
    ["ExpressionField valid ( ExpressionConditionList ) ;", "$$ = $1; $1.validation = $4;"],
    ["ExpressionField regex ( LiteralString ) ;", "$$ = $1; $1.validation = { regex: $4 };"],
    [
      "ExpressionField valid ( ExpressionConditionList ) regex ( LiteralString ) ;",
      "$$ = $1; $1.validation = { regex: $8, ...$4 };",
    ],
    [
      "ExpressionField regex ( LiteralString ) valid ( ExpressionConditionList ) ;",
      "$$ = $1; $1.validation = { regex: $4, ...$8 };",
    ],
  ],

  ExpressionField: [
    ["ElementField", "$$ = { ...$1, require: false };"],
    ["LiteralString ElementField", "$$ = { ...$2, label: $1, require: false };"],
    ["require ElementField", "$$ = { ...$2, require: true };"],
    ["require LiteralString ElementField", "$$ = { ...$3, label: $2, require: true };"],
  ],

  ElementField: [
    ["LiteralField", "$$ = { type: $1 };"],
    ["LiteralSelection from LiteralStringList", "$$ = { type: $1, options: $3 };"],
  ],

  ExpressionConditionList: [
    ["ExpressionCondition", "$$ = $1;"],
    ["ExpressionConditionList and ExpressionCondition", "$$ = { ['$' + 'and']: [ $1, $3 ] }"],
    ["ExpressionConditionList or ExpressionCondition", "$$ = { ['$' + 'or']: [ $1, $3 ] }"],
  ],

  ExpressionCondition: [
    ["> LiteralNumber", "$$ = { $gt: Number(yytext) };"],
    ["< LiteralNumber", "$$ = { $lt: Number(yytext) };"],
    [">= LiteralNumber", "$$ = { $gteq: Number(yytext) };"],
    ["<= LiteralNumber", "$$ = { $lteq: Number(yytext) };"],
    ["== LiteralNumber", "$$ = { $eq: Number(yytext) };"],
    ["== LiteralString", "$$ = { $eq: yytext };"],
  ],

  LiteralStringList: [
    ["LiteralString", "$$ = [$1];"],
    ["LiteralStringList LiteralString", "$$ = [...$1, $2];"],
  ],

  LiteralSelection: [[Token.FIELDSELECT, "$$ = yytext;"]],

  LiteralField: [[Token.FIELD, "$$ = yytext;"]],

  LiteralString: [[Token.STRING, "$$ = yytext;"]],

  LiteralNumber: [[Token.NUMBER, "$$ = Number(yytext);"]],
};
