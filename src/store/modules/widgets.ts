import type { RootState, Widget, WidgetState } from "@/types/index";
import api from "@/services/api";

type ActionContext<S, R> = { commit: (type: string, payload?: unknown) => void; state: S };
type WidgetActionContext = ActionContext<WidgetState, RootState>;

const widgets = {
  namespaced: true,

  state: (): WidgetState => ({
    widgets: [],
    loading: false,
    error: null,
  }),

  mutations: {
    setWidgets(state: WidgetState, widgets: Widget[]): void {
      state.widgets = widgets;
    },
    setLoading(state: WidgetState, loading: boolean): void {
      state.loading = loading;
    },
    setError(state: WidgetState, error: string | null): void {
      state.error = error;
    },
    setWidgetActive(
      state: WidgetState,
      { id, active }: { id: number; active: boolean }
    ): void {
      const widget = state.widgets.find((w) => w.id === id);
      if (widget) widget.active = active;
    },
  },

  actions: {
    async fetchWidgets({ commit }: WidgetActionContext): Promise<void> {
      commit("setLoading", true);
      try {
        const { data } = await api.get<Widget[]>("/product-widgets");
        commit("setWidgets", data);
        commit("setError", null);
      } catch (error) {
        commit(
          "setError",
          error instanceof Error ? error.message : "An error occurred"
        );
      } finally {
        commit("setLoading", false);
      }
    },

    updateWidgetActive(
      { commit }: WidgetActionContext,
      { id, active }: { id: number; active: boolean }
    ): void {
      commit("setWidgetActive", { id, active });
    },
  },
};

export default widgets;
