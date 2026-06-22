import { test, expect } from '@playwright/test';
import { HomePage } from '../page/HomePage.spec';

test.describe('Home Dashboard', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    await page.goto('/');
  });

  test('should load dashboard successfully', async () => {
    await homePage.verifyHomePageLoaded();
  });

  test('should display activities', async () => {
    await homePage.verifyHomePageLoaded();

    const activityName = await homePage.getFirstActivityName();

    expect(activityName.length).toBeGreaterThan(0);
  });

  test('should search from global search', async ({ page }) => {
    await homePage.search('Intelacard');

    await expect(page).toHaveURL(/Intelacard|search/i);
  });

  test('should show more activities', async () => {
    await homePage.clickShowMore();
  });
});