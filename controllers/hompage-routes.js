const router = require("express").Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  try {
   const allPosts = await Posts.findAll() 
   const posts = allPosts.map((post) => post.get({plain: true}))
   res.render('homepage', {
    posts
   })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router; 