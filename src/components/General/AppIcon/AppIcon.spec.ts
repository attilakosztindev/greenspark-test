import { mount } from "@vue/test-utils";
import AppIcon from "./AppIcon.vue";

describe("AppIcon.vue", () => {
  const defaultProps = {
    icon: "mdi-information",
    color: "app-green",
    size: "24",
    ariaLabel: "Information",
  };

  it("renders correctly with default props", () => {
    const wrapper = mount(AppIcon, {
      props: defaultProps,
    });

    expect(wrapper.exists()).toBe(true);
    const icon = wrapper.find(".v-icon");
    expect(icon.exists()).toBe(true);
  });

  it("applies correct icon class", () => {
    const wrapper = mount(AppIcon, {
      props: defaultProps,
    });

    expect(wrapper.classes()).toContain("v-icon");
    expect(wrapper.classes()).toContain(defaultProps.icon);
  });

  it("applies correct color", () => {
    const wrapper = mount(AppIcon, {
      props: defaultProps,
    });

    expect(wrapper.attributes("color")).toBe(defaultProps.color);
  });

  it("applies correct size", () => {
    const wrapper = mount(AppIcon, {
      props: defaultProps,
    });

    expect(wrapper.attributes("size")).toBe(defaultProps.size);
  });

  it("sets correct aria-label", () => {
    const wrapper = mount(AppIcon, {
      props: defaultProps,
    });

    expect(wrapper.attributes("aria-label")).toBe(defaultProps.ariaLabel);
  });
});
