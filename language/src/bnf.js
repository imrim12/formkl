import { Token } from "./enum/token.enum.js";

export default {
  ExpressionForm: [
    [
      "ExpressionSubmittedForm { ExpressionSectionList }",
      `
      keyPool = {};
      sectionKeyPool = {};
      return $$ = { ...$1, title: '', description: '', sections: $3 };
      `,
    ],
    [
      "ExpressionSubmittedForm LiteralString { ExpressionSectionList }",
      `
      keyPool = {};
      sectionKeyPool = {};
      return $$ = { ...$1, title: $2, description: '', sections: $4 };
      `,
    ],
    [
      "ExpressionSubmittedForm LiteralString LiteralString { ExpressionSectionList }",
      `
      keyPool = {};
      sectionKeyPool = {};
      return $$ = { ...$1, title: $2, description: $3, sections: $5 };
      `,
    ],
  ],

  ExpressionSubmittedForm: [
    ["ExpressionDeclarationForm", "$$ = { ...$1, method: '', endpoint: '' };"],
    [
      "ExpressionDeclarationForm LiteralRequestMethod ( LiteralString )",
      "$$ = { ...$1, method: $2, endpoint: $4 };",
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
      "$$ = { title: $1, key: generateKey($1, 'section'), multiple: false, fields: $4 };",
    ],
    [
      "multiple LiteralString includes { ExpressionFieldValidList }",
      `
      $$ = { title: $2, key: generateKey($2, 'section'), multiple: true, fields: $5 };
      throwIfHasMultipleFields($5)
      `,
    ],
    [
      "LiteralNumber LiteralString includes { ExpressionFieldValidList }",
      `
      $$ = { title: $2, key: generateKey($2, 'section'), multiple: true, maxResponseAllowed: $1, fields: $5 };
      throwIfHasMultipleFields($5)
      `,
    ],
  ],

  ExpressionFieldValidList: [
    ["ExpressionFieldMultiple", "$$ = [$1];"],
    ["ExpressionFieldValidList ExpressionFieldMultiple", "$$ = [...$1, $2];"],
  ],

  ExpressionFieldMultiple: [
    ["ExpressionFieldValid ;", "$$ = { ...$1, multiple: false };"],
    ["multiple ExpressionFieldValid ;", "$$ = { ...$2, multiple: true };"],
    [
      "LiteralNumber ExpressionFieldValid ;",
      "$$ = { ...$2, multiple: true, maxResponseAllowed: $1 };",
    ],
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
    [
      "ExpressionConditionAdditional",
      `$$ = !$1['$' + 'or']
        ? $1
        : $1['$' + 'or'].length === 1
          ? $1['$' + 'or'][0]
          : $1;`,
    ],
  ],

  ExpressionConditionAdditional: [
    [
      "ExpressionConditionMutiplicative",
      `$$ = {
        ['$' + 'or']: [
          !$1['$' + 'and']
            ? $1
            : $1['$' + 'and'].length === 1
              ? $1['$' + 'and'][0]
              : $1,
        ]
      };`,
    ],
    [
      "ExpressionConditionAdditional or ExpressionConditionMutiplicative",
      `$$ = {
        ['$' + 'or']: [
          ...$1['$' + 'or'],
          !$3['$' + 'and']
            ? $3
            : $3['$' + 'and'].length === 1
              ? $3['$' + 'and'][0]
              : $3,
        ]
      };`,
    ],
  ],

  ExpressionConditionMutiplicative: [
    ["ExpressionConditionPrimary", `$$ = { ['$' + 'and']: [ $1 ] }`],
    [
      "ExpressionConditionMutiplicative and ExpressionConditionPrimary",
      `$$ = { ['$' + 'and']: [ ...$1['$' + 'and'], $3 ] };`,
    ],
  ],

  ExpressionConditionPrimary: [
    [
      "( ExpressionConditionAdditional )",
      `$$ = !$2['$' + 'or']
        ? $2
        : $2['$' + 'or'].length === 1
          ? $2['$' + 'or'][0]
          : $2;`,
    ],
    ["Condition", "$$ = $1"],
  ],

  Condition: [
    ["> LiteralNumber", "$$ = { $gt: Number(yytext) };"],
    ["< LiteralNumber", "$$ = { $lt: Number(yytext) };"],
    [">= LiteralNumber", "$$ = { $gteq: Number(yytext) };"],
    ["<= LiteralNumber", "$$ = { $lteq: Number(yytext) };"],
    ["== Element", "$$ = { $eq: isNaN(yytext) ? yytext : Number(yytext) };"],
    ["!= Element", "$$ = { $neq: isNaN(yytext) ? yytext : Number(yytext) };"],
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

  LiteralRequestMethod: [
    [Token.GET, "$$ = yytext;"],
    [Token.POST, "$$ = yytext;"],
    [Token.PUT, "$$ = yytext;"],
    [Token.PATCH, "$$ = yytext;"],
    [Token.DELETE, "$$ = yytext;"],
  ],

  LiteralString: [[Token.STRING, "$$ = yytext;"]],

  LiteralNumber: [[Token.NUMBER, "$$ = Number(yytext);"]],
};
