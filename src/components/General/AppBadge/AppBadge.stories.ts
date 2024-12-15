import type { Meta, StoryObj } from "@storybook/vue3";
import { useColors } from "@/composables/useColors";
import AppBadge from "./AppBadge.vue";

const { colors } = useColors();

const meta = {
  title: "General/Badge",
  component: AppBadge,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["plastic", "trees", "carbon"],
      description: "Type of environmental impact",
    },
    action: {
      control: "text",
      description: "Action verb for the badge",
    },
    selectedColor: {
      control: "select",
      options: Object.keys(colors),
      description: "Background color of the badge",
    },
    amount: {
      control: "number",
      description: "Quantity of impact",
    },
  },
} satisfies Meta<typeof AppBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "plastic",
    action: "collects",
    selectedColor: "green",
    amount: 100,
  },
};
