import { test, expect } from '@playwright/test';

const URL = 'https://demo.us.espocrm.com/';

test('1. Verify login page loads', async ({ page }) => {
await page.goto(URL);
await expect(page).toHaveURL(/espocrm.com/);
});

test('2. Verify page title contains EspoCRM', async ({ page }) => {
await page.goto(URL);
await expect(page).toHaveTitle(/EspoCRM/i);
});

test('3. Verify login button is visible', async ({ page }) => {
await page.goto(URL);
await expect(page.locator('button[type="submit"]')).toBeVisible();
});

