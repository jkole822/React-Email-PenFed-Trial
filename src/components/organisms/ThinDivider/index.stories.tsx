import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThinDivider } from ".";

export default {
  title: "Organisms/ThinDivider",
  component: ThinDivider,
} as ComponentMeta<typeof ThinDivider>;

const Template: ComponentStory<typeof ThinDivider> = args => (
  <ThinDivider {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
