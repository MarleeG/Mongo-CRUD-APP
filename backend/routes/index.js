const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api/task-routes');

// API Routes
router.use(apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
    // this might need to be changed.
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;