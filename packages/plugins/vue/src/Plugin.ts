import { VNode } from "vue-demi";

interface PluginOptions {
  name: string;
  component: VNode;
  events?: Record<string, any>;
}

/**
 * Construct and normalize a plugin.
 */
export class Plugin {
  public name: string;

  private _component: VNode;
  private _events: Record<string, any>;

  constructor(options: PluginOptions) {
    this.name = options.name;
    this._component = options.component;
    this._events = options.events || {};
  }

  public getComponent() {
    return this._component;
  }

  public getEvents() {
    return this._events;
  }
}
