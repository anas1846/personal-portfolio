# Troubleshooting Guide

This guide helps you resolve common issues when running tests for `03_portfolio.js`.

## Table of Contents
1. [Installation Issues](#installation-issues)
2. [Test Execution Issues](#test-execution-issues)
3. [Coverage Issues](#coverage-issues)
4. [CI/CD Issues](#cicd-issues)
5. [Environment Issues](#environment-issues)
6. [Common Error Messages](#common-error-messages)

---

## Installation Issues

### Issue: `npm install` fails

**Symptoms:**
```
npm ERR! code ENOENT
npm ERR! syscall open
```

**Solutions:**

1. **Check Node.js version:**
```bash
node --version  # Should be v14 or higher
```

2. **Update npm:**
```bash
npm install -g npm@latest
```

3. **Clear npm cache:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

4. **Check permissions:**
```bash
# On macOS/Linux
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ./node_modules
```

---

### Issue: `jest` or `jest-environment-jsdom` not found

**Symptoms:**
```
Cannot find module 'jest'
Cannot find module 'jest-environment-jsdom'
```

**Solutions:**

1. **Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Install specific packages:**
```bash
npm install --save-dev jest jest-environment-jsdom @types/jest
```

3. **Check package.json:**
Ensure these are in `devDependencies`:
```json
{
  "devDependencies": {
    "@types/jest": "^29.5.11",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }
}
```

---

## Test Execution Issues

### Issue: Tests fail with "Cannot find module './03_portfolio.js'"

**Symptoms:**
```
Cannot find module './03_portfolio.js' from '03_portfolio.test.js'
```

**Solutions:**

1. **Check file exists:**
```bash
ls -la 03_portfolio.js
```

2. **Check file path in test:**
Ensure test file has correct path:
```javascript
require('./03_portfolio.js');
```

3. **Check working directory:**
```bash
pwd  # Should be in project root
```

---

### Issue: Tests fail with "document is not defined"

**Symptoms:**
```
ReferenceError: document is not defined
```

**Solutions:**

1. **Check Jest environment:**
Ensure `jest.config.js` has:
```javascript
testEnvironment: 'jsdom'
```

2. **Check test file comment:**
Ensure test file has:
```javascript
/**
 * @jest-environment jsdom
 */
```

3. **Reinstall jsdom:**
```bash
npm install --save-dev jest-environment-jsdom
```

---

### Issue: Tests timeout

**Symptoms:**
```
Timeout - Async callback was not invoked within the 5000 ms timeout
```

**Solutions:**

1. **Increase timeout:**
```javascript
jest.setTimeout(10000);
```

2. **Check for infinite loops:**
Review test code for infinite loops

3. **Check async operations:**
Ensure all async operations complete

---

### Issue: Mock functions not working

**Symptoms:**
```
expect(jest.fn()).toHaveBeenCalled()
Expected number of calls: >= 1
Received number of calls:    0
```

**Solutions:**

1. **Check mock setup:**
```javascript
element.scrollIntoView = jest.fn();
```

2. **Check mock is called before assertion:**
```javascript
element.click();  // Trigger the action
expect(element.scrollIntoView).toHaveBeenCalled();
```

3. **Clear mocks between tests:**
```javascript
afterEach(() => {
  jest.clearAllMocks();
});
```

---

## Coverage Issues

### Issue: Coverage is not 100%

**Symptoms:**
```
File              | % Stmts | % Branch | % Funcs | % Lines |
------------------|---------|----------|---------|---------|
03_portfolio.js   |   95.65 |    87.50 |     100 |   95.65 |
```

**Solutions:**

1. **View HTML coverage report:**
```bash
npm run test:coverage
open coverage/lcov-report/index.html
```

2. **Identify uncovered lines:**
Look for red lines in HTML report

3. **Add tests for uncovered lines:**
Write tests that execute the uncovered code

4. **Check branch coverage:**
Ensure all if/else branches are tested

---

### Issue: Coverage report not generated

**Symptoms:**
- No `coverage/` directory
- No coverage output in terminal

**Solutions:**

1. **Run with coverage flag:**
```bash
npm run test:coverage
```

2. **Check jest.config.js:**
Ensure it has:
```javascript
collectCoverage: true,
coverageDirectory: 'coverage',
```

3. **Clear Jest cache:**
```bash
npx jest --clearCache
npm run test:coverage
```

---

### Issue: Coverage threshold error

**Symptoms:**
```
Jest: "global" coverage threshold for statements (100%) not met: 95.65%
```

**Solutions:**

1. **This is expected!** It means coverage is below 100%

2. **Add more tests:**
Write tests to cover missing lines

3. **Check coverage report:**
```bash
open coverage/lcov-report/index.html
```

4. **Identify and test uncovered code**

---

## CI/CD Issues

### Issue: GitHub Actions workflow fails

**Symptoms:**
- Red X on GitHub commit
- Workflow fails in Actions tab

**Solutions:**

1. **Check workflow logs:**
- Go to GitHub repository
- Click "Actions" tab
- Click on failed workflow
- Review error logs

2. **Test locally first:**
```bash
npm install
npm run test:coverage
```

3. **Check Node.js version:**
Ensure workflow uses compatible Node version:
```yaml
node-version: [18.x, 20.x]
```

4. **Check npm ci vs npm install:**
Workflow uses `npm ci` which requires `package-lock.json`

---

### Issue: Coverage upload fails

**Symptoms:**
```
Error uploading coverage reports
```

**Solutions:**

1. **Check coverage file exists:**
```bash
ls -la coverage/lcov.info
```

2. **Check Codecov token:**
Ensure Codecov token is set in GitHub secrets (if using Codecov)

3. **Check workflow configuration:**
```yaml
- name: Upload coverage reports
  uses: codecov/codecov-action@v3
  with:
    files: ./coverage/lcov.info
```

---

## Environment Issues

### Issue: Different results on different machines

**Symptoms:**
- Tests pass locally but fail on CI
- Tests fail locally but pass on CI

**Solutions:**

1. **Check Node.js versions:**
```bash
node --version
```

2. **Check npm versions:**
```bash
npm --version
```

3. **Use exact versions:**
Ensure `package-lock.json` is committed

4. **Clear and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: Windows-specific issues

**Symptoms:**
- Line ending issues
- Path separator issues

**Solutions:**

1. **Configure Git line endings:**
```bash
git config --global core.autocrlf true
```

2. **Use cross-platform paths:**
Use `/` instead of `\` in paths

3. **Install Windows build tools:**
```bash
npm install --global windows-build-tools
```

---

## Common Error Messages

### Error: "Cannot find module 'jest'"

**Solution:**
```bash
npm install --save-dev jest
```

---

### Error: "Test suite failed to run"

**Solution:**
1. Check syntax errors in test file
2. Check imports/requires
3. Run with verbose flag:
```bash
npm test -- --verbose
```

---

### Error: "ReferenceError: validateContactForm is not defined"

**Solution:**
Ensure the function is defined in `03_portfolio.js` and the file is loaded in tests:
```javascript
require('./03_portfolio.js');
```

---

### Error: "TypeError: element.scrollIntoView is not a function"

**Solution:**
Mock the function before using:
```javascript
element.scrollIntoView = jest.fn();
```

---

### Error: "Expected mock function to have been called"

**Solution:**
1. Ensure the action that triggers the function is called:
```javascript
button.click();  // Trigger the event
expect(mockFunction).toHaveBeenCalled();
```

2. Check event listeners are attached:
```javascript
require('./03_portfolio.js');  // This attaches listeners
```

---

### Error: "Cannot read property 'value' of null"

**Solution:**
Ensure DOM elements exist before accessing:
```javascript
document.body.innerHTML = `
  <input type="text" id="name" />
`;
// Now you can access:
document.getElementById('name').value = 'test';
```

---

## Debug Mode

### Enable verbose logging

```bash
npm test -- --verbose
```

### Run specific test

```bash
npm test -- --testNamePattern="should scroll to about section"
```

### Run tests in debug mode

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

Then open Chrome and go to `chrome://inspect`

---

## Getting Help

If you're still experiencing issues:

1. **Check documentation:**
   - [TEST_README.md](TEST_README.md)
   - [SETUP.md](SETUP.md)
   - [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md)

2. **Check Jest documentation:**
   - [Jest Docs](https://jestjs.io/docs/getting-started)
   - [Jest Troubleshooting](https://jestjs.io/docs/troubleshooting)

3. **Search for similar issues:**
   - [Jest GitHub Issues](https://github.com/facebook/jest/issues)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/jest)

4. **Open an issue:**
   - Provide error message
   - Provide steps to reproduce
   - Provide environment details (OS, Node version, npm version)

---

## Quick Fixes Checklist

Try these in order:

- [ ] `rm -rf node_modules package-lock.json && npm install`
- [ ] `npx jest --clearCache`
- [ ] `npm run test:coverage`
- [ ] Check Node.js version: `node --version`
- [ ] Check npm version: `npm --version`
- [ ] Review error logs carefully
- [ ] Check file paths and names
- [ ] Ensure all files are saved
- [ ] Restart terminal/IDE
- [ ] Restart computer (last resort!)

---

## Prevention Tips

1. **Always run tests before committing:**
```bash
npm test
```

2. **Check coverage before pushing:**
```bash
npm run test:coverage
```

3. **Keep dependencies updated:**
```bash
npm outdated
npm update
```

4. **Use version control:**
```bash
git status
git diff
```

5. **Read error messages carefully:**
They usually tell you exactly what's wrong!

---

**Remember:** Most issues can be resolved by:
1. Reading the error message carefully
2. Checking the documentation
3. Reinstalling dependencies
4. Clearing caches

Good luck! 🍀
