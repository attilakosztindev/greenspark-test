import type { Meta, StoryObj } from "@storybook/vue3";
import AppColorSwatch from "./AppColorSwatch.vue";
import { useColors } from "@/composables/useColors";

const { colors } = useColors();

const meta = {
  title: "General/ColorSwatch",
  component: AppColorSwatch,
  tags: ["autodocs"],
  argTypes: {
    selectedColor: {
      control: "select",
      options: Object.keys(colors),
      description: "Currently selected color",
    },
  },
  parameters: {
    actions: {
      handles: ["update:selectedColor"],
    },
  },
} satisfies Meta<typeof AppColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedColor: "purple",
  },
};
