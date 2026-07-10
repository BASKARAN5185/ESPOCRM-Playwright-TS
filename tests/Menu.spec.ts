import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage.spec';
import { MenuComponent } from '../page/MenuComponent.spec';

test.describe('@Regression @Navigation Menu Navigation Tests', () => {

    let loginPage: LoginPage;
    let menuPage: MenuComponent;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        menuPage = new MenuComponent(page);

        await loginPage.navigateToLoginPage();
        await loginPage.loginAsAdmin();

        // Verify login success
        await expect(page).not.toHaveURL(/login/);
    });

    test('@P1 @Menu Navigate to Accounts', async () => {
        await menuPage.openAccounts();
    });

    test('@P1 @Menu Navigate to Contacts', async () => {
        await menuPage.openContacts();
    });

    test('@P1 @Menu Navigate to Leads', async () => {
        await menuPage.openLeads();
    });

    test('@P1 @Menu Navigate to Opportunities', async () => {
        await menuPage.openOpportunities();
    });

    test('@P2 @Menu Navigate to Emails', async () => {
        await menuPage.openEmails();
    });

    // test('@P2 @Menu Navigate to Calendar', async () => {
    //     await menuPage.openCalendar();
    // });

    test('@P2 @Menu Navigate to Meetings', async () => {
        await menuPage.openMeetings();
    });

    test('@P2 @Menu Navigate to Calls', async () => {
        await menuPage.openCalls();
    });

    test('@P2 @Menu Navigate to Tasks', async () => {
        await menuPage.openTasks();
    });

    test('@P2 @Menu Navigate to Cases', async () => {
        await menuPage.openCases();
    });

    // test('@P3 @Menu Navigate to Knowledge Base', async () => {
    //     await menuPage.openKnowledgeBase();
    // });

    test('@P2 @Menu Navigate to Documents', async () => {
        await menuPage.openDocuments();
    });

});