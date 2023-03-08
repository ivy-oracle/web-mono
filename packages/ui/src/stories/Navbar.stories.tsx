import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "../lib/Navbar";
import { Fa500Px, FaArrowRight, FaFemale, FaLock } from "react-icons/fa";

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
  menuItems: [
    {
      path: "/",
      label: "Lock",
      Icon: FaLock,
    },
    {
      path: "/",
      label: "500Px",
      Icon: Fa500Px,
    },
    {
      path: "/",
      label: "Arrow Right",
      Icon: FaArrowRight,
    },
    {
      path: "/",
      label: "Female",
      Icon: FaFemale,
    },
  ],
};
