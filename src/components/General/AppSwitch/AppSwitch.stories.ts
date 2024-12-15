import type { Meta, StoryObj } from "@storybook/vue3";
import AppSwitch from "./AppSwitch.vue";

const meta = {
  title: "General/Switch",
  component: AppSwitch,
  tags: ["autodocs"],
  argTypes: {
    isEnabled: {
      control: "boolean",
      description: "Controls the enabled state of the switch",
    },
  },
  parameters: {
    actions: {
      handles: ["update:isEnabled"],
    },
  },
} satisfies Meta<typeof AppSwitch>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isEnabled: false,
  },
};

export default meta;
