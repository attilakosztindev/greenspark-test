import type { Meta, StoryObj } from "@storybook/vue3";
import AppIcon from "../AppIcon/AppIcon.vue";
import AppTooltip from "./AppTooltip.vue";

const meta = {
  title: "General/Tooltip",
  component: AppTooltip,
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      control: "boolean",
      description: "Controls the visibility of the tooltip",
    },
    linkIsAllowed: {
      control: "boolean",
      description: "Controls whether the link is displayed in the tooltip",
    },
  },
  parameters: {
    actions: {
      handles: ["update:isActive"],
    },
  },
  decorators: [
    () => ({
      template: '<div style="padding: 20px;"><story /></div>',
    }),
  ],
} satisfies Meta<typeof AppTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isActive: false,
    description:
      "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.",
    link: "View Public Profile",
    linkUrl: "https://www.google.com",
    linkIsAllowed: false,
  },
  render: (args) => ({
    components: { AppTooltip, AppIcon },
    setup() {
      return { args };
    },
    template: `
      <AppTooltip v-bind="args">
        <template #icon>
          <app-icon color="app-green" icon="mdi-information-outline" aria-label="Information" size="10" />
        </template>
      </AppTooltip>
    `,
  }),
};
