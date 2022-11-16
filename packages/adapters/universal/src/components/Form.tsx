import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { SectionNode } from "./Section";

import { FormWrapper } from "./wrappers/FormWrapper";

export const FormNode = (props: {
  formkl: Formkl;
  model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  };
}) => {
  return (
    <FormWrapper>
      {props.formkl.title || props.formkl.description ? (
        <header className="formkl__header">
          {props.formkl.title ? <h2>{props.formkl.title}</h2> : null}
          {props.formkl.description ? <h3>{props.formkl.description}</h3> : null}
        </header>
      ) : null}
      <div className="formkl__body">
        {props.formkl.sections.map((section) => (
          <SectionNode
            section={section}
            key={section.key}
            formkl={props.formkl}
            model={props.model}
          />
        ))}
      </div>
    </FormWrapper>
  );
};
