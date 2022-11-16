import { Formkl, SchemaBase, SchemaFlat, Section } from "@formkl/shared";
import { useSectionHandler } from "../handlers/useSectionHandler";

export const useSection = (props: {
  key: string;
  formkl: Formkl;
  model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  };
  section: Section;
}) => {
  const _handler = useSectionHandler(props);

  return {
    handler: _handler,
  };
};
