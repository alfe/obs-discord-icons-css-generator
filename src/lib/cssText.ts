import { CustomStyle } from "../component/DiscordIconPreview";
import { getCssKeyFrames } from "./getCssKeyFrames";

const toKebabCase = (string: string) => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

const toImportant = (property: string, className: string): string => {
  switch (true) {
    case className === 'name' && property === 'backgroundColor':
      return ' !important';
    default:
      return '';
  }
};

const convertStyleObjToCssClassText = (styles: CustomStyle, className: keyof CustomStyle) => (`
[class*="Voice_${className}__"] {${Object.keys(styles[className] || {}).map(k => `
  ${toKebabCase(k)}: ${styles[className]?.[k]}${toImportant(k, className)};`).join(``)}
}`);


const getHiddenUserIdText = (hiddenUserId?: string) => (!hiddenUserId ? '' : `
[src*="avatars/${hiddenUserId}/"], [src*="avatars/${hiddenUserId}/"] + [class*="Voice_user_"]  {
  display: none;
}
`);

export const getCssText = ({
  styles, speakingStyles, animationColor, hiddenUserId,
}: {
  styles: CustomStyle;
  hiddenUserId?: string;
  speakingStyles?: string[];
  animationColor?: string;
}) => {

  return (
    (Object.keys(styles) as (keyof CustomStyle)[])
      .map((className) => (Object.keys(styles[className] || {}).length === 0) ? '' : convertStyleObjToCssClassText(styles, className))
      .join(` `).trim()
    + getHiddenUserIdText(hiddenUserId)
    + getCssKeyFrames(speakingStyles, animationColor)
  );
};
