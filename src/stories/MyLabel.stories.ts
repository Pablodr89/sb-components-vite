import type { Meta, StoryObj } from "@storybook/react-vite";
import MyLabel from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["normal", "h1", "h2", "h3"],
    },
    color: {
      control: "inline-radio",
      options: ["text-primary", "text-secondary", "text-tertiary"],
    },
    fontColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#FF5733",
  },
};
