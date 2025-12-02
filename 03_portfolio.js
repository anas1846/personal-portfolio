function validateContactForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }
  if (!email.includes("@")) {
    alert("Enter a valid email address.");
    return false;
  }

  alert("Thank you! Your message has been sent.");
  return true;
}

function openSignupPage() {
    window.open("praticequestion/signup.html", "_blank");
}

/* istanbul ignore next */
// Setup event listeners
if (typeof document !== 'undefined') {
  let newabout = document.querySelector(".about1");
  let aboutsection = document.querySelector(".section");
  let newskill=document.querySelector(".skill1")
  let skillsection=document.querySelector(".section2")
  let newproject=document.querySelector(".project2")
  let projectsection=document.querySelector(".section3")

  if (newabout && aboutsection) {
    newabout.addEventListener("click", () => {
        aboutsection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (newskill && skillsection) {
    newskill.addEventListener("click", () => {
        skillsection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (newproject && projectsection) {
    newproject.addEventListener("click", () => {
        projectsection.scrollIntoView({ behavior: "smooth" });
    });
  }

  let newcontact=document.querySelector(".contact")
  let contactsection=document.querySelector(".contact-section")

  if (newcontact && contactsection) {
    newcontact.addEventListener("click", () => {
        contactsection.scrollIntoView({ behavior: "smooth" });
    });
  }

  let newhire=document.querySelector(".hire")
  if (newhire && contactsection) {
    newhire.addEventListener("click", () => {
        contactsection.scrollIntoView({ behavior: "smooth" });
    });
  }
}

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateContactForm, openSignupPage };
}
