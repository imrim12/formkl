import { ElForm } from "element-plus";
import { Formkl } from "formkl";
import { Ref } from "vue";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionRenderer } from "./SectionRenderer";

/**
 * This class is reactive
 */
export class FormRenderer {
  private _formkl: Formkl;
  private _model: Ref<SchemaBase | SchemaFlat>;

  constructor(formkl: Formkl, model: Ref<SchemaFlat | SchemaBase>) {
    this._formkl = formkl;
    this._model = model;
  }

  private _renderHeader() {
    return this._formkl.title || this._formkl.description ? (
      <header class="formkl__header">
        {this._formkl.title ? <h2>{this._formkl.title}</h2> : null}
        {this._formkl.description ? <h3>{this._formkl.description}</h3> : null}
      </header>
    ) : null;
  }

  private _renderBody() {
    return (
      <div class="formkl__body">
        {this._formkl.sections.map((section) => {
          const sectionRenderer: SectionRenderer = new SectionRenderer(
            this._formkl,
            section,
            this._model,
          );

          return sectionRenderer.render();
        })}
      </div>
    );
  }

  public render() {
    return (
      <ElForm ref="formklRef" model={this._model.value} labelWidth={130} labelPosition="left">
        {this._renderHeader()}
        {this._renderBody()}
      </ElForm>
    );
  }
}
