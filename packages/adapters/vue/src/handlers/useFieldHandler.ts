import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { computed, getCurrentInstance, readonly, Ref } from "vue";
import { Form } from "../core/Form";
import { DefaultValueMap } from "../core/Model";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { useFormkl } from "../hooks/useFormkl";

export const useFieldHandler = () => {
  const { formkl, model } = useFormkl();

  const vm = getCurrentInstance()?.proxy;
  const props: any = vm?.$props;

  const _section = props.section as Section;
  const _field = props.field as FieldDefault | FieldSelection;

  const _input = computed(() => {
    switch (formkl.model) {
      case "flat":
        const _flatModel = model.value as SchemaFlat;

        return _flatModel?.[_section.key]?.[_field.key];

      case "base":
      default:
        const _baseModel = model.value as SchemaBase;

        return _baseModel.data.find((m) => m.section === _section.key && m.field === _field.key)
          ?.value;
    }
  });

  const _mapCustomEvents = (responseIndex?: number) => {
    const handlerCustom = Form.getEventMap().get(_field.type) || {};
    const customEvents: Record<
      string,
      (
        value: any,
        formkl: Formkl,
        section: Section,
        field: FieldDefault | FieldSelection,
        model: Ref<SchemaBase | SchemaFlat>,
        responseIndex?: number,
      ) => void
    > = {};
    Object.keys(handlerCustom).forEach((key) => {
      customEvents[key] = (value: any) =>
        handlerCustom[key](value, formkl, _section, _field, model, responseIndex);
    });

    return customEvents;
  };

  const updateResponse = (value: any, responseIndex?: number) => {
    switch (formkl.model) {
      case "flat":
        const _flatModel = model.value as SchemaFlat;

        if ((_section.multiple || _field.multiple) && responseIndex !== undefined) {
          _flatModel[_section.key][_field.key][responseIndex] = value;
        } else {
          _flatModel[_section.key][_field.key] = value;
        }

        break;
      case "base":
      default:
        const _baseModel = model.value as SchemaBase;

        const input = _baseModel.data.find(
          (m) => m.section === _section.key && m.field === _field.key,
        );

        if (input) {
          if ((_section.multiple || _field.multiple) && responseIndex !== undefined) {
            input.value[responseIndex] = value;
          } else {
            input.value = value;
          }
        }
    }
  };

  const addResponse = () => {
    updateResponse(DefaultValueMap[_field.type], _input.value.length);
  };

  const removeResponse = (responseIndex: number) => {
    if (_field.multiple) {
      _input.value.splice(responseIndex, 1);
    }
  };

  const getEventHandler = (responseIndex?: number) => {
    const customEvents = _mapCustomEvents(responseIndex);

    return {
      modelValue: responseIndex !== undefined ? _input.value[responseIndex] : _input.value,
      "onUpdate:modelValue": (value: any) => updateResponse.call(this, value, responseIndex),
      ...customEvents,
    };
  };

  const getReactiveInput = () => {
    return readonly(_input);
  };

  return {
    addResponse,
    removeResponse,
    updateResponse,
    getEventHandler,
    getReactiveInput,
  };
};
