import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { computed, ComputedRef, readonly, Ref } from "vue";
import { Form } from "../core/Form";
import { DefaultValueMap } from "../core/Model";
import { SchemaBase, SchemaFlat } from "../core/Schema";

export class FieldHandler {
  private _formkl: Formkl;
  private _section: Section;
  private _field: FieldDefault | FieldSelection;
  private _model: Ref<SchemaBase | SchemaFlat>;

  private _input: ComputedRef<any>;

  constructor(
    formkl: Formkl,
    section: Section,
    field: FieldDefault | FieldSelection,
    model: Ref<SchemaFlat | SchemaBase>,
  ) {
    this._formkl = formkl;
    this._section = section;
    this._field = field;
    this._model = model;

    this._input = computed(() => {
      switch (this._formkl.model) {
        case "flat":
          const _flatModel = this._model.value as SchemaFlat;

          return _flatModel?.[this._section.key]?.[this._field.key];

        case "base":
        default:
          const _baseModel = this._model.value as SchemaBase;

          return _baseModel.data.find(
            (m) => m.section === this._section.key && m.field === this._field.key,
          )?.value;
      }
    });
  }

  private _mapCustomEvents(responseIndex?: number) {
    const handlerCustom = Form.getEventMap().get(this._field.type) || {};
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
        handlerCustom[key](
          value,
          this._formkl,
          this._section,
          this._field,
          this._model,
          responseIndex,
        );
    });

    return customEvents;
  }

  public updateResponse(value: any, responseIndex?: number) {
    switch (this._formkl.model) {
      case "flat":
        const _flatModel = this._model.value as SchemaFlat;

        if ((this._section.multiple || this._field.multiple) && responseIndex !== undefined) {
          _flatModel[this._section.key][this._field.key][responseIndex] = value;
        } else {
          _flatModel[this._section.key][this._field.key] = value;
        }

        break;
      case "base":
      default:
        const _baseModel = this._model.value as SchemaBase;

        const input = _baseModel.data.find(
          (m) => m.section === this._section.key && m.field === this._field.key,
        );

        if (input) {
          if ((this._section.multiple || this._field.multiple) && responseIndex !== undefined) {
            input.value[responseIndex] = value;
          } else {
            input.value = value;
          }
        }
    }
  }

  public addResponse() {
    this.updateResponse(DefaultValueMap[this._field.type], this._input.value.length);
  }

  public removeResponse(responseIndex: number) {
    if (this._field.multiple) {
      this._input.value.splice(responseIndex, 1);
    }
  }

  public getEventHandler(responseIndex?: number) {
    const customEvents = this._mapCustomEvents(responseIndex);

    return {
      modelValue:
        responseIndex !== undefined ? this._input.value[responseIndex] : this._input.value,
      "onUpdate:modelValue": (value: any) => this.updateResponse.call(this, value, responseIndex),
      ...customEvents,
    };
  }

  public getReactiveInput() {
    return readonly(this._input);
  }
}
