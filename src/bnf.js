const { Token } = require("./enum/token.enum");

module.exports = {
  ExpressionForm: [["formkl { ExpressionSectionList }", "return $$ = { sections: $3 };"]],

  ExpressionSectionList: [
    ["ExpressionSection", "$$ = [$1];"],
    ["ExpressionSectionList ExpressionSection", "$$ = $1; $1.push($2);"],
  ],

  ExpressionSection: [
    ["LiteralString includes { ExpressionFieldValidList }", "$$ = { title: $1, fields: $4 };"],
  ],

  ExpressionFieldValidList: [
    ["ExpressionFieldValid", "$$ = [$1];"],
    ["ExpressionFieldValidList ExpressionFieldValid", "$$ = $1; $1.push($2);"],
  ],

  ExpressionFieldValid: [
    ["ExpressionField ;", "$$ = $1;"],
    ["ExpressionField valid ( ExpressionConditionList ) ;", "$$ = { validation: $4 };"],
    ["ExpressionField regex ( LiteralString ) ;", "$$ = { validation: { regex: $4 } };"],
  ],

  ExpressionField: [
    ["LiteralField", "$$ = { type: $1, require: false };"],
    ["LiteralString LiteralField", "$$ = { type: $2, label: $1, require: false };"],
    ["require LiteralField", "$$ = { type: $2, require: true };"],
    ["require LiteralString LiteralField", "$$ = { type: $3, label: $2, require: true };"],
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

  LiteralField: [[Token.FIELD, "$$ = yytext;"]],

  LiteralString: [[Token.STRING, "$$ = yytext;"]],

  LiteralNumber: [[Token.NUMBER, "$$ = Number(yytext);"]],
};
