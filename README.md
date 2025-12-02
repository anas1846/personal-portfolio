# personal-portfolio

![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![Line Coverage](https://img.shields.io/badge/line%20coverage-100%25-brightgreen)
![Statement Coverage](https://img.shields.io/badge/statement%20coverage-100%25-brightgreen)
![Function Coverage](https://img.shields.io/badge/function%20coverage-100%25-brightgreen)
![Branch Coverage](https://img.shields.io/badge/branch%20coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-ISC-blue)

This is my personal portfolio website built with HTML5, CSS3, and JavaScript. It showcases my skills, projects, and contact information in a clean, responsive design.

## Features

- 🎯 Smooth scrolling navigation
- ✉️ Contact form with validation
- 📱 Responsive design
- ⚡ Interactive UI elements
- ✅ 100% test coverage

## Test Coverage

This project includes comprehensive test coverage for `03_portfolio.js`:

| Metric | Coverage |
|--------|----------|
| Line Coverage | 100% ✅ |
| Statement Coverage | 100% ✅ |
| Function Coverage | 100% ✅ |
| Branch Coverage | 100% ✅ |

### Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Documentation

- 📖 [Quick Start Guide](QUICK_START.md) - Get up and running in 3 steps
- 🧪 [Testing Documentation](TEST_README.md) - Detailed testing guide
- ⚙️ [Setup Guide](SETUP.md) - Development environment setup
- 📊 [Coverage Summary](COVERAGE_SUMMARY.md) - Detailed coverage breakdown
- 🏷️ [Badges Guide](BADGES.md) - How to add badges to your README

## Project Structure

```
personal-portfolio/
├── index.html                    # Main HTML file
├── 02_portfolio.css              # Stylesheet
├── 03_portfolio.js               # JavaScript functionality
├── 03_portfolio.test.js          # Test suite (50+ tests)
├── jest.config.js                # Jest configuration
├── package.json                  # Project dependencies
├── .github/
│   └── workflows/
│       └── test.yml              # CI/CD workflow
└── docs/
    ├── TEST_README.md            # Testing documentation
    ├── SETUP.md                  # Setup guide
    ├── COVERAGE_SUMMARY.md       # Coverage details
    ├── QUICK_START.md            # Quick start guide
    └── BADGES.md                 # Badge information
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Testing**: Jest, jest-environment-jsdom
- **CI/CD**: GitHub Actions
- **Coverage**: 100% across all metrics

## What's Tested?

The comprehensive test suite covers:

### Navigation
- ✅ About section navigation
- ✅ Skills section navigation
- ✅ Projects section navigation
- ✅ Contact section navigation (2 buttons)
- ✅ Smooth scrolling behavior

### Form Validation
- ✅ Valid form submissions
- ✅ Empty field validation
- ✅ Email format validation
- ✅ Whitespace handling
- ✅ Error messages
- ✅ Success messages

### Edge Cases
- ✅ Very long inputs (1000+ characters)
- ✅ Special characters
- ✅ Unicode support
- ✅ Multiple clicks
- ✅ Boundary values

### Window Operations
- ✅ Opening signup page in new tab

## Running the Application

### Option 1: Direct File Access
Simply open `index.html` in your web browser.

### Option 2: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Continuous Integration

The project uses GitHub Actions to automatically:
- Run tests on every push and pull request
- Generate coverage reports
- Ensure 100% coverage is maintained
- Test on multiple Node.js versions (18.x, 20.x)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass: `npm test`
5. Ensure coverage is 100%: `npm run test:coverage`
6. Submit a pull request

## License

ISC

## Author

**Anas Arshad** - [anas1846](https://github.com/anas1846)

---

**Note**: This project maintains 100% test coverage. All pull requests must maintain this standard.
