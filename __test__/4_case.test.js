let parser = require("../dist");

test("\"Fullname\" text;", () => {
  expect(!!parser.parse("\"Fullname\" text;").length).toBe(true);
});
