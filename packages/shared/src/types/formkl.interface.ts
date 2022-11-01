import { HttpMethod } from "./http-method.type";
import { ModelType } from "./model.type";
import { Section } from "./section.interface";

export interface Formkl {
  title?: string;
  description?: string;
  model: ModelType;
  method?: HttpMethod;
  endpoint?: string;
  sections: Array<Section>;
}
