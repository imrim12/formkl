import type { SectionNodeProps } from "../../components/SectionNode";

export const useSectionHandler = (props: SectionNodeProps) => {
  const onFieldChange = () => {
    props.onSectionChange();
  };

  const onAddResponse = () => {};

  const onRemoveResponse = (sectionResponseIndex: number) => {};

  return {
    onFieldChange,
    onAddResponse,
    onRemoveResponse,
  };
};
