import { Formkl, Section } from "formkl";
import { Ref } from "vue";
import { DefaultValueMap } from "../core/Model";
import { SchemaBase, SchemaFlat } from "../core/Schema";

export class SectionHandler {
  private _formkl: Formkl;
  private _section: Section;
  private _model: Ref<SchemaBase | SchemaFlat>;

  constructor(formkl: Formkl, section: Section, model: Ref<SchemaFlat | SchemaBase>) {
    this._formkl = formkl;
    this._section = section;
    this._model = model;
  }

  public addResponse() {
    if (this._section.multiple) {
      switch (this._formkl.model) {
        case "flat":
          const _flatModel = this._model.value as SchemaFlat;

          Object.keys(_flatModel[this._section.key]).forEach((fieldKey) => {
            _flatModel[this._section.key][fieldKey].push(
              DefaultValueMap[this._section.fields.find((f) => f.key === fieldKey)?.type || "text"],
            );
          });
          break;
        case "base":
        default:
          const _baseModel = this._model.value as SchemaBase;

          _baseModel.data.forEach((i) => {
            if (i.section === this._section.key) {
              i.value.push(
                DefaultValueMap[
                  this._section.fields.find((f) => f.key === i.field)?.type || "text"
                ],
              );
            }
          });
          break;
      }
    }
  }

  public removeResponse(responseIndex: number) {
    if (this._section.multiple) {
      switch (this._formkl.model) {
        case "flat":
          const _flatModel = this._model.value as SchemaFlat;

          Object.keys(_flatModel[this._section.key]).forEach((fieldKey) => {
            _flatModel[this._section.key][fieldKey].splice(responseIndex, 1);
          });
          break;
        case "base":
        default:
          const _baseModel = this._model.value as SchemaBase;

          _baseModel.data.forEach((i) => {
            if (i.section === this._section.key) {
              i.value.splice(responseIndex, 1);
            }
          });
          break;
      }
    }
  }
}
