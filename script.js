const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});




document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    name.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

    
    if (name.value.trim().length < 3) {
      nameError.textContent = "Name must be at least 3 characters.";
      name.classList.add("error-border");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email.";
      email.classList.add("error-border");
      isValid = false;
    }


    if (message.value.trim() === "") {
      messageError.textContent = "Message cannot be empty.";
      message.classList.add("error-border");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});