import { ElButton } from "element-plus";
import { Section, FieldDefault, FieldSelection, Formkl } from "formkl";
import { computed, h, Ref } from "vue";
import { Form } from "../core/Form";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionHandler } from "../handlers/SectionHandler";
import { DefaultComponent } from "../types/default-component.enum";
import { FieldRenderer } from "./FieldRenderer";

export class SectionRenderer {
  private _formkl: Formkl;
  private _section: Section;
  private _fields: Array<FieldDefault | FieldSelection>;
  private _model: Ref<SchemaBase | SchemaFlat>;
  private _handler: SectionHandler;

  constructor(formkl: Formkl, section: Section, model: Ref<SchemaFlat | SchemaBase>) {
    this._formkl = formkl;
    this._section = section;
    this._fields = section.fields;
    this._model = model;
    this._handler = new SectionHandler(this._formkl, this._section, this._model);
  }

  private _renderHeader() {
    return (
      <header class="formkl-section__header">
        <h3>{this._section.title}</h3>
      </header>
    );
  }

  private _renderSingleResponse() {
    return (
      <div class="formkl-section_response">
        {this._fields.map((field) => {
          const fieldRenderer = new FieldRenderer(this._formkl, this._section, field, this._model);

          return fieldRenderer.render();
        })}
      </div>
    );
  }

  private _renderMultipleResponse(responseCount: number) {
    const sectionRemoveBtn = Form.getComponentMap().get(DefaultComponent.SECTION_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

    return new Array(responseCount).fill(null).map((_, responseIndex) => (
      <div class="formkl-section_response">
        {this._fields.map((field) => {
          const fieldRenderer: FieldRenderer = new FieldRenderer(
            this._formkl,
            this._section,
            field,
            this._model,
            responseIndex,
          );

          return fieldRenderer.render();
        })}
        {responseCount > 1 ? (
          <div class="formkl-field_response__remover">
            {h(
              sectionRemoveBtn,
              {
                onClick: this._handler.removeResponse.bind(this._handler, responseIndex),
              },
              () => "Remove section",
            )}
          </div>
        ) : null}
      </div>
    ));
  }

  private _renderBody(responseCount: number) {
    return (
      <section class="formkl-section__body">
        {this._section.multiple
          ? this._renderMultipleResponse(responseCount)
          : this._renderSingleResponse()}
      </section>
    );
  }

  private _renderFooter(allowAddMoreResponse: boolean) {
    const sectionAddBtn = Form.getComponentMap().get(DefaultComponent.SECTION_ADD_BTN) || (
      <ElButton />
    );

    return (
      <footer class="formkl-section__footer">
        {allowAddMoreResponse
          ? h(
              sectionAddBtn,
              {
                onClick: this._handler.addResponse.bind(this._handler),
              },
              () => "Add section",
            )
          : null}
      </footer>
    );
  }

  public render() {
    const firstFieldResponse = computed(() => {
      if (this._section.multiple) {
        switch (this._formkl.model) {
          case "flat":
            const _flatModel = this._model.value as SchemaFlat;
            return Object.values(_flatModel[this._section.key])[0];
          case "base":
          default:
            const _baseModel = this._model.value as SchemaBase;
            return _baseModel.data.find((i) => i.section === this._section.key)?.value;
        }
      } else {
        return null;
      }
    });

    const allowAddMoreResponse = computed(
      () =>
        firstFieldResponse.value?.length < Number(this._section?.maxResponseAllowed || Infinity),
    );

    return (
      <div
        class={[
          "formkl-section__wrapper",
          this._section.multiple ? "formkl-section__wrapper--multiple" : "",
        ]}
      >
        {this._renderHeader()}
        {this._renderBody(firstFieldResponse.value?.length || 1)}
        {this._renderFooter(allowAddMoreResponse.value)}
      </div>
    );
  }
}
