// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const lexer = require("./tokenizer.js");
const { tokenStart, tokenEnd, convertToken, convertTokenId } = require("./utils.js");
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "Section", "symbols": ["FieldValidatedSet"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "FieldValidatedSet"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "BR", "FieldValidatedSet"]},
    {"name": "FieldValidated", "symbols": ["FIELD", "EOL"]},
    {"name": "FieldValidated", "symbols": ["Label", "FIELD", "EOL"]},
    {"name": "FieldValidated", "symbols": ["REQUIRE", "__", "FIELD", "EOL"]},
    {"name": "FieldValidated", "symbols": ["REQUIRE", "__", "Label", "FIELD", "EOL"]},
    {"name": "Label", "symbols": ["STRING", "__"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("TkWhitespace") ? {type: "TkWhitespace"} : TkWhitespace)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("TkWhitespace") ? {type: "TkWhitespace"} : TkWhitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("TkWhitespace") ? {type: "TkWhitespace"} : TkWhitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "FIELD", "symbols": [(lexer.has("TkField") ? {type: "TkField"} : TkField)], "postprocess": convertTokenId},
    {"name": "REQUIRE", "symbols": [(lexer.has("TkRequire") ? {type: "TkRequire"} : TkRequire)], "postprocess": convertTokenId},
    {"name": "EOL", "symbols": [(lexer.has("TkSemi") ? {type: "TkSemi"} : TkSemi)], "postprocess": convertTokenId},
    {"name": "BR", "symbols": [(lexer.has("TkLineBreak") ? {type: "TkLineBreak"} : TkLineBreak)], "postprocess": convertTokenId},
    {"name": "STRING", "symbols": [(lexer.has("TkLitteralString") ? {type: "TkLitteralString"} : TkLitteralString)], "postprocess": convertTokenId},
    {"name": "NUMBER", "symbols": [(lexer.has("TkLitteralNumber") ? {type: "TkLitteralNumber"} : TkLitteralNumber)], "postprocess": convertTokenId}
]
  , ParserStart: "Section"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
