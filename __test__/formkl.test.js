const formklParser = require("../dist/formkl.parser.js");

const value = formklParser.parse(`{"x": 10, "y": {"z": [1, 2, 3]}}`);

console.log(value);
