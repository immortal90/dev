const list = ["html", "css", "javascript", "react.js"];
const container = document.getElementById("container");
const ul = document.createElement("ul");
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
container.appendChild(ul);

const listWithHref = [
  { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { "react.js": "https://react.dev" },
];
function createLink(text, url) {
  const link = document.createElement("a");
  link.textContent = text;
  link.href = url;
  return link;
}
const orderedList = document.createElement("ol");
listWithHref.forEach((item) => {
  const listItem = document.createElement("li");
  const key = Object.keys(item)[0];
  const value = Object.values(item)[0];
  const link = createLink(key, value);
  listItem.appendChild(link);
  orderedList.appendChild(listItem);
});
document.body.appendChild(orderedList);

const students = [
  { firstName: "Tom", lastName: "Cat", degree: 230 },
  { firstName: "Nary", lastName: "Ann", degree: 336 },
  { firstName: "John", lastName: "Doe", degree: 400 },
  { firstName: "James", lastName: "Bond", degree: 700 },
];
const table = document.createElement("table");
const thead = document.createElement("thead");
const trHead = document.createElement("tr");
const headers = ["firstName", "lastName", "degree"];
headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  th.style.backgroundColor = "blue";
  th.style.color = "azure";
  trHead.appendChild(th);
});
thead.appendChild(trHead);
table.appendChild(thead);
const tbody = document.createElement("tbody");
students.forEach((student) => {
  const tr = document.createElement("tr");
  headers.forEach((header) => {
    const td = document.createElement("td");
    td.textContent = student[header];
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);
