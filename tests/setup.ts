import { config } from "@vue/test-utils";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  components: {},
  directives: {},
});

config.global.plugins = [[vuetify]];
config.global.stubs = {
  VTooltip: {
    template:
      '<div><slot name="activator" :props="props"></slot><slot></slot></div>',
    props: ["modelValue"],
    emits: ["update:modelValue"],
    data() {
      return {
        props: {
          onClick: function (this: {
            $emit: (event: string, value: boolean) => void;
            modelValue: boolean;
          }) {
            this.$emit("update:modelValue", !this.modelValue);
          }.bind(this),
        },
      };
    },
  },
  VSwitch: {
    template: `
      <div class="v-switch" @click="$emit('update:modelValue', !modelValue)">
        <div class="v-switch__track"></div>
        <div class="v-switch__thumb"></div>
        <input 
          type="checkbox" 
          :checked="modelValue"
        />
      </div>
    `,
    props: ["modelValue"],
    emits: ["update:modelValue"],
  },
  VCheckbox: {
    template: `
      <div class="v-checkbox" @click="$emit('update:modelValue', !modelValue)">
        <input 
          type="checkbox" 
          :checked="modelValue"
        />
      </div>
    `,
    props: ["modelValue"],
    emits: ["update:modelValue"],
  },
  VIcon: {
    template:
      '<div class="v-icon" :class="icon" :color="color" :size="size" :aria-label="ariaLabel"><slot /></div>',
    props: ["icon", "color", "size", "ariaLabel"],
  },
  VSkeletonLoader: {
    template: `
      <div 
        class="v-skeleton-loader" 
        :type="type"
        :style="{ height: heightM || '100px', backgroundColor: '#f5f5f5' }"
      >
        <slot />
      </div>
    `,
    props: ["type", "loading", "heightM"],
  },
  "app-badge": {
    template: '<div class="app-badge"></div>',
    props: ["selectedColor", "type", "amount", "action"],
  },
  "app-switch": {
    template: '<div class="app-switch"></div>',
    props: ["isEnabled"],
    emits: ["update:isEnabled"],
  },
  "app-icon": {
    template: '<div class="app-icon"></div>',
    props: ["color", "icon", "size", "ariaLabel"],
  },
  "app-tooltip": {
    template: '<div class="app-tooltip"><slot name="icon"></slot></div>',
    props: ["isActive", "description", "link", "linkUrl", "linkIsAllowed"],
    emits: ["update:isActive"],
  },
  "app-checkbox": {
    template: '<div class="app-checkbox"></div>',
    props: ["isChecked"],
    emits: ["update:isChecked"],
  },
  "app-color-swatch": {
    template: '<div class="app-color-swatch"></div>',
    props: ["selectedColor"],
    emits: ["update:selectedColor"],
  },
};

window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

class ResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

window.ResizeObserver = ResizeObserver;
