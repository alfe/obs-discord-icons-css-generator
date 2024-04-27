import { test, expect } from '@playwright/test';

test('gihyoの動画を撮影する', async ({ page }) => {
  await page.goto('https://gihyo.jp/book');
  await expect(page).toHaveTitle(/技術評論社/);
});
