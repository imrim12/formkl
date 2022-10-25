import { Plugin } from "./Plugin";

/**
 * Static Plugins Adapter.
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

  private static plugins: Plugin[] = [];

  public static registerPlugin(...plugins: Plugin[]) {
    Adapter.plugins.push(...plugins);
  }

  public static getPlugins() {
    return Adapter.plugins;
  }
}
