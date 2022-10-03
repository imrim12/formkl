import { ElForm } from "element-plus";
import { Formkl } from "formkl";
import { Ref, h } from "vue";
import { SchemaBase, SchemaFlat } from "../core/Schema";
import { SectionNode } from "./Section";

// Equivalent to React.createElement, but for Vue
const createElement = h;

interface FormNodeProps {
  formkl: Formkl;
  model: Ref<SchemaBase | SchemaFlat>;
}

export const FormNode = ({ formkl, model }: FormNodeProps) => {
  const _formkl = formkl;
  const _model = model;

  const FormHeader = () => {
    return _formkl.title || _formkl.description ? (
      <header class="formkl__header">
        {_formkl.title ? <h2>{_formkl.title}</h2> : null}
        {_formkl.description ? <h3>{_formkl.description}</h3> : null}
      </header>
    ) : null;
  };

  const FormBody = () => {
    return (
      <div class="formkl__body">
        {_formkl.sections.map((section) => (
          <SectionNode formkl={_formkl} section={section} model={_model} />
        ))}
      </div>
    );
  };

  return (
    <ElForm ref="formklRef" model={_model.value} labelWidth={130} labelPosition="left">
      <FormHeader />
      <FormBody />
    </ElForm>
  );
};
