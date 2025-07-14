import type { InjectionKey, MaybeRefOrGetter } from "vue";
import type { Theme } from "@formkl/shared";

export const themeInjectionKey: InjectionKey<MaybeRefOrGetter<Theme>> = Symbol("theme");
