import { Section } from "formkl";
import { getCurrentInstance } from "vue";
import { DefaultValueMap } from "../core/Model";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { useFormkl } from "../hooks/useFormkl";

export const useSectionHandler = () => {
  const { formkl, model } = useFormkl();

  const vm = getCurrentInstance()?.proxy;
  const props: any = vm?.$props;

  const _section = props.section as Section;

  const addResponse = () => {
    if (_section.multiple) {
      switch (formkl.model) {
        case "flat":
          const _flatModel = model.value as SchemaFlat;

          Object.keys(_flatModel[_section.key]).forEach((fieldKey) => {
            _flatModel[_section.key][fieldKey].push(
              DefaultValueMap[_section.fields.find((f) => f.key === fieldKey)?.type || "text"],
            );
          });
          break;
        case "base":
        default:
          const _baseModel = model.value as SchemaBase;

          _baseModel.data.forEach((i) => {
            if (i.section === _section.key) {
              i.value.push(
                DefaultValueMap[_section.fields.find((f) => f.key === i.field)?.type || "text"],
              );
            }
          });
          break;
      }
    }
  };

  const removeResponse = (responseIndex: number) => {
    if (_section.multiple) {
      switch (formkl.model) {
        case "flat":
          const _flatModel = model.value as SchemaFlat;

          Object.keys(_flatModel[_section.key]).forEach((fieldKey) => {
            _flatModel[_section.key][fieldKey].splice(responseIndex, 1);
          });
          break;
        case "base":
        default:
          const _baseModel = model.value as SchemaBase;

          _baseModel.data.forEach((i) => {
            if (i.section === _section.key) {
              i.value.splice(responseIndex, 1);
            }
          });
          break;
      }
    }
  };

  return {
    addResponse,
    removeResponse,
  };
};
