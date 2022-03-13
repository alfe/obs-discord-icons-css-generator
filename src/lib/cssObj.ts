import { CustomStyle } from "../component/DiscordIconPreview";

type StringValArg = {
  val: string;
  styles: CustomStyle;
  setStyles: React.Dispatch<React.SetStateAction<CustomStyle>>;
};

// アイコンの並び
const iconAlign = ({ val, styles, setStyles }: StringValArg) => {
  switch (val) {
    case 'horizontal':
      setStyles({
        ...styles,
        voiceStates: {
          display: 'flex',
        },
        voiceState: {
          ...styles.voiceState,
          display: 'flex',
          flexDirection: 'column',
        },
        name: {
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
          display: 'block',
        },
        voiceState: {
          ...styles.voiceState,
          display: 'block',
          flexDirection: 'unset',
        },
        name: {
          maxWidth: styles?.avatar?.width || '100%',
          boxSizing: 'none',
          textOverflow: 'clip',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          display: 'initial',
        }
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

// アイコンの大きさ
const iconSpeaking = ({ val, styles, setStyles }: StringValArg) => {
  switch (val) {
    case 'light':
      setStyles({
        ...styles,
        avatar: {
          ...styles.avatar,
          filter: 'brightness(70%)',
        },
        speaking: {
          position: 'relative',
          animation: '300ms infinite alternate speak-light',
          filter: 'brightness(100%)',
          borderColor: 'rgba(255,255,255,.5)', // !important
        }
      });
      break;
    case 'jump':
      setStyles({
        ...styles,
        avatar: {
          ...styles.avatar,
          filter: 'brightness(70%)',
        },
        speaking: {
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
        avatar: {
          ...styles.avatar,
          filter: 'none',
        },
        speaking: {
          position: 'initial',
          animation: 'none',
          filter: 'none',
          borderColor: '#43b581', // !important
        }
      });
      break;
  }
}

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
  switch (val) {
    case 'exist':
      setStyles({
        ...styles,
        name: {
          ...styles.name,
          visibility: 'visible',
        },
      });
      break;
    default:
      setStyles({
        ...styles,
        name: {
          ...styles.name,
          visibility: 'hidden',
        },
      });
      break;
  }
};

// 名前の位置（上下）
const namePositionVertical = ({ val, styles, setStyles }: StringValArg) => {
  switch (val) {
    case '0px':
      const { position, top, ...name } = styles.name;
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
          top: val,
          position: 'relative',
        },
      });
      break;
  }
};

// 名前の位置（左右）
const namePositionHorizontal = ({ val, styles, setStyles }: StringValArg) => {
  switch (val) {
    case '0px':
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
          left: val,
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
  iconSize,
  nameVisibility,
  namePositionVertical,
  namePositionHorizontal,
};