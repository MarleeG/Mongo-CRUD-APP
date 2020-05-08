const router = require('express').Router();
const apiRoutes = require('./api/task-routes');

// API Routes
router.use(apiRoutes);

module.exports = router;