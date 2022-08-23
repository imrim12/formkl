// const formklParser = require("../dist/formkl.parser.js");

// const value = formklParser.parse(`{"x": 10, "y": {"z": [1, 2, 3]}}`);

// console.log(value);

const nearley = require("nearley");
const grammar = require("../dist/formkl.grammar.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
const parsed = parser.feed("email");

console.log(JSON.stringify(parsed.results));
