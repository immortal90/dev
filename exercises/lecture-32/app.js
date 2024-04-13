const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

fetchData(url).then((posts) => {
  let result = "";
  posts.forEach((item) => {
    result += template(item);
  });
  document.getElementById("blog").innerHTML = result;

  const users = document.querySelectorAll(".author");
  users.forEach((user) => {
    fetchData(
      `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`
    ).then((userData) => {
      user.textContent = userData.name;
    });
  });
});
