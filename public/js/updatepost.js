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
  const form = document.querySelector(".updateform");
  form.style.cssText = "display: block;";

  const newBtn = document.querySelector(".inputUpdateFields");

  newBtn.addEventListener("click", async () => {
    const post_sub = document.getElementById("updatepostsub").value;
    const post_descr = document.getElementById("updatepostdescr").value;
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
