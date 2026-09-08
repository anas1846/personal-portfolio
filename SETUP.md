# Setup Guide

This guide will help you set up the development environment and run tests for the personal portfolio project.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/anas1846/personal-portfolio.git
cd personal-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Jest (testing framework)
- jest-environment-jsdom (DOM simulation for tests)
- @types/jest (TypeScript definitions for better IDE support)

### 3. Verify Installation

```bash
npm test
```

If everything is set up correctly, you should see all tests passing with 100% coverage.

## Running the Application

### View the Website

Simply open `index.html` in your web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server (install globally first: npm install -g http-server)
http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Running Tests

### Basic Test Run

```bash
npm test
```

### With Coverage Report

```bash
npm run test:coverage
```

This generates:
- Console output with coverage summary
- HTML report in `coverage/lcov-report/index.html`
- LCOV report in `coverage/lcov.info`

### Watch Mode (for development)

```bash
npm run test:watch
```

This will re-run tests automatically when you make changes to the code.

### Verbose Output

```bash
npm run test:verbose
```

Shows detailed information about each test.

## Understanding the Test Coverage

The test suite covers all aspects of `03_portfolio.js`:

### 1. Navigation Event Listeners
- About section navigation
- Skills section navigation
- Projects section navigation
- Contact section navigation (2 buttons)

### 2. Form Validation
- **Happy paths**: Valid inputs, trimming whitespace
- **Error cases**: Empty fields, invalid email
- **Edge cases**: Special characters, very long inputs, unicode

### 3. Window Operations
- Opening signup page in new tab

### Coverage Metrics

- **Line Coverage**: Every line of code is executed
- **Statement Coverage**: Every statement is executed
- **Function Coverage**: Every function is called
- **Branch Coverage**: Every conditional branch is tested

## Viewing Coverage Reports

After running `npm run test:coverage`:

### Terminal Output
Shows a summary table with coverage percentages.

### HTML Report
1. Open `coverage/lcov-report/index.html` in your browser
2. Click on `03_portfolio.js` to see line-by-line coverage
3. Green lines = covered, Red lines = not covered (should be none!)

## Continuous Integration

The project includes a GitHub Actions workflow (`.github/workflows/test.yml`) that:
- Runs tests automatically on every push and pull request
- Generates coverage reports
- Uploads coverage artifacts
- Fails if coverage drops below 100%

## Troubleshooting

### Tests Fail with "Cannot find module"

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Coverage Report Not Generated

```bash
# Ensure coverage directory is not in .gitignore for local viewing
# Run with explicit coverage flag
jest --coverage --collectCoverageFrom='03_portfolio.js'
```

### DOM-related Errors

The tests use `jest-environment-jsdom` to simulate a browser environment. If you see DOM-related errors:

```bash
# Verify jest-environment-jsdom is installed
npm list jest-environment-jsdom

# Reinstall if needed
npm install --save-dev jest-environment-jsdom
```

## Development Workflow

1. Make changes to `03_portfolio.js`
2. Run tests: `npm test`
3. Check coverage: `npm run test:coverage`
4. Ensure 100% coverage is maintained
5. Commit and push changes

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing DOM with Jest](https://jestjs.io/docs/tutorial-jquery)
- [Coverage Reports](https://jestjs.io/docs/configuration#collectcoverage-boolean)

## Support

If you encounter any issues:
1. Check this guide first
2. Review the [TEST_README.md](TEST_README.md)
3. Open an issue on GitHub
