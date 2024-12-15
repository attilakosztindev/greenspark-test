<script setup lang="ts">
const props = defineProps<{
  type: string;
  widthM?: string;
  heightM?: string;
  widthD?: string;
  heightD?: string;
}>();
</script>

<template lang="pug">
  v-skeleton-loader.app-skeleton-loader(:type="type")
</template>

<style lang="sass" scoped>
.app-skeleton-loader
  height: v-bind(heightM)
  width: 100%
  max-width: 779px
  align-self: flex-start
  background-color: rgb(var(--v-theme-app-dirty-white))

  :deep(.v-skeleton-loader__card)
    height: 100%

    .v-skeleton-loader__image
      height: calc(100% - 60px)

@media (min-width: 768px)
  .app-skeleton-loader
    height: v-bind(heightD)
    width: 100%
    align-self: flex-start
    background-color: rgb(var(--v-theme-app-dirty-white))
</style>
