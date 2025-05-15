import type { Meta, StoryObj } from "@storybook/react";
import ClipboardButton from '../ClipboardButton';

type Story = StoryObj<typeof ClipboardButton>;

const meta: Meta<typeof ClipboardButton> = {
  title: 'component/ClipboardButton',
  component: ClipboardButton,
};

export default meta;

export const Default: Story = {
  args: {
    value: `copied text`
  }
};
