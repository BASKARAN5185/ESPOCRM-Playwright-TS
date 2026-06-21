# ESPOCRM-Playwright-TS

Automated end-to-end testing framework for ESPOCRM using Playwright and TypeScript.

## Overview

This project uses Playwright with TypeScript to automate UI testing for ESPOCRM applications. It follows a scalable test automation architecture with support for:

- Playwright Test Runner
- TypeScript
- Page Object Model (POM)
- Environment Configuration
- HTML Test Reports
- Parallel Execution
- CI/CD Integration

## Tech Stack

- TypeScript
- Playwright
- Node.js
- Playwright Test Runner

## Project Structure

```text
ESPOCRM-Playwright-TS/
│
├── tests/                  # Test specifications
├── pages/                  # Page Object Models
├── fixtures/               # Custom fixtures
├── utils/                  # Utility functions
├── test-data/              # Test data files
├── config/                 # Environment configurations
├── playwright.config.ts    # Playwright configuration
├── package.json
└── README.md
```

## Prerequisites

Before running the project, ensure the following are installed:

- Node.js (v18 or later)
- npm or yarn

Verify installation:

```bash
node -v
npm -v
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd ESPOCRM-Playwright-TS
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Specific Test File

```bash
npx playwright test tests/login.spec.ts
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run Tests on Specific Browser

```bash
npx playwright test --project=chromium
```

## Test Reports

Generate and open the HTML report:

```bash
npx playwright show-report
```

## Environment Configuration

Create a `.env` file:

```env
BASE_URL=https://your-espocrm-instance.com
USERNAME=admin
PASSWORD=password
```

Access variables using your configuration utilities.

## Sample Test

```typescript
import { test, expect } from '@playwright/test';

test('Login to ESPOCRM', async ({ page }) => {
  await page.goto('/');
  await page.fill('#field-userName', 'admin');
  await page.fill('#field-password', 'password');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});
```

## CI/CD

Example GitHub Actions workflow:

```yaml
name: Playwright Tests

on:
  push:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm ci

      - run: npx playwright install --with-deps

      - run: npx playwright test
```

## Best Practices

- Use Page Object Model (POM).
- Keep test data separate from test scripts.
- Use reusable fixtures.
- Avoid hardcoded waits.
- Maintain independent test cases.
- Run tests in CI pipelines.

## Troubleshooting

### Browser Not Installed

```bash
npx playwright install
```

### Clear Playwright Cache

```bash
npx playwright install --force
```

## Author

Automation QA Team

## License

This project is licensed under the MIT License.
