import { Page, Locator } from '@playwright/test';

export class LeadCreationPage {
    readonly page: Page;

    // Action Buttons
    readonly saveButton: Locator;
    readonly cancelButton: Locator;
    readonly saveAndContinueButton: Locator;
    readonly saveAndNewButton: Locator;

    // Name
    readonly salutationDropdown: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;

    // General Information
    readonly accountNameInput: Locator;
    readonly titleInput: Locator;
    readonly websiteInput: Locator;

    // Email
    readonly emailInput: Locator;
    readonly addEmailButton: Locator;
    readonly removeEmailButton: Locator;
    readonly emailPrimaryButton: Locator;
    readonly emailOptOutButton: Locator;
    readonly emailInvalidButton: Locator;

    // Phone
    readonly phoneTypeDropdown: Locator;
    readonly phoneInput: Locator;
    readonly addPhoneButton: Locator;
    readonly removePhoneButton: Locator;
    readonly phonePrimaryButton: Locator;
    readonly phoneOptOutButton: Locator;
    readonly phoneInvalidButton: Locator;

    // Address
    readonly streetInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly postalCodeInput: Locator;
    readonly countryInput: Locator;

    // Photo Upload
    readonly photoUpload: Locator;

    // Details
    readonly statusDropdown: Locator;
    readonly sourceDropdown: Locator;
    readonly industryDropdown: Locator;

    // Opportunity
    readonly opportunityAmountInput: Locator;
    readonly opportunityCurrencyDropdown: Locator;

    // Campaign Lookup
    readonly campaignInput: Locator;
    readonly campaignSelectButton: Locator;
    readonly campaignClearButton: Locator;

    // Description
    readonly descriptionInput: Locator;

    // Assigned User
    readonly assignedUserInput: Locator;
    readonly assignedUserSelectButton: Locator;
    readonly assignedUserClearButton: Locator;

    // Teams
    readonly teamsInput: Locator;
    readonly teamsSelectButton: Locator;

    // Converted Records
    readonly createdAccountInput: Locator;
    readonly createdContactInput: Locator;
    readonly createdOpportunityInput: Locator;

    constructor(page: Page) {
        this.page = page;

        // Action Buttons
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.saveAndContinueButton = page.getByRole('button', { name: 'Save & Continue Editing' });
        this.saveAndNewButton = page.getByRole('button', { name: 'Save & New' });

        // Name
        this.salutationDropdown = page.locator('select[data-name="salutationName"]');
        this.firstNameInput = page.locator('input[data-name="firstName"]');
        this.lastNameInput = page.locator('input[data-name="lastName"]');

        // General Information
        this.accountNameInput = page.locator('input[data-name="accountName"]');
        this.titleInput = page.locator('input[data-name="title"]');
        this.websiteInput = page.locator('input[data-name="website"]');

        // Email
        this.emailInput = page.locator('input.email-address');
        this.addEmailButton = page.locator('[data-action="addEmailAddress"]');
        this.removeEmailButton = page.locator('[data-action="removeEmailAddress"]');
        this.emailPrimaryButton = page.locator('[data-action="switchEmailProperty"][data-property-type="primary"]');
        this.emailOptOutButton = page.locator('[data-action="switchEmailProperty"][data-property-type="optOut"]');
        this.emailInvalidButton = page.locator('[data-action="switchEmailProperty"][data-property-type="invalid"]');

        // Phone
        this.phoneTypeDropdown = page.locator('select[data-property-type="type"]');
        this.phoneInput = page.locator('input.phone-number');
        this.addPhoneButton = page.locator('[data-action="addPhoneNumber"]');
        this.removePhoneButton = page.locator('[data-action="removePhoneNumber"]');
        this.phonePrimaryButton = page.locator('[data-action="switchPhoneProperty"][data-property-type="primary"]');
        this.phoneOptOutButton = page.locator('[data-action="switchPhoneProperty"][data-property-type="optOut"]');
        this.phoneInvalidButton = page.locator('[data-action="switchPhoneProperty"][data-property-type="invalid"]');

        // Address
        this.streetInput = page.locator('textarea[data-name="addressStreet"]');
        this.cityInput = page.locator('input[data-name="addressCity"]');
        this.stateInput = page.locator('input[data-name="addressState"]');
        this.postalCodeInput = page.locator('input[data-name="addressPostalCode"]');
        this.countryInput = page.locator('input[data-name="addressCountry"]');

        // Photo Upload
        this.photoUpload = page.locator('input[type="file"]');

        // Details
        this.statusDropdown = page.locator('select[data-name="status"]');
        this.sourceDropdown = page.locator('select[data-name="source"]');
        this.industryDropdown = page.locator('select[data-name="industry"]');

        // Opportunity
        this.opportunityAmountInput = page.locator('input[data-name="opportunityAmount"]');
        this.opportunityCurrencyDropdown = page.locator('select[data-name="opportunityAmountCurrency"]');

        // Campaign Lookup
        this.campaignInput = page.locator('input[data-name="campaignName"]');
        this.campaignSelectButton = page.locator('[data-name="campaign"] [data-action="selectLink"]');
        this.campaignClearButton = page.locator('[data-name="campaign"] [data-action="clearLink"]');

        // Description
        this.descriptionInput = page.locator('textarea[data-name="description"]');

        // Assigned User
        this.assignedUserInput = page.locator('input[data-name="assignedUserName"]');
        this.assignedUserSelectButton = page.locator('[data-name="assignedUser"] [data-action="selectLink"]');
        this.assignedUserClearButton = page.locator('[data-name="assignedUser"] [data-action="clearLink"]');

        // Teams
        this.teamsInput = page.locator('[data-name="teams"] input.main-element');
        this.teamsSelectButton = page.locator('[data-name="teams"] [data-action="selectLink"]');

        // Converted Records
        this.createdAccountInput = page.locator('input[data-name="createdAccountName"]');
        this.createdContactInput = page.locator('input[data-name="createdContactName"]');
        this.createdOpportunityInput = page.locator('input[data-name="createdOpportunityName"]');
    }

    // ====================
// Action Buttons
// ====================

async clickSave() {
    await this.saveButton.click();
}

async clickCancel() {
    await this.cancelButton.click();
}

async clickSaveAndContinue() {
    await this.saveAndContinueButton.click();
}

async clickSaveAndNew() {
    await this.saveAndNewButton.click();
}

// ====================
// Name
// ====================

async selectSalutation(salutation: string) {
    await this.salutationDropdown.selectOption({ label: salutation });
}

async enterFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
}

async enterLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
}

// ====================
// General Information
// ====================

async enterAccountName(accountName: string) {
    await this.accountNameInput.fill(accountName);
}

async enterTitle(title: string) {
    await this.titleInput.fill(title);
}

async enterWebsite(website: string) {
    await this.websiteInput.fill(website);
}

// ====================
// Email
// ====================

async enterEmail(email: string) {
    await this.emailInput.fill(email);
}

async clickAddEmail() {
    await this.addEmailButton.click();
}

async clickRemoveEmail() {
    await this.removeEmailButton.click();
}

async markEmailAsPrimary() {
    await this.emailPrimaryButton.click();
}

async markEmailAsOptOut() {
    await this.emailOptOutButton.click();
}

async markEmailAsInvalid() {
    await this.emailInvalidButton.click();
}

// ====================
// Phone
// ====================

async selectPhoneType(type: string) {
    await this.phoneTypeDropdown.selectOption({ label: type });
}

async enterPhone(phone: string) {
    await this.phoneInput.fill(phone);
}

async clickAddPhone() {
    await this.addPhoneButton.click();
}

async clickRemovePhone() {
    await this.removePhoneButton.click();
}

async markPhoneAsPrimary() {
    await this.phonePrimaryButton.click();
}

async markPhoneAsOptOut() {
    await this.phoneOptOutButton.click();
}

async markPhoneAsInvalid() {
    await this.phoneInvalidButton.click();
}

// ====================
// Address
// ====================

async enterStreet(street: string) {
    await this.streetInput.fill(street);
}

async enterCity(city: string) {
    await this.cityInput.fill(city);
}

async enterState(state: string) {
    await this.stateInput.fill(state);
}

async enterPostalCode(postalCode: string) {
    await this.postalCodeInput.fill(postalCode);
}

async enterCountry(country: string) {
    await this.countryInput.fill(country);
}

async fillAddress(
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string
) {
    await this.enterStreet(street);
    await this.enterCity(city);
    await this.enterState(state);
    await this.enterPostalCode(postalCode);
    await this.enterCountry(country);
}

// ====================
// Photo Upload
// ====================

async uploadPhoto(filePath: string) {
    await this.photoUpload.setInputFiles(filePath);
}

// ====================
// Details
// ====================

async selectStatus(status: string) {
    await this.statusDropdown.selectOption({ label: status });
}

async selectSource(source: string) {
    await this.sourceDropdown.selectOption({ label: source });
}

async selectIndustry(industry: string) {
    await this.industryDropdown.selectOption({ label: industry });
}

// ====================
// Opportunity
// ====================

async enterOpportunityAmount(amount: string) {
    await this.opportunityAmountInput.fill(amount);
}

async selectOpportunityCurrency(currency: string) {
    await this.opportunityCurrencyDropdown.selectOption({ label: currency });
}

// ====================
// Campaign
// ====================

async enterCampaign(campaign: string) {
    await this.campaignInput.fill(campaign);
}

async clickCampaignLookup() {
    await this.campaignSelectButton.click();
}

async clearCampaign() {
    await this.campaignClearButton.click();
}

// ====================
// Description
// ====================

async enterDescription(description: string) {
    await this.descriptionInput.fill(description);
}

// ====================
// Assigned User
// ====================

async enterAssignedUser(user: string) {
    await this.assignedUserInput.fill(user);
    await this.assignedUserInput.press('Enter');
}

async clickAssignedUserLookup() {
    await this.assignedUserSelectButton.click();
}

async clearAssignedUser() {
    await this.assignedUserClearButton.click();
}

// ====================
// Teams
// ====================

async enterTeam(team: string) {
    await this.teamsInput.fill(team);
    await this.teamsInput.press('Enter');
}

async clickTeamLookup() {
    await this.teamsSelectButton.click();
}

// ====================
// Converted Records
// ====================

async getCreatedAccount(): Promise<string> {
    return await this.createdAccountInput.inputValue();
}

async getCreatedContact(): Promise<string> {
    return await this.createdContactInput.inputValue();
}

async getCreatedOpportunity(): Promise<string> {
    return await this.createdOpportunityInput.inputValue();
}

// ====================
// Complete Lead Creation
// ====================

async createLead(data: {
    salutation?: string;
    firstName?: string;
    lastName: string;
    accountName?: string;
    title?: string;
    website?: string;
    email?: string;
    phoneType?: string;
    phone?: string;
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    status?: string;
    source?: string;
    industry?: string;
    opportunityAmount?: string;
    opportunityCurrency?: string;
    campaign?: string;
    description?: string;
    assignedUser?: string;
    team?: string;
}) {
    if (data.salutation) await this.selectSalutation(data.salutation);
    if (data.firstName) await this.enterFirstName(data.firstName);

    await this.enterLastName(data.lastName);

    if (data.accountName) await this.enterAccountName(data.accountName);
    if (data.title) await this.enterTitle(data.title);
    if (data.website) await this.enterWebsite(data.website);

    if (data.email) await this.enterEmail(data.email);

    if (data.phoneType) await this.selectPhoneType(data.phoneType);
    if (data.phone) await this.enterPhone(data.phone);

    if (data.street || data.city || data.state || data.postalCode || data.country) {
        await this.fillAddress(
            data.street ?? '',
            data.city ?? '',
            data.state ?? '',
            data.postalCode ?? '',
            data.country ?? ''
        );
    }

    if (data.status) await this.selectStatus(data.status);
    if (data.source) await this.selectSource(data.source);
    if (data.industry) await this.selectIndustry(data.industry);

    if (data.opportunityAmount)
        await this.enterOpportunityAmount(data.opportunityAmount);

    if (data.opportunityCurrency)
        await this.selectOpportunityCurrency(data.opportunityCurrency);

    if (data.campaign) await this.enterCampaign(data.campaign);

    if (data.description)
        await this.enterDescription(data.description);

    if (data.assignedUser)
        await this.enterAssignedUser(data.assignedUser);

    if (data.team)
        await this.enterTeam(data.team);

    await this.clickSave();
}
}