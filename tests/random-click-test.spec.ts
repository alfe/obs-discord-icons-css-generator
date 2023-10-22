import { test, expect } from '@playwright/test';

test('ランダムにクリック', async ({ page }) => {
  await page.goto('/');
  for (let index = 0; index < 100; index++) {
    const $buttons = await page.getByRole('button');
    const buttonsLength = await $buttons.count() - 1;
    await $buttons.nth(Math.floor(Math.random() * buttonsLength)).click();
  }
});
