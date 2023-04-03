
console.log('ready to del post')

const delbtn = document.querySelectorAll(".delbtn");
console.log(delbtn)

for (let del of delbtn ) {
del.addEventListener("click", async (e) => {
  e.preventDefault();
  const post_id = e.target.id
  console.log(post_id) 

  await fetch("/api/dashboard", {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     post_id: post_id
    }),
  }).then((res) => {
    console.log(res);
    if(res.status == 200) {
    window.location.href = '/dashboard'
    }
  });
});
}

