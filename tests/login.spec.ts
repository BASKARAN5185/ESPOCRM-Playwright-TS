import { test, expect } from '@playwright/test';

test('Navigate to ESPOCRM', async ({ page }) => {
  await page.goto('https://demo.espocrm.com/');

  await expect(page).toHaveURL(/demo\.espocrm\.com/);
});

test('Validate page name', async ({ page }) => {
  await page.goto('https://demo.espocrm.com/');

  const heading = page.getByRole('heading', { name: 'EspoCRM Demo' });

  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('EspoCRM Demo');

  await expect(page).toHaveTitle('EspoCRM Demo');
});
