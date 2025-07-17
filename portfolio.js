let newabout = document.querySelector(".about1");
let aboutsection = document.querySelector(".section");
let newskill=document.querySelector(".skill1")
let skillsection=document.querySelector(".section2")
let newproject=document.querySelector(".project2")
let projectsection=document.querySelector(".section3")
newabout.addEventListener("click", () => {
    aboutsection.scrollIntoView({ behavior: "smooth" });
});
newskill.addEventListener("click", () => {
    skillsection.scrollIntoView({ behavior: "smooth" });
});
newproject.addEventListener("click", () => {
    projectsection.scrollIntoView({ behavior: "smooth" });
});
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
let newcontact=document.querySelector(".contact")
let contactsection=document.querySelector(".contact-section")

newcontact.addEventListener("click", () => {
    contactsection.scrollIntoView({ behavior: "smooth" });
});
let newhire=document.querySelector(".hire")
newhire.addEventListener("click", () => {
    contactsection.scrollIntoView({ behavior: "smooth" });
});
function openSignupPage() {
    window.open("praticequestion/signup.html", "_blank"); // agar file folder me ho
    // agar file same folder me ho to bas "signup.html" likho
  }