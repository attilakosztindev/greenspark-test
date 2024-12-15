import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from 'vue';
import AppCheckbox from "./AppCheckbox.vue";

const meta = {
  title: "General/Checkbox",
  component: AppCheckbox,
  tags: ["autodocs"],
  argTypes: {
    isChecked: {
      control: "boolean",
      description: "Controls the checked state of the checkbox",
    },
  },
  parameters: {
    actions: {
      handles: ["update:isChecked"],
    },
  },
} satisfies Meta<typeof AppCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { AppCheckbox },
    setup() {
      const isChecked = ref(args.isChecked);
      return { isChecked };
    },
    template: '<AppCheckbox v-model:isChecked="isChecked" />',
  }),
  args: {
    isChecked: false,
  },
};
