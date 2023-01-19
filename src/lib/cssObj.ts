import { CustomStyle } from "../component/DiscordIconPreview";

type StringValArg = {
  val: string;
  styles: CustomStyle;
  setStyles: React.Dispatch<React.SetStateAction<CustomStyle>>;
};

// アイコンの並び
const iconAlign = ({ val, styles, setStyles }: StringValArg) => {
  const { display, flexDirection: ___, rowGap, columnGap, ...voiceStates } = styles.voiceStates;
  const { display: _, flexDirection, ...voiceState } = styles.voiceState;
  const { boxSizing, textOverflow, whiteSpace, overflow, display: __, textAlign, ...name } = styles.name;
  switch (val) {
    case 'horizontal':
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
          display: 'flex',
          flexWrap: 'wrap',
        },
        voiceState: {
          ...voiceState,
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          marginBottom: '0',
        },
        name: {
          ...name,
          maxWidth: styles?.avatar?.width || '64px',
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
        name,
      });
      break;
  }
};
// アイコンの間隔（上下）
const iconRowGap = ({ val, styles, setStyles }: StringValArg) => {
  const { rowGap, ...voiceStates } = styles.voiceStates;
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
        },
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
  const { columnGap, ...voiceStates } = styles.voiceStates;
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
        },
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
  const { borderRadius, ...avatar } = styles.avatar;
  setStyles({
    ...styles,
    avatar: {
      ...avatar,
      ...((val === 'circle') ? {} : {
        borderRadius: (val === 'rect-r') ? '8px' : '0px',
      })
    }
  })
};

// 話すときの動き
const iconSpeaking = ({ val, styles, setStyles }: StringValArg) => {
  const { filter: _, ...avatar } = styles.avatar;
  const { position, animation, animationDuration, filter, borderColor, ...avatarSpeaking } = styles.avatarSpeaking;
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
  const { filter: _, ...avatar } = styles.avatar;
  const { position, animation, animationDuration, filter, borderColor, ...avatarSpeaking } = styles.avatarSpeaking;

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
    },
    avatarSpeaking: {
      ...avatarSpeaking,
      position: 'relative',
      filter: 'brightness(100%)',
      ...(!val.includes('border') ? { borderColor: 'transparent' } : { borderColor: animationColor }),
      ...(newAnimation.length === 0 ? '' : { animation: newAnimation.join(',')}),
      animationDuration,
    }
  });
}

// 動きの速さ
const iconSpeakingDuration = ({ val, styles, setStyles }: StringValArg) => {
  const { animationDuration, ...avatarSpeaking } = styles.avatarSpeaking;
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        avatarSpeaking: {
          ...avatarSpeaking,
          animationDuration: `750ms`,
        },
      });
      break;
    default:
      setStyles({
        ...styles,
        avatarSpeaking: {
          ...avatarSpeaking,
          animationDuration: `${751 - Number(val) * 5}ms`,
        },
      });
      break;
  }
};

// アイコンの大きさ
const iconSize = ({ val, styles, setStyles }: StringValArg) => {
  const { width, height, ...avatar } = styles.avatar;
  switch (val) {
    case 'lg':
      setStyles({
        ...styles,
        avatar: {
          ...avatar,
          width: '80px',
          height: '80px',
          marginBottom: '8px',
        },
        voiceState: {
          ...styles.voiceState,
        },
        name: {
          ...styles.name,
          maxWidth: '80px',
        },
      });
      break;
    case 'xg':
      setStyles({
        ...styles,
        avatar: {
          ...avatar,
          width: '96px',
          height: '96px',
          marginBottom: '8px',
        },
        voiceState: {
          ...styles.voiceState,
        },
        name: {
          ...styles.name,
          maxWidth: '96px',
        },
      });
      break;
    default:
      setStyles({
        ...styles,
        avatar: {
          ...avatar,
          marginBottom: '8px',
        },
        voiceState: {
          ...styles.voiceState,
        },
        name: {
          ...styles.name,
          maxWidth: '64px',
        },
      });
      break;
  }
};

// 名前
const nameVisibility = ({ val, styles, setStyles }: StringValArg) => {
  const { visibility, ...name } = styles.name;
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
  const { backgroundColor, textShadow, ...name } = styles.name;
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
  const { position, top, ...name } = styles.name;
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
  switch (val) {
    case '0':
      const { position, left, ...name } = styles.name;
      setStyles({
        ...styles,
        name: {
          ...name,
        },
      });
      break;
    default:
      setStyles({
        ...styles,
        name: {
          ...styles.name,
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
