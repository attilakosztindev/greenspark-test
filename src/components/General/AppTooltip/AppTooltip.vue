<script setup lang="ts">
import { VTooltip } from "vuetify/components";
import { useVModel } from "@/composables/useVModel";

const props = defineProps<{
  isActive: boolean;
  description: string;
  link?: string;
  linkUrl?: string;
  linkIsAllowed?: boolean;
}>();

const isActive = useVModel(props, "isActive");
</script>

<template lang="pug">
v-tooltip.app-tooltip(
  v-model="isActive"
  location="top"
  offset="-0.1"
  :close-on-content-click="false"
)
  template(#activator="{ props }")
    button.app-tooltip__icon(
      v-bind="props"
      type="button"
      :aria-expanded="isActive"
      aria-haspopup="dialog"
      aria-label="More information"
    )
      slot(name="icon")
  transition(name="fade")
    div.app-tooltip__content(
      role="dialog"
      aria-modal="true"
      :aria-hidden="!isActive"
    )
      p.app-tooltip__content-description#tooltip-description
        | {{ description }}
      .app-tooltip__content-link(v-if="link && linkIsAllowed")
        a(
          :href="linkUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-description"
        ) {{ link }}
</template>

<style scoped lang="sass">
.app-tooltip
  .app-tooltip__content
    text-align: center
    font-size: 14px
    line-height: 17px
    transition: opacity 0.3s

  .app-tooltip__content-description
    color: #212121

  .app-tooltip__content-link
    margin-top: 12px

    a
      text-decoration: none
      font-weight: 700
      color: #3B755F
      opacity: 1
      transition: opacity 0.3s
      cursor: pointer

      &:hover
        opacity: 0.8

:deep(.v-overlay__content)
  position: absolute
  transform: none
  background-color: #fff
  max-width: 248px !important
  max-height: 162px !important
  box-shadow: 0px 0.78px 2.99px 0px #00000003, 0px 3.42px 6.19px 0px #00000005, 0px 8.4px 12.35px 0px #00000006, 0px 16.18px 24.21px 0px #00000008, 0px 27.22px 44.51px 0px #0000000A, 0px 42px 76px 0px #0000000D
  pointer-events: auto
  padding: 24px 16px

.v-overlay
  transition: all 0.3s
  opacity: 0
  visibility: hidden
.v-overlay--active
  opacity: 1
  visibility: visible

.fade-leave-active
  visibility: visible
  opacity: 1

.fade-enter-active, .fade-leave-active
  transition: opacity 0.3s
  visibility: visible

.fade-enter, .fade-leave-to
  visibility: visible
  opacity: 0
</style>

<style lang="sass">
.app-tooltip__icon
  margin: 2px
  display: inline-flex
</style>
