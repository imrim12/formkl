import { setupTest } from "./utils";

describe("Used with Capitalized syntax", () => {
  it("should mount the component normally", () => {
    const wrapper = setupTest(`Formkl {
      Includes {
        Text;
        "Another" Text;
      }
    }`);

    expect(wrapper.vm).toBeTruthy();
  });
});
