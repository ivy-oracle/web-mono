import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "../lib/Layout";
import Navbar from "../lib/Navbar";
import { FaLock } from "react-icons/fa";
import { mockMenuItems } from "./Navbar.stories";

export default {
  title: "Common/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Hello World",
  Header: () => <Navbar transparent={true} menuItems={mockMenuItems} />,
  Footer: () => <div>Footer</div>,
};
