import { Adapter } from "../core/Adapter";

export const FieldWrapper = (props: any, context: any) => {
  const Wrapper = Adapter.getFieldWrapper()?.component;

  return Wrapper ? (
    <Wrapper {...props}>{props.children || context?.slots?.default?.()}</Wrapper>
  ) : (
    <div className="field__wrapper">
      <label htmlFor={props.field.key} className="field__label">
        <span>{props.field.label}</span>
        <div className="field__inner">{props.children || context?.slots?.default?.()}</div>
      </label>
    </div>
  );
};
