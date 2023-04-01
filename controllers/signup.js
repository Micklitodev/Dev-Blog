const router = require("express").Router();

const { User } = require('../models')

router.get("/", async (req, res) => {
  try {
    res.render("signup", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}); 
 
router.post("/", async (req, res) => {
  try {
    const newUser = User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
