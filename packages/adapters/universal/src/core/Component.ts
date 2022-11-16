import { FieldDefault, FieldSelection } from "@formkl/shared";

type ComponentOptions<VNodeGeneric> = {
  name: FieldDefault["type"] | FieldSelection["type"];
  renderer: VNodeGeneric;
  teleport?: string | ((name: string, customSyntax: string) => string);
  customSyntax?: string;
  events?: Record<string, (value?: any) => void>;
};

/**
 * Construct and normalize a plugin.
 */
export class Component<VNodeGeneric = any> {
  public name: ComponentOptions<VNodeGeneric>["name"];
  public customSyntax: ComponentOptions<VNodeGeneric>["customSyntax"];
  public renderer: ComponentOptions<VNodeGeneric>["renderer"];
  public events: ComponentOptions<VNodeGeneric>["events"];

  constructor(options: ComponentOptions<VNodeGeneric>) {
    if (options.customSyntax && !/^\$\:[a-zA-Z0-9-_.\/]+$/g.test(options.customSyntax)) {
      throw new Error(
        "[Formkl]: Component with custom syntax must start with '$:' and only contains alphanumeric characters, '-', '_', '.', and '/'.",
      );
    }

    this.name = options.name;
    this.renderer = options.renderer;
    this.customSyntax = options.customSyntax;
    this.events = options.events || {};
  }
}
