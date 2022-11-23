import { Section, SchemaBase, SchemaFlat } from "@formkl/shared";
import { getCurrentInstance, Ref } from "vue-demi";
import { DefaultValueMap } from "../core/Model";
import { useFormkl } from "../hooks/useFormkl";

const SectionValueAddMap = (model: Ref<SchemaBase | SchemaFlat>, section: Section) => ({
  flat: () => {
    const modelFlat = model.value as SchemaFlat;

    Object.keys(modelFlat[section.key]).forEach((fieldKey) => {
      const _field = section.fields.find((f) => f.key === fieldKey);

      const value = DefaultValueMap[_field?.type || "text"];

      modelFlat[section.key][fieldKey].push(value);
    });
  },
  base: () => {
    const modelBase = model.value as SchemaBase;

    modelBase.data.forEach((i) => {
      if (i.section === section.key) {
        const _field = section.fields.find((f) => f.key === i.field);

        const value = DefaultValueMap[_field?.type || "text"];

        i.value.push(value);
      }
    });
  },
});

const SectionValueRemoveMap = (model: Ref<SchemaBase | SchemaFlat>, section: Section) => ({
  flat: (sectionResponseIndex: number) => {
    const modelFlat = model.value as SchemaFlat;

    Object.keys(modelFlat[section.key]).forEach((fieldKey) => {
      modelFlat[section.key][fieldKey].splice(sectionResponseIndex, 1);
    });
  },
  base: (sectionResponseIndex: number) => {
    const modelBase = model.value as SchemaBase;

    modelBase.data.forEach((i) => {
      if (i.section === section.key) {
        i.value.splice(sectionResponseIndex, 1);
      }
    });
  },
});

export const useSectionHandler = () => {
  const { formkl, model } = useFormkl();

  const vm = getCurrentInstance()?.proxy;
  const props: any = vm?.$props;

  const _section = props.section as Section;

  const addResponse = () => {
    if (_section.multiple) {
      SectionValueAddMap(model, _section)[formkl.value.model || "base"]();
    }
  };

  const removeResponse = (sectionResponseIndex: number) => {
    if (_section.multiple) {
      SectionValueRemoveMap(model, _section)[formkl.value.model || "base"](sectionResponseIndex);
    }
  };

  return {
    addResponse,
    removeResponse,
  };
};
