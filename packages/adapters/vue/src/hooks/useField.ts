import { getCurrentInstance } from "vue-demi";
import { Form } from "../core/Form";
import { Rule } from "../core/Rule";
import { useFieldHandler } from "../hooks/useFieldHandler";
import { useFormkl } from "./useFormkl";

export const useField = () => {
  const { formkl } = useFormkl();

  const vm = getCurrentInstance()?.proxy;
  const props: any = vm?.$props;

  const _sectionResponseIndex = props.sectionResponseIndex;
  const _handler = useFieldHandler();
  const _component = Form.getComponentMap().get(props.field.type);
  const _input = _handler.getReactiveInput();

  const _rules = new Rule(formkl.value, props.field).getRules();

  return {
    sectionResponseIndex: _sectionResponseIndex,
    handler: _handler,
    component: _component,
    input: _input,
    rules: _rules,
  };
};
