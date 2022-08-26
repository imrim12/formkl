let parser = require("../dist");

test("require \"Date of birth\" birthday;", () => {
  expect(!!parser.parse("require \"Date of birth\" birthday;").length).toBe(true);
});
