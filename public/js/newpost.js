console.log('prepared to make a new post')

const newPostBtn = document.getElementById("newPost");

newPostBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const post_sub = document.getElementById("sub").value;
  const post_descr = document.getElementById("body").value;
  console.log(post_sub)
  console.log(post_descr)


  await fetch("/", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post_sub: post_sub,
      post_descr: post_descr
    }),
  }).then((res) => {
    console.log(res);
    if(res.status == 200) {
        window.location.href = '/'
    }
  });
});