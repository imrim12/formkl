// Create a Parser object from our grammar.
const parser = require("../dist");

// Parse something!
const parsed = parser.feed("email");

console.log(JSON.stringify(parsed.results));
