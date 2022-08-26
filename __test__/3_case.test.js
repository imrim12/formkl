let parser = require("../dist");

test("require \"Fullname\" text;", () => {
  expect(!!parser.parse("require \"Fullname\" text;").length).toBe(true);
});
