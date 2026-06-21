import { test, expect } from '@playwright/test';

test('Navigate to ESPOCRM ', async ({ page }) => {
  await page.goto('https://demo.espocrm.com/');
  await page.waitForLoadState('networkidle');
  await page.waitForURL('https://demo.espocrm.com/');
  
  // Expect a URl "to contain" a substring.
  await expect(page).toHaveURL(/demo.espocrm.com/);
});

test('validate page name ', async ({ page }) => {
  await page.goto('https://demo.espocrm.com/');
  await page.waitForLoadState('networkidle');
  await page.waitForURL('https://demo.espocrm.com/');
// Excpect page to have a heading with the name of "EspoCRM Demo".
  await expect(page.getByRole('heading', { name: 'EspoCRM Demo' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'EspoCRM Demo' })).toHaveText('EspoCRM Demo');
  await expect(page.title()).toBe('EspoCRM Demo');

});

