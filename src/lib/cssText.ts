import { CustomStyle } from "../component/DiscordIconPreview";
import { getCssKeyFrames } from "./getCssKeyFrames";

const toKebabCase = (string: string) => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

const toImportant = (property: string, className: string): string => {
  console.log(property, className);
  switch (true) {
    case className === 'name' && property === 'backgroundColor':
      return ' !important';

    default:
      return '';
  }
}

export const getCssText = ({
  styles, speakingStyles, animationColor, hiddenUserId,
}: {
  styles: CustomStyle;
  speakingStyles: string[];
  animationColor: string;
  hiddenUserId: string;
}) => 
(Object.keys(styles) as (keyof CustomStyle)[])
.map((className) => (Object.keys(styles[className]).length === 0)
? ''
: `
[class*="Voice_${className}__"] {${Object
.keys(styles[className])
.map(k => `
  ${toKebabCase(k)}: ${styles[className][k]}${toImportant(k, className)};`)
.join(` `)}
}`)
.join(` `).trim()
+ `${!hiddenUserId ? '' : `
[src*="avatars/${hiddenUserId}/"], [src*="avatars/${hiddenUserId}/"] + [class*="Voice_user_"]  {
  display: none;
}
`}`
+ getCssKeyFrames(speakingStyles, animationColor);

