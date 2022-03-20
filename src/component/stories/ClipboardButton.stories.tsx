import { Story } from "@storybook/react";
import ClipboardButton, { ClipboardButtonProps } from '../ClipboardButton';

export default {
  title: 'component/ClipboardButton',
  component: ClipboardButton,
};
const Template: Story<ClipboardButtonProps> = (args) => <ClipboardButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: `copied text`
};
