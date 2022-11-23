import {
  FieldDefault,
  FieldSelection,
  Formkl,
  Section,
  SchemaBase,
  SchemaFlat,
} from "@formkl/shared";
import { computed, getCurrentInstance, readonly, Ref } from "vue-demi";
import { Form } from "../core/Form";
import { DefaultValueMap } from "../core/Model";
import { useFormkl } from "../hooks/useFormkl";

const FieldValueGetterMap = (
  model: Ref<SchemaBase | SchemaFlat>,
  section: Section,
  field: FieldDefault | FieldSelection,
) => ({
  flat: () => {
    const modelFlat = model.value as SchemaFlat;

    return modelFlat?.[section.key]?.[field.key];
  },
  base: () => {
    const modelBase = model.value as SchemaBase;
    const fieldValue = modelBase.data.find(
      (m) => m.section === section.key && m.field === field.key,
    );

    return fieldValue?.value;
  },
});

const FieldValueSetterMap = (
  model: Ref<SchemaBase | SchemaFlat>,
  section: Section,
  field: FieldDefault | FieldSelection,
) => ({
  flat: (value: any, responseIndex?: number) => {
    const modelFlat = model.value as SchemaFlat;

    if ((section.multiple || field.multiple) && responseIndex !== undefined) {
      modelFlat[section.key][field.key][responseIndex] = value;
    } else {
      modelFlat[section.key][section.key] = value;
    }
  },
  base: (value: any, responseIndex?: number) => {
    const modelBase = model.value as SchemaBase;

    const input = modelBase.data.find((m) => m.section === section.key && m.field === field.key);

    if (input) {
      if ((section.multiple || field.multiple) && responseIndex !== undefined) {
        input.value[responseIndex] = value;
      } else {
        input.value = value;
      }
    }
  },
});

export const useFieldHandler = () => {
  const { formkl, model } = useFormkl();

  const vm = getCurrentInstance()?.proxy;
  const props: any = vm?.$props;

  const _section = props.section as Section;

  const _field = props.field as FieldDefault | FieldSelection;
  const fieldValue = computed({
    get: FieldValueGetterMap(model, _section, _field)[formkl.value.model || "base"],
    set: ([value, responseIndex]) =>
      FieldValueSetterMap(model, _section, _field)[formkl.value.model || "base"](
        value,
        responseIndex,
      ),
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
        handlerCustom[key](value, formkl.value, _section, _field, model, responseIndex);
    });

    return customEvents;
  };

  const updateResponse = (value: any, responseIndex?: number) => {
    fieldValue.value = [value, responseIndex];
  };

  const addResponse = () => {
    updateResponse(DefaultValueMap[_field.type], fieldValue.value.length);
  };

  const removeResponse = (responseIndex: number) => {
    if (_field.multiple) {
      fieldValue.value[responseIndex] = undefined;
      fieldValue.value = [fieldValue.value.filter((v: any) => v !== undefined)];
    }
  };

  const getEventHandler = (responseIndex?: number) => {
    const customEvents = _mapCustomEvents(responseIndex);

    return {
      modelValue: responseIndex !== undefined ? fieldValue.value[responseIndex] : fieldValue.value,
      "onUpdate:modelValue": (value: any) => updateResponse.call(this, value, responseIndex),
      ...customEvents,
    };
  };

  const getReactiveInput = () => {
    return readonly(fieldValue);
  };

  return {
    addResponse,
    removeResponse,
    updateResponse,
    getEventHandler,
    getReactiveInput,
  };
};
