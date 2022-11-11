import {
  FieldDefault,
  FieldSelection,
  Formkl,
  SchemaBase,
  SchemaFlat,
  Section,
} from "@formkl/shared";
import { Component } from "./Component";

type AdapterOptions = {
  FormWrapper?: {
    component?: any;
    returnProps?: (options: {
      formModel: SchemaBase | SchemaFlat;
      formkl: Formkl;
    }) => Record<string, any>;
  };
  SectionWrapper?: {
    component?: any;
    returnProps?: (options: {
      formModel: SchemaBase | SchemaFlat;
      formkl: Formkl;
      section: Section;
    }) => Record<string, any>;
  };
  FieldWrapper?: {
    component?: any;
    returnProps?: (options: {
      formModel: SchemaBase | SchemaFlat;
      formkl: Formkl;
      section: Section;
      field: FieldDefault | FieldSelection;
    }) => Record<string, any>;
  };
  SectionBtnAddResponse?: { component?: any };
  SectionBtnRemoveResponse?: { component?: any };
  FieldBtnAddResponse?: { component?: any };
  FieldBtnRemoveResponse?: { component?: any };
};

/**
 * Static Adapter.
 */
export class Adapter {
  private static instance: Adapter;
  private static options: AdapterOptions = {};

  private constructor() {
    if (Adapter.instance) {
      return Adapter.instance;
    } else {
      Adapter.instance = new Adapter();
    }
  }

  private static components: Map<string, Component<any>["renderer"]> = new Map();

  public static setOptions(options: AdapterOptions) {
    Object.assign(Adapter.options, options);
  }

  public static registerComponent<T = any>(...components: Component<T>[]) {
    components.forEach((component) => {
      Adapter.components.set(component.customSyntax || component.name, component.renderer);
    });
  }

  public static getComponent(name: string) {
    return Adapter.components.get(name);
  }

  public static getFormWrapper() {
    return Adapter.options.FormWrapper;
  }

  public static getSectionWrapper() {
    return Adapter.options.SectionWrapper;
  }

  public static getFieldWrapper() {
    return Adapter.options.FieldWrapper;
  }

  public static getSectionBtnAddResponse() {
    return Adapter.options.SectionBtnAddResponse;
  }

  public static getSectionBtnRemoveResponse() {
    return Adapter.options.SectionBtnRemoveResponse;
  }

  public static getFieldBtnAddResponse() {
    return Adapter.options.FieldBtnAddResponse;
  }

  public static getFieldBtnRemoveResponse() {
    return Adapter.options.FieldBtnRemoveResponse;
  }
}
