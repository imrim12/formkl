const jsonParser = require("../dist/json.parser.js");

const value = jsonParser.parse(`{"x": 10, "y": {"z": [1, 2, 3]}}`);

console.log(value);
