const router = require("express").Router();
const { Posts, Comment } = require("../models");

// ----------- homepage  ----------------
router.get("/", async (req, res) => {
  try {
    const allPosts = await Posts.findAll({
       order: [['date', 'DESC']]
    });
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

// ------------- login ----------------- 
router.get("/login", async (req, res) => {
  try {
    res.render("login", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ------------ signup ------------------

router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//------------ single post view ---------------

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


// ----------- Dashboard ---------------

router.get("/dashboard", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      const findPostsByUser = await Posts.findAll({
        where: {
          username: req.session.username,
        },
        order: [['date', 'DESC']]
      });

      const postsByUser = findPostsByUser.map((post) =>
        post.get({ plain: true })
      );
      const username = req.session.username;
      res.status(200).render("dashboard", {
        postsByUser,
        username,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
