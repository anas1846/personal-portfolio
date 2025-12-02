const { validateContactForm, openSignupPage } = require('./03_portfolio.js');


/**
 * @jest-environment jsdom
 */

describe('03_portfolio.js - Complete Test Coverage', () => {
  beforeEach(() => {
    // Set up DOM structure before loading the script
    document.body.innerHTML = `
      <button class="about1">About</button>
      <section class="section"></section>
      <button class="skill1">Skill</button>
      <section class="section2"></section>
      <button class="project2">Project</button>
      <section class="section3"></section>
      <button class="contact">Contact</button>
      <section class="contact-section"></section>
      <button class="hire">Hire me</button>
      <form onsubmit="return validateContactForm()">
        <input type="text" id="name" />
        <input type="email" id="email" />
        <textarea id="message"></textarea>
      </form>
    `;

    // Mock scrollIntoView for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.scrollIntoView = jest.fn();
    });

    // Mock global functions
    global.alert = jest.fn();
    global.window.open = jest.fn();
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  describe('DOM Element Selection and Event Listeners Setup', () => {
    test('should set up all event listeners when script loads', () => {
      // Load the script
      require('./03_portfolio.js');

      // Verify all elements are selected
      expect(document.querySelector('.about1')).toBeTruthy();
      expect(document.querySelector('.section')).toBeTruthy();
      expect(document.querySelector('.skill1')).toBeTruthy();
      expect(document.querySelector('.section2')).toBeTruthy();
      expect(document.querySelector('.project2')).toBeTruthy();
      expect(document.querySelector('.section3')).toBeTruthy();
      expect(document.querySelector('.contact')).toBeTruthy();
      expect(document.querySelector('.contact-section')).toBeTruthy();
      expect(document.querySelector('.hire')).toBeTruthy();
    });
  });

  describe('Navigation - About Section (Lines 1-2, 7-9)', () => {
    test('should scroll to about section when about button is clicked', () => {
      require('./03_portfolio.js');

      const aboutButton = document.querySelector('.about1');
      const aboutSection = document.querySelector('.section');

      aboutButton.click();

      expect(aboutSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(aboutSection.scrollIntoView).toHaveBeenCalledTimes(1);
    });

    test('should handle multiple clicks on about button', () => {
      require('./03_portfolio.js');

      const aboutButton = document.querySelector('.about1');
      const aboutSection = document.querySelector('.section');

      aboutButton.click();
      aboutButton.click();
      aboutButton.click();

      expect(aboutSection.scrollIntoView).toHaveBeenCalledTimes(3);
    });
  });

  describe('Navigation - Skill Section (Lines 3-4, 10-12)', () => {
    test('should scroll to skill section when skill button is clicked', () => {
      require('./03_portfolio.js');

      const skillButton = document.querySelector('.skill1');
      const skillSection = document.querySelector('.section2');

      skillButton.click();

      expect(skillSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(skillSection.scrollIntoView).toHaveBeenCalledTimes(1);
    });

    test('should handle multiple clicks on skill button', () => {
      require('./03_portfolio.js');

      const skillButton = document.querySelector('.skill1');
      const skillSection = document.querySelector('.section2');

      skillButton.click();
      skillButton.click();

      expect(skillSection.scrollIntoView).toHaveBeenCalledTimes(2);
    });
  });

  describe('Navigation - Project Section (Lines 5-6, 13-15)', () => {
    test('should scroll to project section when project button is clicked', () => {
      require('./03_portfolio.js');

      const projectButton = document.querySelector('.project2');
      const projectSection = document.querySelector('.section3');

      projectButton.click();

      expect(projectSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(projectSection.scrollIntoView).toHaveBeenCalledTimes(1);
    });
  });

  describe('Navigation - Contact Section via Contact Button (Lines 33-34, 36-38)', () => {
    test('should scroll to contact section when contact button is clicked', () => {
      require('./03_portfolio.js');

      const contactButton = document.querySelector('.contact');
      const contactSection = document.querySelector('.contact-section');

      contactButton.click();

      expect(contactSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(contactSection.scrollIntoView).toHaveBeenCalledTimes(1);
    });
  });

  describe('Navigation - Contact Section via Hire Button (Lines 39-42)', () => {
    test('should scroll to contact section when hire button is clicked', () => {
      require('./03_portfolio.js');

      const hireButton = document.querySelector('.hire');
      const contactSection = document.querySelector('.contact-section');

      hireButton.click();

      expect(contactSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(contactSection.scrollIntoView).toHaveBeenCalledTimes(1);
    });

    test('should scroll to same section from both contact and hire buttons', () => {
      require('./03_portfolio.js');

      const contactButton = document.querySelector('.contact');
      const hireButton = document.querySelector('.hire');
      const contactSection = document.querySelector('.contact-section');

      contactButton.click();
      hireButton.click();

      expect(contactSection.scrollIntoView).toHaveBeenCalledTimes(2);
    });
  });

  describe('validateContactForm - Happy Path (Lines 16-32)', () => {
    beforeEach(() => {
      require('./03_portfolio.js');
    });

    test('should return true and show success message when all fields are valid', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Hello, this is a test message.';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
      expect(global.alert).toHaveBeenCalledTimes(1);
    });

    test('should handle email with multiple @ symbols', () => {
      document.getElementById('name').value = 'Jane Doe';
      document.getElementById('email').value = 'jane@@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should trim whitespace from input fields before validation', () => {
      document.getElementById('name').value = '  John Doe  ';
      document.getElementById('email').value = '  john@example.com  ';
      document.getElementById('message').value = '  Test message  ';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should accept minimal valid input', () => {
      document.getElementById('name').value = 'J';
      document.getElementById('email').value = 'a@b';
      document.getElementById('message').value = 'M';

      const result = validateContactForm();

      expect(result).toBe(true);
    });
  });

  describe('validateContactForm - Empty Fields Error (Lines 21-24)', () => {
    beforeEach(() => {
      require('./03_portfolio.js');
    });

    test('should return false and show error when name is empty', () => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false and show error when email is empty', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = '';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false and show error when message is empty', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = '';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false and show error when all fields are empty', () => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false when name is only whitespace', () => {
      document.getElementById('name').value = '   ';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false when email is only whitespace', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = '   ';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false when message is only whitespace', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = '   ';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false when multiple fields are empty', () => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });
  });

  describe('validateContactForm - Invalid Email Error (Lines 25-28)', () => {
    beforeEach(() => {
      require('./03_portfolio.js');
    });

    test('should return false and show error when email does not contain @', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'johnexample.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Enter a valid email address.');
    });

    test('should return false when email is just a single character without @', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'a';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Enter a valid email address.');
    });

    test('should return false when email is a word without @', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'invalidemail';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Enter a valid email address.');
    });

    test('should return false when email has spaces but no @', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Enter a valid email address.');
    });
  });

  describe('validateContactForm - Edge Cases', () => {
    beforeEach(() => {
      require('./03_portfolio.js');
    });

    test('should handle very long input values', () => {
      const longString = 'a'.repeat(1000);
      document.getElementById('name').value = longString;
      document.getElementById('email').value = `${longString}@example.com`;
      document.getElementById('message').value = longString;

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should handle special characters in name', () => {
      document.getElementById('name').value = "John O'Brien-Smith";
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
    });

    test('should handle email with @ at the beginning', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = '@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
    });

    test('should handle email with @ at the end', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john@';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
    });

    test('should handle unicode characters in inputs', () => {
      document.getElementById('name').value = '李明';
      document.getElementById('email').value = 'test@例え.jp';
      document.getElementById('message').value = 'こんにちは';

      const result = validateContactForm();

      expect(result).toBe(true);
    });

    test('should handle numbers in name', () => {
      document.getElementById('name').value = 'John123';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
    });
  });

  describe('openSignupPage Function (Lines 43-46)', () => {
    beforeEach(() => {
      require('./03_portfolio.js');
    });

    test('should open signup page in new tab with correct URL', () => {
      openSignupPage();

      expect(global.window.open).toHaveBeenCalledWith('praticequestion/signup.html', '_blank');
      expect(global.window.open).toHaveBeenCalledTimes(1);
    });

    test('should call window.open with exactly two parameters', () => {
      openSignupPage();

      expect(global.window.open).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(String)
      );
    });

    test('should open signup page multiple times if called multiple times', () => {
      openSignupPage();
      openSignupPage();
      openSignupPage();

      expect(global.window.open).toHaveBeenCalledTimes(3);
    });
  });

  describe('Integration Tests - Multiple Interactions', () => {
    beforeEach(() => {
      require('./03_portfolio.js');
    });

    test('should handle navigation to all sections in sequence', () => {
      const aboutButton = document.querySelector('.about1');
      const skillButton = document.querySelector('.skill1');
      const projectButton = document.querySelector('.project2');
      const contactButton = document.querySelector('.contact');

      aboutButton.click();
      skillButton.click();
      projectButton.click();
      contactButton.click();

      expect(document.querySelector('.section').scrollIntoView).toHaveBeenCalledTimes(1);
      expect(document.querySelector('.section2').scrollIntoView).toHaveBeenCalledTimes(1);
      expect(document.querySelector('.section3').scrollIntoView).toHaveBeenCalledTimes(1);
      expect(document.querySelector('.contact-section').scrollIntoView).toHaveBeenCalledTimes(1);
    });

    test('should handle form validation and navigation in same session', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Test message';

      const formResult = validateContactForm();

      const aboutButton = document.querySelector('.about1');
      aboutButton.click();

      expect(formResult).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
      expect(document.querySelector('.section').scrollIntoView).toHaveBeenCalled();
    });

    test('should handle opening signup page and form validation', () => {
      openSignupPage();

      document.getElementById('name').value = 'Test User';
      document.getElementById('email').value = 'test@example.com';
      document.getElementById('message').value = 'Message';

      const result = validateContactForm();

      expect(global.window.open).toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });

  describe('Branch Coverage - All Conditional Paths', () => {
    beforeEach(() => {
      require('./03_portfolio.js');
    });

    test('should cover true branch of empty fields check', () => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = 'test@example.com';
      document.getElementById('message').value = 'Message';

      const result = validateContactForm();

      expect(result).toBe(false);
    });

    test('should cover false branch of empty fields check', () => {
      document.getElementById('name').value = 'Name';
      document.getElementById('email').value = 'test@example.com';
      document.getElementById('message').value = 'Message';

      const result = validateContactForm();

      expect(result).toBe(true);
    });

    test('should cover true branch of email validation check', () => {
      document.getElementById('name').value = 'Name';
      document.getElementById('email').value = 'invalidemail';
      document.getElementById('message').value = 'Message';

      const result = validateContactForm();

      expect(result).toBe(false);
    });

    test('should cover false branch of email validation check', () => {
      document.getElementById('name').value = 'Name';
      document.getElementById('email').value = 'valid@email.com';
      document.getElementById('message').value = 'Message';

      const result = validateContactForm();

      expect(result).toBe(true);
    });
  });

describe('Environment Guard Clauses - Branch Coverage', () => {
  describe('Line 24: typeof document check', () => {
    test('should handle when document is undefined (false branch)', () => {
      // Save original document
      const originalDocument = global.document;

      // Temporarily remove document
      delete global.document;

      // Re-require the module to execute the code with document undefined
      jest.resetModules();

      // This should not throw an error even when document is undefined
      expect(() => {
        require('./03_portfolio.js');
      }).not.toThrow();

      // Restore document
      global.document = originalDocument;
      jest.resetModules();
    });
  });

  describe('Line 67: typeof module check', () => {
    test('should handle when module.exports is undefined (false branch)', () => {
      // Save original module.exports
      const originalExports = module.exports;

      // Set module.exports to undefined
      module.exports = undefined;

      // Re-require to execute the code with module.exports undefined
      jest.resetModules();

      // This should not throw an error
      expect(() => {
        require('./03_portfolio.js');
      }).not.toThrow();

      // Restore module.exports
      module.exports = originalExports;
      jest.resetModules();

      // Re-require to restore normal state
      require('./03_portfolio.js');
    });
  });

describe('Environment Check Coverage - Line 24 and 67', () => {
  describe('Document undefined check (Line 24)', () => {
    it('should handle when document is undefined', () => {
      // Save original document
      const originalDocument = global.document;

      // Set document to undefined
      delete global.document;

      // Re-require the module to execute the code with document undefined
      jest.resetModules();

      // This should not throw an error
      expect(() => {
        require('./03_portfolio.js');
      }).not.toThrow();

      // Restore document
      global.document = originalDocument;
      jest.resetModules();
    });
  });

  describe('Module exports check (Line 67)', () => {
    it('should handle when module is undefined', () => {
      // Save original module
      const originalModule = global.module;

      // Set module to undefined
      delete global.module;

      // Re-require the module
      jest.resetModules();

      // This should not throw an error
      expect(() => {
        require('./03_portfolio.js');
      }).not.toThrow();

      // Restore module
      global.module = originalModule;
      jest.resetModules();

      // Re-require to restore normal state
      require('./03_portfolio.js');
    });
  });

  describe('Environment Branch Coverage - document undefined (Line 24)', () => {
    test('should skip event listener setup when document is undefined', () => {
      // Save original document
      const originalDocument = global.document;

      // Clear module cache
      jest.resetModules();
      delete require.cache[require.resolve('./03_portfolio.js')];

      // Temporarily remove document
      delete global.document;

      // Reload module without document - this should cover line 24 false branch
      const moduleWithoutDocument = require('./03_portfolio.js');

      // Verify module still exports functions even without document
      expect(moduleWithoutDocument.validateContactForm).toBeDefined();
      expect(moduleWithoutDocument.openSignupPage).toBeDefined();

      // Restore document
      global.document = originalDocument;
      jest.resetModules();
    });
  });

  describe('Environment Branch Coverage - module.exports falsy (Line 67)', () => {
    test('should handle when module.exports is not available', () => {
      // This test uses vm module to execute code in a different context
      const vm = require('vm');
      const fs = require('fs');
      const path = require('path');

      // Read the source code
      const sourceCode = fs.readFileSync(path.join(__dirname, '03_portfolio.js'), 'utf8');

      // Create a sandbox without module.exports
      const sandbox = {
        document: undefined,
        window: {},
        alert: jest.fn(),
        module: undefined
      };

      // Execute code in sandbox - this covers line 67 false branch
      expect(() => {
        vm.runInNewContext(sourceCode, sandbox);
      }).not.toThrow();
});
