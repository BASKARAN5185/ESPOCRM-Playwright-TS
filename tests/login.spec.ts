import { test, expect } from '@playwright/test';

test('Verify Login Page Loads', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page).toHaveURL(/auth\/login/);
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
