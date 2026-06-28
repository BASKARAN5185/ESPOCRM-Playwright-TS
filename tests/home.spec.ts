import { test, expect } from '@playwright/test';
import { HomePage } from '../page/HomePage.spec';
import {LoginPage} from '../page/LoginPage.spec';

test.describe('Home Dashboard', () => {
let homePage: HomePage;
let loginPage :LoginPage;

test.beforeEach(async ({ page }) => {
homePage = new HomePage(page);
loginPage=new LoginPage(page);

await loginPage.navigateToLoginPage();  
await loginPage.loginAsAdmin();

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