import { Section } from "formkl";
import { getCurrentInstance } from "vue";
import { useSectionHandler } from "../handlers/useSectionHandler";

export const useSection = () => {
  const vm = getCurrentInstance()?.proxy;
  const props: any = vm?.$props;

  const _section = props.section as Section;
  const _handler = useSectionHandler();

  return {
    section: _section,
    handler: _handler,
  };
};
