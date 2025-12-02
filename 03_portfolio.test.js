/**
 * @jest-environment jsdom
 */

describe('03_portfolio.js - DOM Interactions and Event Listeners', () => {
  let mockAboutElement;
  let mockAboutSection;
  let mockSkillElement;
  let mockSkillSection;
  let mockProjectElement;
  let mockProjectSection;
  let mockContactElement;
  let mockContactSection;
  let mockHireElement;

  beforeEach(() => {
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

    mockAboutElement = document.querySelector('.about1');
    mockAboutSection = document.querySelector('.section');
    mockSkillElement = document.querySelector('.skill1');
    mockSkillSection = document.querySelector('.section2');
    mockProjectElement = document.querySelector('.project2');
    mockProjectSection = document.querySelector('.section3');
    mockContactElement = document.querySelector('.contact');
    mockContactSection = document.querySelector('.contact-section');
    mockHireElement = document.querySelector('.hire');

    mockAboutSection.scrollIntoView = jest.fn();
    mockSkillSection.scrollIntoView = jest.fn();
    mockProjectSection.scrollIntoView = jest.fn();
    mockContactSection.scrollIntoView = jest.fn();

    global.alert = jest.fn();
    global.window.open = jest.fn();

    require('./03_portfolio.js');
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  describe('Navigation - About Section', () => {
    test('should scroll to about section when about button is clicked', () => {
      mockAboutElement.click();
      expect(mockAboutSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  describe('Navigation - Skill Section', () => {
    test('should scroll to skill section when skill button is clicked', () => {
      mockSkillElement.click();
      expect(mockSkillSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  describe('Navigation - Project Section', () => {
    test('should scroll to project section when project button is clicked', () => {
      mockProjectElement.click();
      expect(mockProjectSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  describe('Navigation - Contact Section', () => {
    test('should scroll to contact section when contact button is clicked', () => {
      mockContactElement.click();
      expect(mockContactSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    test('should scroll to contact section when hire button is clicked', () => {
      mockHireElement.click();
      expect(mockContactSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
  });

  describe('validateContactForm - Happy Path', () => {
    test('should return true and show success message when all fields are valid', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Hello, this is a test message.';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should handle email with multiple @ symbols', () => {
      document.getElementById('name').value = 'Jane Doe';
      document.getElementById('email').value = 'jane@@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should trim whitespace from input fields', () => {
      document.getElementById('name').value = '  John Doe  ';
      document.getElementById('email').value = '  john@example.com  ';
      document.getElementById('message').value = '  Test message  ';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });
  });

  describe('validateContactForm - Error Cases', () => {
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
  });

  describe('validateContactForm - Edge Cases', () => {
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
      document.getElementById('name').value = 'John O\'Brien-Smith';
      document.getElementById('email').value = 'john@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should handle email with @ at the beginning', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = '@example.com';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should handle email with @ at the end', () => {
      document.getElementById('name').value = 'John Doe';
      document.getElementById('email').value = 'john@';
      document.getElementById('message').value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });

    test('should handle single character inputs', () => {
      document.getElementById('name').value = 'J';
      document.getElementById('email').value = 'j@e';
      document.getElementById('message').value = 'M';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });
  });

  describe('openSignupPage', () => {
    test('should open signup page in new tab', () => {
      openSignupPage();

      expect(global.window.open).toHaveBeenCalledWith('praticequestion/signup.html', '_blank');
    });

    test('should call window.open exactly once', () => {
      openSignupPage();

      expect(global.window.open).toHaveBeenCalledTimes(1);
    });
  });

  describe('DOM Element Selection', () => {
    test('should select all required DOM elements on page load', () => {
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

  describe('Multiple Click Events', () => {
    test('should handle multiple clicks on about button', () => {
      mockAboutElement.click();
      mockAboutElement.click();
      mockAboutElement.click();

      expect(mockAboutSection.scrollIntoView).toHaveBeenCalledTimes(3);
    });

    test('should handle multiple clicks on different navigation buttons', () => {
      mockAboutElement.click();
      mockSkillElement.click();
      mockProjectElement.click();
      mockContactElement.click();
      mockHireElement.click();

      expect(mockAboutSection.scrollIntoView).toHaveBeenCalledTimes(1);
      expect(mockSkillSection.scrollIntoView).toHaveBeenCalledTimes(1);
      expect(mockProjectSection.scrollIntoView).toHaveBeenCalledTimes(1);
      expect(mockContactSection.scrollIntoView).toHaveBeenCalledTimes(2);
    });
  });
});
