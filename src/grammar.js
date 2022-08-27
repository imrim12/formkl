// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const lexer = require("./tokenizer.js");
const { tokenStart, tokenEnd, convertToken, convertTokenId } = require("./utils.js");
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "Section", "symbols": [{"literal":"{"}, "FieldValidatedSet", {"literal":"}"}]},
    {"name": "Section", "symbols": [{"literal":"{"}, "EMPTY", "FieldValidatedSet", {"literal":"}"}]},
    {"name": "Section", "symbols": [{"literal":"{"}, "EMPTY", "FieldValidatedSet", "EMPTY", {"literal":"}"}]},
    {"name": "Section", "symbols": [{"literal":"{"}, "FieldValidatedSet", "EMPTY", {"literal":"}"}]},
    {"name": "FieldValidatedSet", "symbols": []},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "FieldValidatedSet"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "BR", "FieldValidatedSet"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "BR", "__", "FieldValidatedSet"]},
    {"name": "FieldValidated", "symbols": ["FIELD", {"literal":";"}]},
    {"name": "FieldValidated", "symbols": ["Label", "FIELD", {"literal":";"}]},
    {"name": "FieldValidated", "symbols": [{"literal":"require"}, "__", "FIELD", {"literal":";"}]},
    {"name": "FieldValidated", "symbols": [{"literal":"require"}, "__", "Label", "FIELD", {"literal":";"}]},
    {"name": "Label", "symbols": ["STRING", "__"]},
    {"name": "EMPTY", "symbols": ["__"]},
    {"name": "EMPTY", "symbols": ["__", "BR"]},
    {"name": "EMPTY", "symbols": ["BR", "__"]},
    {"name": "EMPTY", "symbols": ["__", "BR", "__"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("TkWhitespace") ? {type: "TkWhitespace"} : TkWhitespace)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("TkWhitespace") ? {type: "TkWhitespace"} : TkWhitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("TkWhitespace") ? {type: "TkWhitespace"} : TkWhitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "FIELD", "symbols": [(lexer.has("TkField") ? {type: "TkField"} : TkField)], "postprocess": convertTokenId},
    {"name": "BR$ebnf$1", "symbols": [(lexer.has("TkLineBreak") ? {type: "TkLineBreak"} : TkLineBreak)]},
    {"name": "BR$ebnf$1", "symbols": ["BR$ebnf$1", (lexer.has("TkLineBreak") ? {type: "TkLineBreak"} : TkLineBreak)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "BR", "symbols": ["BR$ebnf$1"], "postprocess": convertTokenId},
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
