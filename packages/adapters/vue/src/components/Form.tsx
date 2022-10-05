import { ElForm } from "element-plus";
import { Formkl } from "formkl";
import { Ref, h, defineComponent, PropType } from "vue";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionNode } from "./Section";

// Equivalent to React.createElement, but for Vue
const createElement = h;

export const FormNode = defineComponent({
  name: "FormNode",
  props: {
    formkl: {
      type: Object as PropType<Formkl>,
      required: true,
    },
    model: {
      type: Object as PropType<Ref<SchemaBase | SchemaFlat>>,
      required: true,
    },
  },

  setup(props) {
    return () => (
      <ElForm ref="elFormRef" model={props.model.value} labelWidth={130} labelPosition="left">
        {props.formkl.title || props.formkl.description ? (
          <header class="formkl__header">
            {props.formkl.title ? <h2>{props.formkl.title}</h2> : null}
            {props.formkl.description ? <h3>{props.formkl.description}</h3> : null}
          </header>
        ) : null}
        <div class="formkl__body">
          {props.formkl.sections.map((section) => (
            <SectionNode formkl={props.formkl} section={section} model={props.model} />
          ))}
        </div>
      </ElForm>
    );
  },
});
