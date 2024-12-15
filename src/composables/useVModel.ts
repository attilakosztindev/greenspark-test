import { computed, getCurrentInstance, WritableComputedRef } from "vue";

export const useVModel = <T>(
  props: Record<string, unknown>,
  propName: string
): WritableComputedRef<T> => {
  const vm = getCurrentInstance()?.proxy;

  if (!vm) {
    throw new Error("useVModel must be called within a setup function");
  }

  return computed({
    get() {
      return props[propName] as T;
    },
    set(value: T) {
      vm.$emit(`update:${propName}`, value);
    },
  });
};
