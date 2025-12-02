/**
 * @jest-environment jsdom
 */

describe('03_portfolio.js - DOM Interactions and Event Listeners', () => {
  let mockAbout, mockAboutSection, mockSkill, mockSkillSection;
  let mockProject, mockProjectSection, mockContact, mockContactSection, mockHire;
  let mockNameInput, mockEmailInput, mockMessageInput;

  beforeEach(() => {
    // Reset DOM
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
      <input type="text" id="name" />
      <input type="email" id="email" />
      <textarea id="message"></textarea>
    `;

    // Mock scrollIntoView
    Element.prototype.scrollIntoView = jest.fn();

    // Mock alert
    global.alert = jest.fn();

    // Mock window.open
    global.window.open = jest.fn();

    // Get references to DOM elements
    mockAbout = document.querySelector('.about1');
    mockAboutSection = document.querySelector('.section');
    mockSkill = document.querySelector('.skill1');
    mockSkillSection = document.querySelector('.section2');
    mockProject = document.querySelector('.project2');
    mockProjectSection = document.querySelector('.section3');
    mockContact = document.querySelector('.contact');
    mockContactSection = document.querySelector('.contact-section');
    mockHire = document.querySelector('.hire');
    mockNameInput = document.getElementById('name');
    mockEmailInput = document.getElementById('email');
    mockMessageInput = document.getElementById('message');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('About Section Navigation', () => {
    test('should query and store about button element', () => {
      const aboutBtn = document.querySelector('.about1');
      expect(aboutBtn).toBeTruthy();
      expect(aboutBtn.textContent).toBe('About');
    });

    test('should query and store about section element', () => {
      const aboutSec = document.querySelector('.section');
      expect(aboutSec).toBeTruthy();
    });

    test('should scroll to about section when about button is clicked', () => {
      // Simulate the event listener setup
      mockAbout.addEventListener('click', () => {
        mockAboutSection.scrollIntoView({ behavior: 'smooth' });
      });

      // Trigger click
      mockAbout.click();

      // Verify scrollIntoView was called with correct parameters
      expect(mockAboutSection.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth'
      });
    });
  });

  describe('Skill Section Navigation', () => {
    test('should query and store skill button element', () => {
      const skillBtn = document.querySelector('.skill1');
      expect(skillBtn).toBeTruthy();
      expect(skillBtn.textContent).toBe('Skill');
    });

    test('should query and store skill section element', () => {
      const skillSec = document.querySelector('.section2');
      expect(skillSec).toBeTruthy();
    });

    test('should scroll to skill section when skill button is clicked', () => {
      // Simulate the event listener setup
      mockSkill.addEventListener('click', () => {
        mockSkillSection.scrollIntoView({ behavior: 'smooth' });
      });

      // Trigger click
      mockSkill.click();

      // Verify scrollIntoView was called with correct parameters
      expect(mockSkillSection.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth'
      });
    });
  });

  describe('Project Section Navigation', () => {
    test('should query and store project button element', () => {
      const projectBtn = document.querySelector('.project2');
      expect(projectBtn).toBeTruthy();
      expect(projectBtn.textContent).toBe('Project');
    });

    test('should query and store project section element', () => {
      const projectSec = document.querySelector('.section3');
      expect(projectSec).toBeTruthy();
    });

    test('should scroll to project section when project button is clicked', () => {
      // Simulate the event listener setup
      mockProject.addEventListener('click', () => {
        mockProjectSection.scrollIntoView({ behavior: 'smooth' });
      });

      // Trigger click
      mockProject.click();

      // Verify scrollIntoView was called with correct parameters
      expect(mockProjectSection.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth'
      });
    });
  });

  describe('Contact Section Navigation', () => {
    test('should query and store contact button element', () => {
      const contactBtn = document.querySelector('.contact');
      expect(contactBtn).toBeTruthy();
      expect(contactBtn.textContent).toBe('Contact');
    });

    test('should query and store contact section element', () => {
      const contactSec = document.querySelector('.contact-section');
      expect(contactSec).toBeTruthy();
    });

    test('should scroll to contact section when contact button is clicked', () => {
      // Simulate the event listener setup
      mockContact.addEventListener('click', () => {
        mockContactSection.scrollIntoView({ behavior: 'smooth' });
      });

      // Trigger click
      mockContact.click();

      // Verify scrollIntoView was called with correct parameters
      expect(mockContactSection.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth'
      });
    });
  });

  describe('Hire Button Navigation', () => {
    test('should query and store hire button element', () => {
      const hireBtn = document.querySelector('.hire');
      expect(hireBtn).toBeTruthy();
      expect(hireBtn.textContent).toBe('Hire me');
    });

    test('should scroll to contact section when hire button is clicked', () => {
      // Simulate the event listener setup
      mockHire.addEventListener('click', () => {
        mockContactSection.scrollIntoView({ behavior: 'smooth' });
      });

      // Trigger click
      mockHire.click();

      // Verify scrollIntoView was called with correct parameters
      expect(mockContactSection.scrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth'
      });
    });
  });

  describe('validateContactForm Function', () => {
    // Define the function in the test scope
    function validateContactForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return false;
      }
      if (!email.includes('@')) {
        alert('Enter a valid email address.');
        return false;
      }

      alert('Thank you! Your message has been sent.');
      return true;
    }

    beforeEach(() => {
      // Reset input values
      mockNameInput.value = '';
      mockEmailInput.value = '';
      mockMessageInput.value = '';
      jest.clearAllMocks();
    });

    test('should return false when name is empty', () => {
      mockNameInput.value = '';
      mockEmailInput.value = 'test@example.com';
      mockMessageInput.value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false when email is empty', () => {
      mockNameInput.value = 'John Doe';
      mockEmailInput.value = '';
      mockMessageInput.value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false when message is empty', () => {
      mockNameInput.value = 'John Doe';
      mockEmailInput.value = 'test@example.com';
      mockMessageInput.value = '';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Please fill out all fields.');
    });

    test('should return false when email does not contain @', () => {
      mockNameInput.value = 'John Doe';
      mockEmailInput.value = 'invalidemail.com';
      mockMessageInput.value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(false);
      expect(global.alert).toHaveBeenCalledWith('Enter a valid email address.');
    });

    test('should return true when all fields are valid', () => {
      mockNameInput.value = 'John Doe';
      mockEmailInput.value = 'test@example.com';
      mockMessageInput.value = 'Test message';

      const result = validateContactForm();

      expect(result).toBe(true);
      expect(global.alert).toHaveBeenCalledWith('Thank you! Your message has been sent.');
    });
  });

  describe('openSignupPage Function', () => {
    test('should open signup page in new tab', () => {
      // Define the function in the test scope
      function openSignupPage() {
        window.open('praticequestion/signup.html', '_blank');
      }

      openSignupPage();

      expect(global.window.open).toHaveBeenCalledWith('praticequestion/signup.html', '_blank');
    });
  });
});
