const router = require("express").Router();

const pageRoutes = require("./pageroutes.js");
const commentRoutes = require("./api/commentroutes.js")
const postRoutes = require('./api/postroutes.js')

const userRoutes = require("./api/userroutes.js");

router.use("/", pageRoutes);

router.use("/api", userRoutes);

router.use("/api", commentRoutes);

router.use('/api', postRoutes)

module.exports = router;
