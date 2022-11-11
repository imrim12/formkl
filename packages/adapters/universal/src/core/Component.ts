import { FieldDefault, FieldSelection } from "@formkl/shared";

type ComponentOptions<VNodeGeneric, ReactiveGetter> = {
  name: FieldDefault["type"] | FieldSelection["type"];
  renderer: VNodeGeneric;
  reactiveGetter: ReactiveGetter;
  teleport?: string | ((name: string, customSyntax: string) => string);
  customSyntax?: string;
  events?: Record<string, (value?: any) => void>;
};

/**
 * Construct and normalize a plugin.
 */
export class Component<VNodeGeneric = any, ReactiveGetter = any> {
  public name: ComponentOptions<VNodeGeneric, ReactiveGetter>["name"];
  public customSyntax: ComponentOptions<VNodeGeneric, ReactiveGetter>["customSyntax"];
  public reactiveGetter: ComponentOptions<VNodeGeneric, ReactiveGetter>["reactiveGetter"];
  public renderer: ComponentOptions<VNodeGeneric, ReactiveGetter>["renderer"];
  public events: ComponentOptions<VNodeGeneric, ReactiveGetter>["events"];

  constructor(options: ComponentOptions<VNodeGeneric, ReactiveGetter>) {
    if (options.customSyntax && !/^\$\:[a-zA-Z0-9-_.\/]+$/g.test(options.customSyntax)) {
      throw new Error(
        "[Formkl]: Component with custom syntax must start with '$:' and only contains alphanumeric characters, '-', '_', '.', and '/'.",
      );
    }

    this.name = options.name;
    this.renderer = options.renderer;
    this.reactiveGetter = options.reactiveGetter;
    this.customSyntax = options.customSyntax;
    this.events = options.events || {};
  }
}
