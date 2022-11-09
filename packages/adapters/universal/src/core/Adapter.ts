import { Component } from "./Component";
import { Handler } from "./Handler";

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

  private static handlers: Array<Handler> = [];
  private static components: Map<string, Component<any>["renderer"]> = new Map();

  public static registerHandler(...handlers: Handler[]) {
    Adapter.handlers.push(...handlers);
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

  /**
   * Execute a hook from all registered handlers.
   *
   * If a hook returns a falsy value, `doContinue` will be false and the lifecycle will be suspended.
   *
   * If a hook does not return anything, it will be resolved using the default payload.
   *
   * If there're multiple handlers that use the same hook, `resolvedPayload` will resolve the last overriden payload.
   *
   */
  public static async callHook(hookName: keyof Handler["hook"], payload?: any) {
    const results = await Promise.all(
      Adapter.handlers
        .filter((handler) => handler.gethook()[hookName])
        .map((handler) => {
          const resolvedPayload = handler.gethook()[hookName]?.call(handler, payload);

          return resolvedPayload === undefined ? payload : resolvedPayload;
        }),
    );

    const resolvedResults = results.filter((result) => result !== undefined);

    return {
      doContinue: resolvedResults.every((result) => Boolean(result)),
      resolvedPayload: resolvedResults[resolvedResults.length - 1],
    };
  }

  public static getComponent(name: string) {
    return Adapter.components.get(name);
  }
}
