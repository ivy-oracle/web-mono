import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../lib/Button";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Hello World",
  className: "min-w-[140px]",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  className: "min-w-[140px]",
  children: "Hello World",
};
