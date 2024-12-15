<script setup lang="ts">
const props = defineProps<{
  icon: string;
  color?: string;
  size?: string;
  ariaLabel?: string;
}>();
</script>

<template lang="pug">
v-icon(
  :icon="icon"
  :color="color"
  :size="size"
  :aria-label="ariaLabel"
  role="icon"
)
</template>
