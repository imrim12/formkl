import { FieldDefault, FieldSelection } from "@formkl/shared";

type ComponentOptions<T> = {
  name: FieldDefault["type"] | FieldSelection["type"];
  renderer: T;
  teleport?: string | ((name: string, customSyntax: string) => string);
  customSyntax?: string;
  events?: Record<string, (value?: any) => void>;
};

/**
 * Construct and normalize a plugin.
 */
export class Component<T> {
  public name: ComponentOptions<T>["name"];
  public customSyntax: ComponentOptions<T>["customSyntax"];
  public renderer: ComponentOptions<T>["renderer"];
  public events: ComponentOptions<T>["events"];

  constructor(options: ComponentOptions<T>) {
    this.name = options.name;
    this.renderer = options.renderer;
    this.customSyntax = options.customSyntax;
    this.events = options.events || {};
  }
}
