import { test as setup } from '@playwright/test';
import { LoginPage } from '../page/LoginPage.spec';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.loginAsAdmin();

  await page.waitForLoadState('networkidle');

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});