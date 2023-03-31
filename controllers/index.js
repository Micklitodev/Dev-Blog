const router = require('express').Router(); 

const homeRoutes = require('./hompage-routes.js');

router.use('/', homeRoutes);

module.exports = router; 