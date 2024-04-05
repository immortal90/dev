document.addEventListener("DOMContentLoaded", async function () {
  const waitingMessage = document.getElementById("waiting");
  const form = document.getElementById("demoForm");
  const firstNameInput = form.elements["firstName"];
  const lastNameInput = form.elements["lastName"];

  await new Promise((resolve) => setTimeout(resolve, 10000));

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (!firstName && !lastName) {
    waitingMessage.textContent = "I'm miss You";
  } else {
    waitingMessage.textContent = `Hello ${firstName} ${lastName}!`;
  }
});

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET", url, true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const posts = JSON.parse(xhr.responseText);
    const demoElement = document.getElementById("demo");
    let html = "";

    posts.forEach((post) => {
      html += `
        <div>
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `;
    });

    demoElement.innerHTML = html;
  } else {
    console.error("Request failed with status", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();
