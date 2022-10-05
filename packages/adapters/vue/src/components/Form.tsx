import { ElForm } from "element-plus";
import { Formkl } from "formkl";
import { Ref, h, defineComponent, PropType } from "vue";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionNode } from "./Section";

// Equivalent to React.createElement, but for Vue
const createElement = h;

export default defineComponent({
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
    const _formkl = props.formkl;
    const _model = props.model;

    return () => (
      <ElForm ref="elFormRef" model={_model.value} labelWidth={130} labelPosition="left">
        {_formkl.title || _formkl.description ? (
          <header class="formkl__header">
            {_formkl.title ? <h2>{_formkl.title}</h2> : null}
            {_formkl.description ? <h3>{_formkl.description}</h3> : null}
          </header>
        ) : null}
        <div class="formkl__body">
          {_formkl.sections.map((section) => (
            <SectionNode formkl={_formkl} section={section} model={_model} />
          ))}
        </div>
      </ElForm>
    );
  },
});
