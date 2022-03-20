import { Story } from "@storybook/react";
import CssString, { CssStringProps } from '../CssString';

export default {
  title: 'component/CssString',
  component: CssString,
};
const Template: Story<CssStringProps> = (args) => <CssString {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};
