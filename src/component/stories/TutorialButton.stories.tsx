import { Story } from "@storybook/react";
import TutorialButton from '../TutorialButton';

export default {
  title: 'component/TutorialButton',
  component: TutorialButton,
};
const Template: Story<{}> = (args) => <TutorialButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
