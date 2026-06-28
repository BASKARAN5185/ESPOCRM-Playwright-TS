import { Page, Locator } from '@playwright/test';

export class MenuPage {

    readonly page: Page;

    readonly home: Locator;
    readonly accounts: Locator;
    readonly contacts: Locator;
    readonly leads: Locator;
    readonly opportunities: Locator;
    readonly emails: Locator;
    readonly calendar: Locator;
    readonly meetings: Locator;
    readonly calls: Locator;
    readonly tasks: Locator;
    readonly cases: Locator;
    readonly knowledgeBase: Locator;
    readonly documents: Locator;
    readonly salesPurchases: Locator;

    constructor(page: Page) {
        this.page = page;

        this.home = page.locator('a[href="#"]');
        this.accounts = page.locator('a[href="#Account"]');
        this.contacts = page.locator('a[href="#Contact"]');
        this.leads = page.locator('a[href="#Lead"]');
        this.opportunities = page.locator('a[href="#Opportunity"]');
        this.emails = page.locator('a[href="#Email"]');
        this.calendar = page.locator('a[href="#Calendar"]');
        this.meetings = page.locator('a[href="#Meeting"]');
        this.calls = page.locator('a[href="#Call"]');
        this.tasks = page.locator('a[href="#Task"]');
        this.cases = page.locator('a[href="#Case"]');
        this.knowledgeBase = page.locator('a[href="#KnowledgeBase"]');
        this.documents = page.locator('a[href="#Document"]');
        this.salesPurchases = page.locator('a[href="#SalesPurchase"]');
    }

    async openAccounts() {
        await this.accounts.click();
    }

    async openContacts() {
        await this.contacts.click();
    }

    async openLeads() {
        await this.leads.click();
    }

    async openOpportunities() {
        await this.opportunities.click();
    }

    async openEmails() {
        await this.emails.click();
    }

    async openCalendar() {
        await this.calendar.click();
    }

    async openMeetings() {
        await this.meetings.click();
    }

    async openCalls() {
        await this.calls.click();
    }

    async openTasks() {
        await this.tasks.click();
    }

    async openCases() {
        await this.cases.click();
    }

    async openKnowledgeBase() {
        await this.knowledgeBase.click();
    }

    async openDocuments() {
        await this.documents.click();
    }
}