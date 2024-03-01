## Playwright Test Suite Documentation

### Introduction
This document provides documentation for the Playwright test suite, which is used to automate browser testing for our web application. The test suite is written using Playwright, a Node.js library to automate browsers, and is written in TypeScript.

### Installation
To run the Playwright tests, follow these steps:
Install Node.js (version 14 or later) from nodejs.org.
Clone the repository from GitHub: git clone https://github.com/vii-bochevarova/Buhler-tests.git.
Navigate to the project directory: cd project-directory.
Install dependencies: npm install.

### Configuration
Before running the tests, ensure you have the correct environment set up:
Ensure the correct version of Chrome, Firefox, or WebKit is installed.
Update playwright.config.ts to specify the browsers and other configuration options as needed.

### Tests
The test scripts are located in the tests directory.
To run tests open terminal in VSCode and write command: npm run tests.

Login is reusable, so it's skipped for all tests.
There are 3 tests:
1. e2e test to buy items.
2. remove cheapest item in basket.
3. test to assert errors if fields are empty. 

Tests are running in parallel mode.

### Import Playwright modules:

Test results are reported using 'html' reporter. By default test resuls are opening automatically in case of failed tests run. To pen 'html' reporter, in terminal write command: npx playwright show-report.