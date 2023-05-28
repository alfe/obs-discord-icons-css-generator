import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '日本語' }).click();
  await page.getByRole('button', { name: '縦並び' }).click();
  await page.getByRole('button', { name: '横並び' }).click();
  await expect(page.locator('.MuiPaper-root:last-child')).toHaveText(/[class*="Voice_voiceStates__"]/);
  await expect(page.locator('.MuiPaper-root:last-child')).toHaveText(/display: flex;/);
  await expect(page.locator('.MuiPaper-root:last-child')).toHaveText(/flex-wrap: wrap;/);
});