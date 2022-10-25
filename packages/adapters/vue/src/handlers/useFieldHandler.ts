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
    const _flatModel = model.value as SchemaFlat;

    return _flatModel?.[section.key]?.[field.key];
  },
  base: () => {
    const _baseModel = model.value as SchemaBase;
    const _fieldValue = _baseModel.data.find(
      (m) => m.section === section.key && m.field === field.key,
    );

    return _fieldValue?.value;
  },
});

const FieldValueSetterMap = (
  model: Ref<SchemaBase | SchemaFlat>,
  section: Section,
  field: FieldDefault | FieldSelection,
) => ({
  flat: (value: any, responseIndex?: number) => {
    const _flatModel = model.value as SchemaFlat;

    if ((section.multiple || field.multiple) && responseIndex !== undefined) {
      _flatModel[section.key][field.key][responseIndex] = value;
    } else {
      _flatModel[section.key][section.key] = value;
    }
  },
  base: (value: any, responseIndex?: number) => {
    const _baseModel = model.value as SchemaBase;

    const input = _baseModel.data.find((m) => m.section === section.key && m.field === field.key);

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
  const _fieldValue = computed({
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
    _fieldValue.value = [value, responseIndex];
  };

  const addResponse = () => {
    updateResponse(DefaultValueMap[_field.type], _fieldValue.value.length);
  };

  const removeResponse = (responseIndex: number) => {
    if (_field.multiple) {
      _fieldValue.value[responseIndex] = undefined;
      _fieldValue.value = [_fieldValue.value.filter((v: any) => v !== undefined)];
    }
  };

  const getEventHandler = (responseIndex?: number) => {
    const customEvents = _mapCustomEvents(responseIndex);

    return {
      modelValue:
        responseIndex !== undefined ? _fieldValue.value[responseIndex] : _fieldValue.value,
      "onUpdate:modelValue": (value: any) => updateResponse.call(this, value, responseIndex),
      ...customEvents,
    };
  };

  const getReactiveInput = () => {
    return readonly(_fieldValue);
  };

  return {
    addResponse,
    removeResponse,
    updateResponse,
    getEventHandler,
    getReactiveInput,
  };
};
