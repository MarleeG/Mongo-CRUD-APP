const express = require('express');
const router = express.Router();
const tasksControllers = require('../../controllers/tasks-controllers');

router.get('/api/all', tasksControllers.findAll);

module.exports = router;