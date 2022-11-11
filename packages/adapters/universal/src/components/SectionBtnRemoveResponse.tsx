import { Adapter } from "../core/Adapter";

export const SectionBtnRemoveResponse = (props: any, context: any) => {
  const BtnRemoveResponse = Adapter.getSectionBtnRemoveResponse()?.component;

  return BtnRemoveResponse ? (
    <BtnRemoveResponse {...props}>
      {props.children || context?.slots?.default?.()}
    </BtnRemoveResponse>
  ) : (
    <button onClick={props.onClick}>Remove response</button>
  );
};
