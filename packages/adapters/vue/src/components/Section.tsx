import { ElButton } from "element-plus";
import { Section, Formkl } from "formkl";
import { computed, defineComponent, h, PropType, Ref } from "vue";
import { Form } from "../core/Form";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionHandler } from "../handlers/SectionHandler";
import { DefaultComponent } from "../types/default-component.enum";
import { FieldNode } from "./Field";

// Equivalent to React.createElement, but for Vue
const createElement = h;

export const SectionNode = defineComponent({
  name: "SectionNode",
  props: {
    formkl: {
      type: Object as PropType<Formkl>,
      required: true,
    },
    section: {
      type: Object as PropType<Section>,
      required: true,
    },
    model: {
      type: Object as PropType<Ref<SchemaFlat | SchemaBase>>,
      required: true,
    },
  },
  setup(props) {
    const _formkl = props.formkl;
    const _section = props.section;
    const _fields = props.section.fields;
    const _model = props.model;
    const _handler = new SectionHandler(_formkl, _section, _model);

    const SectionAddBtn = Form.getComponentMap().get(DefaultComponent.SECTION_ADD_BTN) || (
      <ElButton />
    );

    const SectionRemoveBtn = Form.getComponentMap().get(DefaultComponent.SECTION_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

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

    const numberOfAnswers = computed(() => firstFieldResponse.value?.length || 1);

    return () => (
      <div
        class={[
          "formkl-section__wrapper",
          _section.multiple ? "formkl-section__wrapper--multiple" : "",
        ]}
      >
        <header class="formkl-section__header">
          <h3>{_section.title}</h3>
        </header>
        <section class="formkl-section__body">
          {_section.multiple ? (
            new Array(numberOfAnswers.value).fill(null).map((_, responseIndex) => (
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
                {numberOfAnswers.value > 1 ? (
                  <div class="formkl-section_response__remover">
                    {createElement(
                      SectionRemoveBtn,
                      {
                        onClick: _handler.removeResponse.bind(_handler, responseIndex),
                      },
                      () => "Remove section",
                    )}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div class="formkl-section_response">
              {_fields.map((field) => (
                <FieldNode formkl={_formkl} section={_section} field={field} model={_model} />
              ))}
            </div>
          )}
        </section>
        <footer class="formkl-section__footer">
          {allowAddMoreResponse.value
            ? createElement(
                SectionAddBtn,
                {
                  onClick: _handler.addResponse.bind(_handler),
                },
                () => "Add section",
              )
            : null}
        </footer>
      </div>
    );
  },
});
