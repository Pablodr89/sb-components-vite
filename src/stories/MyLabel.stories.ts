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
    backgroundColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
    size: "normal",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    size: "normal",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    size: "normal",
    color: "text-secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "Tertiary Label",
    size: "normal",
    color: "text-tertiary",
  },
};

export const BackgroundColor: Story = {
  args: {
    label: "BackgroundColor Label",
    size: "normal",
    backgroundColor: "#fc0a0a",
  },
};
