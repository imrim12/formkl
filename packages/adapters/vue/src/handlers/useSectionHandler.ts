import { Section } from "formkl";
import { getCurrentInstance, Ref } from "vue";
import { DefaultValueMap } from "../core/Model";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { useFormkl } from "../hooks/useFormkl";

const SectionValueAddMap = (model: Ref<SchemaBase | SchemaFlat>, section: Section) => ({
  flat: () => {
    const _flatModel = model.value as SchemaFlat;

    Object.keys(_flatModel[section.key]).forEach((fieldKey) => {
      const _field = section.fields.find((f) => f.key === fieldKey);

      const value = DefaultValueMap[_field?.type || "text"];

      _flatModel[section.key][fieldKey].push(value);
    });
  },
  base: () => {
    const _baseModel = model.value as SchemaBase;

    _baseModel.data.forEach((i) => {
      if (i.section === section.key) {
        const _field = section.fields.find((f) => f.key === i.field);

        const value = DefaultValueMap[_field?.type || "text"];

        i.value.push(value);
      }
    });
  },
});

const SectionValueRemoveMap = (model: Ref<SchemaBase | SchemaFlat>, section: Section) => ({
  flat: (responseIndex: number) => {
    const _flatModel = model.value as SchemaFlat;

    Object.keys(_flatModel[section.key]).forEach((fieldKey) => {
      _flatModel[section.key][fieldKey].splice(responseIndex, 1);
    });
  },
  base: (responseIndex: number) => {
    const _baseModel = model.value as SchemaBase;

    _baseModel.data.forEach((i) => {
      if (i.section === section.key) {
        i.value.splice(responseIndex, 1);
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

  const removeResponse = (responseIndex: number) => {
    if (_section.multiple) {
      SectionValueRemoveMap(model, _section)[formkl.value.model || "base"](responseIndex);
    }
  };

  return {
    addResponse,
    removeResponse,
  };
};
