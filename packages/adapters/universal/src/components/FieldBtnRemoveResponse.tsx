import { Adapter } from "../core/Adapter";

export const FieldBtnRemoveResponse = (props: any, context: any) => {
  const BtnRemoveResponse = Adapter.getFieldBtnRemoveResponse()?.component;

  return BtnRemoveResponse ? (
    <BtnRemoveResponse {...props}>
      {props.children || context?.slots?.default?.()}
    </BtnRemoveResponse>
  ) : (
    <button onClick={props.onClick}>Remove response</button>
  );
};
