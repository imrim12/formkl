// TODO: Pending https://github.com/microsoft/TypeScript/pull/51435
// @ts-ignore
import SyntaxForm from "./loaded-syntax.js";

import { defineForm } from "formkl";

describe("Webpack loader", () => {
  it("should have the syntax from .form file parsed correctly", () => {
    expect(SyntaxForm).toStrictEqual(
      defineForm({
        model: "base",
        sections: [
          {
            fields: [
              {
                type: "text",
                label: "Text",
                key: "text",
              },
            ],
          },
        ],
      }),
    );
  });
});
