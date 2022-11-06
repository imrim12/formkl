import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return true", () => {
    const result = isValueValidated("test something long", {
      logic: {
        $gt: 5,
      },
    });

    expect(result).toBe(true);
  });
});
