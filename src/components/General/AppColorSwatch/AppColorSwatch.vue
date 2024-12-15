<script setup lang="ts">
import { useVModel } from "@/composables/useVModel";
import { useColors } from "@/composables/useColors";

const { getHexColor, colors } = useColors();
const props = defineProps<{ selectedColor: string }>();

const selectedColor = useVModel(props, "selectedColor");

const selectColor = (color: string) => {
  selectedColor.value = color;
};
</script>

<template lang="pug">
fieldset.app-color-swatch(
  role="group"
  aria-label="Color selection"
)
  legend.visually-hidden Color options
  button.app-color-swatch__item(
    v-for="(color, name) in colors"
    :key="name"
    @click="selectColor(name)"
    :style="{ backgroundColor: color }"
    :class="{ 'app-color-swatch__item--selected': name === selectedColor }"
    :aria-label="`Select ${name} color`"
    type="button"
  )
</template>

<style lang="sass" scoped>
.app-color-swatch
  display: flex
  gap: 4px
  border: none

  .app-color-swatch__item
    width: 16px
    height: 16px
    box-shadow: 0px 4px 4px 0px #00000003
    cursor: pointer
    opacity: 1
    border: 0
    transition: opacity 0.2s, border 0.2s

    &.app-color-swatch__item:hover
      opacity: 0.8

    &.app-color-swatch__item--selected
      box-shadow: inset 0 0 0 1px #B0B0B0
</style>
