console.log("hittheloginpage");

const btn = document.getElementById("logInBtn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = "/";
    }
  });
});
