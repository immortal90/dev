document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const errorMessages = document.getElementById("errorMessages");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    errorMessages.innerHTML = "";

    const username = form.elements.username.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (username === "") {
      displayErrorMessage("Username is required.");
    }

    if (email === "") {
      displayErrorMessage("Email is required.");
    } else if (!isValidEmail(email)) {
      displayErrorMessage("Email is not valid.");
    }

    if (password === "") {
      displayErrorMessage("Password is required.");
    } else if (password.length < 8) {
      displayErrorMessage("Password must be at least 8 characters long.");
    } else if (!isValidPassword(password)) {
      displayErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    }

    if (errorMessages.innerHTML === "") {
      form.submit();
    }
  });

  function displayErrorMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    errorMessages.appendChild(p);
  }

  function isValidEmail(email) {
    return email.includes("@");
  }

  function isValidPassword(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
});
