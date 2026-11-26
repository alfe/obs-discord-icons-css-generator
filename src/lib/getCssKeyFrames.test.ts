import { describe, expect, it } from 'vite-plus/test';
import { getCssKeyFrames } from './getCssKeyFrames';

describe('getCssKeyFrames', () => {
  it('何も选择していない場合はkeyframesを返さない', () => {
    expect(getCssKeyFrames()).toBe('');
    expect(getCssKeyFrames([])).toBe('');
  });

  it('jumpのkeyframesを含む', () => {
    const css = getCssKeyFrames(['jump'], '#00ff00');
    expect(css).toContain('@keyframes speak-jump');
    expect(css).toContain('bottom: 10px;');
  });

  it('lightとborderを同時選択するとspeak-lightへ統合される', () => {
    const css = getCssKeyFrames(['light', 'border'], '#123456');
    expect(css).toContain('@keyframes speak-light');
    expect(css).not.toContain('@keyframes speak-border');
    // 発光と輪郭が1つのfilterにまとまる
    expect(css).toContain('drop-shadow(0 0 8px #123456) brightness(100%)');
    expect(css).toContain('drop-shadow(2px -2px 0px #123456)');
  });

  it('light単独では輪郭のdrop-shadowを含まない', () => {
    const css = getCssKeyFrames(['light'], '#ffffff');
    expect(css).toContain('@keyframes speak-light');
    expect(css).not.toContain('brightness(100%)');
    expect(css).not.toContain('drop-shadow(2px 2px 0px');
  });

  it('border単独ではspeak-borderのみ生成する', () => {
    const css = getCssKeyFrames(['border'], '#ffffff');
    expect(css).toContain('@keyframes speak-border');
    expect(css).not.toContain('@keyframes speak-light');
    expect(css).toContain('drop-shadow(2px 2px 0px #ffffff)');
  });

  it('animationColor未指定時は白で生成する', () => {
    expect(getCssKeyFrames(['light'])).toContain('drop-shadow(0 0 2px #fff)');
  });

  it('未知のスタイル名は無視する', () => {
    expect(getCssKeyFrames(['unknown', 'jump'])).toContain('@keyframes speak-jump');
  });
});
