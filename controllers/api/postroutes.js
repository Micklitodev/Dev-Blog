const router = require('express').Router(); 
const { Posts } = require('../../models')

// ----------- create post ---------------------

router.post("/newpost", async (req, res) => {
    let date = new Date();
    let today = date.toLocaleString();
  
    try {
      const newPost = await Posts.create({
        post_sub: req.body.post_sub,
        post_descr: req.body.post_descr,
        username: req.session.username,
        date: today,
      });
      res.status(200).json(newPost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // ------------ Delete Post -------------
router.delete("/dashboard", async (req, res) => {
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
router.put("/dashboard", async (req, res) => {
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

  module.exports = router; 