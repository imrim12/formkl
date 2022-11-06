import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return false", () => {
    const result = isValueValidated("test something longer", {
      regex: /test/,
      logic: {
        $lt: 5,
      },
    });

    expect(result).toBe(false);
  });
});
