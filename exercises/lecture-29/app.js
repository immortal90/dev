class AuthException extends Error {
  constructor(code, message) {
    if (!message) {
      super(code);
    } else {
      super(`${code}: ${message}`);
    }
  }

  toString() {
    return this.message;
  }
}

let checkAuth = document.querySelector(".check-auth");

let isAuth = (auth) => auth ?? false;

checkAuth.addEventListener("click", function () {
  try {
    if (!isAuth()) {
      throw new AuthException(
        "FORBIDDEN",
        "You don't have access to this page"
      );
    } else {
      window.open("success.html", "_blank");
    }
  } catch (e) {
    console.error("Сталася помилка:", e);
    const dialogBox = document.getElementById("dialogBox");
    const messageParagraph = dialogBox.querySelector(".message");
    messageParagraph.textContent = e.toString();
    showDialog();
  }
});

const dialogBox = document.getElementById("dialogBox");

function showDialog() {
  dialogBox.showModal();
}

function closeDialog() {
  dialogBox.close();
}
