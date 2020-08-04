const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const TaskController = require('../controllers/task-controller')

router.get('/', TaskController.taskList)
    .post('/', upload.single('photo'), TaskController.createTask)

router.get('/:id/delete', TaskController.deleteTask)

router.get('/:id/edit', TaskController.editTask)

module.exports = router