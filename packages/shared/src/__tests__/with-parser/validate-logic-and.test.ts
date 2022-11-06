import { isValueValidated } from "@formkl/shared";

import parser from "formkl";

describe("Test recursive validator", () => {
  it("should return false", () => {
    const form = parser.parse(`formkl {
      includes {
        text valid(> 10 and < 15);
      }
    }`);

    const result = isValueValidated(
      "test something with and",
      form.sections[0].fields[0].validation,
    );

    expect(result).toBe(false);
  });
});
