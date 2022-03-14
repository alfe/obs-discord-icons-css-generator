import SliderListItem, { SliderListItemProps } from '../SliderListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'component/SliderListItem',
  component: SliderListItem,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: SliderListItemProps) => <SliderListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  onChange: () => {},
};