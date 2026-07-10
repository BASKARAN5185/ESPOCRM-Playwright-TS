import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage.spec';

test.describe('EspoCRM Login Tests', () => {

  test('@P1 @Smoke Verify login page elements', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.verifyLoginPageLoaded();
});

test('@P0 @Smoke @Login Login as Administrator', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.loginAsAdmin();

  // Verify successful login
  await expect(page).not.toHaveURL(/login/);
});

});
