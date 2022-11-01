import { ElForm } from "element-plus";
import { h, defineComponent } from "vue-demi";
import { SectionNode } from "./Section";
import { useFormkl } from "../hooks/useFormkl";

// Equivalent to React.createElement, but for Vue
const createElement = h;

export const FormNode = defineComponent({
  name: "FormNode",
  setup() {
    const { formkl, model } = useFormkl();

    return () => (
      <ElForm ref="elFormRef" model={model.value} labelWidth={130} labelPosition="left">
        {formkl.value.title || formkl.value.description ? (
          <header class="formkl__header">
            {formkl.value.title ? <h2>{formkl.value.title}</h2> : null}
            {formkl.value.description ? <h3>{formkl.value.description}</h3> : null}
          </header>
        ) : null}
        <div class="formkl__body">
          {formkl.value.sections.map((section) => (
            <SectionNode section={section} key={section.key} />
          ))}
        </div>
      </ElForm>
    );
  },
});
