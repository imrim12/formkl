import { Section, SchemaBase, SchemaFlat } from "@formkl/shared";
import { DefaultComponent } from "@formkl/plugin-vue";
import { ElButton } from "element-plus";
import { computed, defineComponent, h, PropType } from "vue-demi";
import { Form } from "../core/Form";
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
  setup(props) {
    const { formkl, model } = useFormkl();
    const { handler } = useSection();

    const SectionAddBtn = Form.getComponentMap().get(DefaultComponent.SECTION_ADD_BTN) || (
      <ElButton />
    );

    const SectionRemoveBtn = Form.getComponentMap().get(DefaultComponent.SECTION_REMOVE_BTN) || (
      <ElButton type="danger" />
    );

    const firstFieldResponse = computed(() => {
      if (props.section.multiple) {
        switch (formkl.value.model) {
          case "flat":
            const modelFlat = model.value as SchemaFlat;
            return Object.values(modelFlat[props.section.key])[0];
          case "base":
          default:
            const modelBase = model.value as SchemaBase;
            return modelBase.data.find((i) => i.section === props.section.key)?.value;
        }
      } else {
        return null;
      }
    });

    const computedAllowMoreResponse = computed(
      () =>
        firstFieldResponse.value?.length < Number(props.section?.maxResponseAllowed || Infinity),
    );

    const computedAnswerCount = computed(() => firstFieldResponse.value?.length || 1);

    return () => (
      <div
        class={[
          "formkl-section__wrapper",
          props.section.multiple ? "formkl-section__wrapper--multiple" : "",
        ]}
      >
        <header class="formkl-section__header">
          <h3>{props.section.title}</h3>
        </header>
        <section class="formkl-section__body">
          {props.section.multiple ? (
            new Array(computedAnswerCount.value).fill(null).map((_, responseIndex) => (
              <div class="formkl-section_response">
                {props.section.fields.map((field) => (
                  <FieldNode
                    section={props.section}
                    field={field}
                    sectionResponseIndex={responseIndex}
                    key={field.key}
                  />
                ))}
                {computedAnswerCount.value > 1 ? (
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
              {props.section.fields.map((field) => (
                <FieldNode section={props.section} field={field} key={field.key} />
              ))}
            </div>
          )}
        </section>
        <footer class="formkl-section__footer">
          {computedAllowMoreResponse.value
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
