const router = require("express").Router();

const homeRoutes = require("./hompage-routes.js");
const loginRoutes = require("./login.js");
const signupRoutes = require("./signup.js");

router.use("/", homeRoutes);

router.use("/login", loginRoutes);

router.use("/signup", signupRoutes);


module.exports = router;
