<script setup lang="ts">
import { ref, watch } from "vue";
import type { Widget } from "@/types";
import AppSwitch from "@/components/General/AppSwitch/AppSwitch.vue";
import AppIcon from "@/components/General/AppIcon/AppIcon.vue";
import AppTooltip from "@/components/General/AppTooltip/AppTooltip.vue";
import AppCheckbox from "@/components/General/AppCheckbox/AppCheckbox.vue";
import AppColorSwatch from "@/components/General/AppColorSwatch/AppColorSwatch.vue";
import AppBadge from "@/components/General/AppBadge/AppBadge.vue";
import { useStore } from "vuex";

const props = defineProps<{ widget: Widget }>();
const store = useStore();

const isActive = ref<boolean>(false);

const tooltipDescription = ref(
  "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
);
const tooltipLinkText = ref("View Public Profile");
const tooltipLinkUrl = ref("https://www.google.com");

const handleActiveChange = (newValue: boolean) => {
  if (newValue) {
    store.state.widgets.widgets.forEach((w: Widget) => {
      if (w.id !== props.widget.id && w.active) {
        store.dispatch("widgets/updateWidgetActive", {
          id: w.id,
          active: false,
        });
      }
    });
  }

  store.dispatch("widgets/updateWidgetActive", {
    id: props.widget.id,
    active: newValue,
  });
};

watch(
  () => props.widget.active,
  handleActiveChange,
  { immediate: true }
);
</script>

<template lang="pug">
article.product-widget(aria-labelledby="widget-title")
  app-badge(
    :selected-color="widget.selectedColor"
    :type="widget.type"
    :amount="widget.amount"
    :action="widget.action"
  )
  .product-widget__sections(
    role="group"
    aria-label="Widget settings"
  )
    section.product-widget__section
      h3#widget-title.product-widget__section-title
        span Link to Public Profile
        app-tooltip(
          v-model:is-active="isActive" 
          :description="tooltipDescription" 
          :link="tooltipLinkText" 
          :link-url="tooltipLinkUrl"
          :link-is-allowed="widget.linked"
          :aria-expanded="isActive"
        )
          template(#icon)
            app-icon(
              color="app-green" 
              icon="mdi-information-outline" 
              aria-label="Information"
              size="10"
            )
      app-checkbox(
        v-model:is-checked="widget.linked" 
        aria-label="Enable public profile link"
      ) 
    section.product-widget__section
      h3.product-widget__section-title Badge Colour
      app-color-swatch(
        v-model:selected-color="widget.selectedColor"
        :aria-label="`Current color: ${widget.selectedColor}`"
      )
    section.product-widget__section
      h3.product-widget__section-title Activate Badge
      app-switch(
        :is-enabled="widget.active"
        v-model:is-enabled="widget.active"
        aria-label="Activate badge"
      )
</template>

<style lang="sass" scoped>
.product-widget
  display: flex
  flex-direction: column
  gap: 10px
  width: 100%
  max-width: 221.3px
  height: 152px

  .product-widget__sections
    display: flex
    flex-direction: column
    gap: 10px

    .product-widget__section
      display: flex
      justify-content: space-between
      align-items: center

    .product-widget__section-title
      display: flex
      align-items: flex-start
      font-size: 14px
      line-height: 17px
      font-weight: 400
      color: rgb(var(--v-theme-app-green))

@media (min-width: 768px)
  .product-widget
    height: unset
</style>
