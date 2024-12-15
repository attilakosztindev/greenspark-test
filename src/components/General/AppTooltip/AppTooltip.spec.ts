import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import AppTooltip from "./AppTooltip.vue";

describe("AppTooltip.vue", () => {
  const defaultProps = {
    isActive: false,
    description: "Test description",
    link: "Test link",
    linkUrl: "https://google.com",
    linkIsAllowed: true,
  };

  const defaultSlots = {
    icon: '<span class="test-icon">?</span>',
  };

  it("renders correctly with default props", () => {
    const wrapper = mount(AppTooltip, {
      props: defaultProps,
      slots: defaultSlots,
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("app-tooltip");
  });

  it("shows tooltip content when isActive is true", async () => {
    const wrapper = mount(AppTooltip, {
      props: {
        ...defaultProps,
        isActive: true,
      },
      slots: defaultSlots,
    });

    const tooltipContent = wrapper.find(".app-tooltip__content");
    expect(tooltipContent.exists()).toBe(true);
    expect(tooltipContent.text()).toContain(defaultProps.description);
  });

  it("renders link when linkIsAllowed is true", async () => {
    const wrapper = mount(AppTooltip, {
      props: {
        ...defaultProps,
        isActive: true,
        linkIsAllowed: true,
      },
      slots: defaultSlots,
    });

    const link = wrapper.find(".app-tooltip__content-link a");
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe(defaultProps.linkUrl);
    expect(link.text()).toBe(defaultProps.link);
  });

  it("does not render link when linkIsAllowed is false", async () => {
    const wrapper = mount(AppTooltip, {
      props: {
        ...defaultProps,
        isActive: true,
        linkIsAllowed: false,
      },
      slots: defaultSlots,
    });

    const link = wrapper.find(".app-tooltip__content-link");
    expect(link.exists()).toBe(false);
  });

  it("emits update:isActive event when tooltip button is clicked", async () => {
    const wrapper = mount(AppTooltip, {
      props: defaultProps,
      slots: defaultSlots,
    });

    const button = wrapper.find(".app-tooltip__icon");
    expect(button.exists()).toBe(true);
    await button.trigger("click");
    expect(wrapper.emitted("update:isActive")).toBeTruthy();
  });
});
