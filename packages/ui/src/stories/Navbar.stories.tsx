import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navbar from "../lib/Navbar";
import { navbarMenuItems } from "./constants";

export default {
  title: "Common/Navbar",
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  transparent: false,
  menuItems: navbarMenuItems,
};
