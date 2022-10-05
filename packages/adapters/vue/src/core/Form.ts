import { FieldDefault, FieldSelection, Formkl, Section } from "formkl";
import { Ref, VNode } from "vue";
import { Adapter } from "./Adapter";
import { Model } from "./Model";
import { Schema, SchemaBase, SchemaFlat } from "./Schema";

import _cloneDeep from "lodash/cloneDeep";

export interface FormOptions {
  /**
   * The HTTP request instance
   */
  $http?: any;
  modelDefault?: SchemaBase | SchemaFlat;
  submitMethod?: (
    url: string,
    method: Formkl["method"],
    model: SchemaBase | SchemaFlat,
  ) => Promise<any>;
}

export class Form {
  public formkl: Formkl;

  public model: Ref<SchemaBase | SchemaFlat>;

  /**
   * Component map
   */
  private static _map: Map<string, VNode> = new Map();
  /**
   * Custom event map
   */
  private static _eventMap: Map<
    string,
    Record<
      string,
      (
        value: any,
        formkl: Formkl,
        section: Section,
        field: FieldDefault | FieldSelection,
        model: Ref<SchemaBase | SchemaFlat>,
        responseIndex?: number,
      ) => void
    >
  > = new Map();

  private _options?: FormOptions;

  private _schema: Schema;

  constructor(formkl: Formkl, options?: FormOptions) {
    this.formkl = formkl;
    this._options = options;

    // Register all plugins
    Adapter.getPlugins().forEach((plugin) => {
      Form._map.set(plugin.name, plugin.getComponent());
      Form._eventMap.set(plugin.name, plugin.getEvents());
    });

    // Initialize schema
    this._schema = new Schema(this.formkl);
    // Build a reactive model from schema
    const model = new Model(this.formkl, this._schema, this._options?.modelDefault);
    this.model = model.getReactiveValue();
  }

  public fill(fillModel: SchemaBase | SchemaFlat) {
    // Reuse the model creation logic for filling data
    const newModel = new Model(this.formkl, this._schema, fillModel);
    // But doesn't have to use its reactive value
    this.model.value = _cloneDeep(newModel.getValue());
  }

  public async submit(
    callbackSuccess?: (model: SchemaBase | SchemaFlat) => void,
    callbackError?: (error: any) => void,
    callbackFinally?: () => void,
  ) {
    try {
      let response: any = null;

      if (this._options?.submitMethod) {
        response = await this._options.submitMethod(
          this.formkl.endpoint,
          this.formkl.method,
          this.model.value,
        );
      } else if (window) {
        const data = await fetch(this.formkl.endpoint, {
          method: this.formkl.method.toUpperCase() || "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.model.value || {}),
        });

        response = await data.json();
      }
      callbackSuccess?.(response);

      return response;
    } catch (error) {
      callbackError?.(error);

      return null;
    } finally {
      callbackFinally?.();

      return null;
    }
  }

  public static getComponentMap(): Map<string, VNode> {
    return this._map;
  }

  public static getEventMap(): Map<
    string,
    Record<
      string,
      (
        value: any,
        formkl: Formkl,
        section: Section,
        field: FieldDefault | FieldSelection,
        model: Ref<SchemaBase | SchemaFlat>,
        responseIndex?: number,
      ) => void
    >
  > {
    return this._eventMap;
  }
}
