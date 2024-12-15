import { setup } from '@storybook/vue3'
import { vuetify } from '../src/plugins/vuetify'
import { createStore } from 'vuex'
import type { Widget } from '../src/types'
import '../src/styles/global.sass'

const store = createStore({
  modules: {
    widgets: {
      namespaced: true,
      state: () => ({
        widgets: [] as Widget[],
        loading: false,
        error: null as string | null,
      }),
      actions: {
        updateWidgetActive({ commit }, payload: { id: number; active: boolean }) {
          commit('setWidgetActive', payload);
        },
      },
      mutations: {
        setWidgetActive(state, { id, active }: { id: number; active: boolean }) {
          const widget = state.widgets.find(w => w.id === id);
          if (widget) widget.active = active;
        },
      },
    },
  },
})

setup((app) => {
  app.use(vuetify)
  app.use(store)
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FFFFFF' },
      { name: 'dark', value: '#333333' },
    ],
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
}