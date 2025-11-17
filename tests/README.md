# End-to-End Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end testing to catch rendering issues after dependency upgrades.

## Setup

Install dependencies (including Playwright):
```bash
npm install
```

Install Playwright browsers:
```bash
npx playwright install chromium
```

If running in CI/Docker, you may also need system dependencies:
```bash
npx playwright install-deps chromium
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests with UI mode (interactive):
```bash
npm run test:ui
```

Run tests in headed mode (see the browser):
```bash
npm run test:headed
```

## What's Tested

The test suite includes basic rendering checks for:
- **Homepage**: Verifies key content and social links render correctly
- **Blog listing page**: Ensures blog posts are listed
- **Individual blog posts**: Checks that blog post content renders
- **Navigation**: Tests navigation between pages works

## When to Run

Run these tests:
- After upgrading Astro or other dependencies
- Before deploying changes
- As part of your CI/CD pipeline

These tests act as smoke tests to catch major rendering issues early.
