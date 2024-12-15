import { mount } from "@vue/test-utils";
import AppBadge from "./AppBadge.vue";
import { useColors } from "@/composables/useColors";
import type { ComponentPublicInstance } from "vue";

interface AppBadgeInstance extends ComponentPublicInstance {
  selectedHexColor: string;
}

jest.mock("@/composables/useColors", () => ({
  useColors: () => ({
    getHexColor: (color: string) => color,
    getContrastColor: (color: string, prefix: string) => `${prefix}-white`,
  }),
}));

describe("AppBadge.vue", () => {
  const defaultProps = {
    type: "plastic",
    action: "collects",
    selectedColor: "green",
    amount: 100,
  };

  it("renders correctly with default props", () => {
    const wrapper = mount(AppBadge, {
      props: defaultProps,
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("app-badge");
  });

  it("displays correct amount and type", () => {
    const wrapper = mount(AppBadge, {
      props: defaultProps,
    });

    const content = wrapper.text();
    expect(content).toContain(defaultProps.amount.toString());
    expect(content).toContain("plastic bottles");
  });

  it("displays correct action text", () => {
    const wrapper = mount(AppBadge, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain(defaultProps.action);
  });

  it("applies correct background color and contrast colors", () => {
    const wrapper = mount(AppBadge, {
      props: defaultProps,
    });

    const vm = wrapper.vm as unknown as AppBadgeInstance;
    expect(vm.selectedHexColor).toBe(defaultProps.selectedColor);

    const logo = wrapper.find(".app-badge__logo svg");
    const content = wrapper.find(".app-badge__content");

    expect(logo.exists()).toBe(true);
    expect(content.exists()).toBe(true);

    expect(logo.classes()).toContain("app-badge__logo-white");
    expect(content.classes()).toContain("app-badge__content-white");
  });

  it("formats different types correctly", async () => {
    const wrapper = mount(AppBadge, {
      props: {
        ...defaultProps,
        type: "carbon",
        amount: 50,
      },
    });

    expect(wrapper.text()).toContain("kgs of carbon");
  });
});
