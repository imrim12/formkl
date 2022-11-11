import { Adapter } from "../core/Adapter";

export const FormWrapper = (props: any, context: any) => {
  const Wrapper = Adapter.getFormWrapper()?.component;

  return Wrapper ? (
    <Wrapper {...props}>{props.children || context?.slots?.default?.()}</Wrapper>
  ) : (
    <form className="form__wrapper" onSubmit={props.onSubmit}>
      {props.children || context?.slots?.default?.()}
    </form>
  );
};
