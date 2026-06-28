import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage.spec';
import { MenuPage } from '../page/MenuPage.spec';

test.describe('Menu Navigation Tests', () => {

    let loginPage: LoginPage;
    let menuPage: MenuPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        menuPage = new MenuPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.loginAsAdmin();

        // Verify login success
        await expect(page).not.toHaveURL(/login/);
    });

    test('Navigate to Accounts', async () => {
        await menuPage.openAccounts();
    });

    test('Navigate to Contacts', async () => {
        await menuPage.openContacts();
    });

    test('Navigate to Leads', async () => {
        await menuPage.openLeads();
    });

    test('Navigate to Opportunities', async () => {
        await menuPage.openOpportunities();
    });

    test('Navigate to Emails', async () => {
        await menuPage.openEmails();
    });

    test('Navigate to Calendar', async () => {
        await menuPage.openCalendar();
    });

    test('Navigate to Meetings', async () => {
        await menuPage.openMeetings();
    });

    test('Navigate to Calls', async () => {
        await menuPage.openCalls();
    });

    test('Navigate to Tasks', async () => {
        await menuPage.openTasks();
    });

    test('Navigate to Cases', async () => {
        await menuPage.openCases();
    });

    test('Navigate to Knowledge Base', async () => {
        await menuPage.openKnowledgeBase();
    });

    test('Navigate to Documents', async () => {
        await menuPage.openDocuments();
    });

});