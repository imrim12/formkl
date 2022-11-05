import { setupForm } from "./setup-form";

describe("Used with Capitalized syntax", () => {
  it("should mount the component normally", () => {
    const wrapper = setupForm(`Formkl {
      Includes {
        Text;
        "Another" Text;
      }
    }`);

    expect(wrapper.vm).toBeTruthy();
  });
});
