import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'vertical' }).click();
  await page.getByRole('button', { name: 'horizontal' }).click();
});