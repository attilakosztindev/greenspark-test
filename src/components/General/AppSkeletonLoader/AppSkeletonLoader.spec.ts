import { mount } from "@vue/test-utils";
import AppSkeletonLoader from "./AppSkeletonLoader.vue";

describe("AppSkeletonLoader.vue", () => {
  const defaultProps = {
    type: "card",
    widthM: "100%",
    heightM: "200px",
    widthD: "100%",
    heightD: "300px",
  };

  it("renders correctly with default props", () => {
    const wrapper = mount(AppSkeletonLoader, {
      props: defaultProps,
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("app-skeleton-loader");
  });

  it("applies correct type", () => {
    const wrapper = mount(AppSkeletonLoader, {
      props: defaultProps,
    });

    expect(wrapper.attributes("type")).toBe(defaultProps.type);
  });

  it("applies mobile dimensions correctly", () => {
    const wrapper = mount(AppSkeletonLoader, {
      props: defaultProps,
    });

    expect(wrapper.vm.heightM).toBe(defaultProps.heightM);
  });

  it("applies desktop dimensions through CSS", () => {
    const wrapper = mount(AppSkeletonLoader, {
      props: defaultProps,
    });

    expect(wrapper.vm.heightD).toBe(defaultProps.heightD);
  });
});
