# Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you maintain the 100% test coverage standard.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Testing Guidelines](#testing-guidelines)
4. [Code Standards](#code-standards)
5. [Pull Request Process](#pull-request-process)
6. [Maintaining 100% Coverage](#maintaining-100-coverage)

---

## Getting Started

### Prerequisites
- Node.js v14 or higher
- npm v6 or higher
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

1. **Fork and clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
cd personal-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Verify setup:**
```bash
npm test
npm run test:coverage
```

4. **Create a new branch:**
```bash
git checkout -b feature/your-feature-name
```

---

## Development Workflow

### 1. Before Making Changes

```bash
# Ensure you're on the latest main branch
git checkout main
git pull origin main

# Create a new branch
git checkout -b feature/your-feature-name

# Run tests to ensure everything works
npm test
```

### 2. Making Changes

#### If Modifying Source Code (03_portfolio.js):

1. **Write tests first (TDD approach):**
```javascript
// In 03_portfolio.test.js
test('should do something new', () => {
  // Arrange
  // Act
  // Assert
});
```

2. **Run tests (they should fail):**
```bash
npm test
```

3. **Implement the feature:**
```javascript
// In 03_portfolio.js
function newFeature() {
  // Your implementation
}
```

4. **Run tests again (they should pass):**
```bash
npm test
```

5. **Check coverage:**
```bash
npm run test:coverage
```

#### If Adding New Tests:

1. **Add tests to 03_portfolio.test.js**
2. **Follow existing test structure**
3. **Use descriptive test names**
4. **Ensure tests are isolated**

### 3. Before Committing

```bash
# Run all tests
npm test

# Check coverage
npm run test:coverage

# Verify 100% coverage is maintained
# Check the terminal output or HTML report

# Stage your changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature with tests"
```

### 4. Push and Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create Pull Request on GitHub
# Ensure CI/CD passes
```

---

## Testing Guidelines

### Test Structure

Follow the Arrange-Act-Assert pattern:

```javascript
test('should do something', () => {
  // Arrange - Set up test data and mocks
  const input = 'test';
  const mockFn = jest.fn();

  // Act - Execute the code being tested
  const result = functionUnderTest(input);

  // Assert - Verify the results
  expect(result).toBe('expected');
  expect(mockFn).toHaveBeenCalled();
});
```

### Test Naming

Use descriptive names that explain what is being tested:

✅ **Good:**
```javascript
test('should scroll to about section when about button is clicked', () => {
  // ...
});
```

❌ **Bad:**
```javascript
test('test1', () => {
  // ...
});
```

### Test Organization

Group related tests using `describe` blocks:

```javascript
describe('Feature Name', () => {
  describe('Happy Path', () => {
    test('should work with valid input', () => {});
  });

  describe('Error Cases', () => {
    test('should handle invalid input', () => {});
  });

  describe('Edge Cases', () => {
    test('should handle boundary values', () => {});
  });
});
```

### Test Coverage Requirements

Every contribution must maintain:
- ✅ Line Coverage: 100%
- ✅ Statement Coverage: 100%
- ✅ Function Coverage: 100%
- ✅ Branch Coverage: 100%

### What to Test

1. **Happy Path:** Normal, expected usage
2. **Error Cases:** Invalid inputs, error conditions
3. **Edge Cases:** Boundary values, special characters
4. **Branch Coverage:** All if/else paths
5. **Integration:** Multiple features working together

### Mocking Guidelines

Mock external dependencies:

```javascript
// Mock DOM methods
element.scrollIntoView = jest.fn();

// Mock global functions
global.alert = jest.fn();
global.window.open = jest.fn();

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
});
```

---

## Code Standards

### JavaScript Style

- Use ES6+ features
- Use `const` and `let`, not `var`
- Use arrow functions where appropriate
- Use template literals for strings
- Add semicolons

### Test Code Style

- One assertion per test (when possible)
- Clear test descriptions
- Proper setup and teardown
- No test interdependencies
- Isolated test cases

### Comments

Add comments for:
- Complex logic
- Non-obvious behavior
- Test setup explanations

```javascript
// Mock scrollIntoView because jsdom doesn't implement it
element.scrollIntoView = jest.fn();
```

---

## Pull Request Process

### 1. Before Submitting PR

- [ ] All tests pass locally
- [ ] Coverage is 100%
- [ ] Code follows style guidelines
- [ ] Commit messages are clear
- [ ] Branch is up to date with main

### 2. PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] All tests pass
- [ ] Coverage is 100%
- [ ] Added new tests for new features

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

### 3. PR Review Process

1. **Automated Checks:**
   - CI/CD pipeline must pass
   - All tests must pass
   - Coverage must be 100%

2. **Code Review:**
   - At least one approval required
   - Address all review comments
   - Make requested changes

3. **Merge:**
   - Squash and merge (preferred)
   - Delete branch after merge

---

## Maintaining 100% Coverage

### Adding New Code

When adding new code to `03_portfolio.js`:

1. **Write tests first:**
```javascript
describe('New Feature', () => {
  test('should work correctly', () => {
    // Test implementation
  });
});
```

2. **Run tests (should fail):**
```bash
npm test
```

3. **Implement feature:**
```javascript
function newFeature() {
  // Implementation
}
```

4. **Run tests (should pass):**
```bash
npm test
```

5. **Check coverage:**
```bash
npm run test:coverage
```

6. **Add more tests if needed:**
   - Check HTML coverage report
   - Identify uncovered lines
   - Add tests to cover them

### Modifying Existing Code

When modifying existing code:

1. **Run existing tests:**
```bash
npm test
```

2. **Update tests if needed:**
   - Modify test expectations
   - Add new test cases
   - Remove obsolete tests

3. **Verify coverage:**
```bash
npm run test:coverage
```

4. **Ensure 100% coverage maintained**

### Removing Code

When removing code:

1. **Remove the code**
2. **Remove associated tests**
3. **Run remaining tests:**
```bash
npm test
```

4. **Verify coverage:**
```bash
npm run test:coverage
```

---

## Common Scenarios

### Scenario 1: Adding a New Function

```javascript
// 1. Add test first
test('should calculate sum correctly', () => {
  const result = calculateSum(2, 3);
  expect(result).toBe(5);
});

// 2. Implement function
function calculateSum(a, b) {
  return a + b;
}

// 3. Add edge case tests
test('should handle negative numbers', () => {
  const result = calculateSum(-2, 3);
  expect(result).toBe(1);
});

test('should handle zero', () => {
  const result = calculateSum(0, 0);
  expect(result).toBe(0);
});
```

### Scenario 2: Adding Event Listener

```javascript
// 1. Add test
test('should handle button click', () => {
  require('./03_portfolio.js');
  const button = document.querySelector('.new-button');
  const mockFn = jest.fn();

  button.addEventListener('click', mockFn);
  button.click();

  expect(mockFn).toHaveBeenCalled();
});

// 2. Implement in source
const newButton = document.querySelector('.new-button');
newButton.addEventListener('click', () => {
  // Handle click
});
```

### Scenario 3: Adding Conditional Logic

```javascript
// 1. Add tests for both branches
test('should return true when condition is met', () => {
  const result = checkCondition(true);
  expect(result).toBe(true);
});

test('should return false when condition is not met', () => {
  const result = checkCondition(false);
  expect(result).toBe(false);
});

// 2. Implement function
function checkCondition(value) {
  if (value) {
    return true;
  }
  return false;
}
```

---

## Debugging Tips

### Test Failures

```bash
# Run specific test
npm test -- --testNamePattern="test name"

# Run with verbose output
npm test -- --verbose

# Run in watch mode
npm run test:watch
```

### Coverage Issues

```bash
# Generate coverage report
npm run test:coverage

# Open HTML report
open coverage/lcov-report/index.html

# Look for red (uncovered) lines
# Add tests to cover them
```

### CI/CD Failures

1. Check GitHub Actions logs
2. Reproduce locally
3. Fix the issue
4. Push again

---

## Resources

### Documentation
- [TEST_README.md](TEST_README.md) - Testing guide
- [SETUP.md](SETUP.md) - Setup instructions
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues
- [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) - Verification steps

### External Resources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://testingjavascript.com/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)

---

## Questions?

If you have questions:
1. Check the documentation
2. Review existing tests
3. Open an issue
4. Ask in pull request comments

---

## Code of Conduct

- Be respectful
- Be constructive
- Help others
- Maintain quality standards

---

## Thank You!

Thank you for contributing to this project and helping maintain our 100% test coverage standard! 🎉

Your contributions make this project better for everyone.

Happy coding! 💻
