import { Adapter } from "../core/Adapter";

export const SectionWrapper = (props: any, context: any) => {
  const Wrapper = Adapter.getSectionWrapper()?.component;

  return Wrapper ? (
    <Wrapper {...props}>{props.children || context?.slots?.default?.()}</Wrapper>
  ) : (
    <section className="section__wrapper">{props.children || context?.slots?.default?.()}</section>
  );
};
