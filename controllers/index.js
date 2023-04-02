const router = require("express").Router();

const homeRoutes = require("./hompage-routes.js");
const loginRoutes = require("./login.js");
const signupRoutes = require("./signup.js");
const commentRoutes = require("./api/commentroutes.js")

const userRoutes = require('./api/userroutes.js')

router.use("/", homeRoutes);

router.use("/login", loginRoutes);

router.use("/signup", signupRoutes);

router.use('/api', userRoutes)

router.use('/api', commentRoutes)


module.exports = router;
