// console.log("first console");
// setTimeout(() => {
//   console.log("after 3 sec");
// }, 3000);
// console.log("after");

// const fetchPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   //   console.log(data);
//   posts.forEach((element) => {
//     console.log(element.title);
//   });
//   //   console.log(res);

//   return res;
// };
// console.log("out");

// const post = fetchPost();
// console.log(post);

const button = document.getElementById("getPosts");
const lists = document.getElementById("lists");
button.addEventListener("click", async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    //   console.log(data);

    const container = document.getElementById("posts-container");
    let postsHTML = "";
    posts.forEach((post) => {
      postsHTML += `
      <div class="post-card">
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div>
        <div class="post-body">${post.id}</div>
      </div>
    `;
      container.innerHTML = postsHTML;
    });

    // function filterByFilter() {
    //   posts.find((p) => p.id % 2 == 0){
    //     postsHTML += `
    //   <div class="post-card">
    //     <div class="post-title">${post.title}</div>
    // </div>`
    // container.innerHTML = postsHTML;
    //   }
    // }

    // filterByFilter(10);
  } catch (error) {
    console.error("error: ", error);
  }
});
