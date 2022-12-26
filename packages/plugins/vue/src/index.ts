export * from "./plugins/Checkbox";
export * from "./plugins/Date";
export * from "./plugins/DateRange";
export * from "./plugins/Datetime";
export * from "./plugins/DatetimeRange";
export * from "./plugins/Number";
export * from "./plugins/Paragraph";
export * from "./plugins/Radio";
export * from "./plugins/Select";
export * from "./plugins/Switch";
export * from "./plugins/Text";
export * from "./plugins/Time";
export * from "./plugins/TimeRange";

export * from "./types/default-component.enum";

export * from "./Adapter";
export * from "./Plugin";

import Formkl from "formkl";

const formklFileLoader = () => {
  return {
    name: "formkl-file-loader",
    transform(code: string, id: string) {
      if (id.endsWith(".formkl")) {
        return `export default ${Formkl.parse(code)}`;
      }
    },
  };
};

export default formklFileLoader;
