import { describe, expect, it } from 'vite-plus/test';
import type { Dispatch, SetStateAction } from 'react';
import type { CustomStyle } from '../component/DiscordIconPreview';
import cssObj, { setIconSpeakingStyle } from './cssObj';

/** setStylesに渡された最新のスタイルを記録する */
const captureStyles = (initial: CustomStyle = {}) => {
  const state = { current: initial };
  const setStyles: Dispatch<SetStateAction<CustomStyle>> = (value) => {
    state.current = typeof value === 'function' ? value(state.current) : value;
  };
  return { state, setStyles };
};

describe('setIconSpeakingStyle', () => {
  it('jumpとlightのanimationを連結する', () => {
    const { state, setStyles } = captureStyles();
    setIconSpeakingStyle({
      val: ['jump', 'light'],
      animationColor: '#123456',
      styles: {},
      setStyles,
    });

    const animation = state.current.avatarSpeaking?.animation ?? '';
    expect(animation).toContain('speak-jump');
    expect(animation).toContain('speak-light');
    expect(state.current.avatar?.filter).toBe('brightness(70%)');
    expect(state.current.avatarSpeaking?.filter).toBe('brightness(100%)');
  });

  it('border未選択時はborderColorをtransparentにする', () => {
    const { state, setStyles } = captureStyles();
    setIconSpeakingStyle({ val: ['light'], animationColor: '#123456', styles: {}, setStyles });
    expect(state.current.avatarSpeaking?.borderColor).toBe('transparent');
  });

  it('border選択時はanimationColorをborderColorに使う', () => {
    const { state, setStyles } = captureStyles();
    setIconSpeakingStyle({ val: ['border'], animationColor: '#123456', styles: {}, setStyles });
    expect(state.current.avatarSpeaking?.borderColor).toBe('#123456');
    expect(state.current.avatarSpeaking?.animation).toBeUndefined();
  });

  it('未知のスタイル名は無視する', () => {
    const { state, setStyles } = captureStyles();
    setIconSpeakingStyle({
      val: ['jump', 'unknown'],
      animationColor: '#123456',
      styles: {},
      setStyles,
    });
    const animation = state.current.avatarSpeaking?.animation ?? '';
    expect(animation).toContain('speak-jump');
    expect(animation.split(',')).toHaveLength(1);
  });

  it('他のクラスの設定は引き継ぐ', () => {
    const initial: CustomStyle = { avatar: { width: '96px' }, name: { fontSize: '12px' } };
    const { state, setStyles } = captureStyles(initial);
    setIconSpeakingStyle({ val: [], animationColor: '#123456', styles: initial, setStyles });

    expect(state.current.avatar?.width).toBe('96px');
    expect(state.current.avatar?.marginRight).toBe('0');
    expect(state.current.name?.fontSize).toBe('12px');
  });
});

describe('iconSpeakingDuration', () => {
  it('0のときは既定値(750ms)になる', () => {
    const { state, setStyles } = captureStyles();
    cssObj.iconSpeakingDuration({ val: '0', styles: {}, setStyles });
    expect(state.current.avatarSpeaking?.animationDuration).toBe('750ms');
  });

  it('値が大きいほど速くなる', () => {
    const { state, setStyles } = captureStyles();
    cssObj.iconSpeakingDuration({ val: '100', styles: {}, setStyles });
    expect(state.current.avatarSpeaking?.animationDuration).toBe('251ms');
  });
});
