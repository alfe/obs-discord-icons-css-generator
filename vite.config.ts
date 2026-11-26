import { defineConfig, lazyPlugins } from 'vite-plus';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    singleQuote: true,
  },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    options: { typeAware: true, typeCheck: true },
    settings: {
      react: { version: '19.3' },
    },
    plugins: ['eslint', 'unicorn', 'typescript', 'oxc', 'promise', 'react', 'jsx-a11y', 'vitest'],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
      'typescript/no-unnecessary-template-expression': 'error',
      // TODO: 画像にaltをつけたら有効化する（alt-textが9件ある）
      'jsx-a11y/alt-text': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      // TODO: useEffectの依存配列を見直してから有効化する
      'react/exhaustive-effect-dependencies': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  plugins: lazyPlugins(() => [react()]),
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react',
              priority: 100,
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            {
              name: 'mui',
              priority: 90,
              test: /node_modules[\\/](@mui|@emotion|mui-color-input)[\\/]/,
            },
            { name: 'vendor', priority: 50, test: /node_modules/ },
          ],
        },
      },
    },
  },
  run: {
    tasks: {
      verify: ['vp check', 'vp test --run'],
    },
  },
  server: {
    open: true,
  },
});
