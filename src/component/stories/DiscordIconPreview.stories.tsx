import { Story } from "@storybook/react";
import DiscordIconPreview, { DiscordIconPreviewProps } from '../DiscordIconPreview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'component/DiscordIconPreview',
  component: DiscordIconPreview,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DiscordIconPreviewProps> = (args) => <DiscordIconPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  styles: {
    voiceContainer: {},
    voiceStates: {},
    voiceState: {},
    avatar: {},
    avatarSpeaking: {},
    name: {},
  },
};
