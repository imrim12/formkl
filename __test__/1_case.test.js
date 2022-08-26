let parser = require("../dist");

test("email;", () => {
  expect(!!parser.parse("email;").length).toBe(true);
});
