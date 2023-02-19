import { mount, config } from "@vue/test-utils";

import formklTheme from "@formkl/elemento";

import FormklPlugin, { Formkl } from "..";
import form from "./syntax.form";

const mountOptions = {
  global: {
    plugins: [[FormklPlugin, { theme: formklTheme }]],
  },
  propsData: {
    form,
  },
};

describe("Basic rendering usage including vite plugin.", () => {
  it("should mount the Formkl component correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    expect(wrapper).toBeTruthy();
  });

  it("should render the Formkl title correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    expect(wrapper.element.innerHTML).toContain(form.title);
  });

  it("should render the Formkl description correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    expect(wrapper.element.innerHTML).toContain(form.description);
  });

  it("should render the sections' titles correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    form.sections.forEach((section) => {
      expect(wrapper.element.innerHTML).toContain(section.title);
    });
  });

  it("should render the fields' labels correctly", () => {
    const wrapper = mount(Formkl, mountOptions);

    form.sections.forEach((section) => {
      section.fields.forEach((field) => {
        expect(wrapper.element.innerHTML).toContain(field.label);
      });
    });
  });
});
