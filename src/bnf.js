const { Token } = require("./enum/token.enum");

module.exports = {
  ExpressionForm: [
    ["ExpressionDeclarationForm { ExpressionSectionList }", "return $$ = { ...$1, sections: $3 };"],
    [
      "ExpressionDeclarationForm LiteralString { ExpressionSectionList }",
      "return $$ = { ...$1, title: $2, sections: $4 };",
    ],
    [
      "ExpressionDeclarationForm LiteralString LiteralString { ExpressionSectionList }",
      "return $$ = { ...$1, title: $2, description: $3, sections: $5 };",
    ],
  ],

  ExpressionDeclarationForm: [
    ["formkl", "$$ = { model: 'base' };"],
    ["formkl base", "$$ = { model: 'base' };"],
    ["formkl flat", "$$ = { model: 'flat' };"],
  ],

  ExpressionSectionList: [
    ["ExpressionSection", "$$ = [$1];"],
    ["ExpressionSectionList ExpressionSection", "$$ = [...$1, $2];"],
  ],

  ExpressionSection: [
    [
      "LiteralString includes { ExpressionFieldValidList }",
      "$$ = { title: $1, key: generateKey($1, 'section'), fields: $4 };",
    ],
    [
      "multiple LiteralString includes { ExpressionFieldValidList }",
      "$$ = { title: $2, key: generateKey($2, 'section'), multiple: true, fields: $5 };",
    ],
  ],

  ExpressionFieldValidList: [
    ["ExpressionFieldMultiple", "$$ = [$1];"],
    ["ExpressionFieldValidList ExpressionFieldMultiple", "$$ = [...$1, $2];"],
  ],

  ExpressionFieldMultiple: [
    ["ExpressionFieldValid ;", "$$ = $1;"],
    ["multiple ExpressionFieldValid ;", "$$ = { ...$2, multiple: true };"],
  ],

  ExpressionFieldValid: [
    ["ExpressionFieldAliased", "$$ = $1;"],
    ["ExpressionFieldAliased valid ( ExpressionCondition )", "$$ = $1; $1.validation = $4;"],
    ["ExpressionFieldAliased regex ( LiteralString )", "$$ = $1; $1.validation = { regex: $4 };"],
    [
      "ExpressionFieldAliased valid ( ExpressionCondition ) regex ( LiteralString )",
      "$$ = $1; $1.validation = { regex: $8, ...$4 };",
    ],
    [
      "ExpressionFieldAliased regex ( LiteralString ) valid ( ExpressionCondition )",
      "$$ = $1; $1.validation = { regex: $4, ...$8 };",
    ],
  ],

  ExpressionFieldAliased: [
    ["ExpressionField", "$$ = { ...$1, key: generateKey($1.label || $1.type) };"],
    ["ExpressionField as LiteralString", "$$ = { ...$1, key: $3 };"],
  ],

  ExpressionField: [
    ["ElementField", "$$ = { ...$1, label: generateLabel($1.type), require: false };"],
    ["LiteralString ElementField", "$$ = { ...$2, label: $1, require: false };"],
    ["require ElementField", "$$ = { ...$2, label: generateLabel($2.type), require: true };"],
    ["require LiteralString ElementField", "$$ = { ...$3, label: $2, require: true };"],
  ],

  ElementField: [
    ["LiteralField", "$$ = { type: $1 };"],
    ["ElementSelection SelectFetchFunction", "$$ = { ...$1, ...$2 };"],
  ],

  ElementSelection: [
    ["LiteralSelection", "$$ = { type: $1, fetchDataPath: '' };"],
    ["LiteralSelection LiteralString", "$$ = { type: $1, fetchDataPath: $2 };"],
  ],

  SelectFetchFunction: [
    ["( LiteralStringList )", "$$ = { options: $2 }"],
    [
      "url ( LiteralString )",
      "$$ = { options: [], fetchUrl: $3, valueKey: 'id', labelKey: 'name' }",
    ],
    [
      "url ( LiteralString , LiteralString )",
      "$$ = { options: [], fetchUrl: $3, valueKey: $5, labelKey: 'name' }",
    ],
    [
      "url ( LiteralString , LiteralString , LiteralString )",
      "$$ = { options: [], fetchUrl: $3, valueKey: $5, labelKey: $7 }",
    ],
  ],

  ExpressionCondition: [
    ["ExpressionMutiplicativeCondition", "$$ = $1;"],
    ["ExpressionAdditionalCondition", "$$ = $1;"],
  ],

  ExpressionMutiplicativeCondition: [
    ["ExpressionConditionPrimary", "$$ = $1;"],
    [
      "ExpressionConditionPrimary and ExpressionConditionPrimary",
      "$$ = { ['$' + 'and']: [ $1, $3 ] }",
    ],
  ],

  ExpressionAdditionalCondition: [
    [
      "ExpressionMutiplicativeCondition or ExpressionMutiplicativeCondition",
      "$$ = { ['$' + 'or']: [ $1, $3 ] }",
    ],
  ],

  ExpressionConditionPrimary: [
    ["( ExpressionAdditionalCondition )", "$$ = $2"],
    ["Condition", "$$ = $1"],
  ],

  Condition: [
    ["> LiteralNumber", "$$ = { $gt: Number(yytext) };"],
    ["< LiteralNumber", "$$ = { $lt: Number(yytext) };"],
    [">= LiteralNumber", "$$ = { $gteq: Number(yytext) };"],
    ["<= LiteralNumber", "$$ = { $lteq: Number(yytext) };"],
    ["== LiteralNumber", "$$ = { $eq: Number(yytext) };"],
    ["== LiteralString", "$$ = { $eq: yytext };"],
    ["!= LiteralNumber", "$$ = { $neq: Number(yytext) };"],
    ["!= LiteralString", "$$ = { $neq: yytext };"],
    ["has Element", "$$ = { $has: yytext };"],
  ],

  Element: [
    ["LiteralString", "$$ = $1"],
    ["LiteralNumber", "$$ = $1"],
  ],

  LiteralStringList: [
    ["LiteralString", "$$ = [$1];"],
    ["LiteralStringList , LiteralString", "$$ = [...$1, $3];"],
  ],

  LiteralSelection: [[Token.FIELDSELECT, "$$ = yytext;"]],

  LiteralField: [
    [Token.FIELD, "$$ = yytext;"],
    [Token.FIELDDATETIME, "$$ = yytext;"],
    [Token.FIELDVALIDATED, "$$ = yytext;"],
  ],

  LiteralString: [[Token.STRING, "$$ = yytext;"]],

  LiteralNumber: [[Token.NUMBER, "$$ = Number(yytext);"]],
};
