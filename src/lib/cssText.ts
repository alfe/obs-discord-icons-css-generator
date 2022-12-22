import { CustomStyle } from "../component/DiscordIconPreview";

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

export const getCssText = ({ styles, hiddenUserId }: { styles: CustomStyle, hiddenUserId: string }) => 
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
+ `${!styles.avatarSpeaking?.animation?.includes('speak-light') ? '' : `
@keyframes speak-light {
  0% {
    box-shadow: 0 0 4px #ffffff;
  }
  50% {
    box-shadow: 0 0 16px #ffffff;
  }
  100% {
    box-shadow: 0 0 4px #ffffff;
  }
}`}${!styles.avatarSpeaking?.animation?.includes('speak-jump') ? '' : `
@keyframes speak-jump {
  0% {
    bottom: 0px;
  }
  50% {
    bottom: 10px;
  }
  100% {
    bottom: 0px;
  }
}`}
`;
