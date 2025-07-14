import type { Theme } from '@formkl/shared'
import type { InjectionKey, MaybeRefOrGetter } from 'vue'

export const themeInjectionKey: InjectionKey<MaybeRefOrGetter<Theme>> = Symbol('theme')
