import { Adapter } from "../../core/Adapter";

export const SectionBtnAddResponse = (props: any, context: any) => {
  const BtnAddResponse = Adapter.getSectionBtnAddResponse()?.component;

  return BtnAddResponse ? (
    <BtnAddResponse {...props}>{props.children || context?.slots?.default?.()}</BtnAddResponse>
  ) : (
    <button onClick={props.onClick}>Add response</button>
  );
};
