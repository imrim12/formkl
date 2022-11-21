import type { SchemaFlat, SchemaBase } from "@formkl/shared";
import type { SectionNodeProps } from "../components/SectionNode";
import { useSectionHandler } from "./handlers/useSectionHandler";

export const useSection = (props: SectionNodeProps) => {
  const { formkl, model, section } = props;

  const computedSectionFirstResponse = () => {
    if (section.multiple) {
      switch (formkl.model) {
        case "flat":
          const modelFlat = model as SchemaFlat;
          return Object.values(modelFlat[section.key])[0];
        case "base":
        default:
          const modelBase = model as SchemaBase;
          return modelBase.data.find((i) => i.section === section.key)?.value;
      }
    } else {
      return null;
    }
  };

  const computedSectionResponseCount = () => computedSectionFirstResponse()?.length || 1;

  const computedSectionAllowMoreResponse = () =>
    computedSectionFirstResponse()?.length < Number(section?.maxResponseAllowed || Infinity);

  const handler = useSectionHandler(props);

  return {
    formkl,
    model,
    section,
    handler,
    computedSectionFirstResponse,
    computedSectionResponseCount,
    computedSectionAllowMoreResponse,
  };
};
