import { isValueValidated } from "@formkl/shared";

describe("Test recursive validator", () => {
  it("should return false", () => {
    const result = isValueValidated("test something with and", {
      logic: {
        $and: [
          {
            $gt: 10,
          },
          {
            $lt: 15,
          },
        ],
      },
    });

    expect(result).toBe(false);
  });
});
