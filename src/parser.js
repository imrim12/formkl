const nearley = require("nearley");
const grammar = require("./grammar.js");
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.parse = function (str = "") {
  const parsed = parser.feed(str);

  return parsed ? parsed.results : [];
};

module.exports = parser;
