import { describe, expect, it } from 'vite-plus/test';
import type { CustomStyle } from '../component/DiscordIconPreview';
import { getCssText } from './cssText';

const baseStyles: CustomStyle = {
  voiceContainer: {},
  voiceStates: {},
  voiceState: {},
  avatar: {},
  avatarSpeaking: {},
  user: {},
  name: {},
};

describe('getCssText', () => {
  it('プロパティ名をkebab-caseで出力する', () => {
    const css = getCssText({
      styles: { ...baseStyles, avatar: { borderRadius: '50%', marginTop: '4px' } },
    });
    expect(css).toContain('[class*="Voice_avatar__"]');
    expect(css).toContain('border-radius: 50%;');
    expect(css).toContain('margin-top: 4px;');
    expect(css).not.toContain('borderRadius');
  });

  it('値が空のクラスは出力しない', () => {
    const css = getCssText({ styles: { ...baseStyles, avatar: { borderRadius: '50%' } } });
    expect(css).toContain('[class*="Voice_avatar__"]');
    expect(css).not.toContain('[class*="Voice_voiceContainer__"]');
    expect(css).not.toContain('[class*="Voice_user__"]');
  });

  it('nameのbackgroundColorだけimportantを付ける', () => {
    const nameCss = getCssText({
      styles: { ...baseStyles, name: { backgroundColor: '#000000' } },
    });
    expect(nameCss).toContain('background-color: #000000 !important;');

    const avatarCss = getCssText({
      styles: { ...baseStyles, avatar: { backgroundColor: '#000000' } },
    });
    expect(avatarCss).toContain('background-color: #000000;');
    expect(avatarCss).not.toContain('!important');
  });

  it('hiddenUserId指定時はそのアバターと表示名を非表示にする', () => {
    const css = getCssText({ styles: baseStyles, hiddenUserId: '739080466790875187' });
    expect(css).toContain('[src*="avatars/739080466790875187/"]');
    expect(css).toContain('display: none;');
  });

  it('hiddenUserId未指定時は非表示ルールを含めない', () => {
    expect(getCssText({ styles: baseStyles })).not.toContain('avatars/');
  });

  it('話しているスタイルのkeyframesを追記する', () => {
    const css = getCssText({
      styles: baseStyles,
      speakingStyles: ['jump'],
      animationColor: '#ff0000',
    });
    expect(css).toContain('@keyframes speak-jump');

    expect(getCssText({ styles: baseStyles })).not.toContain('@keyframes');
  });

  it('スタイルとkeyframesを連結した文字列を返す', () => {
    const css = getCssText({
      styles: { ...baseStyles, avatar: { width: '80px' } },
      speakingStyles: ['jump'],
    });
    expect(css.indexOf('[class*="Voice_avatar__"]')).toBeLessThan(css.indexOf('@keyframes'));
    expect(css.startsWith('\n')).toBe(false);
  });
});
