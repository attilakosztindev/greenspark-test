import { mount } from "@vue/test-utils";
import AppColorSwatch from "./AppColorSwatch.vue";
import type { ColorMap } from "@/types/index";

jest.mock("@/composables/useColors", () => ({
  useColors: () => ({
    colors: {
      purple: "#2E3A8C",
      green: "#3B755F",
      beige: "#F2EBDB",
      white: "#FFFFFF",
      black: "#000000",
    } as ColorMap,
    getHexColor: (color: string) => {
      const colorMap: ColorMap = {
        purple: "#2E3A8C",
        green: "#3B755F",
        beige: "#F2EBDB",
        white: "#FFFFFF",
        black: "#000000",
      };
      return colorMap[color.toLowerCase() as keyof ColorMap] || color;
    },
  }),
}));

describe("AppColorSwatch.vue", () => {
  const defaultProps = {
    selectedColor: "purple",
  };

  it("renders correctly", () => {
    const wrapper = mount(AppColorSwatch, {
      props: defaultProps,
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("marks the selected color as active", () => {
    const wrapper = mount(AppColorSwatch, {
      props: defaultProps,
    });

    const selectedButton = wrapper.find(".app-color-swatch__item--selected");
    expect(selectedButton.exists()).toBe(true);
    expect(selectedButton.attributes("style")).toContain(
      "background-color: rgb(46, 58, 140)"
    );
  });

  it("emits update:selectedColor when a color is clicked", async () => {
    const wrapper = mount(AppColorSwatch, {
      props: defaultProps,
    });

    const colorButtons = wrapper.findAll(".app-color-swatch__item");
    await colorButtons[1].trigger("click");

    expect(wrapper.emitted("update:selectedColor")).toBeTruthy();
  });
});
