import { CustomStyle } from "../component/DiscordIconPreview";

type StringValArg = {
  val: string;
  styles: CustomStyle;
  setStyles: React.Dispatch<React.SetStateAction<CustomStyle>>;
};

// アイコンの並び
const iconAlign = ({ val, styles, setStyles }: StringValArg) => {
  const { display, ...voiceStates } = styles.voiceStates;
  const { display: _, flexDirection, ...voiceState } = styles.voiceState;
  const { boxSizing, textOverflow, whiteSpace, overflow, display: __, textAlign, ...name } = styles.name;
  switch (val) {
    case 'horizontal':
      setStyles({
        ...styles,
        voiceStates: {
          ...voiceStates,
          display: 'flex',
        },
        voiceState: {
          ...voiceState,
          display: 'flex',
          flexDirection: 'column',
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
        voiceStates,
        voiceState,
        name,
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
  const { position, animation, animationDuration, filter, borderColor, ...speaking } = styles.speaking;
  switch (val) {
    case 'light':
      setStyles({
        ...styles,
        avatar: {
          ...avatar,
          filter: 'brightness(70%)',
        },
        speaking: {
          ...speaking,
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
        speaking: {
          ...speaking,
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
        speaking,
      });
      break;
  }
}

// 動きの速さ
const iconSpeakingDuration = ({ val, styles, setStyles }: StringValArg) => {
  const { animationDuration, ...speaking } = styles.speaking;
  switch (val) {
    case '0':
      setStyles({
        ...styles,
        speaking: {
          ...speaking,
          animationDuration: `300ms`,
        },
      });
      break;
    default:
      setStyles({
        ...styles,
        speaking: {
          ...speaking,
          animationDuration: `${300 - Number(val)}ms`,
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
        },
        voiceState: {
          ...styles.voiceState,
          height: '80px',
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
        },
        voiceState: {
          ...styles.voiceState,
          height: '96px',
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
        },
        voiceState: {
          ...styles.voiceState,
          height: '64px',
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
  iconShape,
  iconSpeaking,
  iconSpeakingDuration,
  iconSize,
  nameVisibility,
  nameStyle,
  namePositionVertical,
  namePositionHorizontal,
};
