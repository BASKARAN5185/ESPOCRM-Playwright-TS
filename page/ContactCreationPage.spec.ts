import { Locator, Page } from '@playwright/test';

export class ContacCreationtPage {
    readonly page: Page;

    // Buttons
    readonly saveButton: Locator;
    readonly cancelButton: Locator;
    readonly saveAndContinueButton: Locator;
    readonly saveAndNewButton: Locator;

    // Name
    readonly salutationDropdown: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;

    // Account Lookup
    readonly accountInput: Locator;
    readonly accountSelectButton: Locator;

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

    // Birthday
    readonly birthdayInput: Locator;
    readonly birthdayCalendarButton: Locator;

    // Description
    readonly descriptionInput: Locator;

    // Assigned User
    readonly assignedUserInput: Locator;
    readonly assignedUserSelectButton: Locator;
    readonly assignedUserClearButton: Locator;

    // Teams
    readonly teamsInput: Locator;
    readonly teamsSelectButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Buttons
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.saveAndContinueButton = page.getByRole('button', { name: 'Save & Continue Editing' });
        this.saveAndNewButton = page.getByRole('button', { name: 'Save & New' });

        // Name
        this.salutationDropdown = page.locator('select[data-name="salutationName"]');
        this.firstNameInput = page.locator('input[data-name="firstName"]');
        this.lastNameInput = page.locator('input[data-name="lastName"]');

        // Account Lookup
        this.accountInput = page.locator('[data-name="accounts"] input.main-element');
        this.accountSelectButton = page.locator('[data-name="accounts"] [data-action="selectLink"]');

        // Email
        this.emailInput = page.locator('input.email-address');
        this.addEmailButton = page.locator('[data-action="addEmailAddress"]');
        this.removeEmailButton = page.locator('[data-action="removeEmailAddress"]');
        this.emailPrimaryButton = page.locator('[data-property-type="primary"]');
        this.emailOptOutButton = page.locator('[data-property-type="optOut"]');
        this.emailInvalidButton = page.locator('[data-property-type="invalid"]');

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

        // Birthday
        this.birthdayInput = page.locator('input[data-name="birthday"]');
        this.birthdayCalendarButton = page.locator('.date-picker-btn');

        // Description
        this.descriptionInput = page.locator('textarea[data-name="description"]');

        // Assigned User
        this.assignedUserInput = page.locator('input[data-name="assignedUserName"]');
        this.assignedUserSelectButton = page.locator('[data-name="assignedUser"] [data-action="selectLink"]');
        this.assignedUserClearButton = page.locator('[data-name="assignedUser"] [data-action="clearLink"]');

        // Teams
        this.teamsInput = page.locator('[data-name="teams"] input.main-element');
        this.teamsSelectButton = page.locator('[data-name="teams"] [data-action="selectLink"]');
    }
    // ====================
    // Buttons
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
    // Account
    // ====================

    async enterAccount(account: string) {
        await this.accountInput.fill(account);
    }

    async clickAccountLookup() {
        await this.accountSelectButton.click();
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

    async setEmailPrimary() {
        await this.emailPrimaryButton.click();
    }

    async setEmailOptOut() {
        await this.emailOptOutButton.click();
    }

    async setEmailInvalid() {
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

    async setPhonePrimary() {
        await this.phonePrimaryButton.click();
    }

    async setPhoneOptOut() {
        await this.phoneOptOutButton.click();
    }

    async setPhoneInvalid() {
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
    // Photo
    // ====================

    async uploadPhoto(filePath: string) {
        await this.photoUpload.setInputFiles(filePath);
    }

    // ====================
    // Birthday
    // ====================

    async enterBirthday(date: string) {
        await this.birthdayInput.fill(date);
    }

    async openBirthdayCalendar() {
        await this.birthdayCalendarButton.click();
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
    // Complete Contact
    // ====================

    async createContact(contact: {
        salutation?: string;
        firstName?: string;
        lastName: string;
        account?: string;
        email?: string;
        phoneType?: string;
        phone?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        birthday?: string;
        description?: string;
        assignedUser?: string;
        team?: string;
    }) {
        if (contact.salutation)
            await this.selectSalutation(contact.salutation);

        if (contact.firstName)
            await this.enterFirstName(contact.firstName);

        await this.enterLastName(contact.lastName);

        if (contact.account)
            await this.enterAccount(contact.account);

        if (contact.email)
            await this.enterEmail(contact.email);

        if (contact.phoneType)
            await this.selectPhoneType(contact.phoneType);

        if (contact.phone)
            await this.enterPhone(contact.phone);

        if (contact.street)
            await this.enterStreet(contact.street);

        if (contact.city)
            await this.enterCity(contact.city);

        if (contact.state)
            await this.enterState(contact.state);

        if (contact.postalCode)
            await this.enterPostalCode(contact.postalCode);

        if (contact.country)
            await this.enterCountry(contact.country);

        if (contact.birthday)
            await this.enterBirthday(contact.birthday);

        if (contact.description)
            await this.enterDescription(contact.description);

        if (contact.assignedUser)
            await this.enterAssignedUser(contact.assignedUser);

        if (contact.team)
            await this.enterTeam(contact.team);

        await this.clickSave();
    }

}