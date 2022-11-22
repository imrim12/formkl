import type { SectionNodeProps } from "../../components/SectionNode";
import { DefaultValueMap } from "../../createSchema";
import { SchemaBase, SchemaFlat } from "@formkl/shared";

import _get from "lodash/get";
import _set from "lodash/set";
import _omit from "lodash/omit";

export const useSectionHandler = (props: SectionNodeProps) => {
  const { formkl, section, model } = props;

  const onFieldChange = () => {
    props.onSectionChange();
  };

  const onAddResponse = () => {
    switch (formkl.model) {
      case "base":
        const baseModel = model as SchemaBase;

        baseModel.data.forEach((i) => {
          if (i.section === section.key) {
            const _field = section.fields.find((f) => f.key === i.field);

            const value = DefaultValueMap[_field?.type || "text"];

            i.value.push(value);
          }
        });
        break;
      case "flat":
        const flatModel = model as SchemaFlat;

        Object.keys(flatModel[section.key]).forEach((fieldKey) => {
          const _field = section.fields.find((f) => f.key === fieldKey);

          const value = DefaultValueMap[_field?.type || "text"];

          flatModel[section.key][fieldKey].push(value);
        });
        break;
    }

    props.onSectionChange();
  };

  const onRemoveResponse = (sectionResponseIndex: number) => {
    switch (formkl.model) {
      case "base":
        const baseModel = model as SchemaBase;

        baseModel.data.forEach((i) => {
          if (i.section === section.key) {
            i.value.splice(sectionResponseIndex, 1);
          }
        });
        break;
      case "flat":
        const flatModel = model as SchemaFlat;

        Object.keys(flatModel[section.key]).forEach((fieldKey) => {
          flatModel[section.key][fieldKey].splice(sectionResponseIndex, 1);
        });
        break;
    }
    props.onSectionChange();
  };

  return {
    onFieldChange,
    onAddResponse,
    onRemoveResponse,
  };
};
