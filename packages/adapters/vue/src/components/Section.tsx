import { ElButton } from "element-plus";
import { Section } from "formkl";
import { computed, defineComponent, h, PropType, readonly, Ref } from "vue";
import { Form } from "../core/Form";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { DefaultComponent } from "../types/default-component.enum";
import { FieldNode } from "./Field";
import { useSection } from "../hooks/useSection";
import { useFormkl } from "../hooks/useFormkl";

// Equivalent to React.createElement, but for Vue
const createElement = h;

export const SectionNode = defineComponent({
  name: "SectionNode",
  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    },
  },
  setup() {
    const { formkl, model } = useFormkl();
    const { section, handler } = useSection();

    const SectionAddBtn = Form.getComponentMap().get(DefaultComponent.SECTION_ADD_BTN) || (
      <ElButton />
    );

    const SectionRemoveBtn = Form.getComponentMap().get(DefaultComponent.SECTION_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

    const firstFieldResponse = computed(() => {
      if (section.multiple) {
        switch (formkl.value.model) {
          case "flat":
            const _flatModel = model.value as SchemaFlat;
            return Object.values(_flatModel[section.key])[0];
          case "base":
          default:
            const _baseModel = model.value as SchemaBase;
            return _baseModel.data.find((i) => i.section === section.key)?.value;
        }
      } else {
        return null;
      }
    });

    const allowAddMoreResponse = computed(
      () => firstFieldResponse.value?.length < Number(section?.maxResponseAllowed || Infinity),
    );

    const numberOfAnswers = computed(() => firstFieldResponse.value?.length || 1);

    return () => (
      <div
        class={[
          "formkl-section__wrapper",
          section.multiple ? "formkl-section__wrapper--multiple" : "",
        ]}
      >
        <header class="formkl-section__header">
          <h3>{section.title}</h3>
        </header>
        <section class="formkl-section__body">
          {section.multiple ? (
            new Array(numberOfAnswers.value).fill(null).map((_, responseIndex) => (
              <div class="formkl-section_response">
                {section.fields.map((field) => (
                  <FieldNode section={section} field={field} sectionResponseIndex={responseIndex} />
                ))}
                {numberOfAnswers.value > 1 ? (
                  <div class="formkl-section_response__remover">
                    {createElement(
                      SectionRemoveBtn,
                      {
                        onClick: handler.removeResponse.bind(handler, responseIndex),
                      },
                      () => "Remove section",
                    )}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div class="formkl-section_response">
              {section.fields.map((field) => (
                <FieldNode section={section} field={field} />
              ))}
            </div>
          )}
        </section>
        <footer class="formkl-section__footer">
          {allowAddMoreResponse.value
            ? createElement(
                SectionAddBtn,
                {
                  onClick: handler.addResponse.bind(handler),
                },
                () => "Add section",
              )
            : null}
        </footer>
      </div>
    );
  },
});
