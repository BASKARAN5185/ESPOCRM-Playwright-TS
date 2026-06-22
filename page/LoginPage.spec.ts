import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameDropdown: Locator;
  readonly languageDropdown: Locator;
  readonly loginButton: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameDropdown = page.locator('#field-userName');
    this.languageDropdown = page.locator('#field-language');
    this.loginButton = page.locator('#btn-login');
    this.logo = page.locator('.logo');
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('/');
  }

  async verifyLoginPageLoaded(): Promise<void> {
    await expect(this.logo).toBeVisible();
    await expect(this.usernameDropdown).toBeVisible();
    await expect(this.languageDropdown).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async selectUser(username: string): Promise<void> {
    await this.usernameDropdown.selectOption(username);
  }

  async selectLanguage(language: string): Promise<void> {
    await this.languageDropdown.selectOption(language);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async loginAsAdmin(): Promise<void> {
    await this.selectUser('admin');
    await this.clickLogin();
  }
}
