const classes = ["first", "second", "third", "fourth"];

const elements = document.querySelectorAll("h1");

console.log(typeof elements);
console.log(elements.length);

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}

const paragraph = document.querySelector("#p1");
paragraph.style.backgroundColor = "gold";

const paragraph2 = document.querySelector("#p2");
paragraph2.style.backgroundColor = "gold";
paragraph2.style.color = "blue";
paragraph2.style.fontSize = "2rem";

const paragraph3 = document.querySelector("#p3");
paragraph3.classList.add("third");

const paragraph4 = document.querySelector("#p4");
paragraph4.classList.add("fourth", "border");

const containers = document.querySelectorAll(".container");

for (let i = 0; i < containers.length; i++) {
  const firstElement = containers[i].firstElementChild;
  console.log(firstElement);
}

for (let i = 0; i < containers.length; i++) {
  const firstElementContent = containers[i].firstElementChild.textContent;
  console.log(firstElementContent);
}

const headers = document.querySelectorAll(".container header");
console.log(headers);

for (let i = 0; i < headers.length; i++) {
  let newTag;
  switch (i) {
    case 1:
      newTag = "h2";
      break;
    case 2:
      newTag = "h3";
      break;
    case 3:
      newTag = "h4";
      break;
    default:
      newTag = "h1";
  }

  const newHeader = document.createElement(newTag);
  newHeader.textContent = headers[i].textContent;
  newHeader.id = headers[i].id;
  newHeader.className = headers[i].className;

  newHeader.innerHTML = headers[i].innerHTML;
  newHeader.id = headers[i].id;
  newHeader.classList.add(`class-${i + 1}`);
  headers[i].parentNode.replaceChild(newHeader, headers[i]);
}
