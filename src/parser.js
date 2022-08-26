const nearley = require("nearley");
const grammar = require("./grammar.js");
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.parse = function (str = "") {
  try {
    return parser.feed(str).results;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = parser;
