import type { FieldNodeProps } from "./components/FieldNode";
import type { FormNodeProps } from "./components/FormNode";
import type { SectionNodeProps } from "./components/SectionNode";

import { createFormNode } from "./components/FormNode";

export type FormOptions = {
  FormWrapper?: {
    component?: any;
    returnProps?: (props: FormNodeProps) => Record<string, any>;
  };
  SectionWrapper?: {
    component?: any;
    returnProps?: (props: SectionNodeProps) => Record<string, any>;
  };
  FieldWrapper?: {
    component?: any;
    returnProps?: (props: FieldNodeProps) => Record<string, any>;
  };
  SectionBtnAddResponse?: { component?: any };
  SectionBtnRemoveResponse?: { component?: any };
  FieldBtnAddResponse?: { component?: any };
  FieldBtnRemoveResponse?: { component?: any };
};

export const createForm = (options: FormOptions = {}) => {
  return createFormNode(options);
};
