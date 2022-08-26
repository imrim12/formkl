// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
  function id(x) {
    return x[0];
  }

  const lexer = require("./tokenizer.js");
  var grammar = {
    Lexer: lexer,
    ParserRules: [
      { name: "Field", symbols: ["FieldDefault", "EndOfLine"] },
      { name: "Field", symbols: ["FieldValidated", "EndOfLine"] },
      { name: "Field", symbols: ["SupportConstraint", "_", "FieldDefault", "EndOfLine"] },
      { name: "Field", symbols: ["SupportConstraint", "_", "FieldValidated", "EndOfLine"] },
      {
        name: "FieldDefault",
        symbols: [lexer.has("TkFieldDefault") ? { type: "TkFieldDefault" } : TkFieldDefault],
      },
      {
        name: "FieldDefault",
        symbols: [
          "FieldCustom",
          lexer.has("TkFieldDefault") ? { type: "TkFieldDefault" } : TkFieldDefault,
        ],
      },
      {
        name: "FieldValidated",
        symbols: [lexer.has("TkFieldValidated") ? { type: "TkFieldValidated" } : TkFieldValidated],
      },
      {
        name: "FieldValidated",
        symbols: [
          lexer.has("TkFieldValidatedPhone")
            ? { type: "TkFieldValidatedPhone" }
            : TkFieldValidatedPhone,
        ],
      },
      {
        name: "FieldValidated",
        symbols: [
          "FieldCustom",
          lexer.has("TkFieldValidated") ? { type: "TkFieldValidated" } : TkFieldValidated,
        ],
      },
      {
        name: "FieldValidated",
        symbols: [
          "FieldCustom",
          lexer.has("TkFieldValidatedPhone")
            ? { type: "TkFieldValidatedPhone" }
            : TkFieldValidatedPhone,
        ],
      },
      { name: "FieldCustom", symbols: ["CustomLabel", "_"] },
      {
        name: "SupportConstraint",
        symbols: [
          lexer.has("TkSupportConstraint") ? { type: "TkSupportConstraint" } : TkSupportConstraint,
        ],
      },
      { name: "CustomLabel", symbols: ["STRING"] },
      {
        name: "EndOfLine",
        symbols: [lexer.has("TkEndOfLine") ? { type: "TkEndOfLine" } : TkEndOfLine],
      },
      { name: "__$ebnf$1", symbols: [] },
      {
        name: "__$ebnf$1",
        symbols: ["__$ebnf$1", lexer.has("TkWhitespace") ? { type: "TkWhitespace" } : TkWhitespace],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: "__", symbols: ["__$ebnf$1"] },
      { name: "_", symbols: [lexer.has("TkWhitespace") ? { type: "TkWhitespace" } : TkWhitespace] },
      {
        name: "STRING",
        symbols: [lexer.has("TkLitteralString") ? { type: "TkLitteralString" } : TkLitteralString],
      },
      {
        name: "NUMBER",
        symbols: [lexer.has("TkLitteralNumber") ? { type: "TkLitteralNumber" } : TkLitteralNumber],
      },
    ],
    ParserStart: "Field",
  };
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
