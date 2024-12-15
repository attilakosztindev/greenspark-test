import type { Meta, StoryObj } from "@storybook/vue3";
import AppSkeletonLoader from "./AppSkeletonLoader.vue";

const meta = {
  title: "General/SkeletonLoader",
  component: AppSkeletonLoader,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["card"],
      description: "Type of skeleton loader to display",
    },
    widthM: {
      control: "text",
      description: "Width for mobile view",
    },
    heightM: {
      control: "text",
      description: "Height for mobile view",
    },
    widthD: {
      control: "text",
      description: "Width for desktop view",
    },
    heightD: {
      control: "text",
      description: "Height for desktop view",
    },
  },
  decorators: [
    () => ({
      template: '<div style="padding: 20px;"><story /></div>',
    }),
  ],
} satisfies Meta<typeof AppSkeletonLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "card",
    widthM: "100%",
    heightM: "540px",
    widthD: "779px",
    heightD: "152px",
  },
};
