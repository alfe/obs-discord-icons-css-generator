// + `${!styles.avatarSpeaking?.animation?.includes('speak-light') ? '' : `
// @keyframes speak-light {
//   0% {
//     box-shadow: 0 0 4px #ffffff;
//   }
//   50% {
//     box-shadow: 0 0 16px #ffffff;
//   }
//   100% {
//     box-shadow: 0 0 4px #ffffff;
//   }
// }`}${!styles.avatarSpeaking?.animation?.includes('speak-jump') ? '' : `
// @keyframes speak-jump {
//   0% {
//     bottom: 0px;
//   }
//   50% {
//     bottom: 10px;
//   }
//   100% {
//     bottom: 0px;
//   }
// }`}
// `;

export const getCssKeyFrames = (speakingStyles: string[] = [], animationColor: string = '#fff') => {
  let result = '';
  if (speakingStyles.includes('jump')) {
    result += `
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
}`;
  }
  if (speakingStyles.includes('light') && speakingStyles.includes('border')) {
    result += `
@keyframes speak-light {
  0% {
    filter: drop-shadow(0 0 2px ${animationColor}) brightness(100%) drop-shadow(2px 2px 0px ${animationColor}) drop-shadow(-2px -2px 0px ${animationColor}) drop-shadow(-2px 2px 0px ${animationColor}) drop-shadow(2px -2px 0px ${animationColor});
  }
  50% {
    filter: drop-shadow(0 0 8px ${animationColor}) brightness(100%) drop-shadow(2px 2px 0px ${animationColor}) drop-shadow(-2px -2px 0px ${animationColor}) drop-shadow(-2px 2px 0px ${animationColor}) drop-shadow(2px -2px 0px ${animationColor});
  }
  100% {
    filter: drop-shadow(0 0 2px ${animationColor}) brightness(100%) drop-shadow(2px 2px 0px ${animationColor}) drop-shadow(-2px -2px 0px ${animationColor}) drop-shadow(-2px 2px 0px ${animationColor}) drop-shadow(2px -2px 0px ${animationColor});
  }
}`;
  } else {
    if (speakingStyles.includes('light')) {
      result += `
@keyframes speak-light {
  0% {
    filter: drop-shadow(0 0 2px ${animationColor});
  }
  50% {
    filter: drop-shadow(0 0 8px ${animationColor});
  }
  100% {
    filter: drop-shadow(0 0 2px ${animationColor});
  }
}`;
    }
    if (speakingStyles.includes('border')) {
      result += `
@keyframes speak-border {
  0% {
    filter: drop-shadow(2px 2px 0px ${animationColor}) drop-shadow(-2px -2px 0px ${animationColor}) drop-shadow(-2px 2px 0px ${animationColor}) drop-shadow(2px -2px 0px ${animationColor});
  }
  50% {
    filter: drop-shadow(2px 2px 0px ${animationColor}) drop-shadow(-2px -2px 0px ${animationColor}) drop-shadow(-2px 2px 0px ${animationColor}) drop-shadow(2px -2px 0px ${animationColor});
  }
  100% {
    filter: drop-shadow(2px 2px 0px ${animationColor}) drop-shadow(-2px -2px 0px ${animationColor}) drop-shadow(-2px 2px 0px ${animationColor}) drop-shadow(2px -2px 0px ${animationColor});
  }
}`;
    }
  }
  return result;
};
