import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage.spec';
import { AccountCreationPage } from '../page/AccountCreationPage.spec';

test.describe('@Smoke @AccountCreate EspoCRM Account Creation Tests', () => {

    let loginPage: LoginPage;
    let accountPage: AccountCreationPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        accountPage = new AccountCreationPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.loginAsAdmin();

        // Navigate to Account Creation page
         await page.goto('https://demo.us.espocrm.com/?l=en_US#Account/create');
    });

    test('@P0 @Smoke @Accounts Create account with mandatory fields', async ({ page }) => {

        await accountPage.accountCreation({
            name: 'Playwright Account'
        });

        await expect(page.locator('h1')).toContainText('Playwright Account');
    });

    test('@P1 @Regression @Accounts Create account with all details', async ({ page }) => {

        await accountPage.accountCreation({
            name: 'Automation Account',
            website: 'https://playwright.dev',
            email: 'automation@test.com',
            phone: '9876543210',
            billingStreet: '123 Billing Street',
            billingCity: 'Chennai',
            billingState: 'Tamil Nadu',
            billingPostalCode: '600001',
            billingCountry: 'India',
            shippingStreet: '456 Shipping Street',
            shippingCity: 'Chennai',
            shippingState: 'Tamil Nadu',
            shippingPostalCode: '600002',
            shippingCountry: 'India',
            typeDropdown: 'Customer',
            industry: 'Technology',
            description: 'Created using Playwright Automation',
            assignedUser: 'Admin',
            teams: 'Sales'
        });

        await expect(page.locator('h1')).toContainText('Automation Account');
    });

    test('@P0 @Regression @Accounts Verify account name is mandatory', async ({ page }) => {

        await accountPage.accountCreation({
            website: 'https://playwright.dev'
        });

        await expect(page.locator('.text-danger')).toContainText('Name');
    });

    
test('@P1 @Regression @Accounts Create account with billing address only', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Billing Account',
        billingStreet: '123 Anna Salai',
        billingCity: 'Chennai',
        billingState: 'Tamil Nadu',
        billingPostalCode: '600001',
        billingCountry: 'India'
    });

    await expect(page.locator('h1')).toContainText('Billing Account');
});


test('@P1 @Regression @Accounts Create account with shipping address only', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Shipping Account',
        shippingStreet: '456 Mount Road',
        shippingCity: 'Chennai',
        shippingState: 'Tamil Nadu',
        shippingPostalCode: '600002',
        shippingCountry: 'India'
    });

    await expect(page.locator('h1')).toContainText('Shipping Account');
});

test('@P2 @Regression @Accounts Create account with type and industry', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Business Account',
        typeDropdown: 'Customer',
        industry: 'Technology'
    });

    await expect(page.locator('h1')).toContainText('Business Account');
});


test('@P2 @Regression @Accounts Create account with description', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Description Account',
        description: 'This account was created through Playwright automation.'
    });

    await expect(page.locator('h1')).toContainText('Description Account');
});


test('@P2 @Regression @Accounts Create account with assigned user', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Assigned User Account',
        assignedUser: 'Admin'
    });

    await expect(page.locator('h1')).toContainText('Assigned User Account');
});


test('@P2 @Regression @Accounts Create account with team assignment', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Team Account',
        teams: 'Sales'
    });

    await expect(page.locator('h1')).toContainText('Team Account');
});


test('@P2 @Regression @Accounts Create account with website and phone', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Website Phone Account',
        website: 'https://example.com',
        phone: '9876543210'
    });

    await expect(page.locator('h1')).toContainText('Website Phone Account');
});


test('@P2 @Regression @Accounts Create account with email only', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Email Account',
        email: 'emailaccount@test.com'
    });

    await expect(page.locator('h1')).toContainText('Email Account');
});


test('@P1 @Regression @Accounts Create account with complete contact information', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Contact Details Account',
        website: 'https://automation.com',
        email: 'automation@test.com',
        phone: '9876543210'
    });

    await expect(page.locator('h1')).toContainText('Contact Details Account');
});


test('@P2 @Regression @Accounts Create account with complete billing and shipping information', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Address Account',
        billingStreet: '123 Billing Street',
        billingCity: 'Chennai',
        billingState: 'Tamil Nadu',
        billingPostalCode: '600001',
        billingCountry: 'India',
        shippingStreet: '456 Shipping Street',
        shippingCity: 'Chennai',
        shippingState: 'Tamil Nadu',
        shippingPostalCode: '600002',
        shippingCountry: 'India'
    });

    await expect(page.locator('h1')).toContainText('Address Account');
});


test('@P1 @Regression @Accounts Create account with all business details', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Enterprise Account',
        website: 'https://enterprise.com',
        email: 'contact@enterprise.com',
        phone: '9999999999',
        typeDropdown: 'Customer',
        industry: 'Technology',
        description: 'Enterprise customer created through automation.'
    });

    await expect(page.locator('h1')).toContainText('Enterprise Account');
});

test('@P2 @Regression @Accounts Create account with special characters in name', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Playwright & Co. Pvt. Ltd.'
    });

    await expect(page.locator('h1')).toContainText('Playwright & Co. Pvt. Ltd.');
});

test('@P2 @Regression @Accounts Create account with numeric account name', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Account 2026'
    });

    await expect(page.locator('h1')).toContainText('Account 2026');
});

test('@P2 @Regression @Accounts Create account with long description', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Long Description Account',
        description: 'This is a sample description created using Playwright automation to verify the application accepts long text values for the account description field.'
    });

    await expect(page.locator('h1')).toContainText('Long Description Account');
});

test('@P2 @Regression @Accounts Create account with billing country only', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Billing Country Account',
        billingCountry: 'India'
    });

    await expect(page.locator('h1')).toContainText('Billing Country Account');
});

test('@P2 @Regression @Accounts Create account with shipping country only', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Shipping Country Account',
        shippingCountry: 'India'
    });

    await expect(page.locator('h1')).toContainText('Shipping Country Account');
});

test('@P2 @Regression @Accounts Create account with billing and contact information', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Billing Contact Account',
        email: 'billing@test.com',
        phone: '9000000001',
        billingCity: 'Chennai',
        billingCountry: 'India'
    });

    await expect(page.locator('h1')).toContainText('Billing Contact Account');
});

test('@P2 @Regression @Accounts Create account with shipping and contact information', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Shipping Contact Account',
        email: 'shipping@test.com',
        phone: '9000000002',
        shippingCity: 'Chennai',
        shippingCountry: 'India'
    });

    await expect(page.locator('h1')).toContainText('Shipping Contact Account');
});

test('@P1 @Regression @Accounts Create customer account with all address details', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Customer Account',
        typeDropdown: 'Customer',
        billingCity: 'Chennai',
        shippingCity: 'Chennai'
    });

    await expect(page.locator('h1')).toContainText('Customer Account');
});

test('@P1 @Regression @Accounts Create technology industry account', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Technology Account',
        industry: 'Technology',
        website: 'https://technology.com'
    });

    await expect(page.locator('h1')).toContainText('Technology Account');
});

test('@P2 @Regression @Accounts Create account with complete user assignment', async ({ page }) => {

    await accountPage.accountCreation({
        name: 'Assigned Team Account',
        assignedUser: 'Admin',
        teams: 'Sales',
        description: 'Assigned to Admin and Sales team.'
    });

    await expect(page.locator('h1')).toContainText('Assigned Team Account');
});

});