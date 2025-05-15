import type { Meta, StoryObj } from "@storybook/react";
import CssString from '../CssString';

type Story = StoryObj<typeof CssString>;

const meta: Meta<typeof CssString> = {
  title: 'component/CssString',
  component: CssString,
};

export default meta;

export const Default: Story = {
  args: {
    value: `#app-mount .voice-states {
  display: flex;
} 
#app-mount .voice-state {
  display: flex; 
  flex-direction: column;
}   
#app-mount .name {
  max-width: 64px; 
  box-sizing: border-box; 
  text-overflow: clip; 
  white-space: nowrap; 
  overflow: hidden; 
  display: block; 
  text-align: center;
}`
  }
};
