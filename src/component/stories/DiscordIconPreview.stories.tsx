import type { Meta, StoryObj } from "@storybook/react";
import DiscordIconPreview from '../DiscordIconPreview';

type Story = StoryObj<typeof DiscordIconPreview>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof DiscordIconPreview> = {
  title: 'component/DiscordIconPreview',
  component: DiscordIconPreview,
};

export default meta;

export const Default: Story = {
  args: {
    styles: {
      voiceContainer: {},
      voiceStates: {},
      voiceState: {},
      avatar: {},
      avatarSpeaking: {},
      name: {},
    },
  }
};
