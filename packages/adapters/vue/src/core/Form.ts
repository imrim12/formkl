import { Adapter } from "@formkl/vue-plugins";
import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { ref, Ref, VNode } from "vue-demi";
import { Model } from "./Model";
import { Schema } from "./Schema";
import { EventHandler } from "../types/event-handler.type";

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
  private static _eventMap: Map<string, Record<string, EventHandler>> = new Map();

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
    this.model = ref(new Model(this.formkl, this._schema, this._options?.modelDefault).getModel());
  }

  public fill(fillModel: SchemaBase | SchemaFlat) {
    // Reuse the model creation logic for filling data
    const newModel = new Model(this.formkl, this._schema, fillModel);
    // But doesn't have to use its reactive value
    this.model.value = _cloneDeep(newModel.getModel());
  }

  public async submit(
    callbackSuccess?: (model: SchemaBase | SchemaFlat) => void,
    callbackError?: (error: any) => void,
    callbackFinally?: () => void,
  ) {
    try {
      let response: any = null;

      if (!this.formkl.endpoint && !this.formkl.method) {
        throw new Error(
          "'endpoint' and 'method' must be specified for the use of form submission!",
        );
      }

      if (this._options?.submitMethod) {
        response = await this._options.submitMethod(
          this.formkl.endpoint || "",
          this.formkl.method || "post",
          this.model.value,
        );
      } else if (window) {
        const data = await fetch(this.formkl.endpoint || "", {
          method: this.formkl.method?.toUpperCase() || "POST",
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

  public static getEventMap(): Map<string, Record<string, EventHandler>> {
    return this._eventMap;
  }
}
