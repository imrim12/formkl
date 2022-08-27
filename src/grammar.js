// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const lexer = require("./tokenizer.js");
const { tokenStart, tokenEnd, convertToken, convertTokenId } = require("./utils.js");
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "Formkl", "symbols": ["DECLARE_FORM", "__", "Form"]},
    {"name": "Form", "symbols": [{"literal":"{"}, "EMPTY", "SectionSet", "EMPTY", {"literal":"}"}]},
    {"name": "SectionSet", "symbols": []},
    {"name": "SectionSet", "symbols": ["Section"]},
    {"name": "SectionSet", "symbols": ["Section", "EMPTY", "SectionSet"]},
    {"name": "SectionSet", "symbols": ["Section", "EMPTY", "BR", "SectionSet"]},
    {"name": "SectionSet", "symbols": ["Section", "EMPTY", "BR", "__", "SectionSet"]},
    {"name": "Section", "symbols": ["Label", "EMPTY", "DECLARE_SECTION", "EMPTY", {"literal":"{"}, "EMPTY", "FieldValidatedSet", "EMPTY", {"literal":"}"}]},
    {"name": "FieldValidatedSet", "symbols": []},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "FieldValidatedSet"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "BR", "FieldValidatedSet"]},
    {"name": "FieldValidatedSet", "symbols": ["FieldValidated", "__", "BR", "__", "FieldValidatedSet"]},
    {"name": "FieldValidated", "symbols": ["FIELD", {"literal":";"}]},
    {"name": "FieldValidated", "symbols": ["Label", "__", "FIELD", {"literal":";"}]},
    {"name": "FieldValidated", "symbols": [{"literal":"require"}, "__", "FIELD", {"literal":";"}]},
    {"name": "FieldValidated", "symbols": [{"literal":"require"}, "__", "Label", "__", "FIELD", {"literal":";"}]},
    {"name": "Label", "symbols": ["STRING"]},
    {"name": "DECLARE_FORM", "symbols": [(lexer.has("TkDeclareForm") ? {type: "TkDeclareForm"} : TkDeclareForm)], "postprocess": convertTokenId},
    {"name": "DECLARE_SECTION", "symbols": [(lexer.has("TkDeclareSection") ? {type: "TkDeclareSection"} : TkDeclareSection)], "postprocess": convertTokenId},
    {"name": "EMPTY", "symbols": []},
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
  , ParserStart: "Formkl"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
