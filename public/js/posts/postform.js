const createbtn = document.getElementById("createblogbtn");

createbtn.addEventListener("click", () => {
  const blogform = document.querySelector(".blogform");
  blogform.style.cssText =
    "display: grid; place-items: center; margin-right: 10%";

  const writeanewblog = document.querySelector(".writeanewblog");
  writeanewblog.style.cssText = "display: none";

  if (req.session.loggedIn) {
    console.log(req.session.loggedIn);
  }
});
