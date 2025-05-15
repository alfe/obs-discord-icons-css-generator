import type { Meta, StoryObj } from "@storybook/react";
import TutorialButton from '../TutorialButton';

type Story = StoryObj<typeof TutorialButton>;

const meta: Meta<typeof TutorialButton> = {
  title: 'component/TutorialButton',
  component: TutorialButton,
};

export default meta;

export const Default: Story = {
  args: {}
};
