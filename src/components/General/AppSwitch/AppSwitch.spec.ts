import { mount } from "@vue/test-utils";
import AppSwitch from "./AppSwitch.vue";

describe("AppSwitch.vue", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(AppSwitch, {
      props: {
        isEnabled: false,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("app-switch");
  });

  it("emits update:isEnabled event when clicked", async () => {
    const wrapper = mount(AppSwitch, {
      props: {
        isEnabled: false,
      },
    });

    await wrapper.find(".v-switch").trigger("click");
    expect(wrapper.emitted("update:isEnabled")).toBeTruthy();
    expect(wrapper.emitted("update:isEnabled")?.[0]).toEqual([true]);
  });

  it("reflects enabled state through props", async () => {
    const wrapper = mount(AppSwitch, {
      props: {
        isEnabled: true,
      },
    });

    const input = wrapper.find("input[type='checkbox']");
    expect((input.element as HTMLInputElement).checked).toBe(true);
  });

  it("applies correct styling classes based on state", () => {
    const wrapper = mount(AppSwitch, {
      props: {
        isEnabled: true,
      },
    });

    expect(wrapper.find(".v-switch__track").exists()).toBe(true);
    expect(wrapper.find(".v-switch__thumb").exists()).toBe(true);
  });
});
