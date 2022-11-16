import { Formkl, SchemaBase, SchemaFlat } from "@formkl/shared";
import { Model } from "./Model";
import { Schema } from "./Schema";
import { EventHandler } from "../types/event-handler.type";
import type { FormOptions } from "../types/form-option.type";

import _cloneDeep from "lodash/cloneDeep";

export class Form {
  public formkl: Formkl;

  public model: {
    current?: SchemaBase | SchemaFlat;
    value?: SchemaBase | SchemaFlat;
  };

  private _options?: FormOptions;

  private _schema: Schema;

  constructor(formkl: Formkl, options?: FormOptions) {
    this.formkl = formkl;
    this._options = options;

    // Initialize schema
    this._schema = new Schema(this.formkl);
    // Build a reactive model from schema
    this.model = ref(new Model(this.formkl, this._schema, this._options?.modelDefault).getModel());
  }

  public fill(fillModel: SchemaBase | SchemaFlat) {
    // Reuse the model creation logic for filling data
    const newModel = new Model(this.formkl, this._schema, fillModel);
    // But doesn't have to use its reactive value
    if (this.model.current) {
      this.model.current = _cloneDeep(newModel.getModel());
    } else {
      this.model.value = _cloneDeep(newModel.getModel());
    }
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
          this.model.current || this.model.value,
        );
      } else if (window) {
        const data = await fetch(this.formkl.endpoint || "", {
          method: this.formkl.method?.toUpperCase() || "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.model.current || this.model.value || {}),
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
}
