<script setup lang="ts">
import { ref } from "vue";
import { useVModel } from "@/composables/useVModel";
import { VCheckbox } from "vuetify/components";

const props = defineProps<{ isChecked: boolean }>();

const isChecked = useVModel(props, "isChecked");
const rippleIsActive = ref(false);

const syncRipple = () => {
  if (isChecked.value) rippleIsActive.value = false;
  else rippleIsActive.value = true;
};
</script>

<template lang="pug">
v-checkbox.app-checkbox(
  v-model="isChecked"
  :class="{ 'checkbox-ischecked': rippleIsActive }"
  @mousedown="syncRipple"
  @touchstart="syncRipple"
  density="comfortable"
  hide-details
)
</template>

<style lang="sass" scoped>
.app-checkbox
  width: 24px
  height: 24px

  :deep(.v-selection-control__wrapper)
    color: rgb(var(--v-theme-app-green))
    position: relative
    width: 24px
    height: 24px

    .mdi-checkbox-blank-outline
      opacity: 1
      &::before
        color: rgb(var(--v-theme-app-dark-gray))

  :deep(.v-selection-control__input .v-selection-control__checkbox)
    width: 18px
    height: 18px

.checkbox-ischecked
  :deep(.v-selection-control__input)
    &:has(input:not(:checked)) .mdi-checkbox-blank-outline::before
      opacity: 1
      color: rgb(var(--v-theme-app-dark-gray))
      transition: opacity 0.2s

    &:has(:not(input[checked]) + .v-ripple__container) .mdi-checkbox-blank-outline::before
      opacity: 0.5
      transition: opacity 0.2s

    &:has(input:checked) .mdi-checkbox-blank-outline::before
      opacity: 1

:deep(.v-selection-control)
  min-height: unset
</style>
