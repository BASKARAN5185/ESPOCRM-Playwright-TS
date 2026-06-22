/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
import process from 'process';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: 'html',

    use: {
        baseURL: 'https://demo.espocrm.com',
        headless: true,
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'setup',
           testMatch: /auth\.setup\.ts/,
        },

        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                storageState: 'playwright/.auth/user.json',
            },
            dependencies: ['setup'],
        },
    ],
});
