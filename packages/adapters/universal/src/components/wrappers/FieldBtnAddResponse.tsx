import { Adapter } from "../../core/Adapter";

export const FieldBtnAddResponse = (props: any, context: any) => {
  const BtnAddResponse = Adapter.getFieldBtnAddResponse()?.component;

  return BtnAddResponse ? (
    <BtnAddResponse {...props}>{props.children || context?.slots?.default?.()}</BtnAddResponse>
  ) : (
    <button onClick={props.onClick}>Add response</button>
  );
};
