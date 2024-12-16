<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import ProductWidget from "@/components/ProductWidget/ProductWidget.vue";
import AppSkeletonLoader from "@/components/General/AppSkeletonLoader/AppSkeletonLoader.vue";

const store = useStore();

const widgets = computed(() => store.state.widgets.widgets);
const loading = computed(() => store.state.widgets.loading);
const error = computed(() => store.state.widgets.error);

onMounted(() => {
  store.dispatch("widgets/fetchWidgets");
});
</script>

<template lang="pug">
main.app-page(role="main")
  h1.visually-hidden Product Widgets Configuration
  section.product-widgets(aria-labelledby="widgets-title")
    h2#widgets-title.product-widgets__title Per product widgets
    .product-widgets__container(
      role="list"
      aria-label="Product widgets list"
    )
      .product-widgets__loading(
        v-if="loading"
        aria-busy="true"
      )
        app-skeleton-loader(
          type="card"
          width-m="100%"
          height-m="540px"
          width-d="779px"
          height-d="152px"
        )
      .product-widgets__error(
        v-else-if="error"
        role="alert"
        aria-live="assertive"
      ) {{ error }}
      product-widget(
        v-else 
        v-for="widget in widgets" 
        :key="widget.id" 
        :widget="widget"
        role="listitem"
      )
</template>

<style lang="sass">
.app-page
  display: flex
  justify-content: center
  align-items: center
  padding: 48px 22px 67px 22px

  .product-widgets
    display: flex
    flex-direction: column
    justify-content: flex-start
    width: 100%
    max-width: 331px
    padding: 36px 36px 53px 36px
    border-radius: 8px
    background-color: rgb(var(--v-theme-app-dirty-white))
    box-shadow: 0px 0.78px 2.99px 0px #00000003, 0px 3.42px 6.19px 0px #00000005, 0px 8.4px 12.35px 0px #00000006, 0px 16.18px 24.21px 0px #00000008, 0px 27.22px 44.51px 0px #0000000A, 0px 42px 76px 0px #0000000D

    .product-widgets__title
      padding-bottom: 12px
      margin-bottom: 20px
      border-bottom: 2px solid rgb(var(--v-theme-app-light-gray))
      font-size: 30px
      line-height: 36px
      text-align: center

    .product-widgets__container
      display: flex
      flex-direction: column
      width: 100%
      align-items: center
      gap: 42px

      .product-widgets__loading,
      .product-widgets__error
        display: flex
        width: 100%
        justify-content: center

@media (min-width: 768px)
  .app-page
    height: 100vh

    .product-widgets
      width: 100%
      height: 100%
      max-width: 851px
      max-height: 419px

      .product-widgets__container
        display: flex
        flex-direction: row
        width: 100%
        align-items: unset
        justify-content: space-between
        flex: 1
        gap: 16px

      .product-widgets__loading
        display: flex
        width: 100%
        justify-content: center
</style>
