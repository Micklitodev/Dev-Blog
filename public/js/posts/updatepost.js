console.log("ready to update post");

const updatebtn = document.querySelectorAll(".updatebtn");
console.log(updatebtn);

for (let update of updatebtn) {
  update.addEventListener("click", async (e) => {
    e.preventDefault();

    update.style.cssText = "display: none";
    resolveData(e.target.id);
  });
}

const resolveData = (eventID) => {
  const updateBtn = document.getElementById(eventID);
  const parent = updateBtn.parentNode;
  const form = parent.querySelector(".updateform");
  form.style.display = "block";

  const newBtn = form.querySelector(".inputUpdateFields");

  newBtn.addEventListener("click", async () => {
    const post_sub = form.querySelector("#updatepostsub").value;
    const post_descr = form.querySelector("#updatepostdescr").value;
    const post_id = eventID;

    await fetch("/api/dashboard", {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_sub: post_sub,
        post_descr: post_descr,
        post_id: post_id,
      }),
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        window.location.href = "/dashboard";
      }
    });
  });
};