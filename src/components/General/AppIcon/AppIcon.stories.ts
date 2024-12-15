import type { Meta, StoryObj } from "@storybook/vue3";
import AppIcon from "./AppIcon.vue";

const meta = {
  title: "General/Icon",
  component: AppIcon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "text",
      description: "Material Design Icon name",
    },
    color: {
      control: "text",
      description: "Color of the icon",
    },
    size: {
      control: "text",
      description: "Size of the icon",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for the icon",
    },
  },
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "mdi-information-outline",
    color: "app-green",
    size: "24",
    ariaLabel: "Information",
  },
};
