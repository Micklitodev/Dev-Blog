const { User } = require("../../models");
const router = require("express").Router();

//  ---------------------- login ------------------------
router.post("/login", async (req, res) => {
  try {
    const findUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!findUser) {
      res.status(400).json({
        message:
          "Incorrect data input in one or more fields. Please try again!",
      });
      return;
    }
    const validatePass = await findUser.verifyPass(req.body.password);

    if (!validatePass) {
      res.status(400).json({
        message:
          "Incorrect data input in one or more fields. Please try again!",
      });
      return;
    }

    const username = await findUser.returnUserName();

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = username;
      res.status(200).json({ message: "You are now logged in! " });
      console.log("you are now logged in and session has been saved :D ");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// --------------------- Sign Up ------------------------

router.post("/signup", async (req, res) => {
  try {
    const newUser = User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ------------- Log Out ---------------

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
