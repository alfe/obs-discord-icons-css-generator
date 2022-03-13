import { CustomStyle } from "../component/DiscordIconPreview";

const toKebabCase = (string: string) => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

export const getCssText = (styles: CustomStyle) =>
(Object.keys(styles) as (keyof CustomStyle)[])
.map((className) => (Object.keys(styles[className]).length === 0)
? ''
: `
#app-mount .${toKebabCase(className)} {${Object
.keys(styles[className])
.map(k => `
  ${toKebabCase(k)}: ${styles[className][k]};`)
.join(` `)}
}`)
.join(` `).trim()
+ `${!styles.speaking?.animation?.includes('speak-light') ? '' : `
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
}`}${!styles.speaking?.animation?.includes('speak-jump') ? '' : `
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
