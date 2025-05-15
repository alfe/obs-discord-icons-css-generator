import type { Meta, StoryObj } from "@storybook/react";
import SliderListItem from '../SliderListItem';

type Story = StoryObj<typeof SliderListItem>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SliderListItem> = {
  title: 'component/SliderListItem',
  component: SliderListItem,
};

export default meta;

export const Default: Story = {
  args: {
    title: 'title',
    onChange: () => {},
  }
};

export const Disabled: Story = {
  args: {
    title: 'title',
    onChange: () => {},
  }
};

export const withMax: Story = {
  args: {
    title: 'title',
    max: 5,
    onChange: () => {},
  }
};

export const withMin: Story = {
  args: {
    title: 'title',
    min: 5,
    onChange: () => {},
  }
};
