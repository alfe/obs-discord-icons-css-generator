import omit from "lodash/omit";
import { CustomStyle } from "../component/DiscordIconPreview";

type StringValArg = {
  val: string;
  styles: CustomStyle;
  setStyles: React.Dispatch<React.SetStateAction<CustomStyle>>;
};

const getIsTall = (avatar: CustomStyle['avatar']) => {
  const height = Number(avatar?.height?.replace('px', '') || 50);
  const width = Number(avatar?.width?.replace('px', '') || 50);
  return height !== width;
}

// アイコンの並び
const iconAlign = ({ val, styles, setStyles }: StringValArg) => {
  const voiceStates = omit(styles.voiceStates, ['display', 'flexDirection', 'rowGap', 'columnGap', 'margin']);
  const voiceState = omit(styles.voiceState, ['display', 'flexDirection']);
  const user = omit(styles.user, ['paddingTop']);
  const name = omit(styles.name, ['boxSizing', 'textOverflow', 'whiteSpace', 'overflow', 'display', 'textAlign']);1
  switch (val) {
    case 'horizontal':
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
          display: 'flex',
          flexWrap: 'wrap',
          margin: '32px',
        },
        voiceState: {
          ...voiceState,
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          marginBottom: '0',
        },
        user: {
          ...user,
          paddingTop: '0px',
        },
        name: {
          ...name,
          maxWidth: styles?.avatar?.width || '56px',
          boxSizing: 'border-box',
          textOverflow: 'clip',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'block',
          textAlign: 'center',
        }
      });
      break;
    default:
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
          display: 'flex',
          flexDirection: 'column',
        },
        voiceState: {
          ...voiceState,
          display: 'flex',
          height: 'initial',
          marginBottom: '0',
        },
        user,
        name,
      });
      break;
  }
};
// アイコンの間隔（上下）
const iconRowGap = ({ val, styles, setStyles }: StringValArg) => {
  const voiceStates = omit(styles.voiceStates, ['rowGap']);
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        voiceStates
      });
      break;
    default:
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
          rowGap: `${val}px`,
        },
      });
      break;
  }
};

// アイコンの間隔（左右）
const iconColumnGap = ({ val, styles, setStyles }: StringValArg) => {
  const voiceStates = omit(styles.voiceStates, ['columnGap']);
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        voiceStates,
      });
      break;
    default:
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
          columnGap: `${val}px`,
        },
      });
      break;
  }
};

// アイコンの形
const iconShape = ({ val, styles, setStyles }: StringValArg) => {
  const height = Number(styles?.avatar?.height?.replace('px', '') || 50);
  const wasTall = getIsTall(styles?.avatar);
  const avatar = omit(styles.avatar, ['borderRadius', 'objectFit', 'height']);
  setStyles({
    ...styles,
    avatar: {
      ...avatar,
      ...((val === 'circle') ? {} : {
        borderRadius: (val === 'rect-r') ? '8px' : '0px',
      }),
      ...((val === 'tall' && !wasTall)
        ? {
          objectFit: 'cover',
          height: `${height * 2}px`,
        }
        : {
          height: `${wasTall ? height / 2 : height}px`,
        }
      ),
    }
  })
};

// 話すときの動き
const iconSpeaking = ({ val, styles, setStyles }: StringValArg) => {
  const avatar = omit(styles.avatar, ['filter']);
  const avatarSpeaking = omit(styles.avatarSpeaking, ['position', 'animation', 'animationDuration', 'filter', 'borderColor']);
  switch (val) {
    case 'light':
      setStyles({
        ...styles,
        avatar: {
          ...avatar,
          filter: 'brightness(70%)',
        },
        avatarSpeaking: {
          ...avatarSpeaking,
          position: 'relative',
          animation: '300ms infinite alternate ease-in-out speak-light',
          filter: 'brightness(100%)',
          borderColor: 'rgba(255,255,255,.75)', // !important
        }
      });
      break;
    case 'jump':
      setStyles({
        ...styles,
        avatar: {
          ...avatar,
          filter: 'brightness(70%)',
        },
        avatarSpeaking: {
          ...avatarSpeaking,
          position: 'relative',
          animation: '300ms infinite alternate ease-in-out speak-jump',
          filter: 'brightness(100%)',
          borderColor: 'transparent', // !important
        }
      });
      break;
    default:
      setStyles({
        ...styles,
        avatar,
        avatarSpeaking,
      });
      break;
  }
}

type StyleInsetType = {
  styles: CustomStyle;
  setStyles: React.Dispatch<React.SetStateAction<CustomStyle>>;
}
// 話すときの動き
export const setIconSpeakingStyle = ({
  val, animationColor, styles, setStyles,
}: StyleInsetType & { val: string[]; animationColor: string; }) => {
  const avatar = omit(styles.avatar, ['filter', 'marginRight']);
  const avatarSpeaking = omit(styles.avatarSpeaking, ['position', 'animation', 'filter', 'borderColor', 'zIndex']);

  const newAnimation = val.map((animationType: string) => {
    switch (animationType) {
      case 'border':
        return '';
      case 'light':
        return '750ms infinite alternate ease-in-out speak-light';
      case 'jump':
        return '750ms infinite alternate ease-in-out speak-jump';
      default: return '';
    }
  }).filter((v) => !!v);

  setStyles({
    ...styles,
    avatar: {
      ...avatar,
      filter: 'brightness(70%)',
      marginRight: '0',
    },
    avatarSpeaking: {
      ...avatarSpeaking,
      position: 'relative',
      filter: 'brightness(100%)',
      ...(!val.includes('border') ? { borderColor: 'transparent' } : { borderColor: animationColor }),
      ...(newAnimation.length === 0 ? '' : { animation: newAnimation.join(',')}),
      zIndex: '1',
    }
  });
}

// 動きの速さ
const iconSpeakingDuration = ({ val, styles, setStyles }: StringValArg) => {
  const avatarSpeaking = omit(styles.avatarSpeaking, ['animationDuration']);
  const animationDuration = val === '0' ? '750ms' : `${751 - Number(val) * 5}ms`;
  setStyles({
    ...styles,
    avatarSpeaking: {
      ...avatarSpeaking,
      animationDuration,
    },
  });
};

// アイコンの大きさ
const iconSize = ({ val, styles, setStyles }: StringValArg) => {
  const isTall = getIsTall(styles?.avatar);
  const avatar = omit(styles.avatar, ['width', 'height', 'marginBottom']);

  const getStyle = (size: number) => ({
    ...styles,
    avatar: {
      ...avatar,
      width: `${size}px`,
      height: `${size * (!!isTall ? 2 : 1)}px`,
      marginBottom: '8px',
    },
    name: {
      ...styles.name,
      maxWidth: `${size + 6}px`, // アイコンサイズ+6px
    },
  })
  switch (val) {
    case 'lg':
      setStyles(getStyle(80));
      break;
    case 'xg':
      setStyles(getStyle(96));
      break;
    default:
      setStyles(getStyle(50));
      break;
  }
};

// 名前
const nameVisibility = ({ val, styles, setStyles }: StringValArg) => {
  const name = omit(styles.name, ['visibility']);
  switch (val) {
    case 'exist':
      setStyles({
        ...styles,
        name,
      });
      break;
    default:
      setStyles({
        ...styles,
        name: {
          ...name,
          visibility: 'hidden',
        },
      });
      break;
  }
};

// 名前の見た目
const nameStyle = ({ val, styles, setStyles }: StringValArg) => {
  const name = omit(styles.name, ['backgroundColor', 'textShadow']);
  switch (val) {
    case 'bordering':
      setStyles({
        ...styles,
        name: {
          ...name,
          backgroundColor: 'transparent',
          textShadow: '2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black',
        },
      });
      break;
    case 'none':
      setStyles({
        ...styles,
        name: {
          ...name,
          backgroundColor: 'transparent',
        },
      });
      break;
    default:
      setStyles({
        ...styles,
        name,
      });
      break;
  }
};

// 名前の位置（上下）
const namePositionVertical = ({ val, styles, setStyles }: StringValArg) => {
  const name = omit(styles.name, ['position', 'top']);
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        name,
      });
      break;
    default:
      setStyles({
        ...styles,
        name: {
          ...name,
          top: `${val}px`,
          position: 'relative',
        },
      });
      break;
  }
};

// 名前の位置（左右）
const namePositionHorizontal = ({ val, styles, setStyles }: StringValArg) => {
  const name = omit(styles.name, ['position', 'left']);
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        name,
      });
      break;
    default:
      setStyles({
        ...styles,
        name: {
          ...name,
          left: `${val}px`,
          position: 'relative',
        },
      });
      break;
  }
};
export default {
  iconAlign,
  iconRowGap,
  iconColumnGap,
  iconShape,
  iconSpeaking,
  iconSpeakingDuration,
  iconSize,
  nameVisibility,
  nameStyle,
  namePositionVertical,
  namePositionHorizontal,
};
