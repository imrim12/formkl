import { ElForm } from "element-plus";
import { h, defineComponent } from "vue";
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
        {formkl.title || formkl.description ? (
          <header class="formkl__header">
            {formkl.title ? <h2>{formkl.title}</h2> : null}
            {formkl.description ? <h3>{formkl.description}</h3> : null}
          </header>
        ) : null}
        <div class="formkl__body">
          {formkl.sections.map((section) => (
            <SectionNode section={section} />
          ))}
        </div>
      </ElForm>
    );
  },
});
