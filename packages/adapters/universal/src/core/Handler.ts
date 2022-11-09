import { HandlerHook } from "../types/handler-hook.type";

/**
 * Construct and normalize a plugin.
 */
export class Handler {
  public hook: HandlerHook;

  constructor(hook?: HandlerHook) {
    this.hook = hook || {};
  }

  public gethook() {
    return this.hook;
  }
}
