import { defineConfig, devices } from '@playwright/test';
import process from 'process';

export default defineConfig({
  testDir: './tests',

  // Run all test files in parallel
  fullyParallel: true,

  // Fail if test.only is committed
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 1,

  // Increase workers
  workers: process.env.CI ? 4 : 6,

  // Multiple reporters
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/results.xml' }]
    // ['allure-playwright'] // Uncomment if using Allure
  ],

  use: {
    baseURL: 'https://demo.espocrm.com',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 30000,

    navigationTimeout: 60000,
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'WebKit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge',
        ...devices['Desktop Edge'],
      },
    },
  ],
});