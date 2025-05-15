import { fn } from '@storybook/test';
import type { Meta, StoryObj } from "@storybook/react";
import SelectorListItem from '../SelectorListItem';

type Story = StoryObj<typeof SelectorListItem>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SelectorListItem> = {
  title: 'component/SelectorListItem',
  component: SelectorListItem,
};

export default meta;

export const Default: Story = {
  args: {
    title: 'title',
    options: [
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      { label: 'label3', value: 'value3' },
      { label: 'label4', value: 'value4' },
      { label: 'label5', value: 'value5' },
    ],
    onChange: fn(),
  }
};
