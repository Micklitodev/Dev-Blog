const router = require("express").Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  try {
   const allPosts = await Posts.findAll() 
   const posts = allPosts.map((post) => post.get({plain: true}))
   res.render('homepage', {
    posts, 
    loggedIn: req.session.loggedIn,
   })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req,res) => {
  try{ 
    const newPost = await Posts.create({
      post_sub: req.body.post_sub, 
      post_descr: req.body.post_descr,
      username: req.session.username 
    })
    res.status(200).json(newPost);
  }catch(err){
    console.log(err) 
    res.status(500).json(err)
  }
})


module.exports = router; 