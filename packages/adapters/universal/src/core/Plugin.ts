interface PluginOptions<T> {
  name: string;
  component: T;
  events?: Record<string, any>;
}

/**
 * Construct and normalize a plugin.
 */
export class Plugin<T> {
  public name: string;

  private _component: T;
  private _events: Record<string, any>;

  constructor(options: PluginOptions<T>) {
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
