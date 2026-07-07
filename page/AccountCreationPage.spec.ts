import { Locator, Page } from '@playwright/test';

export class AccountCreationPage {
  readonly page: Page;

  readonly nameInput: Locator;
  readonly websiteInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;

  readonly billingStreet: Locator;
  readonly billingCity: Locator;
  readonly billingState: Locator;
  readonly billingPostalCode: Locator;
  readonly billingCountry: Locator;

  readonly shippingStreet: Locator;
  readonly shippingCity: Locator;
  readonly shippingState: Locator;
  readonly shippingPostalCode: Locator;
  readonly shippingCountry: Locator;

  readonly typeDropdown: Locator;
  readonly industryDropdown: Locator;

  readonly descriptionInput: Locator;

  readonly assignedUserInput: Locator;
  readonly teamsInput: Locator;

  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.nameInput = page.locator('input[data-name="name"]');
    this.websiteInput = page.locator('input[data-name="website"]');
    this.emailInput = page.locator('input.email-address');
    this.phoneInput = page.locator('input.phone-number');

    this.billingStreet = page.locator('textarea[data-name="billingAddressStreet"]');
    this.billingCity = page.locator('input[data-name="billingAddressCity"]');
    this.billingState = page.locator('input[data-name="billingAddressState"]');
    this.billingPostalCode = page.locator('input[data-name="billingAddressPostalCode"]');
    this.billingCountry = page.locator('input[data-name="billingAddressCountry"]');

    this.shippingStreet = page.locator('textarea[data-name="shippingAddressStreet"]');
    this.shippingCity = page.locator('input[data-name="shippingAddressCity"]');
    this.shippingState = page.locator('input[data-name="shippingAddressState"]');
    this.shippingPostalCode = page.locator('input[data-name="shippingAddressPostalCode"]');
    this.shippingCountry = page.locator('input[data-name="shippingAddressCountry"]');

    this.typeDropdown = page.locator('select[data-name="type"]');
    this.industryDropdown = page.locator('select[data-name="industry"]');

    this.descriptionInput = page.locator('textarea[data-name="description"]');

    this.assignedUserInput = page.locator('input[data-name="assignedUserName"]');
    this.teamsInput = page.locator('.add-team input');

    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }

  async enterName(name: string) {
    await this.nameInput.fill(name);
  }

  async enterWebsite(website: string) {
    await this.websiteInput.fill(website);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPhone(phone: string) {
    await this.phoneInput.fill(phone);
  }

  async enterBillingStreet(street: string) {
    await this.billingStreet.fill(street);
  }

  async enterBillingCity(city: string) {
    await this.billingCity.fill(city);
  }

  async enterBillingState(state: string) {
    await this.billingState.fill(state);
  }

  async enterBillingPostalCode(postalCode: string) {
    await this.billingPostalCode.fill(postalCode);
  }

  async enterBillingCountry(country: string) {
    await this.billingCountry.fill(country);
  }

  async enterShippingStreet(street: string) {
    await this.shippingStreet.fill(street);
  }

  async enterShippingCity(city: string) {
    await this.shippingCity.fill(city);
  }

  async enterShippingState(state: string) {
    await this.shippingState.fill(state);
  }

  async enterShippingPostalCode(postalCode: string) {
    await this.shippingPostalCode.fill(postalCode);
  }

  async enterShippingCountry(country: string) {
    await this.shippingCountry.fill(country);
  }

  async selectType(type: string) {
    await this.typeDropdown.selectOption({ label: type });
  }

  async selectIndustry(industry: string) {
    await this.industryDropdown.selectOption({ label: industry });
  }

  async enterDescription(description: string) {
    await this.descriptionInput.fill(description);
  }

  async enterAssignedUser(user: string) {
    await this.assignedUserInput.fill(user);
    await this.assignedUserInput.press('Enter');
  }

  async enterTeam(team: string) {
    await this.teamsInput.fill(team);
    await this.teamsInput.press('Enter');
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }
}