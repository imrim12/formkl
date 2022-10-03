import { ElButton } from "element-plus";
import { Section, Formkl } from "formkl";
import { computed, h, Ref } from "vue";
import { Form } from "../core/Form";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionHandler } from "../handlers/SectionHandler";
import { DefaultComponent } from "../types/default-component.enum";
import { FieldNode } from "./Field";

// Equivalent to React.createElement, but for Vue
const createElement = h;

interface SectionNodeProps {
  formkl: Formkl;
  section: Section;
  model: Ref<SchemaFlat | SchemaBase>;
}

export const SectionNode = ({ formkl, section, model }: SectionNodeProps) => {
  const _formkl = formkl;
  const _section = section;
  const _fields = section.fields;
  const _model = model;
  const _handler = new SectionHandler(_formkl, _section, _model);

  const SectionHeader = () => {
    return (
      <header class="formkl-section__header">
        <h3>{_section.title}</h3>
      </header>
    );
  };

  const SingleResponse = () => {
    return (
      <div class="formkl-section_response">
        {_fields.map((field) => (
          <FieldNode formkl={_formkl} section={_section} field={field} model={_model} />
        ))}
      </div>
    );
  };

  const MultipleResponse = ({ responseCount }: { responseCount: number }) => {
    const sectionRemoveBtn = Form.getComponentMap().get(DefaultComponent.SECTION_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

    return (
      <>
        {new Array(responseCount).fill(null).map((_, responseIndex) => (
          <div class="formkl-section_response">
            {_fields.map((field) => (
              <FieldNode
                formkl={_formkl}
                section={_section}
                field={field}
                model={_model}
                sectionResponseIndex={responseIndex}
              />
            ))}
            {responseCount > 1 ? (
              <div class="formkl-field_response__remover">
                {createElement(
                  sectionRemoveBtn,
                  {
                    onClick: _handler.removeResponse.bind(_handler, responseIndex),
                  },
                  () => "Remove section",
                )}
              </div>
            ) : null}
          </div>
        ))}
      </>
    );
  };

  const SectionBody = ({ responseCount }: { responseCount: number }) => {
    return (
      <section class="formkl-section__body">
        {_section.multiple ? (
          <MultipleResponse responseCount={responseCount} />
        ) : (
          <SingleResponse />
        )}
      </section>
    );
  };

  const SectionFooter = ({ allowAddMoreResponse }: { allowAddMoreResponse: boolean }) => {
    const sectionAddBtn = Form.getComponentMap().get(DefaultComponent.SECTION_ADD_BTN) || (
      <ElButton />
    );

    return (
      <footer class="formkl-section__footer">
        {allowAddMoreResponse
          ? createElement(
              sectionAddBtn,
              {
                onClick: _handler.addResponse.bind(_handler),
              },
              () => "Add section",
            )
          : null}
      </footer>
    );
  };

  const firstFieldResponse = computed(() => {
    if (_section.multiple) {
      switch (_formkl.model) {
        case "flat":
          const _flatModel = _model.value as SchemaFlat;
          return Object.values(_flatModel[_section.key])[0];
        case "base":
        default:
          const _baseModel = _model.value as SchemaBase;
          return _baseModel.data.find((i) => i.section === _section.key)?.value;
      }
    } else {
      return null;
    }
  });

  const allowAddMoreResponse = computed(
    () => firstFieldResponse.value?.length < Number(_section?.maxResponseAllowed || Infinity),
  );

  return (
    <div
      class={[
        "formkl-section__wrapper",
        _section.multiple ? "formkl-section__wrapper--multiple" : "",
      ]}
    >
      <SectionHeader />
      <SectionBody responseCount={firstFieldResponse.value?.length || 1} />
      <SectionFooter allowAddMoreResponse={allowAddMoreResponse.value} />
    </div>
  );
};
