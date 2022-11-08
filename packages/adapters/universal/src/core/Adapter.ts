import { Component } from "./Component";
import { Plugin } from "./Plugin";

/**
 * Static Adapter.
 */
export class Adapter {
  private static _instance: Adapter;

  private constructor() {
    if (Adapter._instance) {
      return Adapter._instance;
    } else {
      Adapter._instance = new Adapter();
    }
  }

  private static plugins: Map<string, Plugin<any>> = new Map();
  private static components: Map<string, Component<any>["renderer"]> = new Map();

  public static registerPlugin<T>(...plugins: Plugin<T>[]) {
    plugins.forEach((plugin) => {
      Adapter.plugins.set(plugin.name, plugin);
    });
  }

  public static registerComponent<T>(...components: Component<T>[]) {
    components.forEach((component) => {
      if (component.customSyntax && !/^\$\:[a-zA-Z0-9-_.\/]+$/g.test(component.customSyntax)) {
        throw new Error(
          "[Formkl]: Component with custom syntax must start with '$:' and only contains alphanumeric characters, '-', '_', '.', and '/'.",
        );
      }

      Adapter.components.set(component.name, component.renderer);
    });
  }

  public static getPlugin(name: string) {
    return Adapter.plugins.get(name);
  }

  public static getComponent(name: string) {
    return Adapter.components.get(name);
  }
}
