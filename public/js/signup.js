console.log("hitthesignuppage");

const btn = document.getElementById("signUpBtn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("/signup", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  }).then((res) => {
    console.log("Fetch: ", res);
  });
});
