import { describe, it, expect } from "vitest";
import { isValueValidated } from "../src/validator";

describe("Test validation", () => {
  it("should be true", () => {
    const validationObject = {
      regex: /^[a-zA-z0-9]+$/,
      logic: {
        $and: [
          {
            $or: [
              {
                $gt: 100,
              },
              {
                $eq: 100,
              },
            ],
          },
          {
            $lt: 300,
          },
        ],
      },
    };

    expect(isValueValidated(100, validationObject)).toBe(true);
    expect(isValueValidated(200, validationObject)).toBe(true);
    expect(isValueValidated(300, validationObject)).toBe(false);
  });
});
