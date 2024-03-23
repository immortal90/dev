const alert = document.querySelector(".alert");

const button = document.querySelector(".btn-primary");
button.onclick = function () {
  const alertElements = document.querySelectorAll(".alert");
  if (alertElements.length > 0) {
    alertElements.forEach((alertElement) => {
      alertElement.classList.add("alert-primary");
      alertElement.textContent = "A simple primary alert—check it out!";
    });
  } else {
    console.error("Elements with class 'alert' not found.");
  }
};

const button2 = document.querySelector(".btn-secondary");
button2.addEventListener("click", function () {
  const alertElements = document.querySelectorAll(".alert");
  if (alertElements.length > 0) {
    alertElements.forEach((alertElement) => {
      alertElement.classList.add("alert-primary");
      alertElement.textContent = "A simple secondary alert—check it out!";
    });
  } else {
    console.error("Elements with class 'alert' not found.");
  }
});

const button3 = document.querySelector(".btn-success");
button3.addEventListener("mouseover", function () {
  const alertElements = document.querySelectorAll(".alert");
  alertElements.forEach((alertElement) => {
    alertElement.classList.add("alert-success");
    alertElement.textContent = "A simple success alert—check it out!";
  });
});

button3.addEventListener("mouseout", function () {
  const alertElements = document.querySelectorAll(".alert");
  alertElements.forEach((alertElement) => {
    alertElement.classList.remove("alert-success");
    alertElement.textContent = "";
  });
});

const button4 = document.querySelector(".btn-danger");
button4.addEventListener("focus", function () {
  const alertElements = document.querySelectorAll(".alert");
  alertElements.forEach((alertElement) => {
    alertElement.classList.add("alert-danger");
    alertElement.textContent = "A simple danger alert—check it out!";
  });
});

button4.addEventListener("focusout", function () {
  const alertElements = document.querySelectorAll(".alert");
  alertElements.forEach((alertElement) => {
    alertElement.classList.remove("alert-danger");
    alertElement.textContent = "";
  });
});

function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const darkButton = document.querySelector(".btn-dark");
  const lightButton = document.querySelector(".btn-light");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    darkButton.style.display = "none";
    lightButton.style.display = "block";
  } else {
    darkButton.style.display = "block";
    lightButton.style.display = "none";
  }
}

const darkButtons = document.querySelectorAll(".btn-dark");
const lightButtons = document.querySelectorAll(".btn-light");

darkButtons.forEach((button) => {
  button.addEventListener("click", toggleMode);
});

lightButtons.forEach((button) => {
  button.addEventListener("click", toggleMode);
});

const infoButton = document.querySelector(".btn-info");
infoButton.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const alertElement = document.querySelector(".alert");
    alertElement.classList.add("alert-info");
    alertElement.textContent = "A simple info alert—check it out!";
  }
});

const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  const cardTitle = cards[i].querySelector(".card-title");
  console.log(cardTitle.textContent);
}

for (let i = 0; i < cards.length; i++) {
  const addToCartButton = cards[i].querySelector(".add-to-cart");
  addToCartButton.addEventListener("click", function () {
    const cardTitle = cards[i].querySelector(".card-title");
    console.log(cardTitle.textContent);
  });
}
