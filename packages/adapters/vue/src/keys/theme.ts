import { InjectionKey, ComputedRef } from "vue";
import { Theme } from "@formkl/shared";

export const themeInjectionKey: InjectionKey<ComputedRef<Theme>> = Symbol("theme");
