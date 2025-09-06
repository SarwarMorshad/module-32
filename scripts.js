// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

document.getElementById("loadDataButton").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
});

document.getElementById("btn-load-post").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
});

// const displayPost = (posts) => {
//   const postsContainer = document.getElementById("post-container");
//   postsContainer.innerHTML = ""; // Clear previous posts
//   posts.forEach((post) => {
//     const li = document.createElement("li");
//     li.textContent = post.title;
//     postsContainer.appendChild(li);
//   });
// };

const displayPost = (posts) => {
  const postsContainer = document.getElementById("post-container");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `<div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>`;
    postsContainer.appendChild(postCard);
  });
};
