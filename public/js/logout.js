console.log('logout js is hitting')

const btn = document.getElementById("logOut");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  await fetch("/api/logout", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     message: 'logout'
    }),
  }).then((res) => {
    console.log(res);
    if(res.status == 204) {
    window.location.href = '/'
    }
  });
});
