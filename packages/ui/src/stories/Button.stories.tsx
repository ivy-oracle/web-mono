import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyButton from "../lib/MyButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
  children: "Hello World",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  children: "Hello World",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
  children: "Hello World",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
  children: "Hello World",
};
