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

test('3. Verify username field is visible', async ({ page }) => {
await page.goto(URL);
await expect(page.locator('input[name="username"]')).toBeVisible();
});

test('4. Verify password field is visible', async ({ page }) => {
await page.goto(URL);
await expect(page.locator('input[name="password"]')).toBeVisible();
});

test('5. Verify login button is visible', async ({ page }) => {
await page.goto(URL);
await expect(page.locator('button[type="submit"]')).toBeVisible();
});

test('6. Login with valid credentials', async ({ page }) => {
await page.goto(URL);

await page.locator('input[name="username"]').fill('admin');
await page.locator('input[name="password"]').fill('admin');
await page.locator('button[type="submit"]').click();

await expect(page).toHaveURL(/#Dashboard|#Home|#/);
});

test('7. Login with invalid password', async ({ page }) => {
await page.goto(URL);

await page.locator('input[name="username"]').fill('admin');
await page.locator('input[name="password"]').fill('wrongpassword');
await page.locator('button[type="submit"]').click();

await expect(page.locator('.alert, .error')).toBeVisible();
});

test('8. Login with empty username', async ({ page }) => {
await page.goto(URL);

await page.locator('input[name="password"]').fill('admin');
await page.locator('button[type="submit"]').click();

await expect(page.locator('input[name="username"]')).toBeVisible();
});

test('9. Login with empty password', async ({ page }) => {
await page.goto(URL);

await page.locator('input[name="username"]').fill('admin');
await page.locator('button[type="submit"]').click();

await expect(page.locator('input[name="password"]')).toBeVisible();
});

test('10. Verify Remember Me checkbox exists', async ({ page }) => {
await page.goto(URL);

const checkbox = page.locator('input[type="checkbox"]');
await expect(checkbox).toBeVisible();
});
