import type { HttpMethod } from "./http-method.type";
import type { ModelType } from "./model.type";
import type { Section } from "./section.interface";

export interface Formkl {
  title?: string;
  description?: string;
  model: ModelType;
  method?: HttpMethod;
  endpoint?: string;
  sections: Array<Section>;
}
