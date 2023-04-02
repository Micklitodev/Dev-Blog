const router = require("express").Router();
const { Posts, Comment } = require("../models");

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
  try {
    const newPost = await Posts.create({
      post_sub: req.body.post_sub,
      post_descr: req.body.post_descr,
      username: req.session.username,
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
   const comment = specificPost.comments.map((test) => test.get({plain: true}))
   const sub = specificPost.dataValues.post_sub 
   const descr = specificPost.dataValues.post_descr
   const username = specificPost.dataValues.username
   // console.log(specificPost.dataValues.post_descr)
   res.status(200).render("post", { sub, descr, username, comment, loggedIn: req.session.loggedIn })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
