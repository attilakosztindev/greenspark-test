import type { Meta, StoryObj } from "@storybook/vue3";
import { Widget } from "@/types";
import ProductWidget from "./ProductWidget.vue";
import { createStore } from 'vuex';

const mockWidget: Widget = {
  id: 1,
  action: "collects",
  active: true,
  amount: 100,
  linked: true,
  selectedColor: "green",
  type: "plastic",
};

const createMockStore = (initialWidget: Widget) => createStore({
  modules: {
    widgets: {
      namespaced: true,
      state: () => ({
        widgets: [initialWidget],
        loading: false,
        error: null,
      }),
      actions: {
        updateWidgetActive({ commit }, payload: { id: number; active: boolean }) {
          commit('setWidgetActive', payload);
        },
      },
      mutations: {
        setWidgetActive(state, { id, active }: { id: number; active: boolean }) {
          const widget = state.widgets.find((w: Widget) => w.id === id);
          if (widget) widget.active = active;
        },
      },
    },
  },
});

const meta = {
  title: "Product/Widget",
  component: ProductWidget,
  tags: ["autodocs"],
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        const store = createMockStore({
          ...mockWidget,
          ...context.args.widget,
        });
        return { store };
      },
      template: '<div style="padding: 2rem;"><story /></div>',
    }),
  ],
  argTypes: {
    widget: {
      control: "object",
      description: "Widget configuration object",
      table: {
        type: {
          summary: "Widget",
          detail: `
            interface Widget {
              id: number;
              action: string;
              active: boolean;
              amount: number;
              linked: boolean;
              selectedColor: string;
              type: string;
            }`,
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A configurable product widget that displays environmental impact information.',
      },
    },
    actions: {
      handles: ["update:isActive"],
    },
  },
} satisfies Meta<typeof ProductWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    widget: mockWidget,
  },
};

export const Inactive: Story = {
  args: {
    widget: {
      ...mockWidget,
      active: false,
    },
  },
};

export const Loading: Story = {
  args: {
    widget: mockWidget,
  },
  decorators: [
    (story) => ({
      components: { story },
      setup() {
        const store = createStore({
          modules: {
            widgets: {
              namespaced: true,
              state: () => ({
                widgets: [],
                loading: true,
                error: null,
              }),
            },
          },
        });
        return { store };
      },
      template: '<div style="padding: 2rem;"><story /></div>',
    }),
  ],
};
