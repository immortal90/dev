const ul = document.querySelector("ul");
const input = document.getElementById("item");
let itemsArray;

function addTask(text) {
  let newTask = document.createElement("li");
  newTask.textContent = text;
  let ul = document.querySelector("ul");
  ul.appendChild(newTask);
}

function add() {
  const inputValue = input.value.trim();
  if (inputValue !== "") {
    itemsArray.push(inputValue);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(inputValue);
    input.value = "";
  }
}

function del() {
  localStorage.removeItem("items");
  itemsArray = [];
  ul.innerHTML = "";
}

const storedItems = localStorage.getItem("items");
if (storedItems) {
  itemsArray = JSON.parse(storedItems);
} else {
  itemsArray = [];
}
console.log(itemsArray);

if (itemsArray.length > 0) {
  itemsArray.forEach((task) => {
    addTask(task);
  });
}
