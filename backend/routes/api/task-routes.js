const express = require('express');
const router = express.Router();
const tasksControllers = require('../../controllers/tasks-controllers');

// router.get('/api/all', tasksControllers.findAll);
router.route('/api/all')
.get(tasksControllers.findAll)
.post(tasksControllers.createTask);

module.exports = router;