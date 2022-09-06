declare module "formkl" {
  interface Validation extends ValidationOperator {
    regex?: string;
    $and?: Array<ValidationOperator>;
    $or?: Array<ValidationOperator>;
  }

  interface ValidationOperator {
    $gt?: string | number;
    $lt?: string | number;
    $gteq?: string | number;
    $lteq?: string | number;
    $eq?: string | number;
    $and?: Array<ValidationOperator>;
    $or?: Array<ValidationOperator>;
  }

  interface FieldDefault {
    type:
      | "text"
      | "paragraph"
      | "number"
      | "date"
      | "time"
      | "datetime"
      | "daterange"
      | "timerange"
      | "datetimerange";
    label?: string;
    require: boolean;
    multiple?: boolean;
    validation?: Validation;
  }

  interface FieldSelection {
    type: "checkbox" | "radio" | "select";
    label?: string;
    fetchUrl?: string;
    require: boolean;
    multiple?: boolean;
    options: Array<string>;
    validation?: Validation;
  }

  interface Section {
    title: string;
    multiple?: boolean;
    fields: Array<FieldDefault | FieldSelection>;
  }

  interface Formkl {
    title?: string;
    sections: Array<Section>;
  }

  const parse: (str: string) => Formkl;
}
