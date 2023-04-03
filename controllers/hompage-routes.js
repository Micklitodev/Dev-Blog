const router = require("express").Router();
const { Posts, Comment} = require("../models");

// ----------- show all posts ----------------
router.get("/", async (req, res) => {
  try {
    const allPosts = await Posts.findAll();
    const posts = allPosts.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ----------- create post ---------------------

router.post("/", async (req, res) => {
  
 let date = new Date();
 let today = date.toLocaleString();

  try {
    const newPost = await Posts.create({
      post_sub: req.body.post_sub,
      post_descr: req.body.post_descr,
      username: req.session.username,
      date: today
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//------------ show one post ---------------

router.get("/post/:id", async (req, res) => {
  try {
    const specificPost = await Posts.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    const comment = specificPost.comments.map((test) =>
      test.get({ plain: true })
    );
    const sub = specificPost.dataValues.post_sub;
    const descr = specificPost.dataValues.post_descr;
    const username = specificPost.dataValues.username;
    const date = specificPost.dataValues.date;
    // console.log(specificPost.dataValues.post_descr)
    res.status(200).render("post", {
      sub,
      descr,
      username,
      comment,
      date,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ------------ Delete Post -------------
router.delete("/api/dashboard", async (req, res) => {
  try {
    const findPostForDel = await Posts.destroy({
      where: {
        id: req.body.post_id,
      },
    });
    res.status(200).json(findPostForDel);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// --------- Update Post ----------------
router.put("/api/dashboard", async (req, res) => {
  try {
    console.log(req.body.post_id);
    const updatePost = await Posts.update(req.body, {
      where: {
        id: req.body.post_id,
      },
    });
    res.status(200).json(updatePost);
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
});

// ----------- Dashboard ---------------

router.get("/dashboard", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      const findPostsByUser = await Posts.findAll({
        where: {
          username: req.session.username,
        },
      });

      const postsByUser = findPostsByUser.map((post) =>
        post.get({ plain: true })
      );
      res
        .status(200)
        .render("dashboard", { postsByUser, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
