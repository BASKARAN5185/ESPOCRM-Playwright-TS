import { test, expect } from '@playwright/test';

const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test('Verify Login Page Loads', async ({ page }) => {
await page.goto(URL);

await expect(page).toHaveURL(/auth/login/);
await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('Verify Page Title', async ({ page }) => {
await page.goto(URL);

await expect(page).toHaveTitle(/OrangeHRM/);
});

test('Login With Valid Credentials', async ({ page }) => {
await page.goto(URL);

await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL(/dashboard/);
});

test('Login With Invalid Credentials', async ({ page }) => {
await page.goto(URL);

await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('wrongPassword');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify Forgot Password Link', async ({ page }) => {
await page.goto(URL);

await page.getByText('Forgot your password?').click();

await expect(page).toHaveURL(/requestPasswordResetCode/);
});
