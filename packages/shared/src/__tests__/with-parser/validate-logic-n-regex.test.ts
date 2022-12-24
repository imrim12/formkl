import { isValueValidated } from "@formkl/shared";

import parser from "../../../../language";

describe("Test logic and regex", () => {
  it("should return false", () => {
    const form = parser.parse(`formkl {
      includes {
        text regex("test") valid(< 5);
      }
    }`);

    const result = isValueValidated("test something longer", form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });

  it("should return false", () => {
    const form = parser.parse(`formkl {
      includes {
        text valid(< 5) regex("test");
      }
    }`);

    const result = isValueValidated("te...", form.sections[0].fields[0].validation);

    expect(result).toBe(false);
  });
});
