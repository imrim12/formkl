import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const form = parser.parse(`formkl {
      includes {
        text valid(> 10 or has "something");
      }
    }`);

    const result = isValueValidated(
      "test something with or",
      form.sections[0].fields[0].validation,
    );

    expect(result).toBe(true);
  });
});
