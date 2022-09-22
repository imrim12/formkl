import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { Ref, VNode } from "vue";
import { SchemaBase, SchemaFlat } from "./Schema";

interface PluginOptions {
  name: string;
  component: VNode;
  events?: Record<string, any>;
}

/**
 * Construct and normalize a plugin.
 */
export class Plugin {
  public name: string;

  private _component: VNode;
  private _events: Record<
    string,
    (
      value: any,
      formkl: Formkl,
      section: Section,
      field: FieldDefault | FieldSelection,
      model: Ref<SchemaBase | SchemaFlat>,
    ) => void
  >;

  constructor(options: PluginOptions) {
    this.name = options.name;
    this._component = options.component;
    this._events = options.events || {};
  }

  public getComponent() {
    return this._component;
  }

  public getEvents() {
    return this._events;
  }
}
