import { Section, SchemaBase, SchemaFlat, Formkl } from "@formkl/shared";
import { DefaultValueMap } from "../core/Model";

const SectionValueAddMap = (
  model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  },
  section: Section,
) => ({
  flat: () => {
    const _flatModel = (model.current || model.value) as SchemaFlat;

    Object.keys(_flatModel[section.key]).forEach((fieldKey) => {
      const _field = section.fields.find((f) => f.key === fieldKey);

      const value = DefaultValueMap[_field?.type || "text"];

      _flatModel[section.key][fieldKey].push(value);
    });
  },
  base: () => {
    const _baseModel = (model.current || model.value) as SchemaBase;

    _baseModel.data.forEach((i) => {
      if (i.section === section.key) {
        const _field = section.fields.find((f) => f.key === i.field);

        const value = DefaultValueMap[_field?.type || "text"];

        i.value.push(value);
      }
    });
  },
});

const SectionValueRemoveMap = (
  model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  },
  section: Section,
) => ({
  flat: (responseIndex: number) => {
    const _flatModel = (model.current || model.value) as SchemaFlat;

    Object.keys(_flatModel[section.key]).forEach((fieldKey) => {
      _flatModel[section.key][fieldKey].splice(responseIndex, 1);
    });
  },
  base: (responseIndex: number) => {
    const _baseModel = (model.current || model.value) as SchemaBase;

    _baseModel.data.forEach((i) => {
      if (i.section === section.key) {
        i.value.splice(responseIndex, 1);
      }
    });
  },
});

export const useSectionHandler = (props: {
  key: string;
  formkl: Formkl;
  model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  };
  section: Section;
}) => {
  const _section = props.section as Section;

  const addResponse = () => {
    if (_section.multiple) {
      SectionValueAddMap(props.model, _section)[props.formkl.model || "base"]();
    }
  };

  const removeResponse = (responseIndex: number) => {
    if (_section.multiple) {
      SectionValueRemoveMap(props.model, _section)[props.formkl.model || "base"](responseIndex);
    }
  };

  return {
    addResponse,
    removeResponse,
  };
};
