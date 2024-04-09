const url = "https://my-json-server.typicode.com/immortal90/test/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong!");
    };
  });

  return promise;
};

xhrPromise("GET", url)
  .then((response) => {
    const posts = JSON.parse(response);
    const userIds = posts.map((post) => post.userId);
    const uniqueUserIds = [...new Set(userIds)];

    const getUserNames = uniqueUserIds.map((userId) => {
      return xhrPromise(
        "GET",
        `https://my-json-server.typicode.com/immortal90/test/users/${userId}`
      ).then((userResponse) => {
        const userData = JSON.parse(userResponse);
        return userData.name;
      });
    });

    return Promise.all(getUserNames).then((userNames) => {
      userNames.forEach((userName, index) => {
        const parentElement = document.getElementById("blog");
        parentElement.innerHTML += template(posts[index]);
        const authorElement = parentElement.querySelector(
          `.author[data-id="${posts[index].userId}"]`
        );
        if (authorElement) {
          authorElement.textContent = userName;
        } else {
          console.error(
            `Element with data-id="${posts[index].userId}" not found`
          );
        }
      });
    });
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
