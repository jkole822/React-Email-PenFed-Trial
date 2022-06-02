import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DividerTwo } from ".";

export default {
  title: "Organisms/DividerTwo",
  component: DividerTwo,
} as ComponentMeta<typeof DividerTwo>;

const Template: ComponentStory<typeof DividerTwo> = args => (
  <DividerTwo {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
