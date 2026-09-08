# Test Coverage for 03_portfolio.js

This document explains how to run the tests for `03_portfolio.js` and achieve 100% code coverage.

## Prerequisites

Make sure you have Node.js and npm installed on your system.

## Installation

Install the required dependencies:

```bash
npm install
```

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests with coverage:
```bash
npm run test:coverage
```

### Run tests in watch mode:
```bash
npm run test:watch
```

## Test Coverage

The test suite covers:

### 1. **Navigation Event Listeners** (Lines 1-15, 33-42)
- About section navigation
- Skills section navigation
- Projects section navigation
- Contact section navigation (via contact button)
- Contact section navigation (via hire button)

### 2. **Form Validation Function** (Lines 16-32)
- **Happy Path:**
  - Valid form submission with all fields filled
  - Email with @ symbol
  - Trimming whitespace from inputs

- **Error Cases:**
  - Empty name field
  - Empty email field
  - Empty message field
  - All fields empty
  - Fields with only whitespace
  - Invalid email (missing @ symbol)

- **Edge Cases:**
  - Very long input values
  - Special characters in name
  - Email with @ at beginning/end
  - Single character inputs
  - Multiple @ symbols in email

### 3. **openSignupPage Function** (Lines 43-46)
- Opens signup page in new tab
- Correct URL and target parameters

## Coverage Goals

The test suite achieves:
- ✅ **Line Coverage: 100%**
- ✅ **Statement Coverage: 100%**
- ✅ **Function Coverage: 100%**
- ✅ **Branch Coverage: 100%**

## Test Structure

Tests are organized into logical groups:
- DOM Interactions and Event Listeners
- Form Validation (Happy Path, Error Cases, Edge Cases)
- Window Operations
- Multiple Click Events

## Viewing Coverage Reports

After running `npm run test:coverage`, you can view the coverage report:

1. **Terminal Output:** Shows coverage summary
2. **HTML Report:** Open `coverage/lcov-report/index.html` in your browser for detailed coverage

## Continuous Integration

The test suite is configured to fail if coverage drops below 100% for any metric (lines, statements, functions, branches).
