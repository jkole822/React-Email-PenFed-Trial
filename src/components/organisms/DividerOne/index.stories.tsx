import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DividerOne } from ".";

export default {
  title: "Organisms/DividerOne",
  component: DividerOne,
} as ComponentMeta<typeof DividerOne>;

const Template: ComponentStory<typeof DividerOne> = args => (
  <DividerOne {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
