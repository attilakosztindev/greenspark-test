<script setup lang="ts">
import { ref, watch } from "vue";
import { VSwitch } from "vuetify/components";

const props = defineProps<{ isEnabled: boolean }>();
const emit = defineEmits(['update:isEnabled']);

const isEnabled = ref(props.isEnabled);

watch(() => props.isEnabled, (newValue) => {
  isEnabled.value = newValue;
});

const handleChange = (value: boolean) => {
  emit('update:isEnabled', value);
};
</script>

<template lang="pug">
v-switch.app-switch(
  v-model="isEnabled"
  color="app-green"
  density="comfortable"
  hide-details
  @update:model-value="handleChange"
)
</template>

<style lang="sass" scoped>
.app-switch
  height: 20.1px

  :deep(.v-switch__thumb)
    z-index: 10
    position: relative
    width: 20.1px
    height: 20.1px
    background-color: rgb(var(--v-theme-app-dirty-white)) !important
    border: 0.5px solid rgb(var(--v-theme-app-beige))
    box-shadow: 0px 0px 1px 0px #00000059

  :deep(input[checked] ~ .v-switch__thumb)
    border: 0.5px solid rgb(var(--v-theme-app-green))

  :deep(.v-selection-control__input)
    width: 37.5px
    height: 37.5px

  :deep(.v-selection-control__input::before)
    transition: opacity 0.3s ease-in-out

  :deep(.v-switch__track)
    width: 40.1px
    height: 20.1px
    background-color: #fff
    border: 0.5px solid rgb(var(--v-theme-app-light-gray))
    opacity: 1
    box-shadow: 0px 1px 6px 0px #00000026 inset

  :deep(.v-ripple__container)
    *
      background-color: rgb(var(--v-theme-app-light-green))

  :deep(.v-selection-control)
    min-height: unset

  :deep(.v-selection-control__wrapper)
    height: 20.5px
</style>
