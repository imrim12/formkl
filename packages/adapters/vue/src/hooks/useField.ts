import { getCurrentInstance } from "vue";
import { Form } from "../core/Form";
import { Rule } from "../core/Rule";
import { useFieldHandler } from "../handlers/useFieldHandler";
import { useFormkl } from "./useFormkl";

export const useField = () => {
  const { formkl } = useFormkl();

  const vm = getCurrentInstance()?.proxy;
  const props: any = vm?.$props;

  const _section = props.section;
  const _field = props.field;
  const _sectionResponseIndex = props.sectionResponseIndex;
  const _handler = useFieldHandler();
  const _component = Form.getComponentMap().get(_field.type);
  const _input = _handler.getReactiveInput();

  const _rules = new Rule(formkl.value, _field).getRules();

  return {
    section: _section,
    field: _field,
    sectionResponseIndex: _sectionResponseIndex,
    handler: _handler,
    component: _component,
    input: _input,
    rules: _rules,
  };
};
