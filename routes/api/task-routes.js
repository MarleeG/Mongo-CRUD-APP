const express = require('express');
const router = express.Router();
const tasksControllers = require('../../controllers/tasks-controllers');

// router.get('/api/all', tasksControllers.findAll);
router.route('/api/all')
.get(tasksControllers.findAll)
.post(tasksControllers.createTask);

router.route('/api/all/:id')
.delete(tasksControllers.deleteTask)
.put(tasksControllers.updateTask);

module.exports = router;