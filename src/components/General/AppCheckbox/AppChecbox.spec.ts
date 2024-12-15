import { mount } from "@vue/test-utils";
import AppCheckbox from "./AppCheckbox.vue";

describe("AppCheckbox.vue", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        isChecked: false,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("app-checkbox");
  });

  it("emits update:isChecked event when clicked", async () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        isChecked: false,
      },
    });

    await wrapper.find(".v-checkbox").trigger("click");
    expect(wrapper.emitted("update:isChecked")).toBeTruthy();
    expect(wrapper.emitted("update:isChecked")?.[0]).toEqual([true]);
  });

  it("reflects checked state through props", async () => {
    const wrapper = mount(AppCheckbox, {
      props: {
        isChecked: true,
      },
    });

    const checkbox = wrapper.find("input[type='checkbox']");
    expect((checkbox.element as HTMLInputElement).checked).toBe(true);
  });
});
