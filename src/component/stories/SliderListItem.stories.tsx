import { Story } from "@storybook/react";
import SliderListItem, { SliderListItemProps } from '../SliderListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'component/SliderListItem',
  component: SliderListItem,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SliderListItemProps> = (args) => <SliderListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'title',
  onChange: () => {},
};

export const withMax = Template.bind({});
withMax.args = {
  title: 'title',
  max: 5,
  onChange: () => {},
};

export const withMin = Template.bind({});
withMin.args = {
  title: 'title',
  min: 5,
  onChange: () => {},
};
