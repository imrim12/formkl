import form from "./app-bundled.js";

import { defineForm } from "formkl";

describe("Webpack loader", () => {
  it("should have the syntax from .form file parsed correctly", () => {
    expect(form).toStrictEqual(
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
